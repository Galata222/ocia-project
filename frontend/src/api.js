import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api', // Replace with your Django server URL
});

export const login = async (email, password) => {
    const response = await api.post('/login/', { email, password });
    localStorage.setItem('access_token', response.data.access);
    localStorage.setItem('refresh_token', response.data.refresh);
    api.defaults.headers['Authorization'] = `Bearer ${response.data.access}`;
    return response.data;
};

export const refreshAccessToken = async () => {
    const refreshToken = localStorage.getItem('refresh_token');
    const response = await api.post('/token/refresh/', { refresh: refreshToken });
    localStorage.setItem('access_token', response.data.access);
    api.defaults.headers['Authorization'] = `Bearer ${response.data.access}`;
    return response.data;
};

// Automatically refresh token on 401 error
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            await refreshAccessToken();
            return api(originalRequest);
        }
        return Promise.reject(error);
    }
);

export default api;
