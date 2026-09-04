import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Button'
import MobileDrawer from './MobileDrawer'
import { site } from '../../data/site'
import styles from './Header.module.scss'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <div className={['container', styles.bar].join(' ')}>
        <NavLink to="/" className={styles.logo} onClick={() => setOpen(false)}>
          <span className={styles.logoMark} aria-hidden="true">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
              <path
                d="M5 19V9c0-1.5 3-4.5 7-4.5S19 7.5 19 9v10"
                stroke="currentColor"
                strokeWidth="1.4"
              />
              <line x1="4" y1="20" x2="20" y2="20" stroke="currentColor" strokeWidth="1.4" />
            </svg>
          </span>
          <span className={styles.logoText}>{site.shortName}</span>
        </NavLink>

        <nav className={styles.navDesktop} aria-label="Primary">
          <ul>
            {site.nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    isActive ? styles.activeLink : styles.link
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Button to="/contact" variant="primary" className={styles.ctaDesktop}>
            {site.ctaLabel}
          </Button>

          <button
            type="button"
            className={[styles.hamburger, open ? styles.hamburgerOpen : ''].join(' ')}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-drawer"
          >
            <span className={styles.bun} />
            <span className={styles.bun} />
            <span className={styles.bun} />
          </button>
        </div>
      </div>

      <MobileDrawer open={open} onClose={() => setOpen(false)} />
    </header>
  )
}
