import { site, telLink, mailLink, whatsappLink } from '../../data/site'
import styles from './Footer.module.scss'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={['container', styles.grid].join(' ')}>
        <div className={styles.brandCol}>
          <div className={styles.logo}>
            <span className={styles.logoMark} aria-hidden="true" />
            <span className={styles.logoText}>{site.shortName}</span>
          </div>
          <p className={styles.statement}>{site.description}</p>
        </div>

        <div className={styles.col}>
          <h3 className={styles.colHeading}>Navigate</h3>
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
              <a href={telLink()}>{site.contact.phoneDisplay}</a>
            </li>
            <li>
              <a href={mailLink()}>{site.contact.email}</a>
            </li>
            <li>
              <a
                href={whatsappLink('Hello, I have a question for Vantage Motor Co.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <h3 className={styles.colHeading}>Showroom</h3>
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
        <p className={styles.sample}>Demo dealership content for showcase purposes.</p>
      </div>
    </footer>
  )
}
