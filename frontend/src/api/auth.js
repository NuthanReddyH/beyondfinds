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
      const isAdmin = response?.data?.user?.username === 'admin' ? 1 : 0;
      localStorage.setItem('isAdmin',isAdmin)
      return {
        user: response.data.user,
        isAdmin: isAdmin
      }
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

export const getUsers = async () => {
  try {
    const response = await api.get('/auth/users'); // Adjust the endpoint as necessary
    return response.data;
  } catch (error) {
    console.error({ error });
    throw error;
  }
};

export const getUsersCount = async () => {
  try {
    const response = await api.get('/auth/users/count'); 
    return response.data.count;
  } catch (error) {
    console.error({ error });
    throw error;
  }
};

export const deleteUser = async (userId) => {
  try {
    const response = await api.delete(`/auth/user/${userId}`); // Adjust the endpoint as necessary
    // No need to update localStorage for deleting other users
    return response.data; // This should contain a success message
  } catch (error) {
    console.error({ error });
    throw error;
  }
};


export const addToFavorites = async (userId, productId) => {
  try {
    const response = await api.put('/auth/addfavorites', { userId, productId });
    if (response.data) {
      // Assuming the response contains the updated user data
      localStorage.setItem('userInfo', JSON.stringify(response?.data?.user));
      return response.data;
    } else {
      console.log("error");
      throw new Error('Add to favorites failed');
    }
  } catch (error) {
    console.log({ error });
    throw error;
  }
};

export const getConversations = async (conversationId) => {
  try {
    const response = await api.get(`/auth/conversations/${conversationId}`);
    return response.data;
  } catch (error) {
    console.error({ error });
    throw error;
  }
};

export const getUsernameById = async (userId) => {
  try {
    const response = await api.get(`/auth/username/${userId}`);
    return response.data.username;
  } catch (error) {
    console.error({ error });
    throw error;
  }
};
