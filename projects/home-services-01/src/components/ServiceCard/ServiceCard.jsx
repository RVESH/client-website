import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import IconTile from '../IconTile/IconTile';
import { getImage } from '../../data/images';
import './ServiceCard.scss';

export default function ServiceCard({ service, index }) {
  return (
    <Link to={`/services#${service.slug}`} className="service-card">
      <div className="service-card__media">
        <img src={getImage(service.image)} alt="" loading="lazy" />
        <span className="service-card__index">{index}</span>
      </div>
      <div className="service-card__body">
        <IconTile name={service.icon} />
        <div>
          <h3>{service.name}</h3>
          <p>{service.short}</p>
        </div>
        <ArrowUpRight className="service-card__arrow" size={20} aria-hidden="true" />
      </div>
    </Link>
  );
}
