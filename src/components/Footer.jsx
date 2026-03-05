import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h4 className="footer-title">About</h4>
          <ul className="footer-list">
            <li><a href="#about">About LINAKart</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#press">Press</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#work">Work with Us</a></li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="footer-section">
          <h4 className="footer-title">Help</h4>
          <ul className="footer-list">
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#faq">FAQs</a></li>
            <li><a href="#shipping">Shipping Info</a></li>
            <li><a href="#returns">Returns & Refunds</a></li>
            <li><a href="#track">Track Order</a></li>
          </ul>
        </div>

        {/* Policy Section */}
        <div className="footer-section">
          <h4 className="footer-title">Policy</h4>
          <ul className="footer-list">
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#cookies">Cookie Policy</a></li>
            <li><a href="#security">Security</a></li>
            <li><a href="#disclaimer">Disclaimer</a></li>
          </ul>
        </div>

        {/* Social Section */}
        <div className="footer-section">
          <h4 className="footer-title">Follow Us</h4>
          <div className="social-links">
            <a href="#facebook" className="social-icon" target="_blank" rel="noopener noreferrer">
              f
            </a>
            <a href="#twitter" className="social-icon" target="_blank" rel="noopener noreferrer">
              𝕏
            </a>
            <a href="#instagram" className="social-icon" target="_blank" rel="noopener noreferrer">
              📷
            </a>
            <a href="#linkedin" className="social-icon" target="_blank" rel="noopener noreferrer">
              in
            </a>
            <a href="#youtube" className="social-icon" target="_blank" rel="noopener noreferrer">
              ▶️
            </a>
          </div>
          <div className="app-downloads">
            <h5>Download App</h5>
            <div className="download-buttons">
              <a href="#ios" className="download-btn">App Store</a>
              <a href="#android" className="download-btn">Google Play</a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="company-info">
            LINAKart © 2024-2026 | All Rights Reserved
          </p>
          <p className="contact-info">
            Email: support@linakart.com | Phone: 1-800-LINAKART
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
