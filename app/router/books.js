const express = require("express");
const router = express.Router();
const booksDb = require("../db").books;
const authorsDb = require("../db").authors;

router.get("/books", (req, res) => {
  res.json(booksDb.getAll());
});

router.post("/book", (req, res) => {
  if (!req.body.name || !req.body.isbn || !req.body.author) {
    res.status(422).json({
      message: "Please provide book name, isbn and author id",
    });
  }

  const author = authorsDb.findById(req.body.author);

  if (!author) {
    res.status(422).json({
      message: "Invalid author id",
    });
  }

  const newBookParams = {
    name: req.body.name,
    isbn: req.body.isbn,
    author: req.body.author,
  };

  const existingBook = booksDb.find(newBookParams);

  if (existingBook) {
    res.status(422).json({
      message: "Book already exists",
    });
  }

  const newBook = booksDb.store(newBookParams);
  res.status(201).json(newBook);
});

module.exports = router;
