import { site } from "../../data/site";
import StatCard from "../../components/StatCard/StatCard.jsx";
import "./Stats.scss";

export default function Stats() {
  return (
    <section className="section section--dark stats-section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">By the numbers</span>
            <h2 className="section-head__title">{site.stats.heading}</h2>
          </div>
        </div>

        <div className="stats-section__grid">
          {site.stats.items.map((item, i) => (
            <StatCard key={item.label} value={item.value} suffix={item.suffix} label={item.label} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
