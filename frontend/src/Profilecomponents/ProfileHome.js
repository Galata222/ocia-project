import React, { useState, useEffect } from 'react';
import '../style/profilestyle/profilehome.css';
import { Outlet, useNavigate } from 'react-router-dom';
import { FaMoon, FaRegMoon, FaExpand, FaCompress } from 'react-icons/fa'; // Import icons
const mediaUrl = 'http://localhost:8000'; // Adjust the base URL if necessary
function ProfileHome() {
  const [darkMode, setDarkMode] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [user, setUser] = useState(null); // State to store user info
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data from localStorage
    const userData = {
      first_name: localStorage.getItem('first_name'),
      last_name: localStorage.getItem('last_name'),
      profile_picture: localStorage.getItem('profile_picture')
    };
    
    if (userData.first_name && userData.last_name) {
      setUser(userData); // Set user data into state
    } else {
      // Redirect to login page if no user data found
      navigate('/login');
    }
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
    // Remove authentication token and user data from localStorage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user_id');
    localStorage.removeItem('first_name');
    localStorage.removeItem('last_name');
    localStorage.removeItem('profile_picture');
    localStorage.removeItem('role'); // Remove admin status if present

    // Redirect to the login page
    navigate('/login');
  };

  return (
    <div className={`profilehome-container ${darkMode ? 'dark-mode' : ''} ${fullscreen ? 'fullscreen' : ''}`}>
      <div className={`sidebar ${darkMode ? 'dark-mode' : ''}`}>
        <div className='logo'>
          <h2>OCIA</h2>
        </div>
        <ul className='menu'>
          <li>
            <a href='/ProfileHome' className='active'>
              <i className='fas fa-tachometer-alt' /> <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href='/ProfileHome/families'>
              <i className='fas fa-users' /> <span>Family Members</span>
            </a>
          </li>
          <li>
            <a href='/ProfileHome/profile'>
              <i className='fas fa-user-plus' /> <span>Update Profile</span>
            </a>
          </li>
          <li>
            <a href='/ProfileHome/submit-risk'>
              <i className='fas fa-exclamation-circle' /> <span>Risk Submission</span>
            </a>
          </li>
          <li>
            <a href='/ProfileHome/notifications'>
              <i className='fas fa-bell' /> <span>Notifications</span>
            </a>
          </li>
          <li>
            <a href='/ProfileHome/history'>
              <i className='fas fa-history' /> <span>History</span>
            </a>
          </li>
          <li className='logout'>
            <button onClick={handleLogout} className='logout-btn'>
              <i className='fas fa-sign-out-alt' /> <span>Log Out</span>
            </button>
          </li>
        </ul>
      </div>

      <div className='main-content'>
        <div className='header-wrapper'>
          <div className='header-title'>
            <span>Profile</span>
            <h2>Home</h2>
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
              {/* Use user data to set profile picture and username */}
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

        {/* Conditionally render other components or content here */}
        <div className='conditional-render'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default ProfileHome;
