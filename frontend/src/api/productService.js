import api from './endpoint';

export const getProducts = async () => {
  try {
    const response = await api.get('/categories/products');
    return response.data.data;
  } catch (error) {
    console.error('There was an error fetching the products!', error);
    throw error;
  }
};

export const getProductsByCategory = async (categoryId) => {
  try {
    const response = await api.get(`/categories/${categoryId}/products`);
    return response.data.data; 
  } catch (error) {
    console.error('There was an error fetching the products by category!', error);
    throw error;
  }
};

export const getSubcategoriesByCategory = async (categoryId) => {
  try {
    const response = await api.get(`/categories/${categoryId}/subcategories`);
    return response.data.data; 
  } catch (error) {
    console.error('There was an error fetching the subcategories!', error);
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const response = await api.get('/categories/allcategories');
    return response.data.data;
  } catch (error) {
    console.error('There was an error fetching the categories!', error);
    throw error;
  }
};

export const getProductsBySubcategory = async (subcategoryId) => {
  try {
    const response = await api.get(`/categories/products/subcategory/${subcategoryId}`);
    return response.data.data;
  } catch (error) {
    console.error('There was an error fetching the products by subcategory!', error);
    throw error;
  }
};

export const addProduct = async (formData) => {
  try {
    const response = await api.post('/categories/addProduct', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('There was an error adding the product!', error);
    throw error;
  }
};

export const getProductsByUser = async (sellerName) => {
  try {
    const response = await api.get(`/categories/products/seller?sellerName=${sellerName}`);
    return response.data.data;
  } catch (error) {
    console.error('There was an error fetching the products by user!', error);
    throw error;
  }
};

export const getListingsCount = async () => {
  try {
    const response = await api.get('/categories/products/count'); 
    return response.data.count;
  } catch (error) {
    console.error({ error });
    throw error;
  }
};


export const searchProducts = async (searchString) => {
  try {
    const response = await api.get(`/categories/search?search=${searchString}`);
    return response.data.data;
  } catch (error) {
    console.error('There was an error performing the search!', error);
    throw error;
  }
};
