const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const demoRoute = require("./routes/v1/demo.route"); // getting teh data for routes file

// middleware start <==========
app.use(cors());
app.use(express.json());
// =======================> end

mongoose.connect(`mongodb://0.0.0.0:27017`).then(() => { // DBConnect wit mongoose
    console.log("Connected to database");
});

app.use('/api/v1/demo', demoRoute); // using route form routes/v1/demo.route.js

app.get("/", (req, res) => {
    res.send("Welcome to server boiler plate"); // will see when enter the server
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`); // log this if the app is running
});