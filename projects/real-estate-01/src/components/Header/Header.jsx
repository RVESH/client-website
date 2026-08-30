import { useState } from "react";

import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

import {
  Link,
  NavLink,
} from "react-router-dom";

import { site } from "../../data/site";

import "./Header.scss";

export default function Header() {
  const [open, setOpen] =
    useState(false);

  const closeMenu = () =>
    setOpen(false);

  return (
    <header className="north-header">

      <div className="north-header__inner">

        <Link
          to="/"
          className="north-header__brand"
          onClick={closeMenu}
        >
          {site.name}
        </Link>

        <nav
          className={
            open
              ? "north-header__nav is-open"
              : "north-header__nav"
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
            to="/properties"
            onClick={closeMenu}
          >
            Properties
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

        <div className="north-header__actions">

          <a href={`tel:${site.phone}`}>
            Call
            <ArrowUpRight size={13} />
          </a>

          <button
            type="button"
            aria-label={
              open
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={open}
            onClick={() =>
              setOpen((value) => !value)
            }
          >
            {open ? (
              <X size={18} />
            ) : (
              <Menu size={18} />
            )}
          </button>

        </div>

      </div>

    </header>
  );
}