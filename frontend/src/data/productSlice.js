// productSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { fetchSubcategories, fetchProductsByCategory, fetchCategories,fetchProductsBySubcategory, fetchAllProducts, addProduct, fetchProductsByUser, fetchProductsCount } from './productThunk';

const initialState = {
  categories: [], // New state for categories
  subcategories: [],
  products: [],
  userProducts:[],
  productsCount: 0,
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    // Handle fetchCategories lifecycle
    [fetchCategories.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchCategories.fulfilled]: (state, action) => {
      state.categories = action.payload; // Store categories in state
      state.loading = false;
    },
    [fetchCategories.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Handle fetchSubcategories lifecycle
    [fetchSubcategories.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchSubcategories.fulfilled]: (state, action) => {
      state.subcategories = action.payload;
      state.loading = false;
    },
    [fetchSubcategories.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Handle fetchProductsBySubcategory lifecycle
    [fetchProductsByCategory.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchProductsByCategory.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
    [fetchProductsByCategory.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [fetchProductsBySubcategory.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchProductsBySubcategory.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
    [fetchProductsBySubcategory.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [fetchAllProducts.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchAllProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
    [fetchAllProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [addProduct.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [addProduct.fulfilled]: (state, action) => {
      state.products.push(action.payload.data); // Add the new product to the state
      state.loading = false;
    },
    [addProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [fetchProductsByUser.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchProductsByUser.fulfilled]: (state, action) => {
      state.userProducts = action.payload;
      state.loading = false;
    },
    [fetchProductsByUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [fetchProductsCount.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchProductsCount.fulfilled]: (state, action) => {
      state.productsCount = action.payload;
      state.loading = false;
      state.error = null;
    },
    [fetchProductsCount.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Could not fetch products count';
    },
  },
});

export default productSlice.reducer;
