import { Link } from "react-router-dom";
import "./Footer.scss";
import site from "../data/site";
import locations from "../data/locations";
import Button from "./Button.jsx";

function Footer() {
  const primaryLocation = locations[0];

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <p className="footer__logo">Maison Rosette</p>
          <p className="footer__tagline">{site.tagline}</p>
          <div className="footer__actions">
            <Button action="call" variant="secondary" size="sm">
              Call
            </Button>
            <Button action="whatsapp" variant="secondary" size="sm">
              WhatsApp
            </Button>
            <Button action="instagram" variant="ghost" size="sm">
              Instagram
            </Button>
          </div>
        </div>

        <nav className="footer__col" aria-label="Site">
          <p className="footer__heading">Studio</p>
          <ul>
            {site.nav.map((item) => (
              <li key={item.path}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <p className="footer__heading">Reach us</p>
          <ul>
            <li>{site.contact.phoneDisplay}</li>
            <li>{site.contact.email}</li>
            {primaryLocation && (
              <li>
                {primaryLocation.addressLine1}, {primaryLocation.addressLine2}
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <hr className="hairline" />
        <div className="footer__bottom-row">
          <p>&copy; {new Date().getFullYear()} Maison Rosette. All rights reserved.</p>
          <p className="footer__note">{site.footerNote}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
