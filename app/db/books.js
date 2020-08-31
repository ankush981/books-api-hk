const { v4: uuid } = require("uuid");
const db = require("./bootstrap");
const booksDb = db.get("books");

module.exports = {
  getAll: () => {
    return booksDb.value();
  },

  store: ({ name, isbn, author }) => {
    const newBook = {
      name,
      isbn,
      author,
      id: uuid(),
    };

    booksDb.push(newBook).write();
    return newBook;
  },

  update: (id, book) => {
    booksDb.find({ id }).assign(book).write();
  },

  find: (query) => {
    return booksDb.find(query).value();
  },
};
