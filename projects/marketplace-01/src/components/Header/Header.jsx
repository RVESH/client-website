import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { NavLink, useLocation } from 'react-router-dom'
import Button from '../Button/Button.jsx'
import { site, nav, ctaLinks } from '../../data/site.js'
import './Header.scss'

function MenuDrawer({ open, onClose }) {
  const panelRef = useRef(null)
  const location = useLocation()

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open)
    return () => document.body.classList.remove('no-scroll')
  }, [open])

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape' && open) onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  useEffect(() => {
    if (open) onClose()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  useEffect(() => {
    if (open) panelRef.current?.focus()
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
          <span className="drawer__index">N°</span>
          <button type="button" className="drawer__close" aria-label="Close menu" onClick={onClose} tabIndex={open ? 0 : -1}>
            <span className="drawer__close-line" />
            <span className="drawer__close-line" />
          </button>
        </div>

        <nav className="drawer__nav" aria-label="Mobile">
          {nav.map((item, i) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => `drawer__link ${isActive ? 'drawer__link--active' : ''}`}
              tabIndex={open ? 0 : -1}
            >
              <span className="drawer__link-index">{String(i + 1).padStart(2, '0')}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="drawer__footer">
          <Button to={ctaLinks.primary.path} variant="inverse" size="lg" className="drawer__cta" tabIndex={open ? 0 : -1}>
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
      setScrolled(window.scrollY > 4)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <NavLink to="/" className="header__brand" aria-label={`${site.name} — home`}>
          {site.name}
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
        </button>
      </div>

      <MenuDrawer open={open} onClose={() => setOpen(false)} />
    </header>
  )
}
