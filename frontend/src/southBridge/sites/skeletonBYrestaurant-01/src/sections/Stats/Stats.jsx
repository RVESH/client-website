
import "./Stats.scss";

function Stats({
  title = "A little of what makes us different.",
}) {
  const stats = [
    ["12", "Years"],
    ["180k+", "Guests served"],
    ["4.9", "Average rating"],
    ["7", "Days open"],
  ];

  return (
    <section className="sb-stats sb-stats--09" aria-labelledby="stats-09-title">
      <div className="sb-stats__container">
        <div className="sb-stats--09__heading">
          <span>OUR STORY</span>
          <h2 id="stats-09-title">{title}</h2>
        </div>

        <div className="sb-stats--09__grid">
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