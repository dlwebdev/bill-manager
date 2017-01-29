const passport = require('passport');
const BitbucketStrategy = require('passport-bitbucket').Strategy;

//module.exports = function(passport) {

  passport.use(new BitbucketStrategy({
      consumerKey: '95YJCPZVaAHuCpUw66',
      consumerSecret: 'GsDYSbrww7x9qsh3SFnYHapHjMTNjHTK',
      callbackURL: "http://localhost:3000/auth/bitbucket/callback"
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
