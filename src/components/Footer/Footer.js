// src/components/Footer.js
import React from "react";
import "./Footer.css"; // Create and style this CSS file as needed

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Your Website. All rights reserved.</p>
        <ul className="footer-links">
          <li>About Us</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
