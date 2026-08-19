import { useState } from "react";
import "./Header02.scss";

const DEFAULT_LINKS = [
  { label: "Collection", href: "#collection" },
  { label: "Story", href: "#story" },
  { label: "Journal", href: "#journal" },
];

function Header02({
  brand = "ATELIER",
  subtitle = "EST. 1998",
  links = DEFAULT_LINKS,
  actionLabel = "Visit Us",
  actionHref = "#contact",
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sb-header-02">
      <div className="sb-header-02__top">
        <span>{subtitle}</span>

        <a href={actionHref} className="sb-header-02__top-link">
          {actionLabel}
        </a>
      </div>

      <div className="sb-header-02__main">
        <button
          type="button"
          className="sb-header-02__toggle"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span />
          <span />
        </button>

        <a href="#home" className="sb-header-02__brand">
          {brand}
        </a>

        <nav
          className={`sb-header-02__nav ${
            open ? "sb-header-02__nav--open" : ""
          }`}
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
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
