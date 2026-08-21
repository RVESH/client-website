import "./Newsletter09.scss";

function Newsletter09() {
  return (
    <section className="sb-newsletter-09">
      <div className="sb-newsletter-09__container">
        <span>JOIN 8,000+ READERS</span>

        <h2>Useful ideas. Straight to your inbox.</h2>

        <p>
          A short monthly letter about building better products, brands and
          digital experiences.
        </p>

        <form>
          <input type="email" placeholder="Email address" required />
          <button type="submit">Subscribe</button>
        </form>

        <small>No spam. Unsubscribe whenever you like.</small>
      </div>
    </section>
  );
}

export default Newsletter09;