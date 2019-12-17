const db = require("../models");

module.exports = {
  create: async function(req, res) {
    try {
      const skier = await db.Skier.create({
        first_name: req.body.firstname,
        last_name: req.body.lastname,
        gender: req.body.gender,
        level: req.body.level,
        resort_preference: req.body.resort,
        username: req.body.email
      });
      res.json(skier);
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
