import React, { useState, useEffect } from 'react';
import '../style/profilestyle/profilehome.css';
import { Outlet, useNavigate } from 'react-router-dom';
import { FaMoon, FaRegMoon, FaExpand, FaCompress, FaBars } from 'react-icons/fa'; // Import icons

const mediaUrl = 'http://localhost:8000'; // Adjust the base URL if necessary

function ProfileHome() {
  const [darkMode, setDarkMode] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true); // New state for sidebar
  const [user, setUser] = useState(null); // State to store user info
  const navigate = useNavigate();

  useEffect(() => {
    const userData = {
      first_name: localStorage.getItem('first_name'),
      last_name: localStorage.getItem('last_name'),
      profile_picture: localStorage.getItem('profile_picture'),
    };

    if (userData.first_name && userData.last_name) {
      setUser(userData);
    } else {
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

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className={`profilehome-container ${darkMode ? 'dark-mode' : ''} ${fullscreen ? 'fullscreen' : ''}`}>
      <div className={`sidebar ${darkMode ? 'dark-mode' : ''} ${sidebarOpen ? '' : 'closed'}`}>
        <div className="logo">
          <h2>OCIA</h2>
        </div>
        <ul className="menu">
          <li>
            <a href="/ProfileHome" className="active">
              <i className="fas fa-tachometer-alt" /> <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="/ProfileHome/families">
              <i className="fas fa-users" /> <span>Family Members</span>
            </a>
          </li>
          <li>
            <a href="/ProfileHome/families/new">
              <i className="fas fa-users" /> <span>Add Family Members</span>
            </a>
          </li>
          <li>
            <a href="/ProfileHome/profile">
              <i className="fas fa-user-plus" /> <span>Update Profile</span>
            </a>
          </li>
          <li>
            <a href="/ProfileHome/risks">
              <i className="fas fa-exclamation-circle" /> <span>Risks</span>
            </a>
          </li>
          <li>
            <a href="/ProfileHome/notifications">
              <i className="fas fa-bell" /> <span>Notifications</span>
            </a>
          </li>
          <li>
            <a href="/ProfileHome/history">
              <i className="fas fa-history" /> <span>History</span>
            </a>
          </li>
          <li className="logout">
            <button onClick={handleLogout} className="logout-btn">
              <i className="fas fa-sign-out-alt" /> <span>Log Out</span>
            </button>
          </li>
        </ul>
      </div>

      <div className="main-content">
        <div className="header">
          <button onClick={toggleSidebar} className="hamburger-btn">
            <FaBars />
          </button>
          <div className="header-title">
            <span>Profile</span>
            <h2>Home</h2>
          </div>
          <div className="header-actions">
            <button onClick={toggleDarkMode} className="action-btn">
              {darkMode ? <FaMoon /> : <FaRegMoon />}
            </button>
            <button onClick={toggleFullscreen} className="action-btn">
              {fullscreen ? <FaCompress /> : <FaExpand />}
            </button>
            <div className="profile-info">
              <img
                src={user?.profile_picture ? `${mediaUrl}${user.profile_picture}` : '/default_profile_picture.jpg'}
                alt="Profile Avatar"
                className="profile-pic"
              />
              <div className="username">{user ? `${user.first_name} ${user.last_name}` : 'Guest'}</div>
            </div>
          </div>
        </div>
        <div className="conditional-render">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default ProfileHome;
