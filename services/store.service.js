const Store = require("../models/Store");

exports.getStoresService = async () => {
    const Stores = await Store.find({});
    console.log(Stores);
    return Stores;
};


exports.createStoreService = async (data) => {
    const result = await Store.create(data);
    return result;
};


exports.getStoreByIdService = async (id) => {
    const Store = await Store.findOne({ _id: id });
    return Store;
};