import { Link } from 'react-router-dom'
import Icon from '../Icon/Icon.jsx'
import { site, nav, footerLinks, social, contact, buildMailLink, buildTelLink } from '../../data/site.js'
import './Footer.scss'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand-col">
          <Link to="/" className="footer__brand">
            <span className="footer__brand-mark">
              <Icon name="sparkles" size={16} strokeWidth={2}  />
            </span>
            {site.name}
          </Link>
          <p className="footer__tagline">{site.description}</p>
          <div className="footer__contact-links">
            <a href={buildMailLink()} className="footer__contact-link">
              <Icon name="mail" size={14}  /> {contact.email}
            </a>
            <a href={buildTelLink()} className="footer__contact-link">
              <Icon name="phone" size={14}  /> {contact.phoneDisplay}
            </a>
          </div>
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

        <nav className="footer__col" aria-label="Product">
          <h3 className="footer__col-title">Product</h3>
          <ul>
            {footerLinks.product.map((item) => (
              <li key={item.label}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer__col" aria-label="Company">
          <h3 className="footer__col-title">Company</h3>
          <ul>
            {footerLinks.company.map((item) => (
              <li key={item.label}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer__col" aria-label="Resources">
          <h3 className="footer__col-title">Resources</h3>
          <ul>
            {footerLinks.resources.map((item) => (
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
