import { site } from '../../data/site'
import styles from './Footer.module.scss'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={['container', styles.grid].join(' ')}>
        <div className={styles.brandCol}>
          <span className={styles.logoText}>{site.shortName}</span>
          <p className={styles.statement}>{site.description}</p>
          <div className={styles.social}>
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href={site.social.pinterest} target="_blank" rel="noopener noreferrer">
              Pinterest
            </a>
          </div>
        </div>

        <div className={styles.col}>
          <h3 className={styles.colHeading}>Explore</h3>
          <ul>
            {site.nav.map((item) => (
              <li key={item.to}>
                <a href={item.to}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h3 className={styles.colHeading}>Contact</h3>
          <ul>
            <li>
              <a href={`tel:${site.contact.phone.replace(/[^+\d]/g, '')}`}>
                {site.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <h3 className={styles.colHeading}>Studio</h3>
          <address className={styles.address}>
            {site.contact.address.line1}
            <br />
            {site.contact.address.line2}
            <br />
            {site.contact.address.country}
          </address>
        </div>
      </div>

      <div className={['container', styles.bottom].join(' ')}>
        <p>
          © {year} {site.name}. All rights reserved.
        </p>
        <p className={styles.sample}>Demo studio content for showcase purposes.</p>
      </div>
    </footer>
  )
}
