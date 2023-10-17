require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});
app.get("/login", (req, res) => {
  res.send("<h2>This is Login route</h2>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
