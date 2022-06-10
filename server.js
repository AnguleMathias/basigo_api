const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// create express app
const app = express();

// set port, listen for requests
const PORT = process.env.PORT || 8080;

var corsOptions = {
  origin: "http://localhost:8081",
};

// use cross origin resource sharing
app.use(cors(corsOptions));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello from Basigo service!");
});

// listen for requests
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
