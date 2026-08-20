import "./CTA11.scss";

function CTA11({
  title = "Three good reasons to get started.",
  primaryLabel = "Start Now",
  primaryHref = "#start",
}) {
  return (
    <section className="sb-cta-11" aria-labelledby="cta-11-title">
      <div className="sb-cta-11__container">
        <article className="sb-cta-11__lead">
          <span>READY TO MOVE?</span>

          <h2 id="cta-11-title">{title}</h2>

          <a href={primaryHref}>
            {primaryLabel}
            <b>↗</b>
          </a>
        </article>

        <article className="sb-cta-11__item">
          <span>01</span>
          <strong>Clear direction</strong>
        </article>

        <article className="sb-cta-11__item sb-cta-11__item--accent">
          <span>02</span>
          <strong>Thoughtful execution</strong>
        </article>

        <article className="sb-cta-11__item sb-cta-11__item--dark">
          <span>03</span>
          <strong>Measurable momentum</strong>
        </article>
      </div>
    </section>
  );
}

export default CTA11;