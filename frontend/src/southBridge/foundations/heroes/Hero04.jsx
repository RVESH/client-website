import "./Hero04.scss";

function Hero04({
  eyebrow = "ARCHITECTURE / INTERIORS",
  title = "Spaces that age beautifully.",
  description =
    "A practice focused on material, light and spaces that remain relevant long after completion.",
  image = "/images/architecture-hero.webp",
  label = "Explore the Practice",
  href = "#practice",
}) {
  return (
    <section className="sb-hero-04">
      <div className="sb-hero-04__image">
        <img src={image} alt="Architectural space" />
      </div>

      <div className="sb-hero-04__content">
        <span>{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>

        <a href={href}>
          <span>{label}</span>
          <strong>↗</strong>
        </a>
      </div>

      <div className="sb-hero-04__line" />
      <div className="sb-hero-04__location">
        <span>28.6139° N</span>
        <span>77.2090° E</span>
      </div>
    </section>
  );
}

export default Hero04;