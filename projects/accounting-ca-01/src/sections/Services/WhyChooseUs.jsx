import { site } from "../../data/site";
import "./WhyChooseUs.scss";

export default function WhyChooseUs() {
  return (
    <section className="section why section--tight">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Our commitments</span>
            <h2 className="section-head__title">{site.whyChooseUs.heading}</h2>
          </div>
          <p className="section-head__desc">{site.whyChooseUs.desc}</p>
        </div>

        <div className="why__grid">
          {site.whyChooseUs.items.map((item) => (
            <div className="why__item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
