import { NavLink } from "react-router-dom";

import "./Footer.scss";

const exploreLinks = [
  {
    label: "Home",
    to: "/",
    end: true,
  },
  {
    label: "Menu",
    to: "/menu",
  },
  {
    label: "About",
    to: "/about",
  },
  {
    label: "Reservations",
    to: "/reservation",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/",
  },
  {
    label: "X / Twitter",
    href: "https://x.com/",
  },
];

function Footer() {
  return (
    <footer className="restaurant-footer">
      <div className="restaurant-footer__inner">

        <div className="restaurant-footer__main">

          <div className="restaurant-footer__brand-block">
            <NavLink
              to="/"
              end
              className="restaurant-footer__brand"
            >
              LUMA
            </NavLink>

            <p>
              Seasonal cooking, considered details
              and long evenings.
            </p>
          </div>

          <div className="restaurant-footer__column">
            <span className="restaurant-footer__label">
              EXPLORE
            </span>

            <nav
              className="restaurant-footer__nav"
              aria-label="Explore"
            >
              {exploreLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="restaurant-footer__column">
            <span className="restaurant-footer__label">
              CONNECT WITH US
            </span>

            <nav
              className="restaurant-footer__social"
              aria-label="Social media"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label} ↗
                </a>
              ))}
            </nav>
          </div>

          <div className="restaurant-footer__contact">
            <span className="restaurant-footer__label">
              VISIT
            </span>

            <address>
              18 Willow Lane
              <br />
              New Delhi
              <br />
              India
            </address>

            <a href="tel:+919000000000">
              +91 90000 00000
            </a>

            <a href="mailto:hello@luma.example">
              hello@luma.example
            </a>
          </div>

        </div>

        <div className="restaurant-footer__bottom">
          <span>
            © {new Date().getFullYear()} LUMA
          </span>

          <span>
            Tue — Sat / 18:00 — 23:00
          </span>

          <span>
            Privacy · Terms
          </span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;