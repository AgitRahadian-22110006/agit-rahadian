// src/components/Footer.jsx
import '../styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer role="contentinfo" className="footer">
      <div className="footer-container">
        <p className="footer-text">
          Terima kasih telah mengunjungi portofolio saya.
        </p>
        <nav className="footer-nav" aria-label="Footer Navigation">
          <ul className="footer-nav-list">
            <li><Link to="/" aria-label="Beranda">Beranda</Link></li>
            <li><Link to="/experience" aria-label="Experience">Experience</Link></li>
            <li><Link to="/tugas" aria-label="Tugas">Tugas</Link></li>
          </ul>
        </nav>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Agit Rahadian. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
