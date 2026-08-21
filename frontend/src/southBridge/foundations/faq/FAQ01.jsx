import { useState } from "react";
import "./FAQ01.scss";

const items = [
  {
    question: "How does the process work?",
    answer:
      "We begin with a clear understanding of the goals, audience and requirements, then move through structure, design, refinement and delivery.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "The timeline depends on scope, but a focused website project can usually move from discovery to delivery within a few weeks.",
  },
  {
    question: "Can the website be customized later?",
    answer:
      "Yes. The components and content structure are designed so colors, typography, imagery and copy can be adapted without rebuilding everything.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Support can be added when needed for updates, refinements, content changes and future improvements.",
  },
];

function FAQ01() {
  const [open, setOpen] = useState(0);

  return (
    <section className="sb-faq-01" aria-labelledby="faq-01-title">
      <div className="sb-faq-01__container">
        <div className="sb-faq-01__intro">
          <span>FREQUENTLY ASKED</span>
          <h2 id="faq-01-title">Everything you may want to know.</h2>
        </div>

        <div className="sb-faq-01__list">
          {items.map((item, index) => {
            const isOpen = open === index;

            return (
              <article className={isOpen ? "is-open" : ""} key={item.question}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <i>{isOpen ? "−" : "+"}</i>
                </button>

                <div className="sb-faq-01__answer">
                  <p>{item.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ01;