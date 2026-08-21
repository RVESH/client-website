import "./Newsletter06.scss";

function Newsletter06() {
  return (
    <section className="sb-newsletter-06">
      <div className="sb-newsletter-06__container">
        <div className="sb-newsletter-06__intro">
          <span>FROM THE STUDIO</span>
          <h2>Ideas in progress.</h2>
          <p>
            Occasional notes about design, branding, digital products and
            the work happening behind the scenes.
          </p>
        </div>

        <form>
          <input type="email" placeholder="Email address" required />
          <button type="submit">
            Subscribe
            <i>→</i>
          </button>
        </form>

        <div className="sb-newsletter-06__tags">
          <span>Design</span>
          <span>Culture</span>
          <span>Digital</span>
          <span>Strategy</span>
        </div>
      </div>
    </section>
  );
}

export default Newsletter06;