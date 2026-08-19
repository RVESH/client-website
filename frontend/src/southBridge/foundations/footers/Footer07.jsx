import "./Footer07.scss";

function Footer07({
  brand = "ARC.",
  heading = "Let's make the next thing count.",
  email = "hello@arc.studio",
}) {
  return (
    <footer className="sb-footer-07">
      <div className="sb-footer-07__container">
        <div className="sb-footer-07__heading">
          <span>CONTACT</span>
          <h2>{heading}</h2>
        </div>

        <a href={`mailto:${email}`} className="sb-footer-07__email">
          {email}
          <span>↗</span>
        </a>

        <div className="sb-footer-07__grid">
          <strong>{brand}</strong>

          <div>
            <a href="#work">Selected Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <div>
            <a href="#instagram">Instagram</a>
            <a href="#linkedin">LinkedIn</a>
            <a href="#behance">Behance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer07;