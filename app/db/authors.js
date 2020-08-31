const { v4: uuid } = require("uuid");
const db = require("./bootstrap");
const authorsDb = db.get("authors");

module.exports = {
  getAll: () => {
    return authorsDb.value();
  },

  store: ({ firstName, lastName }) => {
    const newAuthor = {
      firstName,
      lastName,
      id: uuid(),
    };

    authorsDb.push(newAuthor).write();
    return newAuthor;
  },

  find: (query) => {
    return authorsDb.find(query).value();
  },
};
