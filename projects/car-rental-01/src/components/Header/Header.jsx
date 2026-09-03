import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import RouteLink from '../RouteLink/RouteLink.jsx'
import Button from '../Button/Button.jsx'
import { site } from '../../data/site.js'
import styles from './Header.module.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleRef = useRef(null)
  const closeButtonRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8)
    }

    onScroll()

    window.addEventListener('scroll', onScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  // Lock page scroll without changing page width.
  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.classList.add('mobile-menu-open')
      document.body.classList.add('mobile-menu-open')
    } else {
      document.documentElement.classList.remove('mobile-menu-open')
      document.body.classList.remove('mobile-menu-open')
    }

    return () => {
      document.documentElement.classList.remove('mobile-menu-open')
      document.body.classList.remove('mobile-menu-open')
    }
  }, [isMenuOpen])

  // Escape closes menu.
  useEffect(() => {
    if (!isMenuOpen) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isMenuOpen])

  // Focus management.
  useEffect(() => {
    if (isMenuOpen) {
      requestAnimationFrame(() => {
        closeButtonRef.current?.focus()
      })
    } else {
      requestAnimationFrame(() => {
        toggleRef.current?.focus()
      })
    }
  }, [isMenuOpen])

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen((current) => !current)
  }

  const mobileMenu = (
    <>
      <button
        type="button"
        aria-label="Close menu"
        className={`${styles.backdrop} ${
          isMenuOpen ? styles.backdropVisible : ''
        }`}
        onClick={closeMenu}
      />

      <aside
        id="mobile-menu"
        className={`${styles.drawer} ${
          isMenuOpen ? styles.drawerOpen : ''
        }`}
        aria-hidden={!isMenuOpen}
        aria-label="Mobile navigation"
      >
        <div className={styles.drawerHead}>
          <span className={styles.logoText}>
            {site.shortName}
          </span>

          <button
            ref={closeButtonRef}
            type="button"
            className={styles.drawerClose}
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              aria-hidden="true"
            >
              <path
                d="M5 5 L19 19 M19 5 L5 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <nav aria-label="Mobile Primary">
          <ul>
            {site.nav.map((item) => (
              <li key={item.to}>
                <RouteLink
                  to={item.to}
                  end={item.to === '/'}
                  onClick={closeMenu}
                  className={styles.mobileNavLink}
                  activeClassName={styles.mobileNavActive}
                >
                  {item.label}
                </RouteLink>
              </li>
            ))}
          </ul>
        </nav>

 <div className={styles.drawerFooter}>
  <div onClick={closeMenu}>
    <Button
      to="/contact"
      variant="accent"
    >
      {site.headerCta.label}
    </Button>
  </div>

  <div onClick={closeMenu}>
    <Button
      href={`tel:${site.phone}`}
      variant="ghost"
    >
      Call {site.phoneDisplay}
    </Button>
  </div>
</div>
      </aside>
    </>
  )

  return (
    <>
      <header
        className={`${styles.header} ${
          isScrolled ? styles.scrolled : ''
        }`}
      >
        <div className={`container ${styles.bar}`}>
          <RouteLink
            to="/"
            className={styles.logo}
            onClick={closeMenu}
            end
          >
            <span
              className={styles.logoMark}
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 32 32"
                width="30"
                height="30"
              >
                <rect
                  width="32"
                  height="32"
                  rx="8"
                  fill="#14161B"
                />

                <path
                  d="M8 21 L15 12 L18 12 L11 21 Z"
                  fill="#BD8A3D"
                />

                <path
                  d="M15 21 L22 12 L25 12 L18 21 Z"
                  fill="#E7C98C"
                />
              </svg>
            </span>

            <span className={styles.logoText}>
              {site.companyName}
            </span>
          </RouteLink>

          <nav
            className={styles.desktopNav}
            aria-label="Primary"
          >
            <ul>
              {site.nav.map((item) => (
                <li key={item.to}>
                  <RouteLink
                    to={item.to}
                    end={item.to === '/'}
                    className={styles.navLink}
                    activeClassName={styles.navActive}
                  >
                    {item.label}
                  </RouteLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.desktopCta}>
            <Button
              to={site.headerCta.to}
              variant="accent"
            >
              {site.headerCta.label}
            </Button>
          </div>

          <button
            ref={toggleRef}
            type="button"
            className={styles.menuToggle}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={
              isMenuOpen ? 'Close menu' : 'Open menu'
            }
            onClick={toggleMenu}
          >
            <span
              className={
                isMenuOpen
                  ? styles.iconOpen
                  : styles.iconClosed
              }
            >
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </header>

      {typeof document !== 'undefined'
        ? createPortal(mobileMenu, document.body)
        : null}
    </>
  )
}

export default Header