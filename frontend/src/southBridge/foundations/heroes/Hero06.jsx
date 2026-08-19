import "./Hero06.scss";

function Hero06({
  eyebrow = "SPRING COLLECTION / 2026",
  title = "Objects made to stay.",
  description =
    "Thoughtful pieces in natural materials, designed for everyday spaces and everyday rituals.",
  primaryLabel = "Shop Collection",
  primaryHref = "#shop",
  image = "/images/shop-hero.webp",
  price = "$180",
  product = "Oak Lounge Chair",
}) {
  return (
    <section className="sb-hero-06">
      <div className="sb-hero-06__container">
        <div className="sb-hero-06__copy">
          <span>{eyebrow}</span>
          <h1>{title}</h1>
          <p>{description}</p>

          <a href={primaryHref}>
            {primaryLabel}
            <b>→</b>
          </a>
        </div>

        <div className="sb-hero-06__product">
          <div className="sb-hero-06__image">
            <img src={image} alt={product} />
          </div>

          <div className="sb-hero-06__details">
            <span>{product}</span>
            <strong>{price}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero06;