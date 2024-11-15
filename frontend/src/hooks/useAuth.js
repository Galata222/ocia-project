// src/hooks/useAuth.js

import { useState, useEffect } from 'react';
import api from '../axiosConfig';
import { getToken, saveToken, removeToken } from '../utils/auth';

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Check if a token is available on mount and fetch user details
    useEffect(() => {
        const token = getToken();
        if (token) {
            refreshUserDetails();
        } else {
            setLoading(false);
        }
    }, []);

    /**
     * Refresh user details by verifying the token
     */
    const refreshUserDetails = async () => {
        try {
            const response = await api.get('/auth/user/', {
                headers: { Authorization: `Bearer ${getToken()}` },
            });
            setUser(response.data);
        } catch (err) {
            removeToken();
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    /**
     * Login user and store token
     * @param {string} email - User email
     * @param {string} password - User password
     * @returns {boolean} - True if login is successful
     */
    const login = async (email, password) => {
        try {
            const response = await api.post('/auth/login/', { email, password });
            saveToken(response.data.token);
            setUser(response.data.user);
            return true;
        } catch (error) {
            console.error('Login failed:', error);
            return false;
        }
    };

    /**
     * Logout user and clear token
     */
    const logout = () => {
        removeToken();
        setUser(null);
    };

    return {
        user,
        loading,
        login,
        logout,
        refreshUserDetails,
        isAuthenticated: !!user,
    };
};

export default useAuth;
