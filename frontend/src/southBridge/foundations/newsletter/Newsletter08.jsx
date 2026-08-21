import "./Newsletter08.scss";

function Newsletter08() {
  return (
    <section className="sb-newsletter-08">
      <div className="sb-newsletter-08__container">
        <span>NEWSLETTER</span>

        <div className="sb-newsletter-08__row">
          <h2>Stay curious.</h2>

          <form>
            <input
              type="email"
              placeholder="Your email address"
              required
            />
            <button type="submit" aria-label="Subscribe">
              →
            </button>
          </form>
        </div>

        <p>
          New work, useful links and occasional thoughts. No noise.
        </p>
      </div>
    </section>
  );
}

export default Newsletter08;