import '../styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <p className="footer-text">
          Terima kasih telah mengunjungi portofolio saya. Sampai jumpa di proyek selanjutnya!
        </p>
        <nav className="footer-nav" aria-label="Footer Navigation">
          <Link to="/" aria-label="Beranda">Beranda</Link>
          <span aria-hidden="true"> | </span>
          <Link to="/#about" aria-label="Tentang Saya">Tentang Saya</Link>
          <span aria-hidden="true"> | </span>
          <Link to="/contact" aria-label="Kontak">Kontak</Link>
        </nav>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Agit Rahadian. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;