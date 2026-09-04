import { NavLink } from 'react-router-dom'
import Icon from '../Icon'
import Avatar from '../Avatar'
import { currentUser } from '../../data/team'
import styles from './Sidebar.module.scss'

const NAV_ITEMS = [
  { to: '/', label: 'Dashboard', icon: 'dashboard', end: true },
  { to: '/leads', label: 'Leads', icon: 'leads' },
  { to: '/contacts', label: 'Contacts', icon: 'contacts' },
  { to: '/deals', label: 'Deals', icon: 'deals' },
  { to: '/activities', label: 'Activities', icon: 'activities' },
]

export default function Sidebar({ collapsed, onToggleCollapse }) {
  return (
    <aside className={[styles.sidebar, collapsed ? styles.collapsed : ''].join(' ')}>
      <div className={styles.brandRow}>
        <div className={styles.brandMark} aria-hidden="true">
          <Icon name="dashboard" size={18} />
        </div>
        {!collapsed && <span className={styles.brandName}>Orbit CRM</span>}
      </div>

      <nav className={styles.nav} aria-label="Primary">
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  [styles.navLink, isActive ? styles.navLinkActive : ''].join(' ')
                }
                title={collapsed ? item.label : undefined}
              >
                <Icon name={item.icon} size={19} />
                {!collapsed && <span>{item.label}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.footer}>
        <button
          type="button"
          className={styles.collapseBtn}
          onClick={onToggleCollapse}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <Icon
            name="chevronLeft"
            size={16}
            className={collapsed ? styles.flipped : ''}
          />
          {!collapsed && <span>Collapse</span>}
        </button>

        <div className={styles.userRow} title={collapsed ? currentUser.name : undefined}>
          <Avatar name={currentUser.name} color={currentUser.color} size={32} />
          {!collapsed && (
            <div className={styles.userText}>
              <span className={styles.userName}>{currentUser.name}</span>
              <span className={styles.userRole}>{currentUser.role}</span>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}
