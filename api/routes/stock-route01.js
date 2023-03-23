const express = require("express");
const Stock = require("../models/Stock");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const page = parseInt(req.query.page);
    const perpage = parseInt(req.query.perpage);
    const offset = (page - 1) * perpage;
    const stocks = await Stock.find().limit(perpage).skip(offset);
    res.json({
      code: 200,
      message: "success",
      data: stocks,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      code: 500,
      message: err.message,
    });
  }
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
