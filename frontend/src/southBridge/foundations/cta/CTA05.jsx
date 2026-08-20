import "./CTA05.scss";

function CTA05({
  image = "/images/cta-05.webp",
  eyebrow = "COME SEE IT FOR YOURSELF",
  title = "The next chapter starts here.",
  label = "Explore",
  href = "#explore",
}) {
  return (
    <section className="sb-cta-05">
      <img src={image} alt="" aria-hidden="true" />

      <div className="sb-cta-05__overlay" />

      <div className="sb-cta-05__content">
        <span>{eyebrow}</span>
        <h2>{title}</h2>

        <a href={href}>
          {label}
          <b>↗</b>
        </a>
      </div>
    </section>
  );
}

export default CTA05;