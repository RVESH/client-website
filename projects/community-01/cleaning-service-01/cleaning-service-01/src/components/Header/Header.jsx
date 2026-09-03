import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { site } from '../../data/site.js'
import Button from '../Button/Button.jsx'
import styles from './Header.module.scss'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.bar}`}>
        <NavLink to="/" className={styles.logo} onClick={closeMenu}>
          <span className={styles.logoMark} aria-hidden="true">
            <svg viewBox="0 0 32 32" width="30" height="30">
              <rect width="32" height="32" rx="9" fill="#1C2521" />
              <path
                d="M7 19C11 15 13 15 16 17C20 19.5 22 19.5 25 16"
                stroke="#7FC4B4"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </span>
          <span className={styles.logoText}>{site.shortName}</span>
        </NavLink>

        <nav className={styles.desktopNav} aria-label="Primary">
          <ul>
            {site.nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    isActive ? styles.navActive : styles.navLink
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
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          <span className={isMenuOpen ? styles.iconOpen : styles.iconClosed}>
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.mobileMenuOpen : ''}`}
      >
        <nav aria-label="Mobile Primary">
          <ul>
            {site.nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    isActive ? styles.mobileNavActive : styles.mobileNavLink
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.mobileCtas}>
          <Button to="/contact" variant="accent" onClick={closeMenu}>
            Get a quote
          </Button>
          <Button href={`tel:${site.phone}`} variant="ghost">
            Call {site.phoneDisplay}
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
