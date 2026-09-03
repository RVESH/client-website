import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Button'
import { site, telLink } from '../../data/site'
import styles from './Header.module.scss'

export default function Header() {
  const [open, setOpen] = useState(false)
  const panelRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    const handleKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const handleClick = (e) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', handleKey)
    document.addEventListener('mousedown', handleClick)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.removeEventListener('mousedown', handleClick)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={styles.header}>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <div className={[styles.bar, 'container'].join(' ')}>
        <NavLink to="/" className={styles.logo} onClick={() => setOpen(false)}>
          <span className={styles.logoMark} aria-hidden="true" />
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
          <a href={telLink()} className={styles.phone}>
            <span className={styles.phoneLabel}>Call the showroom</span>
            <span className={styles.phoneNumber}>{site.contact.phoneDisplay}</span>
          </a>
          <Button to="/vehicles" variant="accent" className={styles.ctaDesktop}>
            View Vehicles
          </Button>

          <button
            ref={toggleRef}
            type="button"
            className={styles.menuToggle}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={[styles.bun, open ? styles.bunOpenTop : ''].join(' ')} />
            <span className={[styles.bun, open ? styles.bunOpenMid : ''].join(' ')} />
            <span className={[styles.bun, open ? styles.bunOpenBottom : ''].join(' ')} />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        ref={panelRef}
        className={[styles.mobilePanel, open ? styles.mobilePanelOpen : ''].join(' ')}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile">
          <ul>
            {site.nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    isActive ? styles.mobileActiveLink : styles.mobileLink
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.mobileActions}>
          <Button to="/vehicles" variant="accent" onClick={() => setOpen(false)}>
            View Vehicles
          </Button>
          <Button href={telLink()} variant="dark">
            {site.contact.phoneDisplay}
          </Button>
        </div>
      </div>
    </header>
  )
}
