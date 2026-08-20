import "./CTA12.scss";

function CTA12({
  eyebrow = "A FINAL THOUGHT",
  title = "The right next step is usually simpler than it looks.",
  label = "Let's Begin",
  href = "#contact",
}) {
  return (
    <section className="sb-cta-12">
      <div className="sb-cta-12__container">
        <span>{eyebrow}</span>

        <h2>{title}</h2>

        <a href={href}>
          <span>{label}</span>
          <b>→</b>
        </a>
      </div>
    </section>
  );
}

export default CTA12;