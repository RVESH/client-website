import { useState } from "react";
import { ChevronDown } from "lucide-react";

import "./FAQ.scss";

const faqItems = [
  {
    question: "How long does delivery take?",
    answer:
      "Most orders are dispatched within 2–4 working days. Delivery time depends on your location and the selected shipping option.",
  },
  {
    question: "Can I return a product?",
    answer:
      "Yes. Unused products can be returned within 7 days of delivery, subject to the store's return policy.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is dispatched, the store can share the latest tracking details with you.",
  },
  {
    question: "Do you offer product support?",
    answer:
      "Yes. Contact us by phone or email for help with product information, orders, delivery or returns.",
  },
  {
    question: "Can I order through WhatsApp?",
    answer:
      "Yes. Orders can be sent directly to the store through the WhatsApp checkout flow.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] =
    useState(null);

  const toggleItem = (index) => {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section className="faq section">
      <div className="page-shell">

        <div className="faq__heading">
          <span className="eyebrow">
            FAQ
          </span>

          <h2 className="section-title">
            The useful answers.
          </h2>

          <p className="section-copy">
            Everything you need to know before
            placing an order.
          </p>
        </div>

        <div className="faq__list">
          {faqItems.map(
            (item, index) => {
              const isOpen =
                openIndex === index;

              return (
                <div
                  key={item.question}
                  className={
                    isOpen
                      ? "faq__item faq__item--open"
                      : "faq__item"
                  }
                >
                  <button
                    type="button"
                    onClick={() =>
                      toggleItem(index)
                    }
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span>
                      <small>
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </small>

                      {item.question}
                    </span>

                    <ChevronDown
                      size={19}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    className="faq__answer"
                    hidden={!isOpen}
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              );
            }
          )}
        </div>

      </div>
    </section>
  );
}