const { getCategoryService, createCategoryService, getCategoryByIdService } = require("../services/category.service");

exports.getCategory = async (req, res) => {
    try {
        const result = await getCategoryService(req.body);

        res.status(200).json({
            status: "Success",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            error: "Couldn't get the Category"
        });
    }
};

exports.createCategory = async (req, res) => {
    try {
        const result = await createCategoryService(req.body);

        res.status(200).json({
            status: "Success",
            message: "Successfully Created the Category"
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            error: "Couldn't create the Category"
        });
    }
};

exports.getCategoryById = async (req, res) => {
    try {
        const { id } = req.params;
        const Category = await getCategoryByIdService(id);

        if (!Category) {
            return res.status(400).json({
                status: "fail",
                error: "Couldn't find a Category with this id"
            });
        }

        res.status(200).json({
            status: "success",
            data: Category,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: "fail",
            error: "Couldn't get the Category",
        });
    }
};