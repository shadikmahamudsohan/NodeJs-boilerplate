const Demo = require("../models/demo");

exports.getDemoService = async () => {
    const result = await Demo.find({}); // get all data in the demo-collection
    return result;
};

exports.getDemoServiceByParam = async () => {
    const result = await Demo.find({}); // get data parameter
    return result;
};

exports.createDemoService = async (data) => {
    const result = await Demo.create(data); // post data
    return result;
};

exports.updateDemoService = async (id, data) => {
    console.log(id);
    const result = await Demo.updateOne({ _id: id.param }, { $set: data }, { // update single data with id 
        runValidators: true // validate it with the Schema
    });
    console.log("result", result);
    return result;
};

exports.deleteDemoService = async (id) => {
    const result = await Demo.deleteOne({ _id: id }); // delete by id
    return result;
};