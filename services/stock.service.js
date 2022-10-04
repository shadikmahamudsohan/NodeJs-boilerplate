const Stock = require("../models/Stock");

exports.getStocksService = async (filters, queries) => {

  const Stocks = await Stock.find(filters)
    .skip(queries.skip)
    .limit(queries.limit)
    .select(queries.fields)
    .sort(queries.sortBy);

  const total = await Stock.countDocuments(filters);
  const page = Math.ceil(total / queries.limit);
  return { total, page, Stocks };
};

exports.createStockService = async (data) => {
  const result = await Stock.create(data);
  return result;
};

exports.updateStockByIdService = async (StockId, data) => {
  const result = await Stock.updateOne(
    { _id: StockId },
    { $inc: data },
    {
      runValidators: true,
    }
  );

  return result;
};

exports.deleteStockByIdService = async (id) => {
  const result = await Stock.deleteOne({ _id: id });
  return result;
};

exports.getStockByIdService = async (id) => {
  const stock = await Stock.findOne({ _id: id })
    .populate("store.id")
    .populate("suppliledBy.id")
    .populate("brand.id");

  console.log("stock", stock);
  return stock;
};