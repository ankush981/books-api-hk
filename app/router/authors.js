const express = require("express");
const router = express.Router();
const authorsDb = require("../db").authors;

router.get("/authors", (req, res) => {
  res.json(authorsDb.getAll());
});

router.get("/author/:id", (req, res) => {
  const id = req.params.id;
  const author = authorsDb.find({ id });

  if (!author) {
    res.status(404).json();
  }

  res.status(200).json(author);
});

router.post("/author", (req, res) => {
  if (!req.body.firstName || !req.body.lastName) {
    res.status(422).json({
      message: "Please provide first name and last name",
    });
  }

  const newAuthor = authorsDb.store({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });

  res.status(201).json(newAuthor);
});

router.put("/author/:id", (req, res) => {
  const id = req.params.id;
  const author = authorsDb.find({ id });

  if (!author) {
    res.status(404).json();
  }

  if (!req.body.firstName || !req.body.lastName) {
    res.status(422).json({
      message: "Please provide first name and last name",
    });
  }

  authorsDb.update(id, {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });
  res.status(200).json();
});

module.exports = router;
