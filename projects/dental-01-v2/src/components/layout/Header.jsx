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

  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8)
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
    if (!isOpen) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        toggleRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const firstFocusable = panelRef.current?.querySelector(
      'a, button',
    )

    firstFocusable?.focus()

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  const phoneHref = `tel:${clinicInfo.phone.replace(/[^+\d]/g, '')}`
  const emailHref = `mailto:${clinicInfo.email}`

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header
      className={`${styles.header} ${
        isScrolled ? styles.scrolled : ''
      }`}
    >
      <div className="container">
        <div className={styles.bar}>
          <NavLink
            to="/"
            className={styles.brand}
            aria-label={`${clinicInfo.name} — Home`}
          >
            <span className={styles.brandMark}>
              <Icon name="sparkle" size={17} />
            </span>

            <span className={styles.brandName}>
              Aurelia <span>Dental</span>
            </span>
          </NavLink>

          <nav
            className={styles.desktopNav}
            aria-label="Primary"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `${styles.navLink} ${
                    isActive ? styles.navLinkActive : ''
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className={styles.actions}>
            <a
              className={styles.phoneLink}
              href={phoneHref}
            >
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
              aria-label={
                isOpen ? 'Close menu' : 'Open menu'
              }
              onClick={() => setIsOpen((open) => !open)}
            >
              <Icon
                name={isOpen ? 'close' : 'menu'}
                size={22}
              />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className={styles.mobileOverlay}>
          <button
            type="button"
            className={styles.backdrop}
            aria-label="Close menu"
            onClick={closeMenu}
          />

          <aside
            id="mobile-menu"
            className={styles.mobilePanel}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            ref={panelRef}
          >
            <div className={styles.mobileHead}>
              <NavLink
                to="/"
                className={styles.brand}
                onClick={closeMenu}
                aria-label={`${clinicInfo.name} — Home`}
              >
                <span className={styles.brandMark}>
                  <Icon name="sparkle" size={17} />
                </span>

                <span className={styles.brandName}>
                  Aurelia
                </span>
              </NavLink>

              <button
                type="button"
                className={styles.menuToggle}
                aria-label="Close menu"
                onClick={closeMenu}
              >
                <Icon name="close" size={22} />
              </button>
            </div>

            <nav
              className={styles.mobileNav}
              aria-label="Mobile primary"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `${styles.mobileNavLink} ${
                      isActive
                        ? styles.mobileNavLinkActive
                        : ''
                    }`
                  }
                  onClick={closeMenu}
                >
                  <span>{link.label}</span>
                  <Icon
                    name="arrowRight"
                    size={18}
                  />
                </NavLink>
              ))}
            </nav>

            <div className={styles.mobileFooter}>
              <Button
                to="/contact"
                fullWidth
                onClick={closeMenu}
              >
                Book a visit
              </Button>

              <a
                className={styles.mobileContactRow}
                href={phoneHref}
              >
                <Icon name="phone" size={16} />
                <span>{clinicInfo.phoneDisplay}</span>
              </a>

              <a
                className={styles.mobileContactRow}
                href={emailHref}
              >
                <Icon name="mail" size={16} />
                <span>{clinicInfo.email}</span>
              </a>
            </div>
          </aside>
        </div>
      )}
    </header>
  )
}