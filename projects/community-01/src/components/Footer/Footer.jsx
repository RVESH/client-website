import { Orbit } from 'lucide-react'
import { site, nav, footerLinks, social } from '../../data/site.js'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand-col">
          <a href="#top" className="footer__brand">
            <span className="footer__brand-mark">
              <Orbit size={16} strokeWidth={2.25} />
            </span>
            {site.name}
          </a>
          <p className="footer__tagline">{site.description}</p>
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

        <nav className="footer__col" aria-label="Site">
          <h3 className="footer__col-title">Site</h3>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer__col" aria-label="Product">
          <h3 className="footer__col-title">Product</h3>
          <ul>
            {footerLinks.product.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer__col" aria-label="Company">
          <h3 className="footer__col-title">Company</h3>
          <ul>
            {footerLinks.company.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer__col" aria-label="Resources">
          <h3 className="footer__col-title">Resources</h3>
          <ul>
            {footerLinks.resources.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="container footer__bottom">
        <p className="footer__copyright">
          © {year} {site.name}. All rights reserved.
        </p>
        <p className="footer__note">UI concept — no real accounts, data or messages are stored.</p>
      </div>
    </footer>
  )
}
