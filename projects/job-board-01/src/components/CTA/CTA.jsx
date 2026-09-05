import { images } from "../../data/images";
import "./CTA.scss";

export default function CTA({ eyebrow, heading, desc, actions }) {
  return (
    <section className="cta" style={{ backgroundImage: `url(${images.ctaTexture.src})` }}>
      <div className="container cta__inner">
        <div className="cta__copy">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2 className="cta__heading">{heading}</h2>
          {desc && <p className="cta__desc">{desc}</p>}
        </div>
        {actions && <div className="cta__actions">{actions}</div>}
      </div>
    </section>
  );
}
