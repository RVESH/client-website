import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

import "./Header.scss";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Team", path: "/team" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header
      className={`site-header ${
        open ? "is-open" : ""
      }`}
    >
      <div className="site-header__inner">

        <Link
          to="/"
          className="site-header__brand"
          onClick={closeMenu}
        >
          Maison Rosette
        </Link>

        <nav className="site-header__desktop-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__actions">

          <a
            href="tel:+919000000000"
            className="site-header__call"
          >
            Call
            <ArrowUpRight size={14} />
          </a>

          <button
            type="button"
            className="site-header__toggle"
            aria-label={
              open
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={open}
            onClick={() =>
              setOpen((value) => !value)
            }
          >
            {open ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>

        </div>
      </div>

      <div className="site-header__mobile-panel">

        <nav className="site-header__mobile-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <a
          href="tel:+919000000000"
          className="site-header__mobile-call"
          onClick={closeMenu}
        >
          Call the Studio
          <ArrowUpRight size={16} />
        </a>

      </div>
    </header>
  );
}