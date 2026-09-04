import { useState } from 'react'
import Icon from '../Icon'
import { currentUser } from '../../data/team'
import styles from './ProfileModal.module.scss'

export default function ProfileModal({ onClose }) {
  const [form, setForm] = useState({
    name: currentUser.name,
    role: currentUser.role,
    email: 'maya.chen@example.com',
    phone: '+1 (555) 014-2288',
    company: 'Northstar Systems',
    department: 'Sales',
  })

  const [saved, setSaved] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target

    setForm((current) => ({
      ...current,
      [name]: value,
    }))

    setSaved(false)
  }

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
        aria-labelledby="profile-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label="Close profile"
        >
          <Icon name="x" size={18} />
        </button>

        <div className={styles.header}>
          <div className={styles.avatar}>
            {form.name
              .split(' ')
              .map((part) => part[0])
              .join('')
              .slice(0, 2)
              .toUpperCase()}
          </div>

          <div>
            <h2 id="profile-modal-title">My Profile</h2>
            <p>Manage your CRM profile information.</p>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <label className={styles.field}>
              <span>Full name</span>

              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
              />
            </label>

            <label className={styles.field}>
              <span>Job title</span>

              <input
                name="role"
                type="text"
                value={form.role}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <div className={styles.row}>
            <label className={styles.field}>
              <span>Email address</span>

              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </label>

            <label className={styles.field}>
              <span>Phone</span>

              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className={styles.row}>
            <label className={styles.field}>
              <span>Company</span>

              <input
                name="company"
                type="text"
                value={form.company}
                onChange={handleChange}
              />
            </label>

            <label className={styles.field}>
              <span>Department</span>

              <select
                name="department"
                value={form.department}
                onChange={handleChange}
              >
                <option>Sales</option>
                <option>Marketing</option>
                <option>Operations</option>
                <option>Finance</option>
                <option>Customer Success</option>
              </select>
            </label>
          </div>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.cancel}
              onClick={onClose}
            >
              Cancel
            </button>

            <button type="submit" className={styles.save}>
              {saved ? 'Saved' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}