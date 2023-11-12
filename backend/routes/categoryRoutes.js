const express = require('express');
const categoryRouter = express.Router();
const categoryController = require('../controllers/categoryController');
const upload = require('../upload');

categoryRouter.get('/:categoryId/products', categoryController.getProductsByCategory);
categoryRouter.get('/:categoryId/subcategories', categoryController.getSubcategoriesByCategory);
categoryRouter.get('/allcategories', categoryController.getCategories);
categoryRouter.get('/products/subcategory/:subcategoryId', categoryController.getProductsBySubcategory);
categoryRouter.get('/products',categoryController.getProducts);
categoryRouter.post('/addProduct',upload.single('productImage'),categoryController.addProduct);
categoryRouter.get('/products/seller', categoryController.getProductsByUser);
categoryRouter.get('/products/count', categoryController.getProductsCount);



module.exports = categoryRouter;
