import { useState } from "react";
import "./FAQ03.scss";

const groups = [
  {
    label: "GENERAL",
    questions: [
      ["How does it work?", "We start with a clear understanding of the goals, audience and scope."],
      ["Can I request changes?", "Yes. Refinement is part of the process and can be planned into the project."],
    ],
  },
  {
    label: "DELIVERY",
    questions: [
      ["What do I receive?", "You receive the complete project files and the supporting documentation agreed for the project."],
      ["Can I manage it myself?", "Yes. The final site can be structured so content and basic updates remain easy to manage."],
    ],
  },
];

function FAQ03() {
  const [active, setActive] = useState("GENERAL-0");

  return (
    <section className="sb-faq-03">
      <div className="sb-faq-03__container">
        <div className="sb-faq-03__intro">
          <span>COMMON QUESTIONS</span>
          <h2>Everything in its place.</h2>
        </div>

        <div className="sb-faq-03__groups">
          {groups.map((group) => (
            <div className="sb-faq-03__group" key={group.label}>
              <span>{group.label}</span>

              {group.questions.map(([question, answer], index) => {
                const key = `${group.label}-${index}`;
                const open = active === key;

                return (
                  <article className={open ? "is-open" : ""} key={question}>
                    <button
                      type="button"
                      aria-expanded={open}
                      onClick={() => setActive(open ? "" : key)}
                    >
                      {question}
                      <i>{open ? "−" : "+"}</i>
                    </button>

                    <div>
                      <p>{answer}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ03;