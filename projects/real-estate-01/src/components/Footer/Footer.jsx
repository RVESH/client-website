import {
  ArrowUpRight,
} from "lucide-react";

import {
  Link,
  NavLink,
} from "react-router-dom";

import { site } from "../../data/site";

import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="north-footer">
      <div className="page-shell">

        <div className="north-footer__top">

          <div>
            <Link
              to="/"
              className="north-footer__brand"
            >
              {site.name}
            </Link>

            <p>
              {site.tagline}
            </p>
          </div>

          <div>
            <span>EXPLORE</span>

            <nav>
              <NavLink to="/">
                Home
              </NavLink>

              <NavLink to="/properties">
                Properties
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

            <nav>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
                <ArrowUpRight size={12} />
              </a>

              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
                <ArrowUpRight size={12} />
              </a>

              <a
                href={site.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
                <ArrowUpRight size={12} />
              </a>
            </nav>
          </div>

          <div>
            <span>CONTACT</span>

            <a href={`tel:${site.phone}`}>
              {site.phone}
            </a>

            <a
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </div>

        </div>

        <div className="north-footer__bottom">
          <span>
            © {new Date().getFullYear()}{" "}
            {site.name}
          </span>

          <span>
            Private residential · Delhi NCR
          </span>
        </div>

      </div>
    </footer>
  );
}