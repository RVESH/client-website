import { useRef, useState } from 'react'
import Icon from '../Icon'
import Avatar from '../Avatar'
import ProfileModal from '../ProfileModal/ProfileModal'
import SettingsModal from '../SettingsModal/SettingsModal'
import LogoutModal from '../LogoutModal/LogoutModal'
import LoginModal from '../LoginModal/LoginModal'
import useClickOutside from '../../hooks/useClickOutside'
import { currentUser } from '../../data/team'
import styles from './Topbar.module.scss'

export default function Topbar({ title, onOpenMobileNav }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [notifOpen, setNotifOpen] = useState(false)
  const [activeModal, setActiveModal] = useState(null)

  const [loggedIn, setLoggedIn] = useState(true)
  const [authUser, setAuthUser] = useState(currentUser)

  const menuRef = useRef(null)
  const notifRef = useRef(null)

  useClickOutside(
    menuRef,
    () => setMenuOpen(false),
    menuOpen,
  )

  useClickOutside(
    notifRef,
    () => setNotifOpen(false),
    notifOpen,
  )

  function openModal(type) {
    setMenuOpen(false)
    setActiveModal(type)
  }

  function closeModal() {
    setActiveModal(null)
  }

  function handleLoginSuccess(user) {
    setAuthUser(user)
    setLoggedIn(true)
    setActiveModal(null)
  }

  function handleProfileSave(updatedUser) {
    setAuthUser(updatedUser)
  }

  function handleLogoutSuccess() {
    setLoggedIn(false)
    setAuthUser(null)
    setActiveModal(null)
  }

  return (
    <>
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
              onClick={() => setNotifOpen((value) => !value)}
              aria-label="Notifications"
              aria-expanded={notifOpen}
            >
              <Icon name="bell" size={19} />
              <span className={styles.dot} aria-hidden="true" />
            </button>

            {notifOpen && (
              <div className={styles.panel}>
                <div className={styles.panelHeader}>
                  Notifications
                </div>

                <ul className={styles.notifList}>
                  <li className={styles.notifItem}>
                    <span className={styles.notifDot} />

                    <div>
                      <p>
                        <strong>Priya Nair</strong> closed a deal
                        with Northwind Traders
                      </p>

                      <span className={styles.notifTime}>
                        12 minutes ago
                      </span>
                    </div>
                  </li>

                  <li className={styles.notifItem}>
                    <span className={styles.notifDot} />

                    <div>
                      <p>
                        New lead assigned:{' '}
                        <strong>Sofia Alvarez</strong>
                      </p>

                      <span className={styles.notifTime}>
                        1 hour ago
                      </span>
                    </div>
                  </li>

                  <li className={styles.notifItem}>
                    <span
                      className={[
                        styles.notifDot,
                        styles.notifDotMuted,
                      ].join(' ')}
                    />

                    <div>
                      <p>
                        Task{' '}
                        <strong>
                          &ldquo;Send updated pricing&rdquo;
                        </strong>{' '}
                        is due today
                      </p>

                      <span className={styles.notifTime}>
                        3 hours ago
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {loggedIn && authUser ? (
            <div className={styles.userWrap} ref={menuRef}>
              <button
                type="button"
                className={styles.userBtn}
                onClick={() => setMenuOpen((value) => !value)}
                aria-expanded={menuOpen}
                aria-haspopup="menu"
              >
                <Avatar
                  name={authUser.name}
                  color={authUser.color || '#6366f1'}
                  size={34}
                />

                <Icon
                  name="chevronDown"
                  size={14}
                  className={styles.userChevron}
                />
              </button>

              {menuOpen && (
                <div className={styles.panel} role="menu">
                  <div className={styles.userMeta}>
                    <span className={styles.userMetaName}>
                      {authUser.name}
                    </span>

                    <span className={styles.userMetaRole}>
                      {authUser.role}
                    </span>
                  </div>

                  <button
                    type="button"
                    className={styles.menuItem}
                    role="menuitem"
                    onClick={() => openModal('profile')}
                  >
                    <Icon name="user" size={16} />
                    My Profile
                  </button>

                  <button
                    type="button"
                    className={styles.menuItem}
                    role="menuitem"
                    onClick={() => openModal('settings')}
                  >
                    <Icon name="settings" size={16} />
                    Settings
                  </button>

                  <button
                    type="button"
                    className={[
                      styles.menuItem,
                      styles.menuItemDanger,
                    ].join(' ')}
                    role="menuitem"
                    onClick={() => openModal('logout')}
                  >
                    <Icon name="logout" size={16} />
                    Log Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              type="button"
              className={styles.signInBtn}
              onClick={() => setActiveModal('login')}
            >
              <Icon name="user" size={16} />
              Sign In
            </button>
          )}
        </div>
      </header>

      {activeModal === 'profile' && authUser && (
        <ProfileModal
          user={authUser}
          onClose={closeModal}
          onSave={handleProfileSave}
        />
      )}

      {activeModal === 'settings' && (
        <SettingsModal onClose={closeModal} />
      )}

      {activeModal === 'login' && (
        <LoginModal
          onClose={closeModal}
          onSuccess={handleLoginSuccess}
        />
      )}

      {activeModal === 'logout' && (
        <LogoutModal
          onClose={closeModal}
          onSuccess={handleLogoutSuccess}
        />
      )}
    </>
  )
}