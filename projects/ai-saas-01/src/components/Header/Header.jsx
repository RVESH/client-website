import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Icon from '../Icon/Icon.jsx'
import Button from '../Button/Button.jsx'
import { site, nav, ctaLinks } from '../../data/site.js'
import './Header.scss'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const toggleRef = useRef(null)

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open)
    return () => document.body.classList.remove('no-scroll')
  }, [open])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && open) {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setOpen(false)

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="container header__inner">
        <Link to="/" className="header__brand" aria-label={`${site.name} — home`}>
          <span className="header__brand-mark">
            <Icon name="sparkles" size={17} strokeWidth={2} />
          </span>
          <span className="header__brand-name">{site.name}</span>
        </Link>

        <nav className="header__nav" aria-label="Primary navigation">
          {nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `header__link${isActive ? ' header__link--active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header__actions">
          <Button
            to={ctaLinks.secondary.path}
            variant="ghost"
            size="sm"
            className="header__cta-secondary"
          >
            {ctaLinks.secondary.label}
          </Button>
          <Button to={ctaLinks.primary.path} variant="primary" size="sm">
            {ctaLinks.primary.label}
          </Button>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className={`header__toggle${open ? ' header__toggle--open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <button
          type="button"
          className="header__scrim"
          aria-label="Close navigation menu"
          onClick={closeMenu}
        />
      )}

      <div
        id="mobile-menu"
        className={`header__mobile${open ? ' header__mobile--open' : ''}`}
        aria-hidden={!open}
      >
        <nav className="header__mobile-nav" aria-label="Mobile navigation">
          {nav.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `header__mobile-link${isActive ? ' header__mobile-link--active' : ''}`
              }
              tabIndex={open ? 0 : -1}
              onClick={closeMenu}
            >
              <span>{item.label}</span>
              <Icon name="arrow-up-right" size={18} strokeWidth={1.8} />
            </NavLink>
          ))}
        </nav>

        <div className="header__mobile-actions">
          <Button
            to={ctaLinks.secondary.path}
            variant="secondary"
            size="md"
            tabIndex={open ? 0 : -1}
            onClick={closeMenu}
          >
            {ctaLinks.secondary.label}
          </Button>
          <Button
            to={ctaLinks.primary.path}
            variant="primary"
            size="md"
            tabIndex={open ? 0 : -1}
            onClick={closeMenu}
          >
            {ctaLinks.primary.label}
          </Button>
        </div>
      </div>
    </header>
  )
}
