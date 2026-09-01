import "./WhyChooseUs.scss";
import site from "../data/site";

function WhyChooseUs() {
  const { whyChooseUs } = site;

  return (
    <section className="section why">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">The Rosette difference</span>
          <h2>{whyChooseUs.heading}</h2>
          <p className="section-sub">{whyChooseUs.subheading}</p>
        </div>

        <div className="why__grid">
          {whyChooseUs.points.map((point) => (
            <div className="why__item" key={point.title}>
              <span className="why__mark" aria-hidden="true" />
              <h3 className="why__title">{point.title}</h3>
              <p className="why__text">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
