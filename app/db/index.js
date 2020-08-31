const { v4: uuid } = require("uuid");
const db = require("./bootstrap");

const booksKey = "books";
const authorsKey = "authors";

module.exports.books = {
  getAll: () => {
    return db.get(booksKey);
  },

  store: ({ name, isbn, author }) => {
    const newBook = {
      name,
      isbn,
      author,
    };

    db.get(booksKey).push(newBook).write();
    return newBook;
  },

  find: (query) => {
    return db.get(booksKey).find(query).value();
  },
};

module.exports.authors = {
  getAll: () => {
    return db.get(authorsKey);
  },

  store: ({ firstName, lastName }) => {
    const newAuthor = {
      firstName,
      lastName,
      id: uuid(),
    };

    db.get(authorsKey).push(newAuthor).write();
    return newAuthor;
  },

  findById: (id) => {
    return db.get(authorsKey).find({ id: id }).value();
  },
};
