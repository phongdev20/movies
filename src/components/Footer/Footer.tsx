import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Movie</h3>
          <p>Your ultimate destination for the best movie experience. Watch the latest movies and TV shows in high quality.</p>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-link" aria-label="Youtube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Movies</a></li>
            <li><a href="#">TV Shows</a></li>
            <li><a href="#">New Releases</a></li>
            <li><a href="#">My List</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Categories</h4>
          <ul>
            <li><a href="#">Action</a></li>
            <li><a href="#">Comedy</a></li>
            <li><a href="#">Drama</a></li>
            <li><a href="#">Horror</a></li>
            <li><a href="#">Sci-Fi</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul className="contact-info">
            <li><i className="fas fa-envelope"></i> support@moviefix.com</li>
            <li><i className="fas fa-phone"></i> +1 234 567 890</li>
            <li><i className="fas fa-map-marker-alt"></i> 123 Movie Street, Hollywood, CA</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Movie. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
