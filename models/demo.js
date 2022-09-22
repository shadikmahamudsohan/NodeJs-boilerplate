const mongoose = require("mongoose");

const demoSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please enter the name"],
        trim: true, // remove the blank specs
    },
    price: {
        type: Number,
        required: [true, "Please enter the price"],
        min: [0, "Tour price must be greater than 0"],
    },
},
    {
        timestamps: true // use this if you want to get the update and publish date and time
    }
);

const Demo = mongoose.model('demo-collection', demoSchema); // create a collection in your db

demoSchema.methods.logger = function () {
    console.log(`Data saved for: ${this.name}`); // get the name of the data. "this" will get your data
};

module.exports = Demo;