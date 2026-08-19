import { useState } from "react";
import "./Header09.scss";

const defaultLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Insights", href: "#insights" },
  { label: "Company", href: "#company" },
  { label: "Careers", href: "#careers" },
];

function Header09({
  brand = "SOUTH & CO.",
  location = "London · New York · Singapore",
  links = defaultLinks,
  ctaLabel = "Talk to us",
  ctaHref = "#contact",
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sb-header-09">
      <div className="sb-header-09__top">
        <span>{location}</span>
        <span>Independent since 2008</span>
      </div>

      <div className="sb-header-09__main">
        <a href="#home" className="sb-header-09__brand">
          {brand}
        </a>

        <nav
          className={`sb-header-09__nav ${
            open ? "sb-header-09__nav--open" : ""
          }`}
          aria-label="Corporate navigation"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}

          <a href={ctaHref} className="sb-header-09__cta">
            {ctaLabel}
          </a>
        </nav>

        <button
          type="button"
          className="sb-header-09__menu"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Header09;