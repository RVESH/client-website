import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import Tag from '../Tag/Tag.jsx'
import { getSellerById } from '../../data/sellers.js'
import './ProductCard.scss'

export default function ProductCard({ product, index = 0 }) {
  const seller = getSellerById(product.seller)
  const onSale = product.compareAtPrice && product.compareAtPrice > product.price

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <span className="product-card__index">{String(index + 1).padStart(2, '0')}</span>

      <div className="product-card__image">
        <img src={product.images[0]} alt={product.title} loading="lazy" />
        <div className="product-card__tags">
          {product.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>

      <div className="product-card__body">
        <span className="product-card__seller">{seller?.name}</span>
        <h3 className="product-card__title">{product.title}</h3>

        <div className="product-card__meta">
          <span className="product-card__rating">
            <Star size={13} strokeWidth={0} fill="currentColor" /> {product.rating}
            <span className="product-card__review-count">({product.reviewCount})</span>
          </span>
          <Tag tone={product.availability === 'In stock' ? 'success' : 'cobalt'}>{product.availability}</Tag>
        </div>

        <div className="product-card__price-row">
          <span className="product-card__price">${product.price}</span>
          {onSale && <span className="product-card__price-compare">${product.compareAtPrice}</span>}
        </div>
      </div>
    </Link>
  )
}
