import { testimonials } from "../../data/testimonials";

import "./Testimonials.scss";

export default function Testimonials() {
  return (
    <section className="testimonials section">

      <div className="page-shell">

        <div className="testimonials__heading">
          <span className="eyebrow">
            CUSTOMER NOTES
          </span>

          <h2 className="section-title">
            Kept because it
            <br />
            worked.
          </h2>
        </div>

        <div className="testimonials__grid">

          {testimonials.map(
            (item) => (
              <article
                key={item.id}
              >
                <span className="testimonials__quote">
                  “
                </span>

                <blockquote>
                  {item.quote}
                </blockquote>

                <cite>
                  {item.name}
                  <small>
                    {item.role}
                  </small>
                </cite>
              </article>
            )
          )}

        </div>

      </div>
    </section>
  );
}