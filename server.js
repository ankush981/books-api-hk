require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./app/router");
const logger = require("./app/middleware/logger");

const app = express();
app.options("*", cors());
app.use(bodyParser.json());
app.use(logger);
app.use("/api/v1", routes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}...`);
});
