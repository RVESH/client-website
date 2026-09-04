import { ArrowRight, PhoneCall } from "lucide-react";
import { site } from "../../data/site";
import { images } from "../../data/images";
import Button from "../../components/Button/Button.jsx";
import "./Hero.scss";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <img src={images.heroMain.src} alt={images.heroMain.alt} />
      </div>
      <div className="container hero__content">
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
    </section>
  );
}
