import { useRef, useState } from 'react'
import Icon from '../Icon'
import Avatar from '../Avatar'
import useClickOutside from '../../hooks/useClickOutside'
import { currentUser } from '../../data/team'
import styles from './Topbar.module.css'

export default function Topbar({ title, onOpenMobileNav }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [notifOpen, setNotifOpen] = useState(false)
  const menuRef = useRef(null)
  const notifRef = useRef(null)

  useClickOutside(menuRef, () => setMenuOpen(false), menuOpen)
  useClickOutside(notifRef, () => setNotifOpen(false), notifOpen)

  return (
    <header className={styles.topbar}>
      <div className={styles.left}>
        <button
          type="button"
          className={styles.menuBtn}
          onClick={onOpenMobileNav}
          aria-label="Open navigation menu"
        >
          <Icon name="menu" size={20} />
        </button>
        <h1 className={styles.title}>{title}</h1>
      </div>

      <div className={styles.right}>
        <div className={styles.notifWrap} ref={notifRef}>
          <button
            type="button"
            className={styles.iconBtn}
            onClick={() => setNotifOpen((v) => !v)}
            aria-label="Notifications"
            aria-expanded={notifOpen}
          >
            <Icon name="bell" size={19} />
            <span className={styles.dot} aria-hidden="true" />
          </button>

          {notifOpen && (
            <div className={styles.panel}>
              <div className={styles.panelHeader}>Notifications</div>
              <ul className={styles.notifList}>
                <li className={styles.notifItem}>
                  <span className={styles.notifDot} />
                  <div>
                    <p><strong>Priya Nair</strong> closed a deal with Northwind Traders</p>
                    <span className={styles.notifTime}>12 minutes ago</span>
                  </div>
                </li>
                <li className={styles.notifItem}>
                  <span className={styles.notifDot} />
                  <div>
                    <p>New lead assigned: <strong>Sofia Alvarez</strong></p>
                    <span className={styles.notifTime}>1 hour ago</span>
                  </div>
                </li>
                <li className={styles.notifItem}>
                  <span className={[styles.notifDot, styles.notifDotMuted].join(' ')} />
                  <div>
                    <p>Task <strong>&ldquo;Send updated pricing&rdquo;</strong> is due today</p>
                    <span className={styles.notifTime}>3 hours ago</span>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className={styles.userWrap} ref={menuRef}>
          <button
            type="button"
            className={styles.userBtn}
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-haspopup="menu"
          >
            <Avatar name={currentUser.name} color={currentUser.color} size={34} />
            <Icon name="chevronDown" size={14} className={styles.userChevron} />
          </button>

          {menuOpen && (
            <div className={styles.panel} role="menu">
              <div className={styles.userMeta}>
                <span className={styles.userMetaName}>{currentUser.name}</span>
                <span className={styles.userMetaRole}>{currentUser.role}</span>
              </div>
              <button type="button" className={styles.menuItem} role="menuitem">
                <Icon name="user" size={16} />
                My Profile
              </button>
              <button type="button" className={styles.menuItem} role="menuitem">
                <Icon name="settings" size={16} />
                Settings
              </button>
              <button type="button" className={[styles.menuItem, styles.menuItemDanger].join(' ')} role="menuitem">
                <Icon name="logout" size={16} />
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
