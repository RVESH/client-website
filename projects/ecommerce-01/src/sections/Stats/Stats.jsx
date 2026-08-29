import "./Stats.scss";

const stats = [
  ["120+", "Products"],
  ["48h", "Dispatch goal"],
  ["7d", "Simple returns"],
  ["24/7", "Online access"],
];

export default function Stats() {
  return (
    <section className="stats section">
      <div className="page-shell stats__grid">
        {stats.map(
          ([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          )
        )}
      </div>
    </section>
  );
}