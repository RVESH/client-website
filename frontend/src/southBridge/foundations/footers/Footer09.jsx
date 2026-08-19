import "./Footer09.scss";

function Footer09({
  brand = "SOUTH",
  description =
    "Building durable businesses through strategy, technology and thoughtful execution.",
}) {
  return (
    <footer className="sb-footer-09">
      <div className="sb-footer-09__container">
        <div className="sb-footer-09__intro">
          <span>{brand}</span>
          <p>{description}</p>
        </div>

        <div className="sb-footer-09__columns">
          <div>
            <h3>Offices</h3>
            <p>London</p>
            <p>New York</p>
            <p>Singapore</p>
          </div>

          <div>
            <h3>Company</h3>
            <a href="#about">About</a>
            <a href="#careers">Careers</a>
            <a href="#contact">Contact</a>
          </div>

          <div>
            <h3>Legal</h3>
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#accessibility">Accessibility</a>
          </div>
        </div>

        <div className="sb-footer-09__bottom">
          <span>© 2026 {brand} Group</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer09;