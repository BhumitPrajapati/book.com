/*

Name: Bhumit Jayantilal Prajapati
StudentNumber: 8981644

*/

const Book = require("../model/server");

const createBook = async (req, res) => {
  try {
    const { bookId, title, author, genre, year } = req.body;
    const existingBook = await Book.findOne({ bookId });
    if (existingBook) {
      return res.status(400).json({ message: "Book with this bookId is already exists" });
    }
    const newBook = new Book({ bookId, title, author, genre, year });
    await newBook.save();
    res.status(200).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getBookById = async (req, res) => {
  try {
    const book = await Book.findOne({ bookId: req.params.bookId });
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const { title, author, genre, year } = req.body;
    // console.log('Updating bookId:', req.params.bookId);
    const updatedBook = await Book.findOneAndUpdate(
      { bookId: req.params.bookId },
      { title, author, genre, year },
      { new: true }
    );
    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json(updatedBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findOneAndDelete({
      bookId: req.params.bookId,
    });
    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


module.exports = { createBook, getAllBooks, getBookById, updateBook, deleteBook };
