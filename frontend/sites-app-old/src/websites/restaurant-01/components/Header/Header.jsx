import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const defaultLinks = [
  {
    label: "Home",
    to: "/restaurant-01",
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
];

function Header({
  brand = "LUMA",
  links = defaultLinks,
  ctaLabel = "Reserve a Table",
  ctaTo = "/restaurant-01/reservation",
}) {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="sb-header-05">
      <div className="sb-header-05__container">

        <NavLink
          to="/restaurant-01"
          end
          className="sb-header-05__brand"
          onClick={closeMenu}
          aria-label={`${brand} home`}
        >
          {brand}
        </NavLink>

        <nav
          className={`sb-header-05__nav ${
            open
              ? "sb-header-05__nav--open"
              : ""
          }`}
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={
                link.to ===
                "/restaurant-01"
              }
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <NavLink
          to={ctaTo}
          className="sb-header-05__cta"
          onClick={closeMenu}
        >
          <span>{ctaLabel}</span>
          <b aria-hidden="true">↗</b>
        </NavLink>

        <button
          type="button"
          className="sb-header-05__menu"
          onClick={() =>
            setOpen((previous) => !previous)
          }
          aria-expanded={open}
          aria-controls="restaurant-primary-navigation"
          aria-label={
            open
              ? "Close navigation"
              : "Open navigation"
          }
        >
          <span />
          <span />
        </button>

      </div>
    </header>
  );
}

export default Header;