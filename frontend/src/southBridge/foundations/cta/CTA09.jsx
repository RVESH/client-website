import "./CTA09.scss";

function CTA09({
  eyebrow = "LET'S DISCUSS WHAT'S NEXT",
  title = "A clearer path starts with one conversation.",
  description =
    "Bring us the challenge. We will bring the experience, structure and perspective to move it forward.",
  label = "Talk to an Advisor",
  href = "#contact",
}) {
  return (
    <section className="sb-cta-09">
      <div className="sb-cta-09__container">
        <div>
          <span>{eyebrow}</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <a href={href}>
          {label}
          <span>↗</span>
        </a>
      </div>
    </section>
  );
}

export default CTA09;