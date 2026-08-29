import AboutSection from "../../sections/About/About";
import Features from "../../sections/Features/Features";
import CTA from "../../sections/CTA/CTA";

import { images } from "../../data/images";

import "./About.scss";

export default function About() {
  return (
    <div className="about-page">

      <section className="inner-page__hero page-shell">
        <span className="eyebrow">
          ABOUT NOVA
        </span>

        <h1 className="section-title">
          Useful things,
          <br />
          beautifully considered.
        </h1>

        <p className="section-copy">
          Everyday products chosen for
          good design, useful materials
          and lasting appeal.
        </p>
      </section>

      <section className="about-intro section">
        <div className="page-shell about-intro__grid">

          <div className="about-intro__image">
            <img
              src={images.about}
              alt="NOVA collection"
            />
          </div>

          <div className="about-intro__content">
            <span className="eyebrow">
              OUR APPROACH
            </span>

            <h2 className="section-title">
              Fewer things.
              <br />
              Better choices.
            </h2>

            <p className="section-copy">
              We focus on products that earn
              their place through thoughtful design,
              dependable materials and everyday
              usefulness.
            </p>
          </div>

        </div>
      </section>

      <AboutSection />
      <Features />
      <CTA />

    </div>
  );
}