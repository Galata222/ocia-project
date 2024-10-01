import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import ".././style/Adminstyle/admindashboard.css";
import headerpro from "../Images/founder/profile.jpg";
import { FaMoon, FaRegMoon, FaExpand, FaCompress } from 'react-icons/fa'; // Import icons

function AdminDashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

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

  return (
    <div className={`body ${darkMode ? 'dark-mode' : ''} ${fullscreen ? 'fullscreen' : ''}`}>
      <div className='sidebar'>
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
            <Link to='/admin/manage-users'>
              <i className='fas fa-users' /> <span>Manage Users</span>
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
        
          <li className='logout'>
            <Link to='/admin'>
              <i className='fas fa-sign-out-alt' /> <span>Log out</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className='main-content'>
        <div className='header-wrapper'>
          <div className='header-title'>
            <span>Admin</span>
            <h2>Dashboard</h2>
          </div>

          <div className='user-info'>
            <div className='search-box'>
              <i className='fas fa-search'></i>
              <input type='text' placeholder='search' />
            </div>
            <img src={headerpro} alt='adminimage'/>
            <div className='actions'>
              <button onClick={toggleDarkMode} className='action-btn'>
                {darkMode ? <FaMoon /> : <FaRegMoon />}
              </button>
              <button onClick={toggleFullscreen} className='action-btn'>
                {fullscreen ? <FaCompress /> : <FaExpand />}
              </button>
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

