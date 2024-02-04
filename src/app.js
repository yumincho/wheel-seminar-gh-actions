const express = require("express");
const path = require("path");
const app = express();

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/api/:number(\\d+)", function (req, res) {
  const number = req.params.number;
  res.status(200).json({ number: number });
});

app.use((req, res, next) => {
  res.status(404).send("404: Page Not Found Go Away");
});

module.exports = app;
