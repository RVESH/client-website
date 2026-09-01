import { NavLink } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Globe, Share2 } from 'lucide-react';
import { site, whatsappHref } from '../../data/site';
import { services } from '../../data/services';
import './Footer.scss';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <div className="site-footer__wordmark">{site.name}</div>
          <p>{site.description}</p>
          <p className="site-footer__license">{site.license}</p>
          <div className="site-footer__social">
            <a href={site.social.instagram} aria-label="Instagram" target="_blank" rel="noreferrer"><Share2 size={18} /></a>
            <a href={site.social.facebook} aria-label="Facebook" target="_blank" rel="noreferrer"><Globe size={18} /></a>
          </div>
        </div>

        <div className="site-footer__col">
          <h3>Services</h3>
          <ul>
            {services.map((s) => (
              <li key={s.slug}><NavLink to="/services">{s.name}</NavLink></li>
            ))}
          </ul>
        </div>

        <div className="site-footer__col">
          <h3>Company</h3>
          <ul>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/contact">Request a quote</NavLink></li>
          </ul>
        </div>

        <div className="site-footer__col site-footer__contact">
          <h3>Get in touch</h3>
          <ul>
            <li>
              <a href={site.phoneHref}><Phone size={16} /><span>{site.phoneDisplay}</span></a>
            </li>
            <li>
              <a href={whatsappHref()} target="_blank" rel="noreferrer"><MessageCircle size={16} /><span>WhatsApp</span></a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}><Mail size={16} /><span>{site.email}</span></a>
            </li>
            <li>
              <span className="site-footer__address"><MapPin size={16} /><span>{site.address.line1}, {site.address.line2}</span></span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>&copy; {year} {site.fullName}. All rights reserved.</p>
        <p>Serving {site.serviceAreas[0]} &amp; the surrounding area.</p>
      </div>
    </footer>
  );
}
