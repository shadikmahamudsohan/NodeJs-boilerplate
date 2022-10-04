const { getStoresService, createStoreService, getStoreByIdService } = require("../services/store.service");

exports.getStores = async (req, res) => {
    try {
        const result = await getStoresService(req.body);

        res.status(200).json({
            status: "Success",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            error: "Couldn't get the stores"
        });
    }
};

exports.createStore = async (req, res) => {
    try {
        const result = await createStoreService(req.body);

        res.status(200).json({
            status: "Success",
            message: "Successfully Created the Store"
        });
    } catch (error) {
        res.status(400).json({
            status: 'Fail',
            error: "Couldn't create the store"
        });
    }
};

exports.getStoreById = async (req, res) => {
    try {
        const { id } = req.params;
        const Store = await getStoreByIdService(id);

        if (!Store) {
            return res.status(400).json({
                status: "fail",
                error: "Couldn't find a Store with this id"
            });
        }

        res.status(200).json({
            status: "success",
            data: Store,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: "fail",
            error: "Couldn't get the Stores",
        });
    }
};