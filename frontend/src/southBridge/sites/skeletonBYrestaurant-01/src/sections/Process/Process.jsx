

import "./Process.scss";



function Process({
  title = "A stay designed around the moments that matter.",
}) {
  const steps = [
    ["01", "Arrive", "A warm welcome and an easy beginning."],
    ["02", "Settle In", "Everything you need, quietly within reach."],
    ["03", "Enjoy", "Time to slow down and make the most of it."],
  ];

  return (
    <section className="sb-process sb-process--10" aria-labelledby="process-10-title">
      <div className="sb-process__container">
        <div className="sb-process--10__heading">
          <span>THE EXPERIENCE</span>
          <h2 id="process-10-title">{title}</h2>
        </div>

        <div className="sb-process--10__grid">
          {steps.map(([number, titleText, text]) => (
            <article key={number}>
              <span>{number}</span>

              <div>
                <h3>{titleText}</h3>
                <p>{text}</p>
              </div>

              <a href={`#${titleText.toLowerCase()}`}>
                Discover ↗
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;