import "./About01.scss";

function About01({
  eyebrow = "OUR STORY",
  title = "Built around thoughtful work and lasting relationships.",
  description =
    "We believe the best work comes from clarity, care and a genuine understanding of the people behind every project.",
  image = "/images/about-01.webp",
  primaryLabel = "Discover our story",
  primaryHref = "#story",
}) {
  return (
    <section className="sb-about-01" aria-labelledby="about-01-title">
      <div className="sb-about-01__container">
        <div className="sb-about-01__visual">
          <img src={image} alt="Our team and workspace" />
          <div className="sb-about-01__year">EST. 2014</div>
        </div>

        <div className="sb-about-01__content">
          <span className="sb-about-01__eyebrow">{eyebrow}</span>

          <h2 id="about-01-title">{title}</h2>

          <p>{description}</p>

          <a href={primaryHref} className="sb-about-01__link">
            {primaryLabel}
            <span>↗</span>
          </a>

          <div className="sb-about-01__signature">
            <span>Independent by design.</span>
            <strong>01—12</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About01;