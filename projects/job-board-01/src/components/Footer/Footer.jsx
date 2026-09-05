import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { site } from "../../data/site";
import "./Footer.scss";

export default function Footer() {
  const year = new Date().getFullYear();
  const whatsappHref = `https://wa.me/${site.contact.whatsappNumber}`;

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__col footer__col--brand">
          <span className="footer__brand">
            Hire<em>ly</em>
          </span>
          <p className="footer__tagline">{site.tagline}</p>
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
              <MapPin size={15} strokeWidth={2} aria-hidden="true" />
              <span>{site.contact.addressLines.join(", ")}</span>
            </li>
            <li>
              <Phone size={15} strokeWidth={2} aria-hidden="true" />
              <a href={site.contact.phoneHref}>{site.contact.phoneDisplay}</a>
            </li>
            <li>
              <MessageCircle size={15} strokeWidth={2} aria-hidden="true" />
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                WhatsApp us
              </a>
            </li>
            <li>
              <Mail size={15} strokeWidth={2} aria-hidden="true" />
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
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
        <p>A frontend showcase — not a live application backend.</p>
      </div>
    </footer>
  );
}
