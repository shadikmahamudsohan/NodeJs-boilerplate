const express = require("express");
const router = express.Router();
const stockController = require("../../controllers/stock.controller");


router.route("/")
    .post(stockController.createStock)
    .get(stockController.getStocks);

router.route("/:id")
    .delete(stockController.deleteStockById)
    .patch(stockController.updateStockById)
    .get(stockController.getStocksById);

module.exports = router;