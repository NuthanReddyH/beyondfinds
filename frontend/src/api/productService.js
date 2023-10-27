import api from './endpoint';  

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
    console.log({response})
    return response.data.data;
  } catch (error) {
    console.error('There was an error fetching the categories!', error);
    throw error;
  }
};