import Icon from '../Icon/Icon.jsx'
import './FeatureCard.scss'

export default function FeatureCard({ icon, title, desc, size = 'md' }) {
  return (
    <div className={`feature-card feature-card--${size}`}>
      <div className="feature-card__icon">
        <Icon name={icon} size={20} strokeWidth={1.75} />
      </div>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__desc">{desc}</p>
    </div>
  )
}
