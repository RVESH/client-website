import Icon from '../Icon/Icon.jsx'
import './CategoryChip.css'

export default function CategoryChip({ name, icon, count }) {
  return (
    <button type="button" className="category-chip">
      <span className="category-chip__icon">
        <Icon name={icon} size={20} strokeWidth={1.75} />
      </span>
      <span className="category-chip__name">{name}</span>
      <span className="category-chip__count">{count}</span>
    </button>
  )
}
