import { useState } from "react";
import "./FAQ10.scss";

const cards = [
  ["01", "Can I request custom work?", "Yes. Existing systems can be adapted around the specific needs of the project."],
  ["02", "How fast can we launch?", "The timeline depends on scope, content readiness and the level of customization."],
  ["03", "What happens after delivery?", "You receive the agreed files and can continue building, customizing or extending the project."],
];

function FAQ10() {
  const [open, setOpen] = useState("");

  return (
    <section className="sb-faq-10">
      <div className="sb-faq-10__container">
        <div className="sb-faq-10__intro">
          <span>NEED TO KNOW</span>
          <h2>Useful answers, without the long read.</h2>
        </div>

        <div className="sb-faq-10__grid">
          {cards.map(([number, question, answer], index) => {
            const active = open === number;

            return (
              <article
                className={`sb-faq-10__card ${
                  index === 0 ? "sb-faq-10__card--large" : ""
                } ${index === 2 ? "sb-faq-10__card--dark" : ""}`}
                key={number}
              >
                <span>{number}</span>

                <button
                  type="button"
                  aria-expanded={active}
                  onClick={() => setOpen(active ? "" : number)}
                >
                  {question}
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

export default FAQ10;