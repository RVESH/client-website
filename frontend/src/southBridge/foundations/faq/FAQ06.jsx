import { useState } from "react";
import "./FAQ06.scss";

const questions = [
  ["Do you accept custom requests?", "Yes. The experience can be adapted around the specific needs of the client."],
  ["Can I schedule a consultation?", "Absolutely. A consultation can be arranged around availability."],
  ["How should I prepare?", "A short overview of your needs, references and expectations is usually enough to begin."],
];

function FAQ06() {
  const [open, setOpen] = useState(-1);

  return (
    <section className="sb-faq-06">
      <div className="sb-faq-06__container">
        <div className="sb-faq-06__heading">
          <span>QUESTIONS</span>
          <h2>Before we begin.</h2>
        </div>

        <div className="sb-faq-06__list">
          {questions.map(([question, answer], index) => {
            const active = open === index;

            return (
              <article className={active ? "is-open" : ""} key={question}>
                <button
                  type="button"
                  aria-expanded={active}
                  onClick={() => setOpen(active ? -1 : index)}
                >
                  <span>{question}</span>
                  <i>{active ? "−" : "＋"}</i>
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

export default FAQ06;