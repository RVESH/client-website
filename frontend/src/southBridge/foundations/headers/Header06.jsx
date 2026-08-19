import { useState } from "react";
import "./Header06.scss";

const DEFAULT_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

function Header06({
  brand = "LUMA",
  links = DEFAULT_LINKS,
  ctaLabel = "Join Now",
  ctaHref = "#join",
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sb-header-06">
      <div className="sb-header-06__shell">
        <a href="#home" className="sb-header-06__brand">
          <span className="sb-header-06__dot" />
          {brand}
        </a>

        <nav
          className={`sb-header-06__nav ${
            open ? "sb-header-06__nav--open" : ""
          }`}
          aria-label="Primary navigation"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}

          <a href={ctaHref} className="sb-header-06__cta">
            {ctaLabel}
          </a>
        </nav>

        <button
          type="button"
          className="sb-header-06__menu"
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

export default Header06;