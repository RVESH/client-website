import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { site } from '../../data/site.js'
import Button from '../Button/Button.jsx'
import styles from './Header.module.scss'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = ''
      return undefined
    }

    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const phoneHref = site.phone
    ? `tel:${site.phone.replace(/[^\d+]/g, '')}`
    : '#'

  return (
    <>
      <header
        className={`${styles.header} ${
          isScrolled ? styles.scrolled : ''
        }`}
      >
        <div className={`container ${styles.bar}`}>
          <NavLink
            to="/"
            className={styles.logo}
            onClick={closeMenu}
            aria-label={`${site.shortName} home`}
          >
            <span className={styles.logoMark} aria-hidden="true">
              <svg viewBox="0 0 32 32" width="32" height="32">
                <rect
                  width="32"
                  height="32"
                  rx="8"
                  fill="#1C2521"
                />

                <path
                  d="M7 19C11 15 13 15 16 17C20 19.5 22 19.5 25 16"
                  stroke="#7FC4B4"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>

            <span className={styles.logoText}>
              {site.shortName}
            </span>
          </NavLink>

          <nav
            className={styles.desktopNav}
            aria-label="Primary navigation"
          >
            <ul>
              {site.nav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      isActive
                        ? styles.navActive
                        : styles.navLink
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.desktopCta}>
            <Button to="/contact" variant="accent">
              Get a quote
            </Button>
          </div>

          <button
            type="button"
            className={styles.menuToggle}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span
              className={
                isMenuOpen
                  ? styles.iconOpen
                  : styles.iconClosed
              }
              aria-hidden="true"
            >
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>

        <div
          className={`${styles.mobileMenu} ${
            isMenuOpen ? styles.mobileMenuOpen : ''
          }`}
          id="mobile-navigation"
        >
          <div className={styles.mobileMenuInner}>
            <nav
              aria-label="Mobile navigation"
              className={styles.mobileNav}
            >
              <ul>
                {site.nav.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        isActive
                          ? styles.mobileNavActive
                          : styles.mobileNavLink
                      }
                    >
                      <span>{item.label}</span>
                      <span
                        className={styles.mobileNavArrow}
                        aria-hidden="true"
                      >
                        ↗
                      </span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div className={styles.mobileBottom}>
              <Button
                to="/contact"
                variant="accent"
                onClick={closeMenu}
              >
                Get a quote
              </Button>

              {site.phone && (
                <a
                  href={phoneHref}
                  className={styles.mobilePhone}
                  onClick={closeMenu}
                >
                  Call {site.phoneDisplay || site.phone}
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <button
          type="button"
          className={styles.mobileBackdrop}
          aria-label="Close menu"
          onClick={closeMenu}
        />
      )}
    </>
  )
}

export default Header