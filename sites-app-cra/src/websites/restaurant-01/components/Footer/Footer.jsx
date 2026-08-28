import { NavLink } from "react-router-dom";
import "./Footer.scss";

const footerLinks = [
  {
    label: "Home",
    to: "/restaurant-01",
    end: true,
  },
  {
    label: "Menu",
    to: "/restaurant-01/menu",
  },
  {
    label: "About",
    to: "/restaurant-01/about",
  },
  {
    label: "Contact",
    to: "/restaurant-01/contact",
  },
  {
    label: "Reservations",
    to: "/restaurant-01/reservation",
  },
];

function Footer({
  brand = "LUMA",
  description =
    "Seasonal cooking, considered details and long evenings.",
  address = "18 Willow Lane, New Delhi",
  phone = "+91 90000 00000",
  email = "hello@luma.example",
}) {
  return (
    <footer className="sb-footer-restaurant">
      <div className="sb-footer-restaurant__inner">
        <div className="sb-footer-restaurant__brand">
          <NavLink
            to="/restaurant-01"
            end
          >
            {brand}
          </NavLink>

          <p>{description}</p>
        </div>

        <nav
          className="sb-footer-restaurant__nav"
          aria-label="Footer navigation"
        >
          {footerLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="sb-footer-restaurant__contact">
          <span>VISIT</span>

          <address>
            {address}
          </address>

          <a href={`tel:${phone}`}>
            {phone}
          </a>

          <a href={`mailto:${email}`}>
            {email}
          </a>
        </div>

        <div className="sb-footer-restaurant__bottom">
          <span>
            © {new Date().getFullYear()} {brand}
          </span>

          <span>
            Tue — Sat / 18:00 — 23:00
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;