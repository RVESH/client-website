import { useState } from "react";
import "./Header10.scss";

const defaultLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Practice", href: "#practice" },
  { label: "Journal", href: "#journal" },
];

function Header10({
  brand = "STUDIO 27",
  location = "New Delhi · Mumbai",
  links = defaultLinks,
  ctaLabel = "Enquire",
  ctaHref = "#contact",
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sb-header-10">
      <div className="sb-header-10__container">
        <div className="sb-header-10__left">
          <a href="#home" className="sb-header-10__brand">
            {brand}
          </a>

          <span className="sb-header-10__location">{location}</span>
        </div>

        <nav
          className={`sb-header-10__nav ${
            open ? "sb-header-10__nav--open" : ""
          }`}
          aria-label="Studio navigation"
        >
          {links.map((link, index) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              <span>0{index + 1}</span>
              {link.label}
            </a>
          ))}

          <a href={ctaHref} className="sb-header-10__cta">
            {ctaLabel}
          </a>
        </nav>

        <button
          type="button"
          className="sb-header-10__menu"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Header10;