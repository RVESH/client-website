import { useState } from "react";
import "./Header03.scss";

const DEFAULT_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
];

function Header03({
  brand = "NORTH",
  links = DEFAULT_LINKS,
  ctaLabel = "Start a Project",
  ctaHref = "#contact",
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sb-header-03">
      <div className="sb-header-03__container">
        <a href="#home" className="sb-header-03__brand">
          <span className="sb-header-03__brand-mark">N</span>
          <span>{brand}</span>
        </a>

        <button
          type="button"
          className="sb-header-03__menu"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span>Menu</span>
          <span className="sb-header-03__menu-icon">
            <i />
            <i />
          </span>
        </button>

        <nav
          className={`sb-header-03__nav ${
            open ? "sb-header-03__nav--open" : ""
          }`}
          aria-label="Primary navigation"
        >
          {links.map((link, index) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              <small>0{index + 1}</small>
              {link.label}
            </a>
          ))}

          <a
            href={ctaHref}
            className="sb-header-03__cta"
            onClick={() => setOpen(false)}
          >
            {ctaLabel}
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header03;