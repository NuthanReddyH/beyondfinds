import axios from 'axios';

const baseURL = 'http://localhost:8080/api';  // assuming your API is hosted here

const api = axios.create({
  baseURL,
});

export default api;