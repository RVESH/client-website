import SectionHeading from '../../components/SectionHeading/SectionHeading';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import Button from '../../components/Button/Button';
import { services } from '../../data/services';
import './Services.scss';

export default function Services({ showAll = false }) {
  const list = showAll ? services : services.slice(0, 6);

  return (
    <section className="section services-section">
      <div className="container">
        <div className="services-section__head">
          <SectionHeading
            kicker="What we do"
            title="Six trades, one crew you don't have to re-explain things to."
            lead="Every job is scoped and quoted up front. No sub-contracted surprises — the people who quote it are the people who show up."
          />
          {!showAll && <Button to="/services" variant="outline">View all services</Button>}
        </div>
        <div className="services-section__grid">
          {list.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={String(i + 1).padStart(2, '0')} />
          ))}
        </div>
      </div>
    </section>
  );
}
