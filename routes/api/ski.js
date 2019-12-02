const express = require("express");
const router = express.Router();
const skiDBController = require("../../controllers/skiDBController")


//router.get('/ski', (req, res) => res.send('ski route enabled'))

router.route("/", (req, res) => {
  //console.log(req.body.snowtype);
  res.send(skiDBController.findByCategory(req.body.snowtype));
})
  // .get(skiDBController.findByCategory(req.body.category));


module.exports = router;
