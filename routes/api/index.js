const router = require("express").Router();
const bookRoutes = require("./books");
const skiRoutes = require("./ski");
const geocode = require("./geocode");

// Book routes
router.use("/books", bookRoutes);
router.use("/ski", skiRoutes);
router.use("/geocode", geocode);

module.exports = router;
