import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FaMoon, FaRegMoon, FaExpand, FaCompress, FaBars } from "react-icons/fa";
import "../style/Adminstyle/admindashboard.css";

const mediaUrl = "http://localhost:8000";

function AdminDashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = () => {
      const userData = {
        first_name: localStorage.getItem("first_name"),
        last_name: localStorage.getItem("last_name"),
        profile_picture: localStorage.getItem("profile_picture"),
      };

      if (userData.first_name && userData.last_name) {
        setUser(userData);
      } else {
        navigate("/login");
      }
    };

    fetchUserData();

    const handleStorageChange = () => {
      fetchUserData();
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [navigate]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const toggleFullscreen = () => {
    setFullscreen(prevFullscreen => {
      if (!prevFullscreen) {
        document.documentElement.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
      return !prevFullscreen;
    });
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className={`admin-dashboard ${darkMode ? "dark-mode" : ""} ${fullscreen ? "fullscreen" : ""}`}>
      <div className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="logo">
          <h2>Gosa</h2>
        </div>
        <ul className="menu">
          <li>
            <Link to="/admin" className="active">
              <i className="fas fa-tachometer-alt" /> <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/registration">
              <i className="fas fa-user-plus" /> <span>Register</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/risks">
              <i className="fas fa-exclamation-circle" /> <span>Submitted Risk</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/notifications">
              <i className="fas fa-bell" /> <span>Notifications</span>
            </Link>
          </li>
          <li>
            <Link to="/admin/reports">
              <i className="fas fa-chart-line" /> <span>Reports</span>
            </Link>
          </li>
          <li>
            <a href="/admin/profile">
              <i className="fas fa-user-plus" /> <span>Update Profile</span>
            </a>
          </li>
          <li className="logout">
            <button onClick={handleLogout} className="logout-btn">
              <i className="fas fa-sign-out-alt" /> <span>Log out</span>
            </button>
          </li>
        </ul>
      </div>

      <div className="main-content">

        <div className="header">
          <div className="humbhead">
          <button className="hamburger" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <FaBars />
          </button>
          <div className="header-title">
            <h4> Admin Dashboard</h4>
          </div>
          </div>
          <div>
          <div className="header-actions">

            <div className="profile-info">
              <img
                src={user?.profile_picture ? `${mediaUrl}${user.profile_picture}` : "default_profile_picture.jpg"}
                alt="Profile Avatar"
                className="profile-pic"
              />
              <div className="username">{user ? `${user.first_name} ${user.last_name}` : "Guest"}</div>
            </div>
              <button onClick={toggleFullscreen} className="action-btn">
              {fullscreen ? <FaCompress /> : <FaExpand />}
            </button>
            <button onClick={toggleDarkMode} className="action-btn">
              {darkMode ? <FaMoon /> : <FaRegMoon />}
            </button>
          
            </div>
          </div>
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;