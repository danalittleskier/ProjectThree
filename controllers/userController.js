const db = require("../models");

module.exports = {
  create: async function(req, res) {
    // const hashPass = await bcrypt.hash(password, 10);
    // const user = await db.User.create({  email: req.body.email, password: hashPass });

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
  // verify: function (req, res) {
  //     db.User
  //         .findOne({ email: req.body.email })
  //         .then(user => {
  //             if (user) {
  //                 bcrypt.hash(req.body.password, 10).then(() => {
  //                     bcrypt.compare(req.body.password, user.password).then(response => {
  //                         if (response) {
  //                             const token = `JWT ${jwt.sign({ userId: user._id }, process.env.SECRET, { expiresIn: '8h' })}`
  //                             res.json({ user, token });
  //                         } else {
  //                             res.send('password does not match')
  //                         }
  //                     })
  //                 })
  //             } else {
  //                 res.send('no user found')
  //             }
  //         })
  //         .catch(err => console.log(err))
  // }
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
