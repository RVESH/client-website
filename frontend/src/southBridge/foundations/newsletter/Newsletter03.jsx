import "./Newsletter03.scss";

function Newsletter03() {
  return (
    <section className="sb-newsletter-03">
      <div className="sb-newsletter-03__container">
        <div>
          <span>PRODUCT UPDATES</span>
          <h2>Stay one step ahead.</h2>
        </div>

        <form>
          <input
            type="email"
            placeholder="Work email"
            aria-label="Work email"
            required
          />
          <button type="submit">
            Subscribe
            <i>→</i>
          </button>
        </form>

        <small>
          Product updates, practical resources and occasional announcements.
        </small>
      </div>
    </section>
  );
}

export default Newsletter03;