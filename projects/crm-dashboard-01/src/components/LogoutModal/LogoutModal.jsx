import { useState } from 'react'
import Icon from '../Icon'
import styles from './LogoutModal.module.scss'

export default function LogoutModal({ onClose, onSuccess }) {
  const [loading, setLoading] = useState(false)

  function handleLogout() {
    setLoading(true)

    window.setTimeout(() => {
      setLoading(false)

      if (typeof onSuccess === 'function') {
        onSuccess()
      } else {
        onClose()
      }
    }, 400)
  }

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="logout-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label="Close logout dialog"
        >
          <Icon name="x" size={18} />
        </button>

        <div className={styles.icon}>
          <Icon name="logout" size={21} />
        </div>

        <h2 id="logout-modal-title">Log Out</h2>

        <p>
          Are you sure you want to log out of the dashboard?
        </p>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.cancel}
            onClick={onClose}
            disabled={loading}
          >
            Cancel
          </button>

          <button
            type="button"
            className={styles.logout}
            onClick={handleLogout}
            disabled={loading}
          >
            {loading ? 'Logging out...' : 'Log Out'}
          </button>
        </div>
      </div>
    </div>
  )
}