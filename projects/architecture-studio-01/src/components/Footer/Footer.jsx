import { Link } from 'react-router-dom'
import { site } from '../../data/site.js'
import './Footer.scss'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__intro">
          <p className="footer__mark">{site.name}</p>
          <p className="lede">{site.tagline}</p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <p className="eyebrow">Studio</p>
          <ul>
            {site.nav.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__contact">
          <p className="eyebrow">Contact</p>
          <address>
            <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            <a href={`tel:${site.contact.phone.replace(/\s+/g, '')}`}>{site.contact.phone}</a>
            <span>{site.contact.address.line1}, {site.contact.address.line2}</span>
          </address>
        </div>

        <div className="footer__social">
          <p className="eyebrow">Follow</p>
          <ul>
            {site.social.map((s) => (
              <li key={s.label}>
                <a href={s.url} target="_blank" rel="noreferrer">{s.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>&copy; {year} {site.name}. All rights reserved.</p>
        <p>Founded {site.founded}</p>
      </div>
    </footer>
  )
}
