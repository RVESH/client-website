import { useState } from "react";
import "./FAQ11.scss";

const items = [
  ["What should I prepare before starting?", "A rough brief, goals, references and any existing brand or content assets are enough to begin."],
  ["Can the design evolve later?", "Yes. A strong foundation should make future updates and extensions easier."],
  ["Can I use the finished website commercially?", "The final usage rights depend on the product or license terms associated with the delivered project."],
];

function FAQ11() {
  const [open, setOpen] = useState(0);

  return (
    <section className="sb-faq-11">
      <div className="sb-faq-11__container">
        <div className="sb-faq-11__heading">
          <span>YOUR QUESTIONS</span>
          <h2>Let's clear up the important bits.</h2>
        </div>

        <div className="sb-faq-11__cards">
          {items.map(([question, answer], index) => {
            const active = open === index;

            return (
              <article className={active ? "is-open" : ""} key={question}>
                <button
                  type="button"
                  aria-expanded={active}
                  onClick={() => setOpen(active ? -1 : index)}
                >
                  <span>0{index + 1}</span>
                  <strong>{question}</strong>
                  <i>{active ? "−" : "↗"}</i>
                </button>

                <div>
                  <p>{answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ11;