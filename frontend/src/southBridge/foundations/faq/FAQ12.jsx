import { useState } from "react";
import "./FAQ12.scss";

const questions = [
  ["Where are you based?", "We can work remotely with clients in different locations."],
  ["What are your working hours?", "Monday to Friday, 09:00 to 18:00."],
  ["How can I reach you?", "Use email, phone or the contact form depending on the project."],
  ["Do you offer custom packages?", "Yes. Scope and deliverables can be tailored around the project."],
];

function FAQ12() {
  const [open, setOpen] = useState(-1);

  return (
    <section className="sb-faq-12">
      <div className="sb-faq-12__container">
        <div className="sb-faq-12__intro">
          <span>FAQ</span>
          <h2>Need a quick answer?</h2>
        </div>

        <div className="sb-faq-12__list">
          {questions.map(([question, answer], index) => {
            const active = open === index;

            return (
              <article className={active ? "is-open" : ""} key={question}>
                <button
                  type="button"
                  aria-expanded={active}
                  onClick={() => setOpen(active ? -1 : index)}
                >
                  {question}
                  <span>{active ? "−" : "+"}</span>
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

export default FAQ12;