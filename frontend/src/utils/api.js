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

/**
 * Fetch the current user's role.
 * Returns a promise that resolves to an object containing user role information.
 */
export const fetchUserRole = async () => {
  try {
    const response = await api.get('/user-role/'); // Adjust the endpoint as necessary
    return response.data; // Assume the API response includes `{ is_admin: true/false }`
  } catch (error) {
    console.error('Error fetching user role:', error);
    throw error;
  }
};

/**
 * Fetch notifications for the authenticated user.
 * @returns {Promise} A promise that resolves to the list of notifications.
 */
export const fetchNotifications = async () => {
  try {
    const response = await api.get('/notifications/');
    return response.data; // Returns an array of notifications
  } catch (error) {
    console.error('Error fetching notifications:', error);
    throw error;
  }
};

/**
 * Mark a notification as read by its ID.
 * @param {number} notificationId - The ID of the notification to mark as read.
 * @returns {Promise} A promise that resolves when the operation is successful.
 */
export const markNotificationAsRead = async (notificationId) => {
  try {
    await api.put(`/notifications/mark-read/${notificationId}/`);
  } catch (error) {
    console.error('Error marking notification as read:', error);
    throw error;
  }
};

/**
 * Send a notification to all users or a specific user.
 * @param {object} data - The notification data (e.g., message, notification_type, user_id).
 * @returns {Promise} A promise that resolves when the notification is sent successfully.
 */
export const sendNotification = async (data) => {
  try {
    await api.post('/notifications/send/', data);
  } catch (error) {
    console.error('Error sending notification:', error);
    throw error;
  }
};

export default api;
