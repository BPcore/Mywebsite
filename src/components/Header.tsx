import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          BPcore Silicon
        </Link>

        {/* Desktop nav (visible on wider screens) */}
        <nav className="desktop">
          <ul className="nav">
            <li><NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink></li>
            <li><NavLink to="/technology" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Technology</NavLink></li>
            <li><NavLink to="/licensing" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Licensing</NavLink></li>
            <li><NavLink to="/deliverables" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>What Buyers Get</NavLink></li>
            <li><NavLink to="/performance" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Performance</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link btn inverted active-cta' : 'nav-link btn inverted'} style={{ padding: '8px 14px' }}>Contact</NavLink></li>
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`hamburger ${open ? 'active' : ''}`}
          aria-controls="mobile-nav"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(v => !v)}
        >
          <span className="bar top" />
          <span className="bar middle" />
          <span className="bar bottom" />
        </button>

        {/* Mobile nav overlay (visible when open) */}
        {open && (
          <nav id="mobile-nav" className="mobile-nav" aria-hidden={!open}>
            <ul className="nav mobile">
              <li><NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink></li>
              <li><NavLink to="/technology" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Technology</NavLink></li>
              <li><NavLink to="/licensing" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Licensing</NavLink></li>
              <li><NavLink to="/deliverables" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>What Buyers Get</NavLink></li>
              <li><NavLink to="/performance" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Performance</NavLink></li>
              <li><NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink></li>
              <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link btn inverted active-cta' : 'nav-link btn inverted'} style={{ padding: '8px 14px' }}>Contact</NavLink></li>
            </ul>
          </nav>
        )}

      </div>
    </header>
  );
};

export default Header;