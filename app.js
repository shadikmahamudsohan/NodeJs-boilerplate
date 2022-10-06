const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//middlewares
app.use(express.json());
app.use(cors());


//routes
const productRoute = require('./routes/v1/product.route');
const brandRoute = require("./routes/v1/brand.route");
const storeRoute = require("./routes/v1/store.route");
const categoryRoute = require("./routes/v1/category.route");
const supplierRoute = require("./routes/v1/supplier.route");
const stockRoute = require("./routes/v1/stock.route");
const userRoute = require("./routes/v1/user.route");

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});


app.use('/api/v1/product', productRoute);
app.use("/api/v1/brand", brandRoute);
app.use("/api/v1/store", storeRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/supplier", supplierRoute);
app.use("/api/v1/stock", stockRoute);
app.use("/api/v1/user", userRoute);

module.exports = app;