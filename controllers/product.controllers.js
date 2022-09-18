const { getProductService, createProductService, updateProductService, bulkUpdateProductService } = require("../services/product.services");

exports.getProducts = async (req, res, next) => {
    try {
        // const product = await Product
        //   .where("name").equals(/\w/)
        //   .where("quantity").gt(100).lt(600)
        //   .limit(2).sort({ quantity: -1 });
        const products = await getProductService();

        res.status(200).json({
            status: "success",
            data: products
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't get the data",
            error: error.message,
        });
    }
};

exports.createProduct = async (req, res, next) => {
    try {
        //save or create
        const product = await createProductService(req.body);

        product.logger();
        // const result = await Product.create(req.body);


        // instance creation -> Do something -> save()
        if (req.body.quantity === 0) {
            req.body.status = 'out-of-stock';
        } else {
            req.body.status = 'in-stock';
        }

        const result = await product.save();
        res.status(200).json({
            message: "success",
            message: 'Data inserted successfully',
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Data is not inserted",
            error: error.message
        });
    }
};


exports.updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await updateProductService(id, req.body);

        if (result) {
            res.status(200).json({
                status: "success",
                message: "successfully updated"
            });
        }
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Couldn't update the product",
            error: error.message
        });
    }
};


exports.bulkUpdateProduct = async (req, res, next) => {
    console.log('hello');
    try {
        console.log(req);
        const result = await bulkUpdateProductService(req.body);

        if (result) {
            res.status(200).json({
                status: "success",
                message: "successfully updated"
            });
        }
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: "Couldn't update the bulk product",
            error: error.message
        });
    }
};

