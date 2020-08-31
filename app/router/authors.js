const express = require("express");
const router = express.Router();
const authorsDb = require("../db").authors;

router.get("/authors", (req, res) => {
  res.json(authorsDb.getAll());
});

router.get("/author/:id", (req, res) => {
  let statusCode = 200;
  let responseData = {};
  const id = req.params.id;
  const author = authorsDb.find({ id });

  if (!author) {
    statusCode = 404;
  } else {
    responseData = author;
  }

  res.status(statusCode).json(responseData);
});

router.post("/author", (req, res) => {
  let statusCode = 201;
  let responseData = {};

  if (!req.body.firstName || !req.body.lastName) {
    statusCode = 422;
    responseData = {
      message: "Please provide first name and last name",
    };
  } else {
    const newAuthor = authorsDb.store({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });
    responseData = newAuthor;
  }

  res.status(statusCode).json(responseData);
});

module.exports = router;
