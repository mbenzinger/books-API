const express = require("express");
const books = express.Router();
const Book = require("../models/books.js");

notes.get("/books", async (req, res) => {
  res.send('get books')
});
  
  module.exports = books;