import RouteLink from '../RouteLink/RouteLink.jsx'
import { site } from '../../data/site.js'
import { locations } from '../../data/locations.js'
import styles from './Footer.module.css'

function Footer() {
  const year = new Date().getFullYear()
  const featuredLocations = locations.slice(0, 6)

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brandCol}>
          <RouteLink to="/" className={styles.logo} end>
            <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
              <rect width="32" height="32" rx="8" fill="rgba(255,255,255,0.1)" />
              <path d="M8 21 L15 12 L18 12 L11 21 Z" fill="#BD8A3D" />
              <path d="M15 21 L22 12 L25 12 L18 21 Z" fill="#E7C98C" />
            </svg>
            <span>{site.companyName}</span>
          </RouteLink>
          <p className={styles.desc}>{site.description}</p>
        </div>

        <div className={styles.col}>
          <h4>Navigation</h4>
          <ul>
            {site.nav.map((item) => (
              <li key={item.to}>
                <RouteLink to={item.to} end={item.to === '/'}>
                  {item.label}
                </RouteLink>
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
            <li className={styles.muted}>Reservations available 24/7</li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Locations</h4>
          <ul className={styles.locationList}>
            {featuredLocations.map((loc) => (
              <li key={loc.id}>
                {loc.city}, {loc.state}
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
