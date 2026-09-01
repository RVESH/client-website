import { Clock, MapPin } from 'lucide-react';
import { site } from '../../data/site';
import './AreasHours.scss';

export default function AreasHours() {
  return (
    <section className="section--raised section areas-section">
      <div className="container areas-section__grid">
        <div>
          <h2><MapPin size={20} aria-hidden="true" /><span>Where we work</span></h2>
          <p className="areas-section__lead">
            Based in {site.serviceAreas[0]}, working across the wider area. Outside this list? Ask — we
            often still cover it.
          </p>
          <ul className="areas-section__list">
            {site.serviceAreas.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2><Clock size={20} aria-hidden="true" /><span>Opening hours</span></h2>
          <table className="areas-section__hours">
            <tbody>
              {site.hours.map((h) => (
                <tr key={h.day}>
                  <th scope="row">{h.day}</th>
                  <td>{h.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="areas-section__note">Emergency electrical &amp; plumbing calls answered outside these hours.</p>
        </div>
      </div>
    </section>
  );
}
