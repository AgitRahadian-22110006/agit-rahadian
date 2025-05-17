import React, { useState } from 'react';
import { FaBriefcase, FaBars } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../styles/Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

  // Helper to apply active class for hash links
  const isHashActive = (hash) => {
    return window.location.hash === hash ? 'active' : '';
  };

  return (
    <nav role="navigation" aria-label="Main Navigation" className="navbar">
      <div className="wrapper">
        {/* Logo */}
        <div className="logo" style={{ color: '#ffffff' }}>
  <FaBriefcase className="logo-icon" />
  AGITRAHADIAN
</div>
        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Tutup Menu' : 'Buka Menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <IoCloseSharp /> : <FaBars />}
        </button>

        {/* Menu */}
        <div className={`menu ${menuOpen ? 'tampil' : ''}`}>
          <ul>
            <li>
              <NavLink
                to="/"
                exact
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <HashLink
                to="/#portfolio"
                smooth
                className={isHashActive('#portfolio')}
                onClick={closeMenu}
              >
                Portfolio
              </HashLink>
            </li>
            <li>
              <HashLink
                to="/#about"
                smooth
                className={isHashActive('#about')}
                onClick={closeMenu}
              >
                About
              </HashLink>
            </li>
            <li>
              <NavLink
                to="/experience"
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={closeMenu}
              >
                Experience
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
