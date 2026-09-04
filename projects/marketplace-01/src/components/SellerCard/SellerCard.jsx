import { Star, MapPin } from 'lucide-react'
import { images } from '../../data/images.js'
import './SellerCard.scss'

export default function SellerCard({ seller }) {
  return (
    <article className="seller-card">
      <div className="seller-card__head">
        <img src={images[seller.avatar]} alt={`${seller.name} studio mark`} className="seller-card__avatar" loading="lazy" />
        <div className="seller-card__head-text">
          <h3 className="seller-card__name">{seller.name}</h3>
          <span className="seller-card__location">
            <MapPin size={12} strokeWidth={2} /> {seller.location}
          </span>
        </div>
      </div>

      <p className="seller-card__tagline">{seller.tagline}</p>

      <div className="seller-card__meta">
        <span className="seller-card__rating">
          <Star size={13} strokeWidth={0} fill="currentColor" /> {seller.rating}
        </span>
        <span className="seller-card__count">{seller.productCount} items</span>
        <span className="seller-card__since">Since {seller.since}</span>
      </div>
    </article>
  )
}
