import api from './endpoint'

export const registerUser = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    console.log({ error });
    throw error;
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await api.post('/auth/login', { username, password });
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userInfo', JSON.stringify(response.data.user));
      return response.data.user;
    } else {
      console.log("error")
      throw new Error('Token not found in the response');
    }
  } catch (error) {
    console.log({ error });
    throw error;
  }
};

export const updateUser = async (userData) => {  // Added updateUser method
  try {
    console.log({userData})
    //const response = await api.put('/auth/update', userData);
    const response = await api.put('/auth/update', userData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Set correct content type for file upload
      },
    });
    
    if (response.data) {
      // Assuming the response contains the updated user data
      console.log({response})
      localStorage.setItem('userInfo', JSON.stringify(response?.data?.user));
      return response.data;
    } else {
      console.log("error")
      throw new Error('User update failed');
    }
  } catch (error) {
    console.log({ error });
    throw error;
  }
};