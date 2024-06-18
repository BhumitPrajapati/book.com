const express = require("express");
const book = require("../controller/bookApi");

const router = express.Router();

router.post("/createBook", book.createBook);
router.get("/getAllBooks", book.getAllBooks);
router.get("/getBookById/:bookId", book.getBookById);
router.put("/updateBook/:bookId", book.updateBook);
router.delete("/deleteBook/:bookId", book.deleteBook);

module.exports = router;
