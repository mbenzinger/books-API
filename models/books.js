const mongoose = require("mongoose");
const { Schema } = mongoose;

const booksSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  year: { type: Number, required: true },
  quantity: Number,
  imageURL: String
});

const Book = mongoose.model("Book", bookssSchema);
module.exports = Book;
