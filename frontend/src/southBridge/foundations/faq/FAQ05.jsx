import { useState } from "react";
import "./FAQ05.scss";

const groups = [
  {
    title: "Getting Started",
    items: [
      ["How quickly can we get started?", "You can begin with a focused setup and expand as the project grows."],
      ["Do I need technical knowledge?", "The level of technical involvement depends on the product, but the setup can be structured to remain straightforward."],
    ],
  },
  {
    title: "Billing",
    items: [
      ["Can I change plans later?", "Plans can be adjusted as your needs change."],
      ["Are there long-term commitments?", "That depends on the specific plan or service selected."],
    ],
  },
  {
    title: "Security",
    items: [
      ["How is data handled?", "Data handling should always be configured according to the project's specific security and privacy requirements."],
      ["Can access be controlled?", "Yes. Permission and access structures can be implemented where required."],
    ],
  },
];

function FAQ05() {
  const [open, setOpen] = useState("");

  return (
    <section className="sb-faq-05">
      <div className="sb-faq-05__container">
        <div className="sb-faq-05__intro">
          <span>HELP CENTRE</span>
          <h2>Find the answer quickly.</h2>
        </div>

        <div className="sb-faq-05__grid">
          {groups.map((group) => (
            <div className="sb-faq-05__group" key={group.title}>
              <h3>{group.title}</h3>

              {group.items.map(([question, answer], index) => {
                const id = `${group.title}-${index}`;
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

export default FAQ05;