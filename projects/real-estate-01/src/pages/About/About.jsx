import { images } from "../../data/images";
import "./About.scss";

export default function About() {
  return (
    <section className="about-page section">
      <div className="page-shell">
        <div className="about-page__intro">
          <span className="eyebrow">ABOUT HAVEN</span>

          <h1 className="section-title">
            We find spaces
            <br />
            worth returning to.
          </h1>

          <p className="section-copy">
            HAVEN is an independent property studio focused
            on distinctive residential spaces and thoughtful
            property discovery.
          </p>
        </div>

        <div className="about-page__grid">
          <div className="about-page__image">
            <img
              src={images.about}
              alt="HAVEN property"
              loading="lazy"
            />
          </div>

          <div className="about-page__copy">
            <span className="eyebrow">
              OUR APPROACH
            </span>

            <p>
              We look beyond square footage to consider
              architecture, light, location and how a home
              actually feels to live in.
            </p>

            <p>
              Every property is presented clearly so that
              finding the right space feels personal,
              considered and unhurried.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}