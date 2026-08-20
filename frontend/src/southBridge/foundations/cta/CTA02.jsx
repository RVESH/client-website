import "./CTA02.scss";

function CTA02({
  eyebrow = "LET'S MAKE THE NEXT MOVE",
  title = "Good ideas deserve a strong ending.",
  primaryLabel = "Talk to Us",
  primaryHref = "#contact",
}) {
  return (
    <section className="sb-cta-02" aria-labelledby="cta-02-title">
      <div className="sb-cta-02__glow" aria-hidden="true" />

      <div className="sb-cta-02__container">
        <span>{eyebrow}</span>

        <h2 id="cta-02-title">
          Good ideas deserve
          <em>a strong ending.</em>
        </h2>

        <a href={primaryHref}>
          {primaryLabel}
          <span>↗</span>
        </a>
      </div>
    </section>
  );
}

export default CTA02;