const express = require("express");
const router = express.Router();

router.get("/authors", (req, res) => {
  res.json([]);
});

module.exports = router;
