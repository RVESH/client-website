import { useState } from "react";
import "./Header04.scss";

const defaultLinks = [
  { label: "New In", href: "#new" },
  { label: "Women", href: "#women" },
  { label: "Men", href: "#men" },
  { label: "Collections", href: "#collections" },
];

function Header04({
  brand = "FORM",
  links = defaultLinks,
  cartCount = 0,
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sb-header-04">
      <div className="sb-header-04__announcement">
        Complimentary shipping on orders over $100
      </div>

      <div className="sb-header-04__main">
        <button
          type="button"
          className="sb-header-04__mobile"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <a href="#home" className="sb-header-04__brand">
          {brand}
        </a>

        <nav
          className={`sb-header-04__nav ${
            open ? "sb-header-04__nav--open" : ""
          }`}
          aria-label="Shop navigation"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="sb-header-04__actions">
          <button type="button" aria-label="Search">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="10.8" cy="10.8" r="6.4" />
              <path d="M16 16l4.6 4.6" />
            </svg>
          </button>

          <a href="#account" aria-label="Account">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="8" r="3.4" />
              <path d="M5 20c.7-3.1 3-4.8 7-4.8s6.3 1.7 7 4.8" />
            </svg>
          </a>

          <a href="#bag" className="sb-header-04__bag" aria-label="Shopping bag">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 8.5h12l1 11H5l1-11Z" />
              <path d="M9 8.5V6a3 3 0 0 1 6 0v2.5" />
            </svg>

            {cartCount > 0 && <span>{cartCount}</span>}
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header04;