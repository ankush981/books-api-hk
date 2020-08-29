require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const logger = require("./app/middleware/logger");

const app = express();
app.options("*", cors());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(logger);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}...`);
});
