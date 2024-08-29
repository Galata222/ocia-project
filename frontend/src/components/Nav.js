import React from 'react';
import { Link} from 'react-router-dom';
import "../style/styles.css";
import "../style/animate.css";
import "../style/mklib.css";
function Nav() {
  return (
      <div>
        <nav className="navbar navbar-expand-md navbar-custom bg-custom-dark">
          <div className="container">
            <Link to="/" className="logo">
              <i className="ion-social-buffer" />
              <span>OCIA</span>
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
              <i className="ion-navicon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav ms-auto navbar-center" id="mySidenav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/About" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/Service" className="nav-link">Services</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">Contact us</Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">My Account</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
  );
}

export default Nav;
