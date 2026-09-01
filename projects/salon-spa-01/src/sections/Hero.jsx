import "./Hero.scss";
import site from "../data/site";
import Button from "../components/Button.jsx";

function Hero() {
  const { hero } = site;

  return (
    <section className="hero">
      <div className="container hero__row">
        <div className="hero__content">
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1 className="hero__heading">{hero.heading}</h1>
          <p className="hero__sub">{hero.subheading}</p>
          <div className="hero__actions">
            <Button action="enquire" variant="primary">
              {hero.primaryCta.label}
            </Button>
            <Button action="call" variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>
        <div className="hero__media">
          <img src={hero.image} alt="Interior of Maison Rosette studio" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
