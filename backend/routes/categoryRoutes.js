const express = require('express');
const categoryRouter = express.Router();
const categoryController = require('../controllers/categoryController');

categoryRouter.get('/:categoryId/products', categoryController.getProductsByCategory);
categoryRouter.get('/:categoryId/subcategories', categoryController.getSubcategoriesByCategory);
categoryRouter.get('/allcategories', categoryController.getCategories);
categoryRouter.get('/products/subcategory/:subcategoryId', categoryController.getProductsBySubcategory);
categoryRouter.get('/products',categoryController.getProducts);



module.exports = categoryRouter;
