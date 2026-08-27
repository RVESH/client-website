
import "./Stats.scss";

function Stats({
  stats = [
    ["12+", "Years"],
    ["48", "Projects"],
    ["96%", "Retention"],
    ["18", "Countries"],
  ],
}) {
  return (
    <section className="sb-stats sb-stats--05" aria-label="Key statistics">
      <div className="sb-stats__container">
        <div className="sb-stats--05__strip">
          {stats.map(([value, label]) => (
            <article key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Stats;