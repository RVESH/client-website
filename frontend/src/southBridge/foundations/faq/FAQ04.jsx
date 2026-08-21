import { useState } from "react";
import "./FAQ04.scss";

const questions = [
  ["Can it integrate with our existing tools?", "Yes. Existing systems and services can be connected where their APIs or supported integrations allow it."],
  ["Is the system scalable?", "The structure can be designed to grow with the product, from a focused first release to a larger system."],
  ["Do you support future improvements?", "Yes. Existing projects can be extended with new features, sections and integrations."],
];

function FAQ04() {
  const [open, setOpen] = useState(0);

  return (
    <section className="sb-faq-04">
      <div className="sb-faq-04__container">
        <div className="sb-faq-04__intro">
          <span>SYSTEM / FAQ</span>
          <h2>Answers without the noise.</h2>
        </div>

        <div className="sb-faq-04__list">
          {questions.map(([question, answer], index) => {
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
                  <i>{active ? "−" : "+"}</i>
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

export default FAQ04;