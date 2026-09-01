import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { site } from '../../data/site';
import Button from '../Button/Button';
import './Header.scss';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="container site-header__bar">
        <NavLink to="/" className="site-header__brand" onClick={() => setOpen(false)}>
          <span className="site-header__mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" width="26" height="26">
              <path d="M6 20 L6 13 L16 6 L26 13 L26 20" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" />
              <path d="M12 20 V14 H20 V20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="site-header__wordmark">{site.name}</span>
        </NavLink>

        <nav className="site-header__nav" aria-label="Primary">
          <ul>
            {site.nav.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} end={item.path === '/'} className={({ isActive }) => (isActive ? 'is-active' : undefined)}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions">
          <a href={site.phoneHref} className="site-header__phone">
            <Phone size={16} aria-hidden="true" />
            <span>{site.phoneDisplay}</span>
          </a>
          <Button to="/contact" size="sm">Request a quote</Button>
        </div>

        <button
          type="button"
          className="site-header__toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div id="mobile-nav" ref={panelRef} className={`mobile-nav ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <nav aria-label="Mobile">
          <ul>
            {site.nav.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} end={item.path === '/'} onClick={() => setOpen(false)}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mobile-nav__actions">
          <Button to="/contact" onClick={() => setOpen(false)}>Request a quote</Button>
          <a href={site.phoneHref} className="mobile-nav__phone">
            <Phone size={18} aria-hidden="true" />
            <span>{site.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
