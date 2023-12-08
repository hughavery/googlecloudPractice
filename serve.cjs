const express = require("express");
const path = require("path");

// create server
const app = express();

const PORT = 8080;
const BUILD_FOLDER = "dist";

app.use(express.static(path.join(__dirname, BUILD_FOLDER)));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, BUILD_FOLDER, "index.html"));
});

app.listen(PORT);
