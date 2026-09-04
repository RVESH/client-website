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

        <nav className="footer__col" aria-label="Shop">
          <h3 className="footer__col-title">Shop</h3>
          <ul>
            {footerLinks.shop.map((item) => (
              <li key={item.label}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer__col" aria-label="Studio">
          <h3 className="footer__col-title">Studio</h3>
          <ul>
            {footerLinks.studio.map((item) => (
              <li key={item.label}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="container footer__bottom">
        <p className="footer__copyright">
          © {year} {site.fullName}. All rights reserved.
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
