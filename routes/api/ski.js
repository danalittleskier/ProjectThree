const express = require("express");
const router = express.Router();
const skiDBController = require("../../controllers/skiDBController")


//router.get('/ski', (req, res) => res.send('ski route enabled'))

router.route("/", (req, res) => {
  console.log(req.body);
  res.send(skiDBController.findByCategory(req.body.category));
})
  // .get(skiDBController.findByCategory(req.body.category));


module.exports = router;
