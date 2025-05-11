import React, { useState } from 'react';
import { FaBriefcase, FaBars } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import '../styles/Navbar.css';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

function Navbar() {
  const [statusTampil, setStatusTampil] = useState('');

  function tampilMenu() {
    setStatusTampil((prevStatus) => (prevStatus === '' ? 'tampil' : ''));
  }

  return (
    <nav role="navigation" aria-label="Main Navigation">
      <div className="wrapper">
        {/* Logo dengan ikon kecil di sebelah kiri */}
        <div className="logo">
          <Link to="/" aria-label="Beranda">
            <FaBriefcase style={{ fontSize: '1.2rem', marginRight: '8px', verticalAlign: 'middle' }} />
            AGITRAHADIAN
          </Link>
        </div>

        {/* Tombol Hamburger untuk menu mobile */}
        <button
          className="hamburger"
          onClick={tampilMenu}
          aria-label={statusTampil === '' ? 'Buka Menu' : 'Tutup Menu'}
        >
          {statusTampil === '' ? <FaBars /> : <IoCloseSharp />}
        </button>

        {/* Menu utama */}
        <div className={`menu ${statusTampil}`} onClick={tampilMenu}>
          <ul>
            <li>
              <HashLink to="/#portfolio" aria-label="Portfolio">Portfolio</HashLink>
            </li>
            <li>
              <HashLink to="/#about" aria-label="About">About</HashLink>
            </li>
            <li>
              <Link to="/experience" aria-label="Experience">Experience</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;