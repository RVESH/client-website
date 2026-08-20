import "./Services03.scss";

function Services03() {
  return (
    <section className="sb-services-03">
      <div className="sb-services-03__container">
        <div className="sb-services-03__intro">
          <span>OUR SERVICES</span>
          <h2>One strong idea. Several ways to make it useful.</h2>
        </div>

        <div className="sb-services-03__grid">
          <article className="sb-services-03__feature">
            <span>01</span>
            <div>
              <h3>Digital Product Design</h3>
              <p>
                We turn complex workflows into clear, intuitive experiences
                people actually enjoy using.
              </p>
            </div>
            <a href="#product-design">Explore service ↗</a>
          </article>

          <div className="sb-services-03__side">
            {[
              ["02", "Research & Strategy"],
              ["03", "Brand Systems"],
              ["04", "Web Development"],
            ].map(([number, title]) => (
              <a href={`#${title}`} key={number}>
                <span>{number}</span>
                <strong>{title}</strong>
                <b>↗</b>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services03;