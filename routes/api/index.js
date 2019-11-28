const router = require("express").Router();
const bookRoutes = require("./books");
const skiRoutes = require("./skis");
const geocode = require("./geocode");

// Book routes
router.use("/books", bookRoutes);
router.use("/skis", skiRoutes);
router.use("/geocode", geocode);

module.exports = router;
