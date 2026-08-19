import "./Footer01.scss";

const DEFAULT_LINKS = {
  Company: [
    { label: "About", href: "#about" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
  ],
  Product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Integrations", href: "#integrations" },
  ],
  Resources: [
    { label: "Journal", href: "#journal" },
    { label: "Help Center", href: "#help" },
    { label: "Documentation", href: "#docs" },
  ],
};

function Footer01({
  brand = "NORTH",
  description =
    "Thoughtful digital products built for ambitious teams and growing businesses.",
  links = DEFAULT_LINKS,
  copyright = "© 2026 North. All rights reserved.",
}) {
  return (
    <footer className="sb-footer-01">
      <div className="sb-footer-01__container">
        <div className="sb-footer-01__top">
          <div className="sb-footer-01__intro">
            <a href="#home" className="sb-footer-01__brand">
              {brand}
            </a>

            <p>{description}</p>
          </div>

          <div className="sb-footer-01__columns">
            {Object.entries(links).map(([title, items]) => (
              <div className="sb-footer-01__column" key={title}>
                <h3>{title}</h3>

                <nav aria-label={`${title} links`}>
                  {items.map((item) => (
                    <a key={item.href} href={item.href}>
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        <div className="sb-footer-01__bottom">
          <span>{copyright}</span>

          <div className="sb-footer-01__legal">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer01;