const mongoose = require('mongoose');
//schema design
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the product name"],
        trim: true,
        unique: [true, "Product name already exists"],
        minLength: [3, "Product name must be at least 3 characters long"]
    },
    description: {
        type: String,
        required: [true, "Please enter the product description"],
    },
    price: {
        type: Number,
        required: [true, "Please enter the product price"],
        min: [0, "Product price must be greater than 0"],
    },
    status: {
        type: String,
        required: [true, "Please enter the product status"],
        enum: ["in-stock", "out-of-stock"],
        default: "in-stock"
    },
    unit: {
        type: String,
        required: [true, "Please enter the product unit"],
        enum: {
            values: ["kg", "liter", "pcs"],
            message: "unit value can't be {VALUE}, must be kg/liter/pcs"
        },
        // status: {
        //   type: String,
        //   required: true,
        //   enum: {
        //     values: ['in-stock', 'out-of-stock'],
        //     message: "status value can't be {VALUE}, must be in-stock/out-of-stock"
        //   },
        //   // createdAt: {
        //   //   type: Date,
        //   //   default: Date.now,
        //   // },
        //   // updatedAt: {
        //   //   type: Date,
        //   //   default: Date.now,
        //   // }
        //   // supplier: {
        //   //   type: mongoose.Schema.Types.ObjectId,
        //   //   ref: "Supplier"
        //   // },
        //   // categories: [{
        //   //   name: {
        //   //     type: String,
        //   //     required: true,
        //   //   },
        //   //   _id: mongoose.Schema.Types.ObjectId,
        //   // }]
        // }
    },
    quantity: {
        type: Number,
        require: true,
        min: [0, "quantity can't be negative"],
        validator: {
            validator: (value) => {
                const isInteger = Number.isInteger(value);
                if (isInteger) {
                    return true;
                } else {
                    return false;
                }
            },
            message: "quantity must be an integer"
        }
    },
}, {
    timestamps: true
});

//mongoose middleware for saving data: pre and post

productSchema.pre("save", function (next) {
    console.log("Before saving data");
    if (this.quantity == 0) {
        this.status = "out-of-stock";
    }
    next();
});

// productSchema.post("save", function (doc, next) {
//   console.log("After saving data");
//   next();
// });

productSchema.methods.logger = function () {
    console.log(`data saved for: ${this.name}`);
};

// SCHEMA -> MODEL -> QUERY 

const Product = mongoose.model("Product", productSchema);

productSchema.methods.logger = function () {
    console.log(`Data saved for ${this.name}`);
};

module.exports = Product;