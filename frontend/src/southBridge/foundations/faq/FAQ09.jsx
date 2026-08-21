import { useState } from "react";
import "./FAQ09.scss";

const columns = [
  [
    ["Can I customize the content?", "Yes. Content, labels, answers and supporting links can all be adapted."],
    ["Is the layout responsive?", "Yes. The structure is designed to work across desktop, tablet and mobile widths."],
  ],
  [
    ["Can I add more questions?", "Yes. The questions are data-driven and can be expanded as needed."],
    ["Can sections be reused?", "The final standalone website can use whichever selected FAQ system fits its own design."],
  ],
];

function FAQ09() {
  const [open, setOpen] = useState("");

  return (
    <section className="sb-faq-09">
      <div className="sb-faq-09__container">
        <div className="sb-faq-09__heading">
          <span>QUESTIONS & ANSWERS</span>
          <h2>Small questions. Clear answers.</h2>
        </div>

        <div className="sb-faq-09__grid">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex}>
              {column.map(([question, answer], index) => {
                const id = `${columnIndex}-${index}`;
                const active = open === id;

                return (
                  <article className={active ? "is-open" : ""} key={question}>
                    <button
                      type="button"
                      aria-expanded={active}
                      onClick={() => setOpen(active ? "" : id)}
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
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ09;