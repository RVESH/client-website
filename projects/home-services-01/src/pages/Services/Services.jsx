import { CheckCircle2 } from 'lucide-react';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import IconTile from '../../components/IconTile/IconTile';
import Button from '../../components/Button/Button';
import CTA from '../../sections/CTA/CTA';
import { services } from '../../data/services';
import { getImage } from '../../data/images';
import './ServicesPage.scss';

export default function ServicesPage() {
  return (
    <>
      <section className="section services-page-hero section--ink">
        <div className="container">
          <SectionHeading
            index="SERVICES"
            title="What we cover, and what's included."
            lead="Six trades under one roof, each run by people who specialize in it — quoted plainly, with no line you can't ask about."
          />
        </div>
      </section>

      <section className="section services-page-list">
        <div className="container">
          {services.map((s, i) => (
            <article className="service-detail" id={s.slug} key={s.slug}>
              <div className="service-detail__media">
                <img src={getImage(s.image)} alt="" loading="lazy" />
              </div>
              <div className="service-detail__body">
                <div className="service-detail__head">
                  <IconTile name={s.icon} size="lg" />
                  <div>
                    <span className="index-label">{String(i + 1).padStart(2, '0')}</span>
                    <h2>{s.name}</h2>
                  </div>
                </div>
                <p className="service-detail__desc">{s.description}</p>
                <ul className="service-detail__included">
                  {s.included.map((item) => (
                    <li key={item}><CheckCircle2 size={16} aria-hidden="true" /><span>{item}</span></li>
                  ))}
                </ul>
                <Button to="/contact" variant="outline">Get a quote for this</Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
