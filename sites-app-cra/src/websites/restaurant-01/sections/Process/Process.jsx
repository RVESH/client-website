

import "./Process.scss";

    /* =========================================================
   PROCESS 09 — AGENCY
========================================================= */

function Process({
  title = "From first idea to launch day.",
}) {
  const steps = [
    ["01", "Discovery", "We ask the right questions."],
    ["02", "Strategy", "We decide what matters most."],
    ["03", "Creative", "We build the visual direction."],
    ["04", "Launch", "We prepare everything for release."],
  ];

  return (
    <section className="sb-process sb-process--09" aria-labelledby="process-09-title">
      <div className="sb-process__container">
        <div className="sb-process--09__intro">
          <span>OUR PROCESS</span>
          <h2 id="process-09-title">{title}</h2>
        </div>

        <div className="sb-process--09__grid">
          {steps.map(([number, titleText, text]) => (
            <article key={number}>
              <span>{number}</span>

              <h3>{titleText}</h3>

              <p>{text}</p>

              <div className="sb-process--09__arrow">↘</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
  


export default Process;