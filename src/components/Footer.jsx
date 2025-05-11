import '../styles/Footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <p className="footer-text">
          Terima kasih telah mengunjungi portofolio saya. Sampai jumpa di proyek selanjutnya!
        </p>
        <nav className="footer-nav">
          <a href="/" aria-label="Beranda">Beranda</a> | 
          <a href="/about" aria-label="Tentang Saya">Tentang Saya</a> | 
          <a href="/portfolio" aria-label="Portofolio">Portofolio</a> | 
          <a href="/contact" aria-label="Kontak">Kontak</a>
        </nav>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Agit Rahadian. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
