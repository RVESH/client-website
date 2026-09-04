import { site } from "../../data/site";
import { images } from "../../data/images";
import StatCard from "../../components/StatCard/StatCard.jsx";
import "./Stats.scss";

export default function Stats() {
  return (
    <section
      className="stats-section"
      style={{ backgroundImage: `url(${images.ctaTexture.src})` }}
    >
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">By the numbers</span>
            <h2 className="section-head__title">{site.stats.heading}</h2>
          </div>
        </div>

        <div className="stats-section__grid">
          {site.stats.items.map((item) => (
            <StatCard key={item.label} value={item.value} suffix={item.suffix} label={item.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
