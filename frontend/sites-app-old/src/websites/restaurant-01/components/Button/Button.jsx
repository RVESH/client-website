import "./Button.scss";

function Button() {
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

        

      </div>
    </main>
  );
}

export default Button;