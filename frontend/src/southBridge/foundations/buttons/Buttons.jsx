import "./Buttons.scss";

function Buttons() {
  return (
    <main className="sb-buttons-showcase">
      <div className="sb-buttons-showcase__container">

        <header className="sb-buttons-showcase__intro">
          <span>SouthBridge Foundations</span>
          <h1>Button Collection</h1>
          <p>
            A curated collection of premium, modern and production-ready
            button patterns for different website styles.
          </p>
        </header>

        {/* 01 — Primary */}
        <section className="sb-buttons-section">
          <div className="sb-buttons-section__heading">
            <span>01</span>
            <h2>Primary</h2>
          </div>

          <div className="sb-buttons-grid">

            <button className="sb-btn sb-btn--primary">
              Get Started
            </button>

            <button className="sb-btn sb-btn--primary-dark">
              Get Started
            </button>

            <button className="sb-btn sb-btn--primary-soft">
              Get Started
            </button>

            <button className="sb-btn sb-btn--primary-pill">
              Get Started
            </button>

          </div>
        </section>

        {/* 02 — Arrow */}
        <section className="sb-buttons-section">
          <div className="sb-buttons-section__heading">
            <span>02</span>
            <h2>Arrow Buttons</h2>
          </div>

          <div className="sb-buttons-grid">

            <button className="sb-btn sb-btn--arrow">
              Explore
              <span>→</span>
            </button>

            <button className="sb-btn sb-btn--arrow-fill">
              View Project
              <span>↗</span>
            </button>

            <button className="sb-btn sb-btn--arrow-circle">
              Discover
              <span>→</span>
            </button>

            <button className="sb-btn sb-btn--arrow-slide">
              Learn More
              <span>↗</span>
            </button>

          </div>
        </section>

        {/* 03 — Outline */}
        <section className="sb-buttons-section">
          <div className="sb-buttons-section__heading">
            <span>03</span>
            <h2>Outline</h2>
          </div>

          <div className="sb-buttons-grid">

            <button className="sb-btn sb-btn--outline">
              Explore
            </button>

            <button className="sb-btn sb-btn--outline-dark">
              Explore
            </button>

            <button className="sb-btn sb-btn--outline-pill">
              View Collection
            </button>

            <button className="sb-btn sb-btn--outline-arrow">
              View Work
              <span>→</span>
            </button>

          </div>
        </section>

        {/* 04 — Minimal */}
        <section className="sb-buttons-section">
          <div className="sb-buttons-section__heading">
            <span>04</span>
            <h2>Minimal</h2>
          </div>

          <div className="sb-buttons-grid">

            <button className="sb-btn sb-btn--text">
              Learn More
            </button>

            <button className="sb-btn sb-btn--text-arrow">
              Learn More
              <span>↗</span>
            </button>

            <button className="sb-btn sb-btn--underline">
              Discover
            </button>

            <button className="sb-btn sb-btn--underline-arrow">
              Explore
              <span>→</span>
            </button>

          </div>
        </section>

        {/* 05 — Luxury */}
        <section className="sb-buttons-section sb-buttons-section--dark">
          <div className="sb-buttons-section__heading">
            <span>05</span>
            <h2>Luxury</h2>
          </div>

          <div className="sb-buttons-grid">

            <button className="sb-btn sb-btn--luxury">
              Reserve a Table
            </button>

            <button className="sb-btn sb-btn--luxury-outline">
              Explore Collection
            </button>

            <button className="sb-btn sb-btn--luxury-arrow">
              Discover
              <span>↗</span>
            </button>

            <button className="sb-btn sb-btn--luxury-pill">
              Book Now
            </button>

          </div>
        </section>

        {/* 06 — Glass */}
        <section className="sb-buttons-section sb-buttons-section--visual">
          <div className="sb-buttons-section__heading">
            <span>06</span>
            <h2>Glass</h2>
          </div>

          <div className="sb-buttons-grid">

            <button className="sb-btn sb-btn--glass">
              Get Started
            </button>

            <button className="sb-btn sb-btn--glass-light">
              Learn More
            </button>

            <button className="sb-btn sb-btn--glass-icon">
              Explore
              <span>↗</span>
            </button>

          </div>
        </section>

        {/* 07 — Commerce */}
        <section className="sb-buttons-section">
          <div className="sb-buttons-section__heading">
            <span>07</span>
            <h2>Commerce</h2>
          </div>

          <div className="sb-buttons-grid">

            <button className="sb-btn sb-btn--shop">
              Add to Cart
            </button>

            <button className="sb-btn sb-btn--buy">
              Buy Now
            </button>

            <button className="sb-btn sb-btn--bag">
              <span>＋</span>
              Add to Bag
            </button>

            <button className="sb-btn sb-btn--shop-outline">
              Quick View
            </button>

          </div>
        </section>

        {/* 08 — Creative */}
        <section className="sb-buttons-section sb-buttons-section--creative">
          <div className="sb-buttons-section__heading">
            <span>08</span>
            <h2>Creative</h2>
          </div>

          <div className="sb-buttons-grid">

            <button className="sb-btn sb-btn--creative">
              Let's Talk
              <span>↗</span>
            </button>

            <button className="sb-btn sb-btn--creative-block">
              Start a Project
            </button>

            <button className="sb-btn sb-btn--creative-round">
              <span>↗</span>
            </button>

          </div>
        </section>

        {/* 09 — Pill */}
        <section className="sb-buttons-section">
          <div className="sb-buttons-section__heading">
            <span>09</span>
            <h2>Pills</h2>
          </div>

          <div className="sb-buttons-grid">

            <button className="sb-btn sb-btn--pill-black">
              Get Started
            </button>

            <button className="sb-btn sb-btn--pill-white">
              Learn More
            </button>

            <button className="sb-btn sb-btn--pill-border">
              Explore
            </button>

            <button className="sb-btn sb-btn--pill-arrow">
              View More
              <span>→</span>
            </button>

          </div>
        </section>

        {/* 10 — Icon */}
        <section className="sb-buttons-section">
          <div className="sb-buttons-section__heading">
            <span>10</span>
            <h2>Icon Buttons</h2>
          </div>

          <div className="sb-buttons-grid">

            <button className="sb-icon-btn sb-icon-btn--dark">
              ↗
            </button>

            <button className="sb-icon-btn sb-icon-btn--light">
              →
            </button>

            <button className="sb-icon-btn sb-icon-btn--circle">
              +
            </button>

            <button className="sb-icon-btn sb-icon-btn--outline">
              ↓
            </button>

          </div>
        </section>

        {/* 11 — Status */}
        <section className="sb-buttons-section">
          <div className="sb-buttons-section__heading">
            <span>11</span>
            <h2>Status</h2>
          </div>

          <div className="sb-buttons-grid">

            <button className="sb-btn sb-btn--success">
              Confirm
            </button>

            <button className="sb-btn sb-btn--warning">
              Review
            </button>

            <button className="sb-btn sb-btn--danger">
              Delete
            </button>

            <button className="sb-btn sb-btn--disabled" disabled>
              Disabled
            </button>

          </div>
        </section>

        {/* 12 — Loading */}
        <section className="sb-buttons-section">
          <div className="sb-buttons-section__heading">
            <span>12</span>
            <h2>States</h2>
          </div>

          <div className="sb-buttons-grid">

            <button className="sb-btn sb-btn--loading">
              <i />
              Processing
            </button>

            <button className="sb-btn sb-btn--loading-dark">
              <i />
              Saving
            </button>

          </div>
        </section>

      </div>
    </main>
  );
}

export default Buttons;