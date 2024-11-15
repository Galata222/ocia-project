import React, { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import "../style/Adminstyle/admindashboard.css";
import { FaMoon, FaRegMoon, FaExpand, FaCompress } from 'react-icons/fa'; // Import icons

const mediaUrl = 'http://localhost:8000'; // Adjust the base URL if necessary

function AdminDashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [user, setUser] = useState(null); // State to store user info
  const navigate = useNavigate();

  useEffect(() => {
    // Function to fetch user data from localStorage
    const fetchUserData = () => {
      const userData = {
        first_name: localStorage.getItem('first_name'),
        last_name: localStorage.getItem('last_name'),
        profile_picture: localStorage.getItem('profile_picture'),
      };

      if (userData.first_name && userData.last_name) {
        setUser(userData); // Set user data into state
      } else {
        // Redirect to login page if no user data found
        navigate('/login');
      }
    };

    fetchUserData();

    // Event listener to handle updates from profile updates
    const handleStorageChange = () => {
      fetchUserData();
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [navigate]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleFullscreen = () => {
    setFullscreen(!fullscreen);
    if (!fullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const handleLogout = () => {
    // Remove the token or authentication data
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('first_name');
    localStorage.removeItem('last_name');
    localStorage.removeItem('profile_picture');
    localStorage.removeItem('role');
    // Navigate to the login page
    navigate('/login');
  };

  return (
    <div className={`body ${darkMode ? 'dark-mode' : ''} ${fullscreen ? 'fullscreen' : ''}`}>
      <div className={`sidebar ${darkMode ? 'dark-mode' : ''}`}>
        <div className='logo'>
          <h2>OCIA</h2>
        </div>
        <ul className='menu'>
          <li>
            <Link to='/admin' className='active'>
              <i className='fas fa-tachometer-alt' /> <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to='/admin/registration'>
              <i className='fas fa-user-plus' /> <span>Register</span>
            </Link>
          </li>
          <li>
            <Link to='/admin/submitted-risk'>
              <i className='fas fa-exclamation-circle' /> <span>Submitted Risk</span>
            </Link>
          </li>
          <li>
            <Link to='/admin/notifications'>
              <i className='fas fa-bell' /> <span>Notifications</span>
            </Link>
          </li>
          <li>
            <Link to='/admin/reports'>
              <i className='fas fa-chart-line' /> <span>Reports</span>
            </Link>
          </li>
          <li>
            <a href='/admin/profile'>
              <i className='fas fa-user-plus' /> <span>Update Profile</span>
            </a>
          </li>
          <li className='logout'>
            <button onClick={handleLogout} className='logout-btn'>
              <i className='fas fa-sign-out-alt' /> <span>Log out</span>
            </button>
          </li>
        </ul>
      </div>

      <div className='main-content'>
        <div className='header-wrapper'>
          <div className='header-title'>
            <span>Admin</span>
            <h2>Dashboard</h2>
          </div>

          <div className='header-actions'>
            <div className='actions'>
              <button onClick={toggleDarkMode} className='action-btn'>
                {darkMode ? <FaMoon /> : <FaRegMoon />}
              </button>
              <button onClick={toggleFullscreen} className='action-btn'>
                {fullscreen ? <FaCompress /> : <FaExpand />}
              </button>
            </div>

            <div className='profile-info'>
              <img 
                src={user?.profile_picture ? `${mediaUrl}${user.profile_picture}` : 'default_profile_picture.jpg'}  
                alt='Profile Avatar' 
                className='profile-pic' 
              />
              <div className='username'>
                {user ? `${user.first_name} ${user.last_name}` : 'Guest'}
              </div>
            </div>
          </div>
        </div>

        <div className='conditional-render'>
          <Outlet /> {/* This will render the child routes */}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;