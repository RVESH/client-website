import { useState } from "react";
import "./FAQ02.scss";

const items = [
  ["01", "What makes your approach different?", "We keep the process focused, collaborative and intentionally simple."],
  ["02", "Can you work with an existing brand?", "Absolutely. Existing identities can be refined, expanded or translated into a stronger digital system."],
  ["03", "What happens after launch?", "The relationship can continue through support, refinement and future product or website improvements."],
];

function FAQ02() {
  const [open, setOpen] = useState(0);

  return (
    <section className="sb-faq-02">
      <div className="sb-faq-02__container">
        <div className="sb-faq-02__heading">
          <span>02 / FAQ</span>
          <h2>Questions worth answering.</h2>
        </div>

        <div className="sb-faq-02__list">
          {items.map(([number, question, answer], index) => {
            const active = open === index;

            return (
              <article className={active ? "is-open" : ""} key={number}>
                <button
                  type="button"
                  aria-expanded={active}
                  onClick={() => setOpen(active ? -1 : index)}
                >
                  <span>{number}</span>
                  <strong>{question}</strong>
                  <i>{active ? "−" : "+"}</i>
                </button>

                <div className="sb-faq-02__answer">
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

export default FAQ02;