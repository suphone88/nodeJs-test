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
const cors = require("cors");
app.use(cors({ origin: "http://localhost:3000" }));

app.use(cors());
app.use(express.json());

app.use("/stock", require("./routes/stock-route"));

const port = process.env.PORT || 5000; // Use the PORT environment

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
