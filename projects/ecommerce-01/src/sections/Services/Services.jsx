import {
  Check,
} from "lucide-react";

import "./Services.scss";

const services = [
  {
    number: "01",
    title: "Thoughtful selection",
    text: "A focused collection instead of endless scrolling.",
  },
  {
    number: "02",
    title: "Reliable delivery",
    text: "Clear order updates from checkout to your door.",
  },
  {
    number: "03",
    title: "Human support",
    text: "Real help whenever you need advice about your order.",
  },
];

export default function Services() {
  return (
    <section className="services section">

      <div className="page-shell">

        <span className="eyebrow">
          THE EXPERIENCE
        </span>

        <h2 className="section-title">
          Shopping without
          <br />
          the noise.
        </h2>

        <div className="services__list">

          {services.map(
            (service) => (
              <article
                key={service.number}
              >

                <span className="services__number">
                  {service.number}
                </span>

                <div className="services__main">
                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.text}
                  </p>
                </div>

                <Check
                  size={18}
                  strokeWidth={1.5}
                />

              </article>
            )
          )}

        </div>

      </div>
    </section>
  );
}