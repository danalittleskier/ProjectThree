const db = require("../models");

module.exports = {
  create: async function(req, res) {
    try {
      const userFound = await db.Skier.findOne({username: req.body.email});
      if (!userFound) {
        const skier = await db.Skier.create({
          first_name: req.body.firstname,
          last_name: req.body.lastname,
          gender: req.body.gender,
          level: req.body.level,
          resort_preference: req.body.resort,
          username: req.body.email
        });
        res.json(skier);
      } else {
        console.log('user exists')
        res.send( "Email already exists")
      }
    } catch (error) {
      console.log(error);
    }
  },
  verify: function(req, res) {
    db.Skier.findOne({ username: req.body.email })
      .then(user => {
        if (user) {
          res.json(user);
        } else {
          res.send("no user found");
        }
      })
      .catch(err => console.log(err));
  }
};
