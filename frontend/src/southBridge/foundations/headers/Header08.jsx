import { useState } from "react";
import "./Header08.scss";

const defaultLinks = [
  { label: "About", href: "#about" },
  { label: "Selected Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
];

function Header08({
  brand = "ARC.",
  links = defaultLinks,
  ctaLabel = "Let's Build",
  ctaHref = "#contact",
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sb-header-08">
      <div className="sb-header-08__container">
        <a href="#home" className="sb-header-08__brand">
          {brand}
          <sup>®</sup>
        </a>

        <nav
          className={`sb-header-08__nav ${
            open ? "sb-header-08__nav--open" : ""
          }`}
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href={ctaHref} className="sb-header-08__cta">
          <span>{ctaLabel}</span>
          <b>↗</b>
        </a>

        <button
          type="button"
          className="sb-header-08__menu"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Header08;