import { useState } from "react";
import "./FAQ.scss";

const questions = [
  ["Do you accept walk-ins?", "Yes, subject to availability. Reservations are recommended during busy evenings."],
  ["Can you accommodate dietary requirements?", "Please let the team know when booking and we will do our best to accommodate your needs."],
  ["Do you host private events?", "Yes. Private dining and small events can be arranged on request."],
];

function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="sb-faq-07">
      <div className="sb-faq-07__container">
        <div className="sb-faq-07__intro">
          <span>GOOD TO KNOW</span>
          <h2>Before you join us.</h2>
        </div>

        <div className="sb-faq-07__list">
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

        <a href="#reservation" className="sb-faq-07__cta">
          Make a Reservation ↗
        </a>
      </div>
    </section>
  );
}

export default FAQ;