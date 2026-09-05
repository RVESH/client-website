import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button.jsx'
import { site } from '../../data/site.js'
import styles from './Header.module.scss'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleRef = useRef(null)
  const closeButtonRef = useRef(null)
  const isFirstRender = useRef(true)

  // Shrink / add shadow to the header once the page has scrolled.
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the drawer is open, compensating for the
  // scrollbar's width so the page never visibly shifts when it
  // disappears (the classic overflow:hidden layout-jump bug).
  useEffect(() => {
    if (isMenuOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${scrollbarWidth}px`
    } else {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [isMenuOpen])

  // Close on Escape, from anywhere in the document.
  useEffect(() => {
    if (!isMenuOpen) return undefined
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isMenuOpen])

  // Move focus into the drawer when it opens, and back to the toggle
  // button when it closes. Skipped on first mount so the page never
  // auto-steals focus on load.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    if (isMenuOpen) {
      closeButtonRef.current?.focus()
    } else {
      toggleRef.current?.focus()
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  const drawerContent = (
    <>
      <button
        type="button"
        aria-hidden="true"
        tabIndex={-1}
        className={`${styles.backdrop} ${isMenuOpen ? styles.backdropVisible : ''}`}
        onClick={closeMenu}
      />

      <div
        id="mobile-menu"
        className={`${styles.drawer} ${isMenuOpen ? styles.drawerOpen : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className={styles.drawerHead}>
          <span className={styles.logoText}>{site.shortName}</span>
          <button
            ref={closeButtonRef}
            type="button"
            className={styles.drawerClose}
            aria-label="Close menu"
            onClick={closeMenu}
          >
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
              <path d="M5 5 L19 19 M19 5 L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav aria-label="Mobile Primary">
          <ul>
            {site.nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  onClick={closeMenu}
                  className={({ isActive }) => (isActive ? styles.mobileNavActive : styles.mobileNavLink)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.drawerFooter}>
          <Button to={site.headerCta.to} variant="accent" onClick={closeMenu}>
            {site.headerCta.label}
          </Button>
          <Button href={`tel:${site.phone}`} variant="ghost" onClick={closeMenu}>
            Call {site.phoneDisplay}
          </Button>
        </div>
      </div>
    </>
  )

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.bar}`}>
        <NavLink to="/" className={styles.logo} onClick={closeMenu} end>
          <span className={styles.logoMark} aria-hidden="true">
            <svg viewBox="0 0 32 32" width="30" height="30">
              <rect width="32" height="32" rx="8" fill="#1B2140" />
              <path d="M16 7 L23 20 H9 Z" fill="none" stroke="#E8A33D" strokeWidth="2.2" strokeLinejoin="round" />
              <path d="M16 7 L16 20" stroke="#2E9E6C" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </span>
          <span className={styles.logoText}>{site.companyName}</span>
        </NavLink>

        <nav className={styles.desktopNav} aria-label="Primary">
          <ul>
            {site.nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => (isActive ? styles.navActive : styles.navLink)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.desktopCta}>
          <Button to={site.headerCta.to} variant="accent">
            {site.headerCta.label}
          </Button>
        </div>

        <button
          ref={toggleRef}
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

      {createPortal(drawerContent, document.body)}
    </header>
  )
}

export default Header
