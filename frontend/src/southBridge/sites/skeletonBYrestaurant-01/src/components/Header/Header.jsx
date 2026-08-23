import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./Header.scss";

const defaultLinks = [
  { label: "Home", path: "/" },
  { label: "Menu", path: "/menu" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

function Header({
  brand = "LUMA",
  links = defaultLinks,
  ctaLabel = "Reserve a Table",
  ctaPath = "/reservation",
}) {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="sb-header-03">
      <div className="sb-header-03__container">

        <Link
          to="/"
          className="sb-header-03__brand"
          onClick={closeMenu}
        >
          <span className="sb-header-03__mark">L</span>
          <span>{brand}</span>
        </Link>

        <div className="sb-header-03__center">
          <span className="sb-header-03__status">
            <i />
            Open Tuesday — Sunday
          </span>
        </div>

        <button
          type="button"
          className={`sb-header-03__toggle ${
            open ? "sb-header-03__toggle--active" : ""
          }`}
          onClick={() => setOpen((previous) => !previous)}
          aria-expanded={open}
          aria-controls="restaurant-navigation"
          aria-label="Toggle navigation"
        >
          <span>Menu</span>
          <i />
          <i />
        </button>

        <nav
          id="restaurant-navigation"
          className={`sb-header-03__nav ${
            open ? "sb-header-03__nav--open" : ""
          }`}
          aria-label="Primary navigation"
        >
          {links.map((link, index) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={closeMenu}
            >
              <small>0{index + 1}</small>
              {link.label}
            </NavLink>
          ))}

          <Link
            to={ctaPath}
            className="sb-header-03__cta"
            onClick={closeMenu}
          >
            {ctaLabel} ↗
          </Link>
        </nav>

      </div>
    </header>
  );
}

export default Header;