import { useState } from "react";
import "./Header04.scss";

const DEFAULT_LINKS = [
  { label: "New In", href: "#new" },
  { label: "Women", href: "#women" },
  { label: "Men", href: "#men" },
  { label: "Accessories", href: "#accessories" },
];

function Header04({
  brand = "FORM",
  links = DEFAULT_LINKS,
  searchLabel = "Search",
  accountLabel = "Account",
  cartCount = 0,
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sb-header-04">
      <div className="sb-header-04__topbar">
        Free shipping on orders over $100
      </div>

      <div className="sb-header-04__main">
        <button
          type="button"
          className="sb-header-04__mobile"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <a href="#home" className="sb-header-04__brand">
          {brand}
        </a>

        <nav
          className={`sb-header-04__nav ${
            open ? "sb-header-04__nav--open" : ""
          }`}
          aria-label="Shopping navigation"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="sb-header-04__actions">
          <button type="button" aria-label={searchLabel}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="6.5" />
              <path d="M16 16l5 5" />
            </svg>
          </button>

          <a href="#account" aria-label={accountLabel}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="8" r="3.5" />
              <path d="M5 20c.6-3.2 3.1-5 7-5s6.4 1.8 7 5" />
            </svg>
          </a>

          <a href="#cart" className="sb-header-04__cart" aria-label="Cart">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 4h2l2 12h10l2-8H6" />
              <circle cx="9" cy="20" r="1.2" />
              <circle cx="17" cy="20" r="1.2" />
            </svg>

            {cartCount > 0 && (
              <span className="sb-header-04__cart-count">
                {cartCount}
              </span>
            )}
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header04;