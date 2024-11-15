import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import profilePic from "../Images/founder/profile2.jpg"; 
import { FaMoon, FaRegMoon, FaExpand, FaCompress } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/profilestyle/profilehome.css';

function ProfileHome() {
    const [darkMode, setDarkMode] = useState(false);
    const [fullscreen, setFullscreen] = useState(false); // To manage fullscreen
    const [sidebarOpen, setSidebarOpen] = useState(true); // Sidebar is open by default

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
        setSidebarOpen(prevState => !prevState);
    };

    return (
        <div className={`dashboard ${darkMode ? 'dark-mode' : ''}`}>
            <nav className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
                <div className="logo">User Panel</div>
                <ul className="menu list-unstyled">
                    <li><Link to='/ProfileHome' className='active'>Dashboard</Link></li>
                    <li><Link to='/ProfileHome/families'>Add Family Member</Link></li>
                    <li><Link to='/ProfileHome/profile'>Update Profile</Link></li>
                    <li><Link to='/ProfileHome/submit-risk'>Risk Submission</Link></li>
                    <li><Link to='/ProfileHome/notifications'>Notifications</Link></li>
                    <li><Link to='/ProfileHome/history'>History</Link></li>
                    <li className="logout"><Link to='/'>Log Out</Link></li>
                </ul>
            </nav>

            <div className={`main-content ${sidebarOpen ? '' : 'expanded'}`}>
                <header className="header">
                    <button className="hamburger-btn" onClick={toggleSidebar}>
                        ☰
                    </button>
                    <div className="header-title">User Dashboard</div>
                    <div className="header-profile">
                        <img src={profilePic} alt='User' className='user-image' />
                        <span className='user-name'>Galata</span>
                        <div className="header-actions">
                            <button onClick={toggleDarkMode}>
                                {darkMode ? <FaMoon /> : <FaRegMoon />}
                            </button>
                            <button onClick={toggleFullscreen}>
                                {fullscreen ? <FaCompress /> : <FaExpand />}
                            </button>
                        </div>
                    </div>
                </header>

                <div className="content">
                    <Outlet /> {/* This will render the child routes */}
                </div>
            </div>
        </div>
    );
}

export default ProfileHome;