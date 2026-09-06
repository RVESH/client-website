import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { navLinks } from '../../data/nav.js'
import { clinicInfo } from '../../data/clinicInfo.js'
import Button from '../ui/Button.jsx'
import Icon from '../ui/Icon.jsx'
import styles from './Header.module.scss'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const panelRef = useRef(null)
  const toggleRef = useRef(null)

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  // Track scroll position for header elevation
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Escape key closes the menu; lock body scroll while open
  useEffect(() => {
    if (!isOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        toggleRef.current?.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // Move focus into the panel for keyboard users
    const firstLink = panelRef.current?.querySelector('a, button')
    firstLink?.focus()

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.bar}>
          <NavLink to="/" className={styles.brand} aria-label={`${clinicInfo.name} — Home`}>
            <span className={styles.brandMark}>
              <Icon name="sparkle" size={17} />
            </span>
            <span className={styles.brandName}>
              Aurelia <span>Dental</span>
            </span>
          </NavLink>

          <nav className={styles.desktopNav} aria-label="Primary">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className={styles.actions}>
            <a className={styles.phoneLink} href={`tel:${clinicInfo.phone.replace(/[^+\d]/g, '')}`}>
              <Icon name="phone" size={17} />
              {clinicInfo.phoneDisplay}
            </a>
            <div className={styles.ctaDesktop}>
              <Button to="/contact" size="sm">
                Book a visit
              </Button>
            </div>
            <button
              ref={toggleRef}
              type="button"
              className={styles.menuToggle}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsOpen((open) => !open)}
            >
              <Icon name={isOpen ? 'close' : 'menu'} size={20} />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <>
          <div className={styles.backdrop} onClick={() => setIsOpen(false)} aria-hidden="true" />
          <div
            id="mobile-menu"
            className={styles.mobilePanel}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            ref={panelRef}
          >
            <div className={styles.mobileHead}>
              <span className={styles.brand}>
                <span className={styles.brandMark}>
                  <Icon name="sparkle" size={17} />
                </span>
                <span className={styles.brandName}>Aurelia</span>
              </span>
              <button
                type="button"
                className={styles.menuToggle}
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
              >
                <Icon name="close" size={20} />
              </button>
            </div>

            <nav className={styles.mobileNav} aria-label="Mobile primary">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`
                  }
                >
                  {link.label}
                  <Icon name="arrowRight" size={18} />
                </NavLink>
              ))}
            </nav>

            <div className={styles.mobileFooter}>
              <Button to="/contact" fullWidth>
                Book a visit
              </Button>
              <a className={styles.mobileContactRow} href={`tel:${clinicInfo.phone.replace(/[^+\d]/g, '')}`}>
                <Icon name="phone" size={16} />
                {clinicInfo.phoneDisplay}
              </a>
              <a className={styles.mobileContactRow} href={`mailto:${clinicInfo.email}`}>
                <Icon name="mail" size={16} />
                {clinicInfo.email}
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  )
}
