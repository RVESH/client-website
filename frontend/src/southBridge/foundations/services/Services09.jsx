import "./Services09.scss";

const services = [
  ["Workspace", "Projects, tasks and team planning"],
  ["Automation", "Remove repetitive work"],
  ["Analytics", "See what moves the business"],
  ["Integrations", "Connect the tools you already use"],
];

function Services09() {
  return (
    <section className="sb-services-09">
      <div className="sb-services-09__container">
        <div className="sb-services-09__intro">
          <span>PLATFORM</span>
          <h2>Everything important, in one place.</h2>
        </div>

        <div className="sb-services-09__table">
          {services.map(([title, text], index) => (
            <a href={`#${title}`} key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <b>→</b>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services09;