// axiosConfig.js
import axios from 'axios';

// Create an Axios instance with default settings
const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Replace with your API's base URL
  timeout: 10000, // Optional: set a timeout for requests in milliseconds
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Add a response interceptor
api.interceptors.response.use(
  (response) => {
    // Do something with response data if needed
    return response;
  },
  (error) => {
    // Handle errors globally if needed
    return Promise.reject(error);
  }
);

// Optional: Add a request interceptor for authentication
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;