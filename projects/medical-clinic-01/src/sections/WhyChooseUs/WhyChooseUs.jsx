import {
  HeartPulse,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import "./WhyChooseUs.scss";

const points = [
  {
    icon: HeartPulse,
    title: "Human first",
    text:
      "Every consultation starts with listening.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted care",
    text:
      "Clear guidance built around responsible medical care.",
  },
  {
    icon: Stethoscope,
    title: "Experienced team",
    text:
      "Qualified clinicians across everyday healthcare needs.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="clinic-why section">
      <div className="page-shell">

        <div className="clinic-why__intro">
          <span className="eyebrow">
            WHY MEDORA
          </span>

          <h2 className="section-title">
            Healthcare should
            <br />
            feel clear.
          </h2>
        </div>

        <div className="clinic-why__grid">
          {points.map(
            ({ icon: Icon, title, text }) => (
              <article key={title}>
                <Icon size={21} />

                <h3>{title}</h3>

                <p>{text}</p>
              </article>
            )
          )}
        </div>

      </div>
    </section>
  );
}