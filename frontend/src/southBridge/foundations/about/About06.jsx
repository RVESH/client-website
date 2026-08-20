import "./About06.scss";

function About06({
  eyebrow = "THE PERSON BEHIND THE WORK",
  name = "Rishabh Verma",
  role = "Founder & Creative Director",
  story =
    "I started this studio to create a more thoughtful way of building digital products — one where strategy and craft stay close to each other.",
  image = "/images/about-06-founder.webp",
}) {
  return (
    <section className="sb-about-06" aria-labelledby="about-06-title">
      <div className="sb-about-06__container">
        <div className="sb-about-06__visual">
          <img src={image} alt={name} />
          <span>06 / 12</span>
        </div>

        <div className="sb-about-06__copy">
          <span className="sb-about-06__eyebrow">{eyebrow}</span>
          <h2 id="about-06-title">{name}</h2>
          <strong>{role}</strong>

          <p>{story}</p>

          <a href="#story">More about the journey →</a>
        </div>
      </div>
    </section>
  );
}

export default About06;