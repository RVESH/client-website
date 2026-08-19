import { useState } from "react";
import "./Header01.scss";

const DEFAULT_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

function Header01({
  brand = "SouthBridge",
  links = DEFAULT_LINKS,
  ctaLabel = "Get Started",
  ctaHref = "#contact",
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sb-header-01">
      <div className="sb-header-01__container">
        <a className="sb-header-01__brand" href="#home" aria-label={`${brand} home`}>
          {brand}
        </a>

        <nav
          className={`sb-header-01__nav ${
            menuOpen ? "sb-header-01__nav--open" : ""
          }`}
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="sb-header-01__link"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}

          <a
            href={ctaHref}
            className="sb-header-01__cta"
            onClick={closeMenu}
          >
            {ctaLabel}
          </a>
        </nav>

        <button
          type="button"
          className={`sb-header-01__menu ${
            menuOpen ? "sb-header-01__menu--active" : ""
          }`}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Header01;