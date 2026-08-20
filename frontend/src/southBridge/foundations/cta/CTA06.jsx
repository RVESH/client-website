import "./CTA06.scss";

function CTA06({
  eyebrow = "MAKE THE NEXT THING COUNT",
  title = "Let's make something people remember.",
  label = "Let's Talk",
  href = "#contact",
}) {
  return (
    <section className="sb-cta-06">
      <div className="sb-cta-06__container">
        <span>{eyebrow}</span>

        <h2>{title}</h2>

        <a href={href}>
          <span>{label}</span>
          <b>↗</b>
        </a>
      </div>
    </section>
  );
}

export default CTA06;