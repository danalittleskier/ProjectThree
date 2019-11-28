const path = require("path");
const express = require("express");
const router = express.Router();
const apiRoutes = require("./api");
const userController = require("../controllers/userController")




router.get('/login', (req, res) => console.log('login get route'));

router.post('/login', (req, res) => res.send(req.body));

// router.post('/signup', (req, res) => {
//   userController.create(req.body);
//   res.send(req.body)
// });

router.route('/signup')
  .post(userController.create)

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
