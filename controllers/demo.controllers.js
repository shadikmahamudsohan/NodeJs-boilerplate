const services = require("../services/demo.service");

exports.getData = async (req, res) => {
    try {
        const result = await services.getDemoService();

        res.status(200).json({
            status: "success",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't get the data",
            error: error.message,
        });
    }
};
exports.postData = async (req, res) => {
    try {
        const result = await services.createDemoService(req.body);

        res.status(200).json({
            status: "success",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't create the data",
            error: error.message,
        });
    }
};
exports.updateData = async (req, res) => {
    try {
        const result = await services.updateDemoService(req.params, req.body);

        res.status(200).json({
            status: "success",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't update the data",
            error: error.message,
        });
    }
};
exports.deleteData = async (req, res) => {
    try {
        const result = await services.deleteDemoService(req.params);

        res.status(200).json({
            status: "success",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: "fail",
            message: "can't delete the data",
            error: error.message,
        });
    }
};