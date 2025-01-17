import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <div className="container">
        <div className="row">
          {/* Column 1: Logo and Brief Description */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold text-info">ASMAK</h5>
            <p>
              "Your Journey, Our Gear"
               From rods and reels to tackle boxes and
              baits, our products are crafted to support every step of your
              fishing journey.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="col-md-4 mb-3">
            <h6 className="text-uppercase">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-light text-decoration-none">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="text-light text-decoration-none">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-light text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media Links */}
          <div className="col-md-4 mb-3">
            <h6 className="text-uppercase">Follow Us</h6>
            <ul className="list-unstyled d-flex">
              <li className="me-3">
                <a
                  href="https://www.facebook.com"
                  className="text-light text-decoration-none"
                >
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
              </li>
              <li className="me-3">
                <a
                  href="https://www.twitter.com"
                  className="text-light text-decoration-none"
                >
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </li>
              <li className="me-3">
                <a
                  href="https://www.instagram.com"
                  className="text-light text-decoration-none"
                >
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="row">
          <div className="col text-center mt-3">
            <p className="mb-0">
              © 2024© Asmak Muscat Int'l. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
