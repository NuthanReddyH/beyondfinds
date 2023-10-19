import axios from 'axios';

const baseURL = 'http://localhost:8080/api/auth';

const api = axios.create({
  baseURL,
});

export const registerUser = async (userData) => {
  try {
    const response = await api.post('/register', userData);
    return response.data;
  } catch (error) {
    console.log({ error });
    throw error;
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await api.post('/login', { username, password });

    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userInfo', JSON.stringify(response.data.user));
      return response.data.user;
    } else {
      throw new Error('Token not found in the response');
    }
  } catch (error) {
    console.log({ error });
    throw error;
  }
};