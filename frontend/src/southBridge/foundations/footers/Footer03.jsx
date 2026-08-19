import "./Footer03.scss";

function Footer03({
  brand = "MONO.",
  heading = "Have a project in mind?",
  email = "hello@mono.studio",
  ctaLabel = "Start a conversation",
  ctaHref = "mailto:hello@mono.studio",
}) {
  return (
    <footer className="sb-footer-03">
      <div className="sb-footer-03__container">
        <span className="sb-footer-03__label">Let's make something useful.</span>

        <h2>{heading}</h2>

        <a href={ctaHref} className="sb-footer-03__cta">
          {ctaLabel}
          <span>↗</span>
        </a>

        <div className="sb-footer-03__bottom">
          <strong>{brand}</strong>
          <a href={ctaHref}>{email}</a>

          <span>© 2026</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer03;