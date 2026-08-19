import { useState } from "react";
import "./Header01.scss";

const defaultLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

function Header01({
  brand = "NORTH",
  links = defaultLinks,
  ctaLabel = "Get Started",
  ctaHref = "#contact",
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sb-header-01">
      <div className="sb-header-01__container">
        <a href="#home" className="sb-header-01__brand">
          {brand}
        </a>

        <button
          type="button"
          className={`sb-header-01__menu ${
            menuOpen ? "sb-header-01__menu--active" : ""
          }`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          className={`sb-header-01__nav ${
            menuOpen ? "sb-header-01__nav--open" : ""
          }`}
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}

          <a href={ctaHref} className="sb-header-01__cta" onClick={closeMenu}>
            {ctaLabel}
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header01;