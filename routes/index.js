const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

router.get('/login', (req, res) => console.log('login get route'));

router.post('/login', (req, res) => res.send('login post route'));

router.post('/signup', (req, res) => res.send('signup posted'));

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
