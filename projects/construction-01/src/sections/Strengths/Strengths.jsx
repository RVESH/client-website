import { site } from "../../data/site";
import "./Strengths.scss";

export default function Strengths() {
  return (
    <section className="section strengths">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">Our edge</span>
            <h2 className="section-head__title">{site.strengths.heading}</h2>
          </div>
          <p className="section-head__desc">{site.strengths.desc}</p>
        </div>

        <div className="strengths__grid">
          {site.strengths.items.map((item) => (
            <div className="strengths__item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
