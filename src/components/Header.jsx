import profilepicture from '../assets/profile-picture.avif';
import {
  FaInstagram,
  FaTiktok,
  FaFacebook,
  FaEnvelope,
  FaPhone
} from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';
import '../styles/Header.css';
import SEO from './SEO';

function Header() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Agit Rahadian",
    "jobTitle": "Full-Stack Web Developer",
    "description": "Seorang Full-Stack Web Developer yang fokus menciptakan solusi digital praktis dan user-friendly untuk sektor pendidikan di Indonesia.",
    "url": "https://agitrahadian.my.id/",
    "image": "https://agitrahadian.my.id/assets/profile-picture.avif",
    "birthDate": "2002-07-14",
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "STMIK Mardira Indonesia",
        "department": "Teknik Informatika – Sistem Informasi"
      },
      {
        "@type": "EducationalOrganization",
        "name": "SMA Negeri 10 Garut",
        "department": "IPA"
      }
    ],
    "knowsAbout": ["Web Development", "React", "Laravel", "PHP", "MySQL", "JavaScript", "CSS3", "HTML5"],
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance Web Developer"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Garut",
      "addressRegion": "Jawa Barat",
      "addressCountry": "ID"
    },
    "sameAs": [
      "https://github.com/agitrahadian-22110006",
      "https://www.instagram.com/agitrhdn",
      "https://www.tiktok.com/@agitrahadian",
      "https://www.facebook.com/share/16HuZskNh5/"
    ]
  };

  return (
    <header className="header">
      <SEO
        title="Full-Stack Web Developer | Portfolio Resmi"
        description="Agit Rahadian adalah Full-Stack Web Developer dari Garut yang mengkhususkan diri dalam pengembangan website sekolah, aplikasi pendidikan, dan solusi digital untuk meningkatkan kualitas pendidikan di Indonesia."
        keywords="Agit Rahadian, Full-Stack Developer, Web Developer, Programmer, Website Sekolah, Aplikasi Pendidikan, Freelance Developer"
        ogImage="https://agitrahadian.my.id/assets/profile-picture.avif"
        ogType="website"
        canonical="/"
        structuredData={personSchema}
      >
        <meta name="robots" content="index, follow" />
        <meta name="twitter:creator" content="@agitrhdn" />
        <meta name="google-site-verification" content="google68989f7575251084.html" />
        <link rel="preload" as="image" href={profilepicture} />
      </SEO>

      <div className="header-jumbotron">
        <img
          src={profilepicture}
          alt="Agit Rahadian – Full-Stack Web Developer"
          className="profile-img"
          width={180}
          height={180}
          loading="eager"
          fetchpriority="high"
        />

        <h1>Agit Rahadian</h1>
        <p className="role">Programmer – Web Developer – Creator</p>

        <p className="bio">
          Hai, saya <strong>Agit Rahadian</strong>, Full-Stack Web Developer<br />
          yang fokus menciptakan solusi digital praktis dan user-friendly.<br />
          Pengalaman saya meliputi pengembangan situs profil sekolah hingga aplikasi internal<br />
          dengan fokus pada clean code, performa optimal, dan desain responsif.<br />
          Mari wujudkan ide digital Anda bersama saya!
        </p>

        <div className="contact-buttons">
          <a
            href="mailto:agitrahadian140702@gmail.com?subject=Permintaan Kerja Sama atau Jasa Pembuatan Website"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn email-btn"
            aria-label="Kirim Email ke Agit Rahadian"
          >
            <FaEnvelope /> Kirim Email
          </a>
          <a
            href="https://wa.me/6287758263820?text=Halo%20Agit%2C%20saya%20baru%20saja%20melihat%20portofolio%20Anda%20dan%20tertarik%20untuk%20berdiskusi%20lebih%20lanjut%20tentang%20kerja%20sama%20atau%20jasa%20pengembangan%20web.%20Apakah%20bisa%20kita%20jadwalkan%20waktu%20untuk%20berbicara%20lebih%20lanjut%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn wa-btn"
            aria-label="WhatsApp Agit Rahadian"
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
            <li>SMA Negeri 10 Garut (IPA)</li>
            <li>STMIK Mardira Indonesia (S1 – Sistem Informasi)</li>
          </ul>
        </div>

        <div className="header-cta">
          <a href="/AgitRahadian_CV.pdf" className="btn" download>
            Download CV
          </a>
        </div>

        <div className="socialMedia">
          <a
            href="https://www.instagram.com/agitrhdn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Agit Rahadian"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@agitrahadian"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok Agit Rahadian"
          >
            <FaTiktok />
          </a>
          <a
            href="https://github.com/agitrahadian-22110006"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Agit Rahadian"
          >
            <IoLogoGithub />
          </a>
          <a
            href="https://www.facebook.com/share/16HuZskNh5/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Agit Rahadian"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
