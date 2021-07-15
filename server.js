const path = require('path');
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

const routes = require('./controllers');

app.use(routes);

mongoose.connect('mongodb://localhost/workout', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});



// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
