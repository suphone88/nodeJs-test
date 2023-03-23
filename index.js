require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MOGODB_URL)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch(console.log());
const app = express();

const port = process.env.PORT || 5000; // Use the PORT environment

app.get("/", (req, res, next) => {
  res.json("Hello World!!,Are you ok");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
