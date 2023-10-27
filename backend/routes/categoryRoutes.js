const express = require('express');
const categoryRouter = express.Router();
const categoryController = require('../controllers/categoryController');

categoryRouter.get('/:categoryId/products', categoryController.getProductsByCategory);
categoryRouter.get('/:categoryId/subcategories', categoryController.getSubcategoriesByCategory);
categoryRouter.get('/allcategories', categoryController.getCategories);


module.exports = categoryRouter;
