const express = require("express");
const router = express.Router();
const booksDb = require("../db").books;
const authorsDb = require("../db").authors;

router.get("/books", (req, res) => {
  res.json(booksDb.getAll());
});

router.get("/book/:id", (req, res) => {
  const id = req.params.id;
  const book = booksDb.find({ id });

  if (!book) {
    res.status(404).json();
  }

  const author = authorsDb.find({ id: book.author });
  const bookWithAuthor = { ...book, author };

  res.status(200).json(bookWithAuthor);
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

router.put("/book/:id", (req, res) => {
  const id = req.params.id;
  const book = booksDb.find({ id });

  if (!book) {
    res.status(404).json();
  }

  if (!req.body.name || !req.body.isbn || !req.body.author) {
    res.status(422).json({
      message: "Please provide name, isbn, and author id",
    });
  }

  const author = authorsDb.find({ id: req.body.author });

  if (!author) {
    res.status(422).json({
      message: "Invalid author id",
    });
  }

  booksDb.update(id, {
    name: req.body.name,
    isbn: req.body.isbn,
    author: req.body.author,
  });
  res.status(200).json();
});

module.exports = router;
