const router = require("express").Router();

const booksRoutes = require("./books");
const authorsRoutes = require("./authors");

router.use("/", booksRoutes);
router.use("/", authorsRoutes);

module.exports = router;
