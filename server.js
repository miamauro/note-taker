const express = require("express");
const path = require("path");
const api = require("./public/assets/js/index.js");

const app = express();

const PORT = 3001;

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
