import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/navbar.css';

function Nav() {
  const [showSupportOptions, setShowSupportOptions] = useState(false);
  const [showServiceOptions, setShowServiceOptions] = useState(false);
  const [showFreeServiceOptions, setFreeShowServiceOptions] = useState(false);
  const [showOtherServiceOptions, setOtherShowServiceOptions] = useState(false);
  const [showDevServices, setShowDevServices] = useState(false);
  const [showDesignServices, setShowDesignServices] = useState(false);
  const [showConsultationServices, setShowConsultationServices] = useState(false);

  const handleMouseEnterService = () => {
    setShowServiceOptions(true);
  };

  const handleMouseLeaveService = () => {
    setTimeout(() => {
      setShowServiceOptions(false);
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
    <div>
      <nav className="navbar navbar-expand-md custom-navbar ">
        <div className="container">
          <Link to="/" className="logo custom-text">
            <i className="ion-social-buffer" />
            <span>GOSA</span>
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
                      className="nav-item dropdown"
                      onMouseEnter={() => setFreeShowServiceOptions(true)}
                      onMouseLeave={() => setFreeShowServiceOptions(false)}
                    >
                      <Link to="/free-service" className="dropdown-item">Free Service</Link>
                      {/* {showFreeServiceOptions && (
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li><Link to="/computer-training" className="dropdown-item">Computer Training</Link></li>
                          <li><Link to="/language-training" className="dropdown-item">Language Training</Link></li>
                          <li><Link to="/cv-training" className="dropdown-item">CV Training</Link></li>
                        </ul>
                      )} */}
                    </li>
                    <li 
                      className="nav-item dropdown"
                      onMouseEnter={() => setOtherShowServiceOptions(true)}
                      onMouseLeave={() => setOtherShowServiceOptions(false)}
                    >
                      <Link to="/other-service" className="dropdown-item">Other Services</Link>
                      {showOtherServiceOptions && (
                        <ul className="dropdown-menu dropdown-menu-end">
                          <li 
                            className="nav-item dropdown"
                            onMouseEnter={() => setShowDevServices(true)}
                            onMouseLeave={() => setShowDevServices(false)}
                          >
                            {/* <Link to="/IT-and-SW" className="dropdown-item">IT and Software Development Services</Link>
                            {showDevServices && (
                              <ul className="dropdown-menu dropdown-menu-start">
                                <li><Link to="/web-development" className="dropdown-item">Web Development</Link></li>
                                <li><Link to="/full-stack-development" className="dropdown-item">Full-Stack Development</Link></li>
                                <li><Link to="/custom-software-development" className="dropdown-item">Custom Software Development</Link></li>
                                <li><Link to="/technical-support" className="dropdown-item">Technical Support and Troubleshooting</Link></li>
                                <li><Link to="/saas-development" className="dropdown-item">SaaS Development Consultation</Link></li>
                              </ul>
                            )} */}
                          </li>
                          <li 
                            className="nav-item dropdown"
                            onMouseEnter={() => setShowDesignServices(true)}
                            onMouseLeave={() => setShowDesignServices(false)}
                          >
                            {/* <Link to="/graphics" className="dropdown-item">Graphic Design and Digital Art Services</Link>
                            {showDesignServices && (
                              <ul className="dropdown-menu dropdown-menu-start">
                                <li><Link to="/logo-branding-design" className="dropdown-item">Logo and Branding Design</Link></li>
                                <li><Link to="/presentation-design" className="dropdown-item">Presentation Design</Link></li>
                              </ul>
                            )} */}
                          </li>
                          <li 
                            className="nav-item dropdown"
                            onMouseEnter={() => setShowConsultationServices(true)}
                            onMouseLeave={() => setShowConsultationServices(false)}
                          >
                            {/* <Link to="/consultation" className="dropdown-item">Consultation and Training Services</Link>
                            {showConsultationServices && (
                              <ul className="dropdown-menu dropdown-menu-start">
                                <li><Link to="/it-software-training" className="dropdown-item">IT and Software Training</Link></li>
                                <li><Link to="/graphics-design-tutorials" className="dropdown-item">Graphics and Design Tutorials</Link></li>
                              </ul> */}
                            {/* )} */}
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
    </div>
  );
}

export default Nav;