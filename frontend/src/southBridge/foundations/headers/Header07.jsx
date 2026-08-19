import { useState } from "react";
import "./Header07.scss";

const DEFAULT_LINKS = [
  { label: "Menu", href: "#menu" },
  { label: "Our Story", href: "#story" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

function Header07({
  brand = "MORNING TABLE",
  links = DEFAULT_LINKS,
  reservationLabel = "Reserve a Table",
  reservationHref = "#reservation",
}) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sb-header-07">
      <div className="sb-header-07__container">
        <button
          type="button"
          className="sb-header-07__menu"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>

        <a href="#home" className="sb-header-07__brand">
          <span>{brand}</span>
          <small>RESTAURANT & BAR</small>
        </a>

        <nav
          className={`sb-header-07__nav ${
            open ? "sb-header-07__nav--open" : ""
          }`}
          aria-label="Restaurant navigation"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={reservationHref}
          className="sb-header-07__reservation"
        >
          {reservationLabel}
        </a>
      </div>
    </header>
  );
}

export default Header07;