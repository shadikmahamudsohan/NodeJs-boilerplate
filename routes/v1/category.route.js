const express = require('express');
const router = express.Router();
const CategoryController = require('../../controllers/category.controller');

router.route('/')
    .get(CategoryController.getCategory)
    .post(CategoryController.createCategory);

router.route("/:id")
    .get(CategoryController.getCategoryById);

module.exports = router;