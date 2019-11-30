const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../models')

passport.use(new LocalStrategy(
          (email, password, done) => {
              db.User.findOne({email: email}, (err, user) => {
                  if (err) return done(err);

                  if (!user) {
                      return done(null, false, {message: 'Incorrect username'})
                  }

                  if (!user.validatePassword(password)) {
                      return done(null, false, {message: 'incorrect password'})
                  }

                  return done(null, user)
              })
          }
      ))