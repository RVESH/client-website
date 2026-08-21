import "./Newsletter04.scss";

function Newsletter04() {
  return (
    <section className="sb-newsletter-04">
      <div className="sb-newsletter-04__container">
        <span>PRIVATE LETTERS</span>

        <h2>
          A slower kind of
          <em>newsletter.</em>
        </h2>

        <p>
          Stories, ideas and discoveries curated with a little more care.
        </p>

        <form>
          <input
            type="email"
            placeholder="Your email"
            aria-label="Your email"
            required
          />
          <button type="submit">Sign me up ↗</button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter04;