import { useState } from "react";
import "./FAQ08.scss";

const items = [
  ["How do we start?", "We begin with a conversation around objectives, audience, constraints and the desired outcome."],
  ["What happens during design?", "The visual direction is developed through structure, hierarchy, content and iterative refinement."],
  ["Can we involve our internal team?", "Yes. Collaboration can be as lightweight or hands-on as the project requires."],
  ["What happens after launch?", "We can hand over the finished system or continue supporting the product after launch."],
];

function FAQ08() {
  const [open, setOpen] = useState(0);

  return (
    <section className="sb-faq-08">
      <div className="sb-faq-08__container">
        <div className="sb-faq-08__intro">
          <span>HOW WE WORK</span>
          <h2>Questions about the process.</h2>
        </div>

        <div className="sb-faq-08__timeline">
          {items.map(([question, answer], index) => {
            const active = open === index;

            return (
              <article className={active ? "is-open" : ""} key={question}>
                <div className="sb-faq-08__number">0{index + 1}</div>

                <div className="sb-faq-08__body">
                  <button
                    type="button"
                    aria-expanded={active}
                    onClick={() => setOpen(active ? -1 : index)}
                  >
                    {question}
                    <i>{active ? "−" : "+"}</i>
                  </button>

                  <div>
                    <p>{answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ08;