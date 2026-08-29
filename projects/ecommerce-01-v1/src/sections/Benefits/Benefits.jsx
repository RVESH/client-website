import {
  ShieldCheck,
  Sparkles,
  Headphones,
} from "lucide-react";

import "./Benefits.scss";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Trusted quality",
    text: "Carefully selected products with quality and everyday usefulness in mind.",
  },
  {
    icon: Sparkles,
    title: "Thoughtful selection",
    text: "A focused collection instead of endless products and unnecessary noise.",
  },
  {
    icon: Headphones,
    title: "Direct support",
    text: "Connect with the store directly by phone or WhatsApp whenever you need help.",
  },
];

export default function Benefits() {
  return (
    <section className="benefits section">
      <div className="page-shell">
        <div className="benefits__heading">
          <span className="eyebrow">
            WHY NOVA
          </span>

          <h2 className="section-title">
            Simple choices.
            <br />
            Better experience.
          </h2>
        </div>

        <div className="benefits__grid">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="benefits__item"
              >
                <div className="benefits__icon">
                  <Icon
                    size={18}
                    strokeWidth={1.6}
                  />
                </div>

                <h3>
                  {benefit.title}
                </h3>

                <p>
                  {benefit.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
