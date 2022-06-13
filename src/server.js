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

// swagger documentation
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");

// routes
const router = require("./routes/routes");
app.use("/", router);
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// listen for requests
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
