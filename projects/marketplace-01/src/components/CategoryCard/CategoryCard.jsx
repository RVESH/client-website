import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Icon from '../Icon/Icon.jsx'
import { images } from '../../data/images.js'
import './CategoryCard.scss'

export default function CategoryCard({ category, index = 0 }) {
  return (
    <Link to={`/marketplace?category=${category.id}`} className="category-card">
      <span className="category-card__index">{String(index + 1).padStart(2, '0')}</span>

      <div className="category-card__image">
        <img src={images[category.image]} alt={`${category.name} category`} loading="lazy" />
      </div>

      <div className="category-card__body">
        <div className="category-card__icon">
          <Icon name={category.icon} size={18} strokeWidth={1.75} />
        </div>
        <h3 className="category-card__name">{category.name}</h3>
        <p className="category-card__desc">{category.description}</p>
        <span className="category-card__count">
          {category.itemCount} items <ArrowUpRight size={14} strokeWidth={2} />
        </span>
      </div>
    </Link>
  )
}
