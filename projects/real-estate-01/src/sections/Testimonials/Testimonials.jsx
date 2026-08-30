import {
  testimonials,
} from "../../data/testimonials";

import "./Testimonials.scss";

export default function Testimonials() {
  return (
    <section className="north-testimonials section">
      <div className="page-shell">

        <span className="eyebrow">
          CLIENT NOTES
        </span>

        <div className="north-testimonials__grid">

          {testimonials.map(
            (item) => (
              <article
                key={item.id}
                className="north-testimonial"
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