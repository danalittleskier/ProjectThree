const express = require("express");
const router = express.Router();
const skiDBController = require("../../controllers/skiDBController");

//router.get('/ski', (req, res) => res.send('ski route enabled'))

router
  .post("/", skiDBController.getRecommendedSki)

  router.get('/skis/:id', skiDBController.findById)
  

module.exports = router;
