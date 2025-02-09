import React from 'react';
import './Footer.css'; // Make sure to include the Footer.css file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">&copy; 2025 CryptoTrack. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/sanjoy-bit" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/SanjoyBit" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <p className="credits">Sanjoy Bit</p>
      </div>
    </footer>
  );
}

export default Footer;
