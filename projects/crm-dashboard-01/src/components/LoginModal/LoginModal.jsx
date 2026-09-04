import { useState } from 'react'
import Icon from '../Icon'
import styles from './LoginModal.module.scss'

const initialForm = {
  name: '',
  role: '',
  email: '',
  phone: '',
  company: '',
  department: 'Sales',
  password: '',
  confirmPassword: '',
  remember: true,
  terms: false,
}

export default function LoginModal({ onClose, onSuccess }) {
  const [form, setForm] = useState(initialForm)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState('')

  function handleChange(event) {
    const { name, value, type, checked } = event.target

    setForm((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }))

    setError('')
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (
      !form.name.trim() ||
      !form.role.trim() ||
      !form.email.trim() ||
      !form.phone.trim() ||
      !form.company.trim() ||
      !form.password.trim() ||
      !form.confirmPassword.trim()
    ) {
      setError('Please complete all required fields.')
      return
    }

    if (form.password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    if (!form.terms) {
      setError('Please accept the terms to continue.')
      return
    }

    onSuccess({
      name: form.name.trim(),
      role: form.role.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      company: form.company.trim(),
      department: form.department,
      color: '#6366f1',
    })
  }

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label="Close sign in"
        >
          <Icon name="x" size={18} />
        </button>

        <div className={styles.header}>
          <div className={styles.iconBox}>
            <Icon name="user" size={20} />
          </div>

          <div>
            <h2 id="login-title">Create Your CRM Profile</h2>
            <p>
              Enter your details to access the CRM dashboard.
            </p>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.sectionTitle}>
            Personal information
          </div>

          <div className={styles.row}>
            <label className={styles.field}>
              <span>
                Full name <b>*</b>
              </span>

              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Maya Chen"
                autoComplete="name"
                required
              />
            </label>

            <label className={styles.field}>
              <span>
                Job title <b>*</b>
              </span>

              <input
                name="role"
                type="text"
                value={form.role}
                onChange={handleChange}
                placeholder="Account Executive"
                autoComplete="organization-title"
                required
              />
            </label>
          </div>

          <div className={styles.row}>
            <label className={styles.field}>
              <span>
                Email address <b>*</b>
              </span>

              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="maya@example.com"
                autoComplete="email"
                required
              />
            </label>

            <label className={styles.field}>
              <span>
                Phone number <b>*</b>
              </span>

              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="+1 (555) 014-2288"
                autoComplete="tel"
                required
              />
            </label>
          </div>

          <div className={styles.row}>
            <label className={styles.field}>
              <span>
                Company <b>*</b>
              </span>

              <input
                name="company"
                type="text"
                value={form.company}
                onChange={handleChange}
                placeholder="Northstar Systems"
                autoComplete="organization"
                required
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
                <option>Product</option>
                <option>Engineering</option>
                <option>Human Resources</option>
              </select>
            </label>
          </div>

          <div className={styles.sectionTitle}>
            Account security
          </div>

          <div className={styles.row}>
            <label className={styles.field}>
              <span>
                Password <b>*</b>
              </span>

              <div className={styles.passwordWrap}>
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  autoComplete="new-password"
                  required
                />

                <button
                  type="button"
                  className={styles.passwordToggle}
                  onClick={() =>
                    setShowPassword((value) => !value)
                  }
                  aria-label={
                    showPassword ? 'Hide password' : 'Show password'
                  }
                >
                  <Icon
                    name={showPassword ? 'eyeOff' : 'eye'}
                    size={17}
                  />
                </button>
              </div>
            </label>

            <label className={styles.field}>
              <span>
                Confirm password <b>*</b>
              </span>

              <div className={styles.passwordWrap}>
                <input
                  name="confirmPassword"
                  type={
                    showConfirmPassword ? 'text' : 'password'
                  }
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm password"
                  autoComplete="new-password"
                  required
                />

                <button
                  type="button"
                  className={styles.passwordToggle}
                  onClick={() =>
                    setShowConfirmPassword((value) => !value)
                  }
                  aria-label={
                    showConfirmPassword
                      ? 'Hide password'
                      : 'Show password'
                  }
                >
                  <Icon
                    name={
                      showConfirmPassword ? 'eyeOff' : 'eye'
                    }
                    size={17}
                  />
                </button>
              </div>
            </label>
          </div>

          {error && (
            <div className={styles.error} role="alert">
              <Icon name="alertCircle" size={15} />
              <span>{error}</span>
            </div>
          )}

          <label className={styles.checkRow}>
            <input
              name="remember"
              type="checkbox"
              checked={form.remember}
              onChange={handleChange}
            />
            <span>Remember me</span>
          </label>

          <label className={styles.checkRow}>
            <input
              name="terms"
              type="checkbox"
              checked={form.terms}
              onChange={handleChange}
            />
            <span>
              I agree to the CRM demo terms and privacy policy.
            </span>
          </label>

          <button type="submit" className={styles.submit}>
            Create Profile &amp; Sign In
          </button>

          <p className={styles.note}>
            Frontend-only demo. Your profile data is kept only in
            the current session.
          </p>
        </form>
      </div>
    </div>
  )
}