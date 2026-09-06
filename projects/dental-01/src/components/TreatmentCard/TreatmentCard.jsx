import { Check } from 'lucide-react'
import Icon from '../Icon/Icon.jsx'
import Button from '../Button/Button.jsx'
import { images } from '../../data/images.js'
import './TreatmentCard.scss'

export default function TreatmentCard({ title, icon, image, summary, details, variant = 'full' }) {
  return (
    <article className={`treatment-card treatment-card--${variant}`}>
      {image && (
        <div className="treatment-card__cover">
          <img src={images[image]} alt={`${title} at Meridian Dental Studio`} loading="lazy" />
        </div>
      )}

      <div className="treatment-card__body">
        <div className="treatment-card__icon">
          <Icon name={icon} size={20} strokeWidth={1.75} />
        </div>
        <h3 className="treatment-card__title">{title}</h3>
        <p className="treatment-card__summary">{summary}</p>

        {details && variant === 'full' && (
          <ul className="treatment-card__details">
            {details.map((detail) => (
              <li key={detail}>
                <Check size={14} strokeWidth={2.5} />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        )}

        <Button to="/contact" variant="outline" size="sm" icon="ArrowRight" className="treatment-card__cta">
          Enquire about this
        </Button>
      </div>
    </article>
  )
}
