const express = require("express");
const Stock = require("../models/Stock");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.json("Hello World!! deploy on vercel");
});

router.post("/", async (req, res, next) => {
  try {
    const stock = new Stock(req.body);
    await stock.save();
    res.status(201).json({
      message: "Stock created successfully",
      code: 201,
      data: stock,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      code: 500,
      message: err.message,
    });
  }
});
module.exports = router;
