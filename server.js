const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Database configuration
const db = require('./config/keys').mongoURI;

// Connect to MongoDb
mongoose
  .connect(db)
  .then(() => console.log('MongoDb connected!'))
  .catch(err => console.log(err));

// Writing first route
app.get('/', (req, res) => res.send('Hello World!'));

// Routing from server.js to respective route file
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = 8040;
app.listen(port, () => console.log(`Server running on port ${port}`));