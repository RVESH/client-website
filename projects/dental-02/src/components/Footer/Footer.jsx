import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import { site, nav, footerLinks, social, contact, buildTelLink, buildMailtoLink } from '../../data/site.js'
import './Footer.scss'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand-col">
          <Link to="/" className="footer__brand">
            <span className="footer__brand-mark" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none">
                <path
                  d="M12 3c-2.2 0-3.6 1-4.6 1-1.1 0-2.1-.7-3.2-.7C2.6 3.3 1.5 5 1.7 7.3c.2 2.6 1.6 8.6 3.2 11.4.8 1.4 1.7 2.7 3 2.7 1.2 0 1.6-.8 3.1-.8s1.9.8 3.1.8c1.3 0 2.3-1.4 3.1-2.8 1-1.8 1.5-3.5 1.5-3.6-.1 0-2.9-1.1-2.9-4.4 0-2.7 2.2-4 2.3-4.1-1.3-1.9-3.2-2.1-3.9-2.1-1.5-.2-2.9.8-3.2.8Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            {site.name}
          </Link>
          <p className="footer__tagline">{site.description}</p>
          <ul className="footer__contact">
            <li>
              <a href={buildTelLink()}>
                <Phone size={14} /> {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={buildMailtoLink({ subject: 'Enquiry from website' })}>
                <Mail size={14} /> {contact.email}
              </a>
            </li>
            <li>
              <span>
                <MapPin size={14} /> {contact.address}
              </span>
            </li>
          </ul>
        </div>

        <nav className="footer__col" aria-label="Site">
          <h3 className="footer__col-title">Site</h3>
          <ul>
            {nav.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer__col" aria-label="Clinic">
          <h3 className="footer__col-title">Clinic</h3>
          <ul>
            {footerLinks.clinic.map((item) => (
              <li key={item.label}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer__col" aria-label="Visit">
          <h3 className="footer__col-title">Visit</h3>
          <ul>
            {footerLinks.visit.map((item) => (
              <li key={item.label}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="container footer__bottom">
        <p className="footer__copyright">
          © {year} {site.name}. All rights reserved.
        </p>
        <ul className="footer__social">
          {social.map((item) => (
            <li key={item.label}>
              <a href={item.url} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
