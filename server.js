const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Database configuration
const db = require('./config/keys').mongoURI;

// Connect to MongoDb
mongoose
  .connect(db)
  .then(() => console.log('MongoDb connected!'))
  .catch(err => console.log(err));

// Writing first route
app.get('/', (req, res) => res.send('Hello World!'));

const port = 8040;
app.listen(port, () => console.log(`Server running on port ${port}`));