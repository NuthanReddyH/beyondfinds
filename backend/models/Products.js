const mongoose = require('mongoose');

// Define the Subcategory Schema
const subcategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  imageUrl: String,
});

// Define the Category Schema
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  subcategories: [subcategorySchema],
});

// Define the Product Schema
const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: String,
  sellerInformation: {
    name: String,
  },
  location: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  subcategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subcategory',
    required: true,
  },
  productImage: {
    type: String,
    required: true
  }
});

// Define the Category model
const Category = mongoose.model('Category', categorySchema);

// Define the Subcategory model
const Subcategory = mongoose.model('Subcategory', subcategorySchema);

// Define the Product model
const Product = mongoose.model('Product', productSchema);

module.exports = { Category, Subcategory, Product };
