import "./Stats.scss";

const stats = [
  ["12", "Seasonal dishes"],
  ["04", "Signature courses"],
  ["07", "Days of prep"],
  ["01", "Long evening"],
];

function Stats() {
  return (
    <section className="stats section">
      <div className="page-shell stats__grid">
        {stats.map(([value, label]) => (
          <div key={label} className="stats__item">
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;