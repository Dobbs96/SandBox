const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  console.log("Hello World");
  res.send("Hi");
});

app.listen(PORT);
