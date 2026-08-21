import "./Newsletter02.scss";

function Newsletter02() {
  return (
    <section className="sb-newsletter-02">
      <div className="sb-newsletter-02__container">
        <div>
          <span>THE WEEKLY NOTE</span>
          <h2>Ideas worth opening.</h2>
          <p>
            One concise email with useful ideas, new projects and things we
            think are worth your time.
          </p>
        </div>

        <form>
          <input
            type="email"
            placeholder="Email address"
            aria-label="Email address"
            required
          />
          <button type="submit">Join ↗</button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter02;