const Category = require("../models/Category");

exports.createCategoryService = async (data) => {
  const result = await Category.create(data);
  return result;
};


exports.getCategoryService = async () => {
  const category = await Category.find({}).select('-products -suppliers');
  return category;
};


exports.getCategoryByIdService = async (id) => {
  const category = await Category.findOne({ _id: id });
  return category;
};