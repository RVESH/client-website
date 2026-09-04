import { createPortal } from 'react-dom'
import { NavLink } from 'react-router-dom'
import Button from '../Button'
import useScrollLock from '../../hooks/useScrollLock'
import useEscapeKey from '../../hooks/useEscapeKey'
import { site } from '../../data/site'
import styles from './MobileDrawer.module.scss'

export default function MobileDrawer({ open, onClose }) {
  useScrollLock(open)
  useEscapeKey(onClose, open)

  return createPortal(
    <>
      <div
        className={[styles.backdrop, open ? styles.backdropVisible : ''].join(' ')}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        id="mobile-drawer"
        className={[styles.drawer, open ? styles.drawerOpen : ''].join(' ')}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
      >
        <div className={styles.header}>
          <span className={styles.brand}>{site.shortName}</span>
          <button
            type="button"
            className={[styles.closeBtn, open ? styles.closeBtnOpen : ''].join(' ')}
            onClick={onClose}
            aria-label="Close menu"
          >
            <span className={styles.bun} />
            <span className={styles.bun} />
          </button>
        </div>

        <nav aria-label="Mobile">
          <ul>
            {site.nav.map((item, i) => (
              <li
                key={item.to}
                style={{ transitionDelay: open ? `${80 + i * 45}ms` : '0ms' }}
                className={open ? styles.itemVisible : styles.item}
              >
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  onClick={onClose}
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

        <div className={styles.footer}>
          <Button to="/contact" variant="accent" onClick={onClose} className={styles.cta}>
            {site.ctaLabel}
          </Button>
          <a href={`tel:${site.contact.phone.replace(/[^+\d]/g, '')}`} className={styles.phone}>
            {site.contact.phoneDisplay}
          </a>
        </div>
      </aside>
    </>,
    document.body
  )
}
