const { v4: uuid } = require("uuid");

// make some authors
const authors = {
  proust: {
    id: uuid(),
    firstName: "Marcel",
    lastName: "Proust",
  },

  dostoyevsky: {
    id: uuid(),
    firstName: "Fyodor",
    lastName: "Dostoyevsky",
  },

  twain: {
    id: uuid(),
    firstName: "Mark",
    lastName: "Twain",
  },
};

// and their book(s)
const books = [
  {
    id: uuid(),
    name: "In Search of Lost Time",
    isbn: "978-4-7942-6727-6",
    author: authors.proust.id,
  },

  {
    id: uuid(),
    name: "Crime and Punishment",
    isbn: "978-2-8180-9010-7",
    author: authors.dostoyevsky.id,
  },

  {
    id: uuid(),
    name: "The Brothers Karamazov",
    isbn: "978-3-5038-5598-8",
    author: authors.dostoyevsky.id,
  },

  {
    id: uuid(),
    name: "The Adventures of Huckleberry Finn",
    isbn: "978-9-9539-5585-8",
    author: authors.twain.id,
  },

  {
    id: uuid(),
    name: "Tom Sawyer",
    isbn: "978-5-6627-3823-2",
    author: authors.twain.id,
  },
];

module.exports = {
  books,
  authors: Object.values(authors),
};
