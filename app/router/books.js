const express = require("express");
const router = express.Router();
const booksDb = require("../db").books;

router.get("/books", (req, res) => {
  res.json(booksDb.getAll());
});

module.exports = router;
