import "./About.scss";

function About() {
  return (
    <div className="inner-page">
      <section className="inner-page__hero page-shell">
        <span className="eyebrow">ABOUT LUMA</span>

        <h1 className="section-title">
          A small room.
          <br />
          A generous table.
        </h1>

        <p className="section-copy">
          LUMA started with a simple idea: build a restaurant
          where food feels thoughtful but never complicated.
        </p>
      </section>

      <section className="about-page__story section">
        <div className="page-shell about-page__grid">
          <div>
            <span className="eyebrow">OUR APPROACH</span>
            <h2 className="section-title">
              Less noise.
              <br />
              Better ingredients.
            </h2>
          </div>

          <div>
            <p className="section-copy">
              We work closely with farmers, fishermen, growers
              and makers. The menu follows what they bring us.
            </p>

            <p className="section-copy">
              The room is intentionally warm, intimate and
              uncomplicated.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;