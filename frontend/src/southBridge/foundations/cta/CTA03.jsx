import "./CTA03.scss";

function CTA03({
  eyebrow = "A PRIVATE INVITATION",
  title = "Make room for something memorable.",
  description =
    "Discover the collection, speak with our team or reserve your next experience.",
  primaryLabel = "Begin Your Visit",
  primaryHref = "#contact",
}) {
  return (
    <section className="sb-cta-03">
      <div className="sb-cta-03__container">
        <span>{eyebrow}</span>

        <h2>{title}</h2>

        <p>{description}</p>

        <a href={primaryHref}>
          {primaryLabel}
          <b>→</b>
        </a>
      </div>
    </section>
  );
}

export default CTA03;