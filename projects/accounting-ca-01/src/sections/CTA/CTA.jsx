import { ArrowRight, PhoneCall } from "lucide-react";
import { site } from "../../data/site";
import { images } from "../../data/images";
import Button from "../../components/Button/Button.jsx";
import "./CTA.scss";

export default function CTA() {
  return (
    <section
      className="cta-section"
      style={{ backgroundImage: `url(${images.ctaTexture.src})` }}
    >
      <div className="container cta-section__inner">
        <h2 className="cta-section__heading">{site.finalCta.heading}</h2>
        <p className="cta-section__desc">{site.finalCta.desc}</p>
        <div className="cta-section__actions">
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
