import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import headerpro from "../Images/founder/profile.jpg"; 
import { FaMoon, FaRegMoon, FaExpand, FaCompress } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/Adminstyle/admindashboard.css';

function AdminDashboard() {
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
                <div className="logo">Admin Panel</div>
                <ul className="menu list-unstyled">
                    <li><Link to='/admin' className='active'>Dashboard</Link></li>
                    <li><Link to='/admin/manage-users'>Manage Users</Link></li>
                    <li><Link to='/admin/registration'>Register</Link></li>
                    <li><Link to='/admin/reports'>Reports</Link></li>
                    <li className="logout"><Link to='/'>Log out</Link></li>
                </ul>
            </nav>

            <div className={`main-content ${sidebarOpen ? '' : 'expanded'}`}>
                <header className="header">
                    <button className="hamburger-btn" onClick={toggleSidebar}>
                        ☰
                    </button>
                    <div className="header-title">Admin Dashboard</div>
                    <div className="header-profile">
                        <img src={headerpro} alt='User' className='user-image' />
                        <span className='user-name'>Admin Name</span>
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

export default AdminDashboard;