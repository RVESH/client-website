import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { site } from "../../data/site";
import "./Footer.scss";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__col footer__col--brand">
          <span className="footer__brand">{site.name}</span>
          <p className="footer__tagline">{site.tagline}</p>
          <p className="footer__since">Established {site.founded}</p>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Navigate</h3>
          <ul>
            {site.nav.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Contact</h3>
          <ul className="footer__contact">
            <li>
              <MapPin size={15} strokeWidth={1.75} aria-hidden="true" />
              <span>{site.contact.addressLines.join(", ")}</span>
            </li>
            <li>
              <Phone size={15} strokeWidth={1.75} aria-hidden="true" />
              <a href={site.contact.phoneHref}>{site.contact.phoneDisplay}</a>
            </li>
            <li>
              <MessageCircle size={15} strokeWidth={1.75} aria-hidden="true" />
              <a href={site.contact.whatsappHref} target="_blank" rel="noopener noreferrer">
                WhatsApp us
              </a>
            </li>
            <li>
              <Mail size={15} strokeWidth={1.75} aria-hidden="true" />
              <a href={site.contact.emailHref}>{site.contact.email}</a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__heading">Hours</h3>
          <ul className="footer__hours">
            {site.contact.hours.map((h) => (
              <li key={h.day}>
                <span>{h.day}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>&copy; {year} {site.name}. All rights reserved.</p>
        <p>Chartered Accountants &amp; Financial Advisors</p>
      </div>
    </footer>
  );
}
