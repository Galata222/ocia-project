// src/utils/auth.js

// Key to use for storing token in localStorage
const TOKEN_KEY = 'token';

/**
 * Save token to localStorage
 * @param {string} token - JWT token to be stored
 */
export const saveToken = (token) => {
    if (token) {
        localStorage.setItem(TOKEN_KEY, token);
    }
};

/**
 * Retrieve token from localStorage
 * @returns {string | null} - Returns the stored token or null if not found
 */
export const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
};

/**
 * Remove token from localStorage
 */
export const removeToken = () => {
    localStorage.removeItem(TOKEN_KEY);
};

/**
 * Check if user is authenticated
 * @returns {boolean} - Returns true if a token exists in localStorage
 */
export const isAuthenticated = () => {
    return !!getToken();
};
