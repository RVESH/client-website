import "./Newsletter10.scss";

function Newsletter10() {
  return (
    <section className="sb-newsletter-10">
      <div className="sb-newsletter-10__container">
        <article className="sb-newsletter-10__main">
          <span>THE LETTER</span>
          <h2>Stay close to what we're making.</h2>

          <form>
            <input type="email" placeholder="Email address" required />
            <button type="submit">Join ↗</button>
          </form>
        </article>

        <article className="sb-newsletter-10__item">
          <span>01</span>
          <strong>New work</strong>
        </article>

        <article className="sb-newsletter-10__item sb-newsletter-10__item--accent">
          <span>02</span>
          <strong>Ideas & insights</strong>
        </article>

        <article className="sb-newsletter-10__item sb-newsletter-10__item--dark">
          <span>03</span>
          <strong>Occasional surprises</strong>
        </article>
      </div>
    </section>
  );
}

export default Newsletter10;