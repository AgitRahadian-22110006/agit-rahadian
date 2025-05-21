import React, { useState } from 'react';
import { FaBriefcase, FaBars } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../styles/Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav role="navigation" aria-label="Main Navigation">
      <div className="wrapper">
        {/* Logo */}
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <FaBriefcase className="logo-icon" aria-hidden="true" />
          AgitRahadian
        </NavLink>

        {/* Hamburger Button */}
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Tutup Menu' : 'Buka Menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <IoCloseSharp /> : <FaBars />}
        </button>

        {/* Navigation Menu */}
        <div className={`menu ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <HashLink to="/#portfolio" smooth className="" onClick={closeMenu}>
                Portfolio
              </HashLink>
            </li>
            <li>
              <HashLink to="/#about" smooth className="" onClick={closeMenu}>
                About
              </HashLink>
            </li>
            <li>
              <NavLink to="/experience" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink to="/tugas" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>
                AI Assignment
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
