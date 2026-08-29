import "./About.scss";

export default function About() {
  return (
    <section className="about-store section">
      <div className="page-shell about-store__grid">

        <div>
          <span className="eyebrow">
            OUR APPROACH
          </span>

          <h2 className="section-title">
            Fewer things.
            <br />
            Better choices.
          </h2>
        </div>

        <div className="about-store__content">
          <p className="section-copy">
            We focus on products that earn
            their place through thoughtful design,
            dependable materials and everyday
            usefulness.
          </p>

          <p className="section-copy">
            Instead of chasing endless trends,
            NOVA looks for pieces that can stay
            relevant long after the first purchase.
          </p>
        </div>

      </div>
    </section>
  );
}