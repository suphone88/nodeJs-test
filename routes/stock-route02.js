const express = require("express");
const Stock = require("../models/Stock");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const page = parseInt(req.query.page);
    const perpage = parseInt(req.query.perpage);
    const search = req.query.search;

    const filter = {};
    if (search) {
      filter["$text"] = { $search: search };
    }

    const offset = (page - 1) * perpage;
    const stocks = await Stock.find(filter).limit(perpage).skip(offset);
    const total = await Stock.countDocuments(filter);

    res.json({
      code: 200,
      message: "success",
      data: stocks,
      total,
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
