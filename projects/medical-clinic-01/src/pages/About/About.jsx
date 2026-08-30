import {
  images,
} from "../../data/images";

import "./About.scss";

export default function About() {
  return (
    <section className="clinic-about section">
      <div className="page-shell">

        <div className="clinic-about__intro">
          <span className="eyebrow">
            ABOUT MEDORA
          </span>

          <h1 className="section-title">
            Healthcare that
            <br />
            starts by listening.
          </h1>
        </div>

        <div className="clinic-about__grid">

          <div className="clinic-about__image">
            <img
              src={images.about}
              alt="Medora clinic"
            />
          </div>

          <div className="clinic-about__copy">
            <p>
              Medora brings together experienced
              clinicians, thoughtful spaces and
              practical healthcare.
            </p>

            <p>
              We believe good medicine should be
              clear, respectful and easy to access.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}