import React from 'react';
import './footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer-text">Copyright {currentYear} Argent Bank</p>
    </footer>
  );
};

export default Footer;