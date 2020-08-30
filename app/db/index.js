const db = require("./bootstrap");

module.exports.books = {
  getAll: () => {
    return db.get("books");
  },
};

module.exports.authors = {
  getAll: () => {
    return db.get("authors");
  },
};
