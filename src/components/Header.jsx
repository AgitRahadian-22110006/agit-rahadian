import { Helmet } from 'react-helmet';
import profilepicture from '../assets/profile-picture.webp';
import background from '../assets/background.webp';
import {
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaEnvelope,
  FaPhone
} from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header" style={{ backgroundImage: `url(${background})` }}>
      {/* Metadata untuk SEO */}
      <Helmet>
        <title>Agit Rahadian - Full-Stack Web Developer</title>
        <meta name="description" content="Hai, saya Agit Rahadian, seorang Full-Stack Web Developer yang fokus menciptakan solusi digital praktis dan user-friendly." />
        <meta name="keywords" content="Agit Rahadian, Portfolio, STMIK MARDIRA INDONESIA, STMIK, MARDIRA, STMIK MARDIRA Full-Stack Developer, Web Developer, Programmer, Digital Solutions, Clean Code, Responsive Design" />
        <meta name="author" content="Agit Rahadian" />
        <meta property="og:title" content="Agit Rahadian - Full-Stack Web Developer" />
        <meta property="og:description" content="Profil Agit Rahadian, seorang Full-Stack Web Developer yang fokus menciptakan solusi digital praktis dan user-friendly." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://agitrahadian.my.id" />
        <meta property="og:image" content="https://agitrahadian.my.id/assets/profile-picture.webp" />
      </Helmet>

      <div className="header-jumbotron">
        <picture>
          <source srcSet={profilepicture} type="image/webp" />
          <img
            src={profilepicture}
            alt="Agit Rahadian"
            className="profile-img"
            width="180"
            height="180"
          />
        </picture>

        <h1>Agit Rahadian</h1>
        <p className="role">Programmer - Web Developer - Creator</p>

        <p className="bio">
          Hai, saya <strong>Agit Rahadian</strong>, Full-Stack Web Developer<br />
          yang fokus menciptakan solusi digital praktis dan user-friendly.<br />
          Dengan pengalaman membangun situs profil sekolah hingga aplikasi internal,<br />
          saya mengutamakan clean code, performa optimal, dan desain responsif<br />
          yang meningkatkan engagement pengguna.<br />
          Ayo wujudkan ide digitalmu bersama saya!
        </p>

        <div className="contact-buttons">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=agitrahadian140702@gmail.com&su=Permintaan Kerja Sama atau Jasa Pembuatan Website&body=Halo Agit,%0D%0A%0D%0ASaya menemukan portofolio Anda dan tertarik untuk berdiskusi lebih lanjut mengenai peluang kerja sama atau kebutuhan pengembangan website.%0D%0ABerikut adalah rincian singkat kebutuhan saya:%0D%0A-%20Jenis%20proyek:%20%5C%28contoh:%20Website%20Profil%20Sekolah,%20Aplikasi%20Internal,%20dsb%5C%29%0D%0A-%20Waktu%20pengerjaan:%0D%0A-%20Anggaran%20perkiraan:%0D%0A%0D%0AMohon hubungi saya kembali untuk diskusi lebih lanjut.%0D%0ATerima kasih."
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn email-btn"
          >
            <FaEnvelope /> Kirim Email
          </a>
          <a
            href="https://wa.me/6287758263820?text=Halo%20Agit%2C%20saya%20baru%20saja%20melihat%20portofolio%20Anda%20dan%20tertarik%20untuk%20berdiskusi%20lebih%20lanjut%20tentang%20kerja%20sama%20atau%20jasa%20pengembangan%20web.%20Apakah%20bisa%20kita%20jadwalkan%20waktu%20untuk%20berbicara%20lebih%20lanjut%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn wa-btn"
          >
            <FaPhone /> WhatsApp Saya
          </a>
        </div>

        <div className="contact-info">
          <div>Garut, Jawa Barat, Indonesia</div>
          <div>Lahir: 14 Juli 2002</div>
        </div>

        <div className="education-info">
          <h2>Pendidikan</h2>
          <ul>
            <li>SD Sindangsari 2</li>
            <li>SMP Negeri 1 Leuwigoong</li>
            <li>SMA Negeri 10 Garut (Jurusan IPA)</li>
            <li>S1 Teknik Informatika - Prodi Sistem Informasi, STMIK Mardira Indonesia</li>
          </ul>
        </div>

        <div className="header-cta">
          <a href="/AgitRahadian_CV.pdf" className="btn">Download CV</a>
        </div>

        <div className="socialMedia">
          <a
            href="https://www.instagram.com/agitrhdn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@agitrahadian"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
          >
            <FaTiktok />
          </a>
          <a
            href="https://github.com/agitrahadian-22110006"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <IoLogoGithub />
          </a>
          <a
            href="https://www.facebook.com/share/16HuZskNh5/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;