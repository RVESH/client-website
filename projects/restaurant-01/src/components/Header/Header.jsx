import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./Header.scss";

const links = [
  { label: "Home", to: "/home", end: true },
  { label: "Menu", to: "/menu", end: false },
  { label: "About", to: "/about", end: false },
  { label: "Contact", to: "/contact", end: false },
];

function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="restaurant-header">
      <div className="restaurant-header__inner">
        <NavLink
          to="/home"
          className="restaurant-header__brand"
          onClick={closeMenu}
        >
          LUMA
        </NavLink>

        <nav
          className={`restaurant-header__nav ${
            open ? "restaurant-header__nav--open" : ""
          }`}
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <NavLink
          to="/reservation"
          className="restaurant-header__cta"
          onClick={closeMenu}
        >
          <span>Reserve a Table</span>
          <strong aria-hidden="true">↗</strong>
        </NavLink>

        <button
          type="button"
          className="restaurant-header__menu"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Header;