const path = require("path");
const express = require("express");
const router = express.Router();
const apiRoutes = require("./api");
const userController = require("../controllers/userController");
const passport = require('passport');




router.route('/login')
  .post(passport.authenticate('local'), userController.verify)

router.route('/signup')
  .post(userController.create)

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
