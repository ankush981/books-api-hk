require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./app/router");
const logger = require("./app/middleware/logger");

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, content-type");
  next();
});
app.use(bodyParser.json());
app.use(logger);
app.use("/api/v1", routes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}...`);
});
