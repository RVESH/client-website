import { useState } from "react";
import "./Header05.scss";

const DEFAULT_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Studio", href: "#studio" },
  { label: "Capabilities", href: "#capabilities" },
];

function Header05({
  brand = "MONO.",
  links = DEFAULT_LINKS,
  ctaLabel = "Let's Talk",
  ctaHref = "#contact",
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sb-header-05">
      <div className="sb-header-05__container">
        <a href="#home" className="sb-header-05__brand">
          {brand}
        </a>

        <nav
          className={`sb-header-05__nav ${
            open ? "sb-header-05__nav--open" : ""
          }`}
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href={ctaHref} className="sb-header-05__cta">
          <span>{ctaLabel}</span>
          <span aria-hidden="true">↗</span>
        </a>

        <button
          type="button"
          className="sb-header-05__toggle"
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

export default Header05;