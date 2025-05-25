import React, { useState, useEffect } from 'react';
import { FaBriefcase, FaBars } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import { NavLink, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { supabase } from '../services/supabaseClient'; // pastikan path benar
import '../styles/Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Cek status login user saat komponen mount
  useEffect(() => {
    const session = supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
    });

    // Listening jika user login/logout
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  // Logout function
  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    closeMenu();
    navigate('/'); // Redirect ke homepage setelah logout
  };

  return (
    <nav role="navigation" aria-label="Main Navigation">
      <div className="wrapper">
        <NavLink to="/" className="logo" onClick={closeMenu} aria-label="Homepage">
          <FaBriefcase className="logo-icon" aria-hidden="true" />
          AgitRahadian
        </NavLink>

        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Tutup Menu' : 'Buka Menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          {menuOpen ? <IoCloseSharp /> : <FaBars />}
        </button>

        <div
          id="primary-navigation"
          className={`menu ${menuOpen ? 'active' : ''}`}
          role="menu"
          onClick={closeMenu}
        >
          <ul>
            <li role="none">
              <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')} role="menuitem" aria-current={({ isActive }) => (isActive ? 'page' : undefined)}>
                Home
              </NavLink>
            </li>
            <li role="none">
              <HashLink to="/#portfolio" smooth className={({ isActive }) => (isActive ? 'active' : '')} role="menuitem">
                Portfolio
              </HashLink>
            </li>
            <li role="none">
              <HashLink to="/#about" smooth className={({ isActive }) => (isActive ? 'active' : '')} role="menuitem">
                About
              </HashLink>
            </li>
            <li role="none">
              <NavLink to="/experience" className={({ isActive }) => (isActive ? 'active' : '')} role="menuitem" aria-current={({ isActive }) => (isActive ? 'page' : undefined)}>
                Experience
              </NavLink>
            </li>
            <li role="none">
              <NavLink to="/tugas" className={({ isActive }) => (isActive ? 'active' : '')} role="menuitem" aria-current={({ isActive }) => (isActive ? 'page' : undefined)}>
                AI Assignment
              </NavLink>
            </li>
            <li role="none">
              <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : '')} role="menuitem" aria-current={({ isActive }) => (isActive ? 'page' : undefined)}>
                Blog
              </NavLink>
            </li>

            {/* Bagian Login / Dashboard / Logout */}
            {!user ? (
              <li role="none">
                <NavLink to="/admin" className={({ isActive }) => (isActive ? 'active' : '')} role="menuitem" aria-current={({ isActive }) => (isActive ? 'page' : undefined)}>
                  Login Admin
                </NavLink>
              </li>
            ) : (
              <>
                <li role="none">
                  <NavLink to="/admin/dashboard" className={({ isActive }) => (isActive ? 'active' : '')} role="menuitem" aria-current={({ isActive }) => (isActive ? 'page' : undefined)}>
                    Admin Dashboard
                  </NavLink>
                </li>
                <li role="none">
                  <button onClick={handleLogout} className="logout-button" role="menuitem" aria-label="Logout dari admin">
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
