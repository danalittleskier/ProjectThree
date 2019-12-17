const express = require("express");
const router = express.Router();
const skiDBController = require("../../controllers/skiDBController");

router.post("/", skiDBController.getRecommendedSki);

router.get("/:id", skiDBController.findById);

module.exports = router;
