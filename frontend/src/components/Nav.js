import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  gosa from'./../Images/gosa2.png'
import '../style/navbar.css';
import '../style/darkblue.css';
function Nav() {
  const [showSupportOptions, setShowSupportOptions] = useState(false);
  const [showServiceOptions, setShowServiceOptions] = useState(false);
  const [showFreeServiceOptions, setFreeShowServiceOptions] = useState(false);
  const [showOtherServiceOptions, setOtherShowServiceOptions] = useState(false);

  const handleMouseEnterService = () => {
    setShowServiceOptions(true);
  };

  const handleMouseLeaveService = () => {
    setTimeout(() => {
      setShowServiceOptions(false);
      setFreeShowServiceOptions(false);
      setOtherShowServiceOptions(false);
    }, 200); // Delay before hiding the menu
  };

  const handleMouseEnterSupport = () => {
    setShowSupportOptions(true);
  };

  const handleMouseLeaveSupport = () => {
    setTimeout(() => {
      setShowSupportOptions(false);
    }, 200); // Delay before hiding the menu
  };

  return (
    <nav className="navbar navbar-expand-md dark-blue">
      <div className="container">
        <Link to="/" className=" custom-text">
          <i className="ion-social-buffer" />
          <span> <h1>GOSA</h1></span>
          {/* <span>  <img src={gosa} alt='gosa'/>  </span> */}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link custom-text">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link custom-text">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link custom-text">Contact us</Link>
            </li>
            <li 
              className="nav-item dropdown"
              onMouseEnter={handleMouseEnterService}
              onMouseLeave={handleMouseLeaveService}
            >
              <span className="nav-link custom-text dropdown-toggle">
                Services
              </span>
              {showServiceOptions && (
                <ul className="dropdown-menu">
                  <li 
                    className="nav-item"
                    onMouseEnter={() => setFreeShowServiceOptions(true)}
                    onMouseLeave={() => setFreeShowServiceOptions(false)}
                  >
                    <Link to="/free-service" className="dropdown-item">Free Service</Link>
                    {showFreeServiceOptions && (
                      <ul className="dropdown-menu">
                        <li>
                          <Link to="/free-service-detail" className="dropdown-item">Details</Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li 
                    className="nav-item"
                    onMouseEnter={() => setOtherShowServiceOptions(true)}
                    onMouseLeave={() => setOtherShowServiceOptions(false)}
                  >
                    <Link to="/other-service" className="dropdown-item">Other Services</Link>
                    {showOtherServiceOptions && (
                      <ul className="dropdown-menu">
                        <li>
                          <Link to="/other-service-detail" className="dropdown-item">Details</Link>
                        </li>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>
            <li 
              className="nav-item dropdown"
              onMouseEnter={handleMouseEnterSupport}
              onMouseLeave={handleMouseLeaveSupport}
            >
              <span className="nav-link custom-text dropdown-toggle">
                Support us
              </span>
              {showSupportOptions && (
                <ul className="dropdown-menu" aria-labelledby="supportDropdown">
                  <li>
                    <Link to="/donate" className="dropdown-item">Donate</Link>
                  </li>
                  <li>
                    <Link to="/volunteer" className="dropdown-item">Volunteer</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link custom-text">My Account</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;