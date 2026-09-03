import { site } from "../../data/site";
import "./Trust.scss";

export default function Trust() {
  return (
    <section className="trust section--tight">
      <div className="container trust__inner">
        <p className="trust__heading">{site.trust.heading}</p>
        <ul className="trust__list">
          {site.trust.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
