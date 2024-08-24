// src/axiosConfig.js

import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api/', // Your Django backend URL
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
