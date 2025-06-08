// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { FaBriefcase, FaBars } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import { NavLink, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { supabase } from '../services/supabaseClient';
import '../styles/Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    closeMenu();
    navigate('/');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
  };

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar-wrapper">
        <NavLink to="/" className="navbar-logo" onClick={scrollToTop}>
          <FaBriefcase className="logo-icon" aria-hidden="true" />
          AgitRahadian
        </NavLink>

        <button
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
          aria-expanded={menuOpen}
          aria-controls="navbar-menu"
        >
          {menuOpen ? <IoCloseSharp /> : <FaBars />}
        </button>

        <ul
          id="navbar-menu"
          className={`navbar-menu ${menuOpen ? 'active' : ''}`}
          role="menubar"
        >
          <li role="none">
            <NavLink to="/" end role="menuitem" onClick={scrollToTop}>
              Home
            </NavLink>
          </li>
          <li role="none">
            <HashLink to="/#portfolio" smooth role="menuitem" onClick={closeMenu}>
              Portfolio
            </HashLink>
          </li>
          <li role="none">
            <HashLink to="/#about" smooth role="menuitem" onClick={closeMenu}>
              About
            </HashLink>
          </li>
          <li role="none">
            <NavLink to="/experience" role="menuitem" onClick={closeMenu}>
              Experience
            </NavLink>
          </li>
          <li role="none">
            <NavLink to="/tugas" role="menuitem" onClick={closeMenu}>
              AI Assignment
            </NavLink>
          </li>
          <li role="none">
            <NavLink to="/blog" role="menuitem" onClick={closeMenu}>
              Blog
            </NavLink>
          </li>

          {user && (
            <>
              <li role="none">
                <NavLink
                  to="/admin/dashboard"
                  role="menuitem"
                  onClick={closeMenu}
                >
                  Admin
                </NavLink>
              </li>
              <li role="none">
                <button
                  className="logout-button"
                  role="menuitem"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
