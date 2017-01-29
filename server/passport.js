const passport = require('passport');
const BitbucketStrategy = require('passport-bitbucket').Strategy;

//module.exports = function(passport) {

  passport.use(new BitbucketStrategy({
      // FOR HEROKU
      consumerKey: 'KXdEjPnxCESujBtC2U',
      consumerSecret: '4bQTwXXR9cpZ3p9EDvps6W7G8qc2E2SE',
      callbackURL: "https://weber-justin-bms.herokuapp.com/callback",

      // FOR LOCALHOST
      //consumerKey: '95YJCPZVaAHuCpUw66',
      //onsumerSecret: 'GsDYSbrww7x9qsh3SFnYHapHjMTNjHTK',
      //callbackURL: "http://localhost:3000/auth/bitbucket/callback"
    },
    function(token, tokenSecret, profile, cb) {
      User.findOrCreate({ bitbucketId: profile.username, displayname: profile.displayname, daysBeforeNotice: 7 }, function (err, user) {
        return cb(err, user);
      });
    }
  ));

  passport.serializeUser(function(user, cb) {
    cb(null, user);
  });

  passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
  });
