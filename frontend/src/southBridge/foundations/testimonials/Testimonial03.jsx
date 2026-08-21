import "./Testimonial03.scss";

const testimonials = [
  {
    quote: "The team gave us clarity when we were drowning in options.",
    name: "Neha Rao",
    company: "Forma",
    initials: "NR",
  },
  {
    quote: "The website feels premium without losing the warmth of our brand.",
    name: "Kabir Shah",
    company: "Atelier 27",
    initials: "KS",
  },
  {
    quote: "Everything felt considered, from the first conversation to launch.",
    name: "Meera Jain",
    company: "North House",
    initials: "MJ",
  },
];

function Testimonial03() {
  return (
    <section className="sb-testimonial-03">
      <div className="sb-testimonial-03__container">
        <div className="sb-testimonial-03__heading">
          <span>WHAT CLIENTS SAY</span>
          <h2>Good work leaves a feeling.</h2>
        </div>

        <div className="sb-testimonial-03__grid">
          {testimonials.map((item) => (
            <article key={item.name}>
              <div className="sb-testimonial-03__rating">
                ★★★★★
              </div>

              <blockquote>“{item.quote}”</blockquote>

              <div className="sb-testimonial-03__person">
                <span>{item.initials}</span>
                <div>
                  <strong>{item.name}</strong>
                  <small>{item.company}</small>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial03;