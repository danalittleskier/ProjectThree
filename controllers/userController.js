const db = require("../models");
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

module.exports = {
    create: function(req, res) {
        db.User
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      verify: function(req, res) {
          db.User
          .findOne({email: req.body.email})
          .then(user => res.json(user))
          .catch(err => res.status(422).json(err))
      },
    //   verifyUser: () => passport.use(new LocalStrategy(
    //       (email, password, done) => {
    //           db.User.findOne({email: email}, (err, user) => {
    //               if (err) return done(err);

    //               if (!user) {
    //                   return done(null, false, {message: 'Incorrect username'})
    //               }

    //               if (!user.validatePassword(password)) {
    //                   return done(null, false, {message: 'incorrect password'})
    //               }

    //               return done(null, user)
    //           })
    //       }
    //   ))
}
