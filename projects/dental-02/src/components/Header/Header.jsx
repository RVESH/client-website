import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { NavLink, useLocation } from 'react-router-dom'
import Button from '../Button/Button.jsx'
import { site, nav, ctaLinks, contact, buildTelLink } from '../../data/site.js'
import './Header.scss'

function MenuDrawer({ open, onClose }) {
  const panelRef = useRef(null)
  const location = useLocation()

  // Lock body scroll while the drawer is open
  useEffect(() => {
    document.body.classList.toggle('no-scroll', open)
    return () => document.body.classList.remove('no-scroll')
  }, [open])

  // Close on Escape
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape' && open) onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  // Close whenever the route changes (nav click, back button, etc.)
  useEffect(() => {
    if (open) onClose()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  // Move focus into the panel when it opens (basic a11y for the dialog)
  useEffect(() => {
    if (open) {
      panelRef.current?.focus()
    }
  }, [open])

  return createPortal(
    <>
      <button
        type="button"
        className={`drawer-backdrop ${open ? 'drawer-backdrop--visible' : ''}`}
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        onClick={onClose}
      />
      <div
        id="mobile-drawer"
        ref={panelRef}
        className={`drawer ${open ? 'drawer--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!open}
        tabIndex={-1}
      >
        <div className="drawer__head">
          <span className="drawer__brand">{site.name}</span>
          <button type="button" className="drawer__close" aria-label="Close menu" onClick={onClose} tabIndex={open ? 0 : -1}>
            <span className="drawer__close-line" />
            <span className="drawer__close-line" />
          </button>
        </div>

        <nav className="drawer__nav" aria-label="Mobile">
          {nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => `drawer__link ${isActive ? 'drawer__link--active' : ''}`}
              tabIndex={open ? 0 : -1}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="drawer__footer">
          <a href={buildTelLink()} className="drawer__phone" tabIndex={open ? 0 : -1}>
            Call {contact.phoneDisplay}
          </a>
          <Button to={ctaLinks.primary.path} variant="primary" size="md" className="drawer__cta" tabIndex={open ? 0 : -1}>
            {ctaLinks.primary.label}
          </Button>
        </div>
      </div>
    </>,
    document.body,
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 8)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <NavLink to="/" className="header__brand" aria-label={`${site.name} — home`}>
          <span className="header__brand-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
              <path
                d="M12 3c-2.2 0-3.6 1-4.6 1-1.1 0-2.1-.7-3.2-.7C2.6 3.3 1.5 5 1.7 7.3c.2 2.6 1.6 8.6 3.2 11.4.8 1.4 1.7 2.7 3 2.7 1.2 0 1.6-.8 3.1-.8s1.9.8 3.1.8c1.3 0 2.3-1.4 3.1-2.8 1-1.8 1.5-3.5 1.5-3.6-.1 0-2.9-1.1-2.9-4.4 0-2.7 2.2-4 2.3-4.1-1.3-1.9-3.2-2.1-3.9-2.1-1.5-.2-2.9.8-3.2.8Z"
                fill="currentColor"
              />
            </svg>
          </span>
          {site.shortName}
        </NavLink>

        <nav className="header__nav" aria-label="Primary">
          {nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => `header__link ${isActive ? 'header__link--active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header__actions">
          <a href={buildTelLink()} className="header__phone">
            {contact.phoneDisplay}
          </a>
          <Button to={ctaLinks.primary.path} variant="primary" size="sm">
            {ctaLinks.primary.label}
          </Button>
        </div>

        <button
          type="button"
          className={`header__toggle ${open ? 'header__toggle--open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-drawer"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="header__toggle-bar" />
          <span className="header__toggle-bar" />
          <span className="header__toggle-bar" />
        </button>
      </div>

      <MenuDrawer open={open} onClose={() => setOpen(false)} />
    </header>
  )
}
