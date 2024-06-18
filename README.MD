# Install dependencies using npm:
1.npm install

#Environment Variables
Change .env file in the root directory of the project and Update the following variables:

1. PORT=3001    # Choose the port number for your server
2. MONGODB_URI='mongodb://localhost:27017/learningDB'    # Replace with your MongoDB connection string

#MongoDB Setup:
Ensure MongoDB is running either locally or configure your .env file to connect to MongoDB Atlas.

#Start Node.js sever in terminal 
node index.js

#API Endpoints (Test api in POSTMAN or Any Software):

POST: http://localhost:3001/api/createBook
Create a new book in the collection.

Request Body:
{
    "bookId": "B001",
    "title": "Example Book Title",
    "author": "Author Name",
    "genre": "Genre",
    "year": 2023
}


GET:  http://localhost:3001/api/getAllBooks
Retrieve all books from the collection.

GET:  http://localhost:3001/api/getBookById/1
Retrieve a single book by its bookId.

PUT:  http://localhost:3001/api/updateBook/1
Update a book by its bookId.
Request Body:
{
    "title": "Updated Book Title",
    "author": "Updated Author Name",
    "genre": "Updated Genre",
    "year": 2024
}

DELETE:  http://localhost:3001/api/deleteBook/2
Delete a book by its bookId.