import { site } from '../../data/site';
import './Stats.scss';

const currentYear = new Date().getFullYear();

const stats = [
  { value: `${currentYear - site.founded}+`, label: 'Years serving the area' },
  { value: '640+', label: 'Projects completed' },
  { value: '4.9', label: 'Average review rating' },
  { value: '< 24h', label: 'Typical quote turnaround' },
];

export default function Stats() {
  return (
    <section className="section--tight section--ink stats-section">
      <div className="container stats-section__grid">
        {stats.map((s) => (
          <div className="stats-section__item" key={s.label}>
            <span className="stats-section__value">{s.value}</span>
            <span className="stats-section__label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
