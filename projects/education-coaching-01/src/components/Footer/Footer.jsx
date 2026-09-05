import { NavLink } from 'react-router-dom'
import { site } from '../../data/site.js'
import { courseCategories } from '../../data/courses.js'
import styles from './Footer.module.scss'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brandCol}>
          <NavLink to="/" className={styles.logo} end>
            <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
              <rect width="32" height="32" rx="8" fill="rgba(255,255,255,0.1)" />
              <path d="M16 7 L23 20 H9 Z" fill="none" stroke="#E8A33D" strokeWidth="2.2" strokeLinejoin="round" />
              <path d="M16 7 L16 20" stroke="#2E9E6C" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
            <span>{site.companyName}</span>
          </NavLink>
          <p className={styles.desc}>{site.description}</p>
        </div>

        <div className={styles.col}>
          <h4>Navigation</h4>
          <ul>
            {site.nav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === '/'}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Explore courses</h4>
          <ul>
            {courseCategories.slice(0, 5).map((cat) => (
              <li key={cat.value}>{cat.label}</li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Contact</h4>
          <ul>
            <li>
              <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li className={styles.muted}>{site.address.city}, {site.address.region}</li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>
          © {year} {site.companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
