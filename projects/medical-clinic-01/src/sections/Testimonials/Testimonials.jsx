import {
  testimonials,
} from "../../data/testimonials";

import "./Testimonials.scss";

export default function Testimonials() {
  return (
    <section className="clinic-testimonials section">
      <div className="page-shell">

        <div className="clinic-testimonials__heading">
          <span className="eyebrow">
            PATIENT VOICES
          </span>

          <h2 className="section-title">
            Care that feels
            <br />
            personal.
          </h2>
        </div>

        <div className="clinic-testimonials__grid">
          {testimonials.map(
            (item) => (
              <article
                key={item.id}
                className="clinic-testimonial"
              >
                <p>
                  “{item.quote}”
                </p>

                <div>
                  <strong>
                    {item.name}
                  </strong>

                  <span>
                    {item.role}
                  </span>
                </div>
              </article>
            )
          )}
        </div>

      </div>
    </section>
  );
}