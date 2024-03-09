const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

// require('./config');

const port = process.env.PORT || 3000;
const secretKey = 'secretKey'; // Replace with your actual secret key
// const book = [{
    // "name" : "palace of illusion",

    // "author" : "chitra banerjee"

// },
// {

//  "name" : "Getting things done",
//  "author" : "david"
// }

mongoose.connect('mongodb://127.0.0.1:27017/bookStore', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the Express server after successfully connecting to the database
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch(err => console.error('Failed to connect to MongoDB', err));

const bookSchema = new mongoose.Schema({
  name: String,
  author: String,
});

const Book = mongoose.model('Book', bookSchema);

app.use(express.json());

// Route to create a book
app.post('/create', async (req, res) => {
  try {
    const { name, author } = req.body;
    if (!name || !author) {
      return res.status(400).send("Both fields are required");
    }

    const newBook = new Book(req.body);
    const result = await newBook.save();

    res.json(result);
  } catch (error) {
    res.status(500).send("An error occurred while creating the book.");
  }
});

// Route to list all books
app.get('/list', async (req, res) => {
  try {
    const data = await Book.find();
    res.json(data);
  } catch (error) {
    res.status(500).send("An error occurred while fetching the book list.");
  }
});

// Route to update a book by ID
app.put('/update/:_id', async (req, res) => {
  try {
    const { _id } = req.params;
    const data = await Book.updateOne({ _id }, { $set: req.body });
    res.json(data);
  } catch (error) {
    res.status(500).send("An error occurred while updating the book.");
  }
});

// Route to delete a book by ID
app.delete('/delete/:_id', async (req, res) => {
  try {
    const { _id } = req.params;
    const data = await Book.deleteOne({ _id });
    res.json(data);
  } catch (error) {
    res.status(500).send("An error occurred while deleting the book.");
  }
});

// Route to generate a JWT token
app.post('/gt', (req, res) => {
  const { name, author } = req.body;
  if (!name || !author) {
    return res.status(400).send("Both fields are required");
  }

  jwt.sign({ data: req.body }, secretKey, (err, token) => {
    if (err) {
      res.status(500).send("Failed to generate token");
    } else {
      res.json({ token });
    }
  });
});

// Route to access a user profile with a verified token
app.post('/profile', verifyToken, (req, res) => {
  res.send("User successfully logged in");
});

// Middleware to verify JWT token
function verifyToken(req, res, next) {
  const bearerHeader = req.headers['authorization'];

  if (typeof bearerHeader !== 'undefined') {
    const token = bearerHeader.split(' ')[1];

    try {
      const decoded = jwt.verify(token, secretKey);
      req.user = decoded;
      next();
    } catch (ex) {
      res.status(401).json({ message: 'Token is invalid' });
    }
  } else {
    res.status(401).json({ message: 'Access denied. No token provided.' });
  }
}


