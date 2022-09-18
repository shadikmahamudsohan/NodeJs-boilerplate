const Product = require("../models/Product");

exports.getProductService = async () => {
    const product = await Product.find();
    return product;
};

exports.createProductService = async (data) => {
    const product = await Product.create(data);
    return product;
};


exports.updateProductService = async (productId, data) => {
    const result = await Product.updateOne({ _id: productId }, { $inc: data }, {
        runValidators: true // this will alow the mongoose schema validation to see if the data is validate
    });
    return result;
};


exports.bulkUpdateProductService = async (data) => {
    console.log(data);
    const result = await Product.updateMany({ _id: data.ids }, data, {
        runValidators: true
    });

    return result;
};