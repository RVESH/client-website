import { useState } from "react";
import "./Header02.scss";

const defaultLinks = [
  { label: "Collection", href: "#collection" },
  { label: "Our Story", href: "#story" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#contact" },
];

function Header02({
  brand = "ATELIER",
  edition = "EST. 1998",
  links = defaultLinks,
  actionLabel = "Visit Us",
  actionHref = "#contact",
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sb-header-02">
      <div className="sb-header-02__utility">
        <span>{edition}</span>
        <a href={actionHref}>{actionLabel}</a>
      </div>

      <div className="sb-header-02__main">
        <button
          type="button"
          className="sb-header-02__menu"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>

        <a href="#home" className="sb-header-02__brand">
          {brand}
        </a>

        <nav
          className={`sb-header-02__nav ${
            menuOpen ? "sb-header-02__nav--open" : ""
          }`}
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header02;