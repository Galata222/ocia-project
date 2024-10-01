import React, { useState } from 'react';
import '../style/profilestyle/profilehome.css';
import { Outlet } from 'react-router-dom';
import { FaMoon, FaRegMoon, FaExpand, FaCompress } from 'react-icons/fa'; // Import icons
import profilePic from '../Images/founder/profile2.jpg'; 

function ProfileHome() {
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
              <i className='fas fa-users' /> <span>Add Family Member</span>
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
            <a href='/'>
              <i className='fas fa-sign-out-alt' /> <span>Log Out</span>
            </a>
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
              <img src={profilePic} alt='Profile Avatar' className='profile-pic' />
              <div className='username'>Galata</div>
            </div>

          </div>
          </div>

          {/* Conditionally render other components or content here */}
          <div className='conditional-render'>
           <Outlet/>
          </div>
        </div>
      </div>
    
  );
}

export default ProfileHome;
