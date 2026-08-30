import "./Stats.scss";

const stats = [
  ["120+", "Properties presented"],
  ["18", "Neighbourhoods"],
  ["12", "Years of local insight"],
  ["1—1", "Personal guidance"],
];

export default function Stats() {
  return (
    <section className="north-stats section">
      <div className="page-shell north-stats__grid">
        {stats.map(([value, label]) => (
          <div
            key={label}
            className="north-stats__item"
          >
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}