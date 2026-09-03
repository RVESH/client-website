import { ArrowRight, PhoneCall } from "lucide-react";
import { site } from "../../data/site";
import { images } from "../../data/images";
import Button from "../../components/Button/Button.jsx";
import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <span className="eyebrow">{site.hero.eyebrow}</span>
          <h1 className="hero__headline">{site.hero.headline}</h1>
          <p className="hero__sub">{site.hero.sub}</p>
          <div className="hero__actions">
            <Button to="/contact" variant="primary" icon={ArrowRight}>
              {site.cta.primary}
            </Button>
            <Button href={site.contact.phoneHref} variant="secondary" icon={PhoneCall}>
              {site.cta.secondary}
            </Button>
          </div>
        </div>

        <div className="hero__figure">
          <img src={images.heroMain.src} alt={images.heroMain.alt} />
          <div className="hero__figure-caption">
            <span className="hero__figure-value">{site.stats.items[0].value}</span>
            <span className="hero__figure-label">Years advising ambitious businesses</span>
          </div>
        </div>
      </div>
    </section>
  );
}
