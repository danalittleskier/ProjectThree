const express = require("express");
const router = express.Router();
const skiDBController = require("../../controllers/skiDBController");


//router.get('/skis', (req, res) => res.send('ski route enabled'))

router.route("/")
  .get(skiDBController.findAll)
  .post(skiDBController.create);


module.exports = router;
