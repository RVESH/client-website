import { useState } from 'react'
import Icon from '../Icon'
import styles from './SettingsModal.module.scss'

export default function SettingsModal({ onClose }) {
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [activityUpdates, setActivityUpdates] = useState(true)
  const [compactMode, setCompactMode] = useState(false)
  const [saved, setSaved] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSaved(true)

    window.setTimeout(() => {
      setSaved(false)
    }, 1800)
  }

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="settings-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label="Close settings"
        >
          <Icon name="x" size={18} />
        </button>

        <div className={styles.header}>
          <div className={styles.icon}>
            <Icon name="settings" size={20} />
          </div>

          <div>
            <h2 id="settings-modal-title">Settings</h2>
            <p>Manage your dashboard preferences.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.setting}>
            <div>
              <strong>Email notifications</strong>
              <span>Receive important updates by email.</span>
            </div>

            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={(event) =>
                setEmailNotifications(event.target.checked)
              }
            />
          </label>

          <label className={styles.setting}>
            <div>
              <strong>Activity updates</strong>
              <span>Show recent team activity notifications.</span>
            </div>

            <input
              type="checkbox"
              checked={activityUpdates}
              onChange={(event) =>
                setActivityUpdates(event.target.checked)
              }
            />
          </label>

          <label className={styles.setting}>
            <div>
              <strong>Compact mode</strong>
              <span>Use a denser dashboard layout.</span>
            </div>

            <input
              type="checkbox"
              checked={compactMode}
              onChange={(event) =>
                setCompactMode(event.target.checked)
              }
            />
          </label>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.cancel}
              onClick={onClose}
            >
              Cancel
            </button>

            <button type="submit" className={styles.save}>
              {saved ? 'Saved' : 'Save Settings'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}