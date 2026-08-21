import "./Newsletter12.scss";

function Newsletter12() {
  return (
    <section className="sb-newsletter-12">
      <div className="sb-newsletter-12__shell">
        <div>
          <span>NEWSLETTER</span>
          <h2>Stay in the know.</h2>
        </div>

        <form>
          <input
            type="email"
            placeholder="Email address"
            aria-label="Email address"
            required
          />

          <button type="submit">
            <span>Subscribe</span>
            <b>→</b>
          </button>
        </form>

        <small>
          One thoughtful email from time to time. Unsubscribe anytime.
        </small>
      </div>
    </section>
  );
}

export default Newsletter12;