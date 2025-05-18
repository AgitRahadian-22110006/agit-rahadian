// src/components/Header.jsx
import React from 'react';
import profilepicture from '../assets/profile-picture.png';
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
    <header className="header">
      <div className="header-jumbotron">
        {/* Profile Card */}
        <div className="card profile-card">
          <img
            src={profilepicture}
            alt="Agit Rahadian - Full-Stack Web Developer"
            className="profile-img"
            width="180"
            height="180"
            fetchPriority="high"
          />
          <h1>Agit Rahadian</h1>
          <p className="role">Programmer - Web Developer - Creator</p>
        </div>

        {/* Bio Card */}
        <div className="card bio-card">
          <p className="bio">
            Hai, saya <strong>Agit Rahadian</strong>, Full-Stack Web Developer<br />
            yang fokus menciptakan solusi digital praktis dan user-friendly.<br />
            Dengan pengalaman membangun situs profil sekolah hingga aplikasi internal,<br />
            saya mengutamakan clean code, performa optimal, dan desain responsif<br />
            yang meningkatkan engagement pengguna.<br />
            Ayo wujudkan ide digitalmu bersama saya!
          </p>
        </div>

        {/* Contact Card */}
        <div className="card contact-card">
          <div className="contact-buttons">
            <a
              href="mailto:agitrahadian140702@gmail.com?subject=Permintaan%20Kerja%20Sama"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn email-btn"
              aria-label="Kirim Email"
            >
              <FaEnvelope /> Email
            </a>
            <a
              href="https://wa.me/6287758263820"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn wa-btn"
              aria-label="WhatsApp"
            >
              <FaPhone /> WhatsApp
            </a>
          </div>
          <div className="contact-info">
            <div>Garut, Jawa Barat, Indonesia</div>
            <div>Lahir: 14 Juli 2002</div>
          </div>
        </div>

        {/* Education Card */}
        <div className="card education-card">
          <h2>Pendidikan</h2>
          <ul>
            <li>SD Sindangsari 2</li>
            <li>SMP Negeri 1 Leuwigoong</li>
            <li>SMA Negeri 10 Garut (IPA)</li>
            <li>S1 TI – Prodi Sistem Informasi, STMIK Mardira Indonesia</li>
          </ul>
        </div>

        {/* CTA & Social Media Card */}
        <div className="card footer-card">
          <a href="/AgitRahadian_CV.pdf" className="btn download-btn">
            Download CV
          </a>
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
      </div>
    </header>
  );
}

export default Header;
