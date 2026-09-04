import './CategoryChip.scss'

export default function CategoryChip({ name, icon, count }) {
  return (
    <button type="button" className="category-chip">
      <span className="category-chip__icon">
        {icon}
      </span>

      <span className="category-chip__name">
        {name}
      </span>

      <span className="category-chip__count">
        {count}
      </span>
    </button>
  )
}