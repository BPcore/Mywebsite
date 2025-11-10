import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // lock body scroll when mobile menu is open and handle ESC to close
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  // keep a ref to the mobile nav to focus when opened (basic focus management)
  const mobileNavRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (open && mobileNavRef.current) {
      // focus the first link inside mobile nav for keyboard users
      const first = mobileNavRef.current.querySelector('a');
      (first as HTMLElement | null)?.focus?.();
    }
  }, [open]);

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
          <nav id="mobile-nav" ref={mobileNavRef as any} className={`mobile-nav ${open ? 'open' : ''}`} aria-hidden={!open} role="navigation" aria-label="Mobile navigation">
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