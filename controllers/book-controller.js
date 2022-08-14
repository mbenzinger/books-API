const express = require("express");
const books = express.Router();
const Book = require("../models/books.js");

//root
books.get("/books", async (req, res) => {
  Book.find()
        .then(foundBook => {
            res.json(foundBook)
        })
});

// SHOW
books.get('/books/:id', (req, res) => {
  Book.findById(req.params.id)
       .then(foundBook => {
        res.render('show', {
            book: foundBook
        })
      })
      .catch(err => {
        res.send('404')
      })
})
  
  module.exports = books;