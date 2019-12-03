const router = require("express").Router();
const bookRoutes = require("./books");
const skiRoutes = require("./skis");
const detailSkiRoutes = require("./ski");
const geocode = require("./geocode");

// Book routes
router.use("/books", bookRoutes);
router.use("/skis", skiRoutes);
router.use("/geocode", geocode);
router.use("/ski", detailSkiRoutes);

module.exports = router;
