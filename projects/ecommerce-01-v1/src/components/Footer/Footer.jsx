import { NavLink } from "react-router-dom";

import { site } from "../../data/site";

import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="store-footer">
      <div className="store-footer__inner">

        <div className="store-footer__grid">

          <div className="store-footer__brand-block">
            <NavLink
              to="/"
              className="store-footer__brand"
            >
              {site.name}
            </NavLink>

            <p>
              {site.description}
            </p>
          </div>

          <div>
            <span>EXPLORE</span>

            <nav className="store-footer__links">
              <NavLink to="/">
                Home
              </NavLink>

              <NavLink to="/collection">
                Collection
              </NavLink>

              <NavLink to="/about">
                About
              </NavLink>

              <NavLink to="/contact">
                Contact
              </NavLink>
            </nav>
          </div>

          <div>
            <span>CONNECT</span>

            <nav className="store-footer__links">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram ↗
              </a>

              <a
                href={site.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube ↗
              </a>

              <a
                href={site.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                X / Twitter ↗
              </a>
            </nav>
          </div>

          <div>
            <span>CONTACT</span>

            <address>
              {site.contact.address}
            </address>

            <a
              href={`tel:${site.contact.phone}`}
            >
              {site.contact.phone}
            </a>

            <a
              href={`mailto:${site.contact.email}`}
            >
              {site.contact.email}
            </a>
          </div>

        </div>

        <div className="store-footer__bottom">
          <span>
            © {new Date().getFullYear()}{" "}
            {site.name}
          </span>

          <span>
            Built for everyday living.
          </span>
        </div>

      </div>
    </footer>
  );
}