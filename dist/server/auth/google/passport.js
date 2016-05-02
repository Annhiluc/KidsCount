'use strict';

var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

exports.setup = function (User, config) {
  passport.use(new GoogleStrategy({
    clientID: config.google.clientID,
    clientSecret: config.google.clientSecret,
    callbackURL: config.google.callbackURL
  }, function (accessToken, refreshToken, profile, done) {
    User.findOne({ 'google.id': profile.id }).exec().then(function (user) {
      if (user) {
        return done(null, user);
      }

      user = new User({
        name: profile.displayName,
        email: profile.emails[0].value,
        role: 'user',
        username: profile.emails[0].value.split('@')[0],
        provider: 'google',
        google: profile._json
      });
      user.save().then(function (user) {
        return done(null, user);
      })['catch'](function (err) {
        return done(err);
      });
    })['catch'](function (err) {
      return done(err);
    });
  }));
};
//# sourceMappingURL=passport.js.map
