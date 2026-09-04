import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Icon from '../Icon'
import Avatar from '../Avatar'
import { currentUser } from '../../data/team'
import styles from './MobileDrawer.module.scss'

const NAV_ITEMS = [
  { to: '/', label: 'Dashboard', icon: 'dashboard', end: true },
  { to: '/leads', label: 'Leads', icon: 'leads' },
  { to: '/contacts', label: 'Contacts', icon: 'contacts' },
  { to: '/deals', label: 'Deals', icon: 'deals' },
  { to: '/activities', label: 'Activities', icon: 'activities' },
]

export default function MobileDrawer({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <>
      <div className={styles.overlay} onClick={onClose} aria-hidden="true" />
      <aside className={styles.drawer} role="dialog" aria-modal="true" aria-label="Navigation">
        <div className={styles.header}>
          <div className={styles.brandRow}>
            <div className={styles.brandMark} aria-hidden="true">
              <Icon name="dashboard" size={18} />
            </div>
            <span className={styles.brandName}>Orbit CRM</span>
          </div>
          <button type="button" className={styles.closeBtn} onClick={onClose} aria-label="Close menu">
            <Icon name="x" size={20} />
          </button>
        </div>

        <nav aria-label="Primary">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  onClick={onClose}
                  className={({ isActive }) =>
                    [styles.navLink, isActive ? styles.navLinkActive : ''].join(' ')
                  }
                >
                  <Icon name={item.icon} size={19} />
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.footer}>
          <div className={styles.userRow}>
            <Avatar name={currentUser.name} color={currentUser.color} size={36} />
            <div className={styles.userText}>
              <span className={styles.userName}>{currentUser.name}</span>
              <span className={styles.userRole}>{currentUser.role}</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
