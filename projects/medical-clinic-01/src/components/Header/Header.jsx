import { useState } from "react";

import {
  Menu,
  X,
  Phone,
} from "lucide-react";

import {
  Link,
  NavLink,
} from "react-router-dom";

import { site } from "../../data/site";

import "./Header.scss";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="clinic-header">
      <div className="clinic-header__inner">

        <Link
          to="/"
          className="clinic-header__brand"
          onClick={closeMenu}
        >
          {site.name}
        </Link>

        <nav
          className={
            menuOpen
              ? "clinic-header__nav is-open"
              : "clinic-header__nav"
          }
          aria-label="Primary navigation"
        >
          <NavLink
            to="/"
            end
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/services"
            onClick={closeMenu}
          >
            Services
          </NavLink>

          <NavLink
            to="/doctors"
            onClick={closeMenu}
          >
            Doctors
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </nav>

        <div className="clinic-header__actions">
          <a
            href={`tel:${site.phone}`}
            className="clinic-header__call"
          >
            <Phone size={15} />
            Call
          </a>

          <button
            type="button"
            className="clinic-header__menu"
            aria-label={
              menuOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={menuOpen}
            onClick={() =>
              setMenuOpen(
                (current) => !current
              )
            }
          >
            {menuOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>

      </div>
    </header>
  );
}