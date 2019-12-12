const db = require("../models");
const passport = require('../config/passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports = {
    create: async function (req, res) {
        let password = req.body.password
        console.log(password)
        console.log(req.body.firstname);

        const hashPass = await bcrypt.hash(password, 10);
        const user = await db.User.create({  email: req.body.email, password: hashPass });
        const skier = await db.Skier.create({
            first_name: req.body.firstname,
            last_name: req.body.lastname,
            gender: req.body.gender,
            level: req.body.level,
            resort_preference: req.body.resort,
            username: req.body.email
        });
        res.json(skier);

        
    },
    verify: function (req, res) {
        db.User
            .findOne({ email: req.body.email })
            .then(user => {
                if (user) {
                    bcrypt.hash(req.body.password, 10).then(() => {
                        bcrypt.compare(req.body.password, user.password).then(response => {
                            if (response) {
                                const token = `JWT ${jwt.sign({ userId: user._id }, process.env.SECRET, { expiresIn: '8h' })}`
                                res.json({ user, token });
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
