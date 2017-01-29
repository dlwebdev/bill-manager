const express = require('express');
const router = express.Router();

// Allows me to use the current date and time.
const moment = require('moment');

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

const User = require('../models/user');

// Get Bill model so api knows what a 'Bill' is
const Bill = require('../models/bill');

// Get Payment model so api knows what a 'Payment' is
const Payment = require('../models/payment');

const Notification = require('../models/notification');

const NotificationChecker = require('../notificationChecker');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});


router.get('/authenticated', function(req, res, next) {
  let authed = false;

  if (req.isAuthenticated()) {
    authed = true;
  }
  res.json({'authenticated': authed});
});


// Logout Route

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});


// Users Routes

router.get('/users', function(req, res) {
    User.find({}, function (err, users) {
        if(err) console.log('Err: ', err);
        res.json(users);
    });
});

// get users settings
router.get('/user/settings', function(req, res) {
    const user_id = req.user._id;

    User.findOne({'_id':user_id},function(err, user) {
        if(err) console.log('Err: ', err);
        return res.json(user.daysBeforeNotice);
    });
});

router.put('/user/settings', function(req, res) {
    const user_id = req.user._id;
    const setting = req.body.setting;

    if (setting) {
        User.update({_id: user_id}, {daysBeforeNotice: setting}, {upsert: true}, function (err, resp) {
            if(err) console.log('Err: ', err);

            // Do notification check
            NotificationChecker.checkForNotifications(req);

            return res.json(resp);
        });
    }

});

// notifications Route

router.get('/notifications', function(req, res) {
  Notification.find({}, function (err, notifications) {
      if(err) console.log('Err: ', err);
      res.json(notifications);
  });
});

router.get('/notifications/unread', function(req, res) {
  // find notifications where read = false

  Notification.find({ "read": "false" }, function (err, notifications) {
      if(err) console.log('Err: ', err);
      res.json(notifications);
  });
});


router.put('/notifications/:id', function(req, res) {
    const id = req.params.id;

    console.log("Setting read to true for notification with id of: ", id);

    Notification.findOne({'_id':id},function(err, notice) {
        if(err) console.log('Err: ', err);

        notice.read = true;

        delete notice._id;

        Notification.update({ _id: id }, notice, { upsert: true }, function (err, notification) {
            if(err) console.log('Err: ', err);
            return res.status(201).json(notification);
        });
    });

});


// Payments Routes

router.post('/bills/payment', function(req, res) {
    // Create a new payment
    // Tells api what is required for a new Payment
    let payment = new Payment({
      user_id: req.user._id,
      bill_id: req.body.bill_id,
      bill_name: req.body.bill_name,
      payment_date: moment().format('MM-DD-YYYY')
    });

    // Route for saving Payments to the payments database
    payment.save(function (err, payment) {
      if (err) {
        console.log('error saving payment: ', err);
      }

      // REmove notifications for this bill id

      Notification.remove({'bill_name': req.body.bill_name},function(result) {
        // Removed notification
      });


      res.status(201).json(payment);
    });

});

// Route for getting Payments from the payments database
router.get('/payments/', function(req, res) {
  Payment.find({}, function (err, payments) {
      if(err) console.log('Err: ', err);
      res.json(payments);
  });
});

// Returns all payments for the current month
router.get('/payments/current-month', function(req, res) {
  // use moment to get the month of the current date
  let month = moment().month();
  let year = moment().year();

  // month in moment is 0 based, so 9 is actually october, subtract 1 to compensate
  // array is 'year', 'month', 'day', etc
  let startOfMonth = moment([year, month]).add(0,"month");

  // Clone the value before .endOf()
  let endOfMonth = moment(startOfMonth).endOf('month');

  Payment.find({payment_date: {$gte: startOfMonth, $lt: endOfMonth}}, function (err, payments) {
    // Find all payments where payment_date is in the current month and year
      if(err) console.log('Err: ', err);
      res.json(payments);
  });
});


// Bills Routes

router.post('/bills/', function(req, res) {
    // Create a new bill

    // Tells api what is required for a new Bill
    let bill = new Bill({
      user_id: req.user._id,
      name: req.body.name,
      datedue: req.body.datedue,
      amount: req.body.amount
    });

    // Route for saving Bills to the bills database
    bill.save(function (err, bill) {
      if (err) {
        console.log('error saving bill: ', err);
      }
      res.status(201).json(bill);
    });

});

// Route for deleting Bills from the bills database
router.get('/bills/', function(req, res) {
  const user_id = req.user._id;

  Bill.find({'user_id': user_id}, function (err, bills) {
      if(err) console.log('Err: ', err);
      res.json(bills);
  });
});

// Route for getting Bills from the bills database
router.get('/bills/:id', function(req, res) {
    const id = req.params.id;

    Bill.findOne({'_id':id},function(err, bill) {
        if(err) console.log('Err: ', err);
        return res.json(bill);
    });
});

// Route for updating Bills that are in the bills database
router.put('/bills/:id', function(req, res) {
    let bill = req.body;
    const id = bill._id;

    delete bill._id;

    if (id) {
        Bill.update({_id: id}, bill, {upsert: true}, function (err, bill) {
            if(err) console.log('Err: ', err);
            return res.json(bill);
        });
    }
});

// Route for deleting Bills from the bills database
router.delete('/bills/:id', function(req, res) {
    const id = req.params.id;

    console.log("Will remove bill with id of: ", id);

    Bill.remove({'_id': id},function(result) {
      res.json(result);
    });

});

module.exports = router;
