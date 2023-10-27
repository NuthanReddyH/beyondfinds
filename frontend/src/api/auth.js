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