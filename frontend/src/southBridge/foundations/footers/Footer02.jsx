import "./Footer02.scss";

const DEFAULT_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Story", href: "#story" },
  { label: "Reservations", href: "#reservations" },
];

function Footer02({
  brand = "MORNING TABLE",
  location = "17 Willow Street · New York",
  links = DEFAULT_LINKS,
  phone = "+1 212 555 0184",
  email = "hello@example.com",
}) {
  return (
    <footer className="sb-footer-02">
      <div className="sb-footer-02__container">
        <div className="sb-footer-02__brand">{brand}</div>

        <div className="sb-footer-02__rule" />

        <div className="sb-footer-02__grid">
          <div>
            <span className="sb-footer-02__eyebrow">Visit</span>
            <p>{location}</p>
          </div>

          <div>
            <span className="sb-footer-02__eyebrow">Contact</span>
            <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
            <a href={`mailto:${email}`}>{email}</a>
          </div>

          <nav aria-label="Footer navigation">
            {links.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="sb-footer-02__bottom">
          <span>© 2026 {brand}</span>
          <span>Crafted with intention.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer02;