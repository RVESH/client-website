import "./Services10.scss";

const services = [
  ["Private Dining", "Intimate menus for special evenings."],
  ["Celebrations", "Thoughtful hosting for birthdays and milestones."],
  ["Corporate Dining", "A polished setting for team gatherings."],
];

function Services10() {
  return (
    <section className="sb-services-10">
      <div className="sb-services-10__container">
        <div className="sb-services-10__intro">
          <span>PRIVATE & EVENTS</span>
          <h2>For occasions that deserve a little more.</h2>
        </div>

        <div className="sb-services-10__grid">
          {services.map(([title, text], index) => (
            <article key={title}>
              <div className="sb-services-10__number">0{index + 1}</div>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href={`#${title}`}>Enquire ↗</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services10;