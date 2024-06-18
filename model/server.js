const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  bookId: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String },
  year: { type: Number },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;