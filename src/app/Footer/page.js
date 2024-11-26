import React from "react";
import "../../../style/Footer.css";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info Section */}
        <div className="footer-about">
          <h2 className="footer-logo">CodeweaveTech</h2>
          <p className="footer-description">
            We innovate and build solutions to drive your business forward.
            CodeweaveTech is your go-to partner for cutting-edge technology and
            development.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link href="/About">About Us</Link>
            </li>
            <li>
              <Link href="/Services">Services</Link>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/ContactUs">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>
            Email:
             <a href="mailto:bhabanishankarmohanta143@gmail.com">
             bhabanishankarmohanta143@gmail.com
            </a>
          </p>
          <p>Phone: +91 9692615246</p>
        </div>

        {/* Social Media Section */}
        <div className="social-icons">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 CodeweaveTech. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
