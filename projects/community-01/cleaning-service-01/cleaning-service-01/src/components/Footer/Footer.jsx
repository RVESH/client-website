import { NavLink } from 'react-router-dom'
import { site } from '../../data/site.js'
import { areas } from '../../data/areas.js'
import styles from './Footer.module.scss'

function Footer() {
  const year = new Date().getFullYear()
  const featuredAreas = areas.slice(0, 6)

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brandCol}>
          <NavLink to="/" className={styles.logo}>
            <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
              <rect width="32" height="32" rx="9" fill="#EAEFE7" />
              <path
                d="M7 19C11 15 13 15 16 17C20 19.5 22 19.5 25 16"
                stroke="#7FC4B4"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
            <span>{site.shortName}</span>
          </NavLink>
          <p className={styles.desc}>{site.description}</p>
        </div>

        <div className={styles.col}>
          <h4>Navigation</h4>
          <ul>
            {site.nav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to}>{item.label}</NavLink>
              </li>
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
            <li>
              <a
                href={site.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp us
              </a>
            </li>
            <li className={styles.address}>{site.address.full}</li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Service areas</h4>
          <ul className={styles.areaList}>
            {featuredAreas.map((area) => (
              <li key={area.id}>{area.name}</li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Hours</h4>
          <ul>
            {site.hours.map((h) => (
              <li key={h.day} className={styles.hourRow}>
                <span>{h.day}</span>
                <span>{h.time}</span>
              </li>
            ))}
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
