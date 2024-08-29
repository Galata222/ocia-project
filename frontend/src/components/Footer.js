import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center mb-4">
            <h2 className="text-white mb-4">In Loving Memory</h2>
            <p className="lead text-white">
              Remember the moments, cherish the memories!
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 text-center">
            <h2>OCIA</h2>
            <h4>Oromo community in America</h4>
          </div>
          <div className="col-md-3 text-center">
            <p>&copy; 2024 OCIA.</p>
            <p>All rights reserved.</p>
            <p>Created by OCIA Group</p>
          </div>
          
          <div className="col-md-3 text-center team-member text-center animated fadeInDown wow" data-wow-delay=".3s">
            <ul className="list-unstyled text-decoration-underline">
              <li className="nav-item">
                <Link to="/" className="nav-link text-light">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link text-light">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/Service" className="nav-link text-light">Services</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link text-light">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/Profile" className="nav-link text-light">My Account</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 text-center">
            <address className='text-white'>
              123-5 Main Street<br />
              Minnesota, USA 12345<br />
              Phone: (123) 456-7890<br/>
              Email:OCIA@gmail.com
            </address>
          </div>
         
        </div>

        <hr className="text-light my-4" />
        <div className="row">
          <div className="col-md-12 text-center">
            <div>
            <ul className="list-inline social-list mb-0">
  <li className="list-inline-item">
    <a href="#" className="text-white fs-4">
      <i className="fab fa-facebook-f"></i>
    </a>
  </li>
  <li className="list-inline-item">
    <a href="#" className="text-white fs-4 mx-3">
      <i className="fab fa-twitter"></i>
    </a>
  </li>
  <li className="list-inline-item">
    <a href="#" className="text-white fs-4">
      <i className="fab fa-instagram"></i>
    </a>
  </li>
  <li className="list-inline-item">
    <a href="#" className="text-white fs-4 mx-3">
      <i className="fab fa-whatsapp"></i>
    </a>
  </li>
  <li className="list-inline-item">
    <a href="#" className="text-white fs-4">
      <i className="fab fa-telegram"></i>
    </a>
  </li>
</ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;