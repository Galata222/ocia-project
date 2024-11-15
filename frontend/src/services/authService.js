import api from '../api';

export const login = async (email, password) => {
    //console.log(email, password)
    return await api.post('/token/', { email, password });
    
};

export const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    delete api.defaults.headers['Authorization'];
};

export const fetchSecureData = async () => {
    return await api.get('/secure-data/');
};
