const db = require("../models");
const passport = require('../config/passport');
const bcrypt = require('bcrypt')


module.exports = {
    create: async function(req, res) {
        let password = req.body.password
        console.log(password)
        await bcrypt.hash(password, 10, (err, hashPass) => {
            if (err) res.send(err);

            db.User
            .create({
                email: req.body.email, 
                password: hashPass,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                
            })
            .then(user => {
  
                res.json(user)
              })
            .catch(err => res.json(err));
          });
     
      },
      verify: function(req, res) {
          db.User
          .findOne({email: req.body.email})
          .then(user => {
              if (user) {
                  bcrypt.hash(req.body.password, 10).then(() => {
                    bcrypt.compare(req.body.password, user.password).then(response => {
                        if (response) {
                            res.json(user)
                        } else {
                            res.send('password does not match')
                        }
                    })
                  })
              } else {
                  res.send('no user found')
              }
          })
          .catch(err => console.log(err))
      }
};
