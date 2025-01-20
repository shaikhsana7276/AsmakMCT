
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-Asmak.png";
import "../assets/styles/NavBar.css"

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-0 mb-5">
        <div className="container">
          {/* Logo or Brand */}
          <a className="navbar-brand fw-bold text-dark" href="/">
            <img src={logo} alt="Logo" style={{ height: "50px" }} />
          </a>

          {/* Toggle button for smaller screens */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link text-dark mx-3 fw-bold">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link text-dark mx-3 fw-bold">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/products" className="nav-link text-dark mx-3 fw-bold">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/location" className="nav-link text-dark mx-3 fw-bold">
                  Location
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link text-dark mx-3 fw-bold">
                  Contact us
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="btn mx-3 fw-bold"
                  style={{ backgroundColor: "#708090", color: "black" }}
                >
                  Gallery
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
