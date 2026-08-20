import "./Services11.scss";

const programs = [
  ["Strength", "Build power, stability and confidence."],
  ["Mobility", "Move better and recover smarter."],
  ["Conditioning", "Improve stamina without unnecessary punishment."],
];

function Services11() {
  return (
    <section className="sb-services-11">
      <div className="sb-services-11__container">
        <header>
          <span>TRAINING PROGRAMS</span>
          <h2>Different goals. A clear way forward.</h2>
        </header>

        <div className="sb-services-11__grid">
          {programs.map(([title, text], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href={`#${title}`}>Explore program →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services11;