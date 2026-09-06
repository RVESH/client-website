import { NavLink } from 'react-router-dom'
import { navLinks } from '../../data/nav.js'
import { clinicInfo } from '../../data/clinicInfo.js'
import { treatments } from '../../data/treatments.js'
import Icon from '../ui/Icon.jsx'
import styles from './Footer.module.css'

const featuredTreatments = treatments.slice(0, 5)

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <span className={styles.brand}>
              <span className={styles.brandMark}>
                <Icon name="sparkle" size={17} />
              </span>
              Aurelia Dental
            </span>
            <p className={styles.tagline}>{clinicInfo.tagline}</p>
            <div className={styles.social} aria-label="Social media">
              <a className={styles.socialLink} href={clinicInfo.social.instagram} aria-label="Instagram">
                <Icon name="sparkle" size={16} />
              </a>
              <a className={styles.socialLink} href={clinicInfo.social.facebook} aria-label="Facebook">
                <Icon name="team" size={16} />
              </a>
              <a className={styles.socialLink} href={clinicInfo.social.linkedin} aria-label="LinkedIn">
                <Icon name="shield" size={16} />
              </a>
            </div>
          </div>

          <div>
            <p className={styles.heading}>Explore</p>
            <ul className={styles.list}>
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={styles.heading}>Treatments</p>
            <ul className={styles.list}>
              {featuredTreatments.map((treatment) => (
                <li key={treatment.slug}>
                  <NavLink to="/treatments">{treatment.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={styles.heading}>Visit us</p>
            <ul className={styles.list}>
              <li className={styles.contactItem}>
                <Icon name="mapPin" size={16} />
                <p>
                  {clinicInfo.address.line1}
                  <br />
                  {clinicInfo.address.line2}, {clinicInfo.address.city}
                </p>
              </li>
              <li className={styles.contactItem}>
                <Icon name="phone" size={16} />
                <a href={`tel:${clinicInfo.phone.replace(/[^+\d]/g, '')}`}>{clinicInfo.phoneDisplay}</a>
              </li>
              <li className={styles.contactItem}>
                <Icon name="mail" size={16} />
                <a href={`mailto:${clinicInfo.email}`}>{clinicInfo.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© {year} {clinicInfo.name}. All rights reserved.</span>
          <span>Demo site for presentation purposes — no live booking or patient data.</span>
        </div>
      </div>
    </footer>
  )
}
