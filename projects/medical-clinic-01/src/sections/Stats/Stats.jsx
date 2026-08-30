import "./Stats.scss";

const stats = [
  ["15+", "Years of care"],
  ["25k+", "Patients supported"],
  ["12", "Clinical specialties"],
  ["2", "Clinic locations"],
];

export default function Stats() {
  return (
    <section className="clinic-stats section">
      <div className="page-shell clinic-stats__grid">
        {stats.map(([value, label]) => (
          <div
            key={label}
            className="clinic-stats__item"
          >
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}