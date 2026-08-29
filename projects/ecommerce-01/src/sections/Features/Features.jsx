import "./Features.scss";

const features = [
  {
    number: "01",
    title: "Thoughtful design",
    text: "Every detail has a purpose, from materials to the way the product feels in your hands.",
  },
  {
    number: "02",
    title: "Reliable quality",
    text: "We favour useful products made to be lived with, used often and kept for longer.",
  },
  {
    number: "03",
    title: "Simple experience",
    text: "A clear journey from discovery to checkout, with support when you need it.",
  },
];

export default function Features() {
  return (
    <section className="features section">

      <div className="page-shell">

        <span className="eyebrow">
          THE NOVA STANDARD
        </span>

        <h2 className="section-title">
          Good products should
          <br />
          feel obvious.
        </h2>

        <div className="features__grid">

          {features.map(
            (feature) => (
              <article key={feature.number}>
                <span>{feature.number}</span>

                <h3>{feature.title}</h3>

                <p>{feature.text}</p>
              </article>
            )
          )}

        </div>

      </div>
    </section>
  );
}