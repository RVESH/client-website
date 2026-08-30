import {
  Link,
  NavLink,
} from "react-router-dom";

import { site } from "../../data/site";

import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="clinic-footer">
      <div className="page-shell clinic-footer__top">

        <div>
          <Link
            to="/"
            className="clinic-footer__brand"
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

            <NavLink to="/services">
              Services
            </NavLink>

            <NavLink to="/doctors">
              Doctors
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
          <span>CONTACT</span>

          <a href={`tel:${site.phone}`}>
            {site.phone}
          </a>

          <a href={`mailto:${site.email}`}>
            {site.email}
          </a>

          <p>
            {site.address}
          </p>
        </div>

      </div>

      <div className="page-shell clinic-footer__bottom">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>

        <span>
          Healthcare · New Delhi
        </span>
      </div>
    </footer>
  );
}