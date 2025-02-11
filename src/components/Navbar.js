import React from "react";
import "./css/navbar.css"; // Ensure your custom CSS is applied

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">Logo</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Shop</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Contact Us</a>
            </li>
          </ul>

          <div className="d-flex align-items-center nav-icons">
            <i className="bi bi-search mx-2"></i>
            <i className="bi bi-heart mx-2"></i> 
            <i className="bi bi-cart3 mx-2"></i> 
            <i className="bi bi-person mx-2"></i> 
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
