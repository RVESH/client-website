import Icon from '../Icon/Icon.jsx'
import './IntegrationCard.scss'

export default function IntegrationCard({ name, category, icon }) {
  return (
    <div className="integration-card">
      <div className="integration-card__icon">
        <Icon name={icon} size={18} strokeWidth={1.75} />
      </div>

      <div className="integration-card__body">
        <div className="integration-card__name">{name}</div>
        <div className="integration-card__category">{category}</div>
      </div>
    </div>
  )
}