const express = require("express");
const router = express.Router();

router.get("/books", (req, res) => {
  res.json([]);
});

module.exports = router;
