// productThunks.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import { getSubcategoriesByCategory, getProductsByCategory,getCategories,getProductsBySubcategory } from '../api/productService'; // Import your service methods

export const fetchSubcategories = createAsyncThunk(
  'products/fetchSubcategories',
  async (categoryId, thunkAPI) => {
    try {
      const response = await getSubcategoriesByCategory(categoryId);
      return response; // response is the subcategories array
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error || 'Could not fetch subcategories');
    }
  }
);

export const fetchProductsByCategory = createAsyncThunk(
  'products/fetchProductsBySubcategory',
  async (categoryId , thunkAPI) => {
    try {
      const response = await getProductsByCategory(categoryId); // Assume you have a method that gets products by subcategory
      return response; // response is the products array
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error || 'Could not fetch products');
    }
  }
);

export const fetchCategories = createAsyncThunk(
  'products/fetchCategories',
  async (_, thunkAPI) => {
    try {
      const response = await getCategories();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error || 'Could not fetch categories');
    }
  }
);

export const fetchProductsBySubcategory = createAsyncThunk(
  'products/fetchProductsBySubcategory',
  async (subcategoryId, thunkAPI) => {
    try {
      const response = await getProductsBySubcategory(subcategoryId);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error || 'Could not fetch products by subcategory');
    }
  }
);
