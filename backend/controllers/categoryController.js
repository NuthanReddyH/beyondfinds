const {Category,Product} = require('../models/Products');

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find({}); 

    res.status(200).json({
      success: true,
      data: categories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Handler to fetch products by category
exports.getProductsByCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const products = await Product.find({ category: categoryId }).populate('category').populate('subcategory');

    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Handler to fetch subcategories of a category
exports.getSubcategoriesByCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({
        success: false,
        message: 'Category not found',
      });
    }

    res.status(200).json({
      success: true,
      data: category.subcategories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// Handler to fetch products by subcategory
exports.getProductsBySubcategory = async (req, res) => {
  try {
    const subcategoryId = req.params.subcategoryId;
    const products = await Product.find({ subcategory: subcategoryId })
      .populate('category')
      .populate('subcategory');

    if (products.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No products found for this subcategory',
      });
    }

    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// Handler to fetch all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({})
      .populate('category')
      .populate('subcategory');

    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.addProduct = async (req, res) => {
  try {
    // Assuming the image is uploaded and the filename is available in req.file.path
    const { title, price, description, sellerInformation, location, category, subcategory } = req.body;
    const productImage = req.file.path; // The path to the uploaded image file

    // Create a new product instance
    const newProduct = new Product({
      title,
      price,
      description,
      sellerInformation: { name: sellerInformation },
      location,
      category,
      subcategory,
      productImage
    });

    // Save the product to the database
    const savedProduct = await newProduct.save();

    res.status(200).json({
      success: true,
      data: savedProduct,
      message: "Product added successfully."
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getProductsByUser = async (req, res) => {
  try {
    // Extract the seller's name from the request parameters or query
    // If you pass it as a URL parameter, use req.params.sellerName
    // If you pass it as a query string, use req.query.sellerName
    const sellerName = req.query.sellerName;

    // Find all products where the sellerInformation.name matches the sellerName
    const products = await Product.find({ 'sellerInformation.name': sellerName })
      .populate('category')
      .populate('subcategory');

    if (products.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No products found for this seller',
      });
    }

    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getProductsCount = async (req, res) => {
  try {
    const count = await Product.countDocuments();
    res.status(200).json({
      success: true,
      count: count,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


exports.searchProducts = async (req, res) => {
  try {
    const searchString = req.query.search;

    // Search in categories, subcategories, and product titles
    const searchResults = await Product.find({
      $or: [
        { 'title': { $regex: searchString, $options: 'i' } },
        { 'category.name': { $regex: searchString, $options: 'i' } },
        { 'subcategory.name': { $regex: searchString, $options: 'i' } }
      ]
    }).populate('category').populate('subcategory');

    if (searchResults.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'No products found matching the search criteria',
      });
    }

    res.status(200).json({
      success: true,
      data: searchResults
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
