const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

// create express app
const app = express();

// set port, listen for requests
const PORT = process.env.PORT || 8080;

const corsOptions = {
  origin: "*",

  methods: ["GET", "POST", "PUT", "DELETE"],

  allowedHeaders: ["Content-Type", "Authorization"],
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

// routes
const router = require("./routes/routes");
app.use("/", router);

// listen for requests
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
