const express = require("express");
const router = express.Router();
const authorsDb = require("../db").authors;

router.get("/authors", (req, res) => {
  res.json(authorsDb.getAll());
});

module.exports = router;
