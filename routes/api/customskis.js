const express = require("express");
const router = express.Router();
const skiDBController = require("../../controllers/skiDBController");

router.route("/").post(skiDBController.getCustomSkis);


module.exports = router;