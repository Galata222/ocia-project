const logout = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    alert('Logged out successfully');
};
