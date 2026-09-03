import { useEffect, useRef, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { site } from '../../data/site'
import Button from '../Button/Button.jsx'
import './Header.scss'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const toggleRef = useRef(null)
  const menuRef = useRef(null)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 12)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = ''
      return undefined
    }

    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    const firstLink = menuRef.current?.querySelector('a, button')

    window.requestAnimationFrame(() => {
      firstLink?.focus()
    })

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  function closeMenu() {
    setOpen(false)
  }

  function toggleMenu() {
    setOpen((current) => !current)
  }

  return (
    <header
      className={`header ${
        scrolled ? 'header--scrolled' : ''
      } ${open ? 'header--menu-open' : ''}`}
    >
      <div className="header__bar container">
        <NavLink
          to="/"
          className="header__brand"
          onClick={closeMenu}
        >
          <span className="header__brand-mark">
            L&amp;Co.
          </span>

          <span className="header__brand-name">
            {site.shortName}
          </span>
        </NavLink>

        <nav
          className="header__nav"
          aria-label="Primary navigation"
        >
          <ul>
            {site.nav.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    isActive ? 'is-active' : undefined
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <a
            className="header__phone"
            href={site.contact.phoneHref}
          >
            <Phone
              size={15}
              strokeWidth={1.75}
              aria-hidden="true"
            />

            <span>{site.contact.phoneDisplay}</span>
          </a>

          <Button
            to="/contact"
            variant="primary"
            className="header__cta"
          >
            {site.cta.primary}
          </Button>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="header__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={toggleMenu}
        >
          {open ? (
            <X size={22} strokeWidth={1.8} />
          ) : (
            <Menu size={22} strokeWidth={1.8} />
          )}
        </button>
      </div>

      <div
        className={`header__overlay ${
          open ? 'is-open' : ''
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <div
        id="mobile-menu"
        ref={menuRef}
        className={`header__mobile ${
          open ? 'is-open' : ''
        }`}
        aria-hidden={!open}
      >
        <div className="header__mobile-inner">
          <nav
            className="header__mobile-nav"
            aria-label="Mobile navigation"
          >
            <ul>
              {site.nav.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    end={item.path === '/'}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      isActive ? 'is-active' : undefined
                    }
                  >
                    <span>{item.label}</span>
                    <span className="header__mobile-arrow">
                      →
                    </span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__mobile-footer">
            <a
              className="header__phone header__phone--mobile"
              href={site.contact.phoneHref}
              onClick={closeMenu}
            >
              <Phone
                size={16}
                strokeWidth={1.75}
                aria-hidden="true"
              />

              <span>{site.contact.phoneDisplay}</span>
            </a>

            <Button
              to="/contact"
              variant="primary"
              onClick={closeMenu}
            >
              {site.cta.primary}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}