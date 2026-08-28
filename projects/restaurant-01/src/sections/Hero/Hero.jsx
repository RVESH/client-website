import { NavLink } from "react-router-dom";

import "./Hero.scss";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__image">
        <img
          src="/images/restaurant-hero.webp"
          alt="LUMA restaurant dining room"
        />
      </div>

      <div className="hero__overlay" />

      <div className="hero__content page-shell">
        <span className="eyebrow">NEW DELHI / EST. 2026</span>

        <h1>
          Come for
          <br />
          the evening.
        </h1>

        <p>
          Seasonal ingredients, open-fire cooking and a room
          designed for lingering a little longer.
        </p>

        <div className="hero__actions">
          <NavLink to="/reservation">
            Reserve a Table ↗
          </NavLink>

          <NavLink to="/menu">
            Explore Menu
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Hero;