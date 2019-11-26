const router = require("express").Router();
const bookRoutes = require("./books");
const skiRoutes = require("./ski");

// Book routes
router.use("/books", bookRoutes);
router.use("/ski", skiRoutes);

module.exports = router;
