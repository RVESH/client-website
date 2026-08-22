import { useState } from "react";
import "./Header.scss";

const defaultLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
];

function Header({
  brand = "NORTH /",
  links = defaultLinks,
  ctaLabel = "Start a Project",
  ctaHref = "#contact",
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sb-header-03">
      <div className="sb-header-03__container">
        <a href="#home" className="sb-header-03__brand">
          <span className="sb-header-03__mark">N</span>
          <span>{brand}</span>
        </a>

        <div className="sb-header-03__center">
          <span className="sb-header-03__status">
            <i /> Available for select projects
          </span>
        </div>

        <button
          type="button"
          className={`sb-header-03__toggle ${
            open ? "sb-header-03__toggle--active" : ""
          }`}
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span>Menu</span>
          <i />
          <i />
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

          <a href={ctaHref} className="sb-header-03__cta">
            {ctaLabel} ↗
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;