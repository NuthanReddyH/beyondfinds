// productSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { fetchSubcategories, fetchProductsByCategory, fetchCategories,fetchProductsBySubcategory, fetchAllProducts } from './productThunk';

const initialState = {
  categories: [], // New state for categories
  subcategories: [],
  products: [],
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
  },
});

export default productSlice.reducer;
