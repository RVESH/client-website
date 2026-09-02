import { images } from '../../data/images.js'
import './ProductPreview.scss'

export default function ProductPreview({ image, label = 'Live preview', alt = 'Product interface preview', variant = 'default' }) {
  const src = images[image] || image

  return (
    <div className={`product-preview product-preview--${variant}`}>
      <div className="product-preview__chrome">
        <span className="product-preview__dot" />
        <span className="product-preview__dot" />
        <span className="product-preview__dot" />
        <span className="product-preview__label">{label}</span>
      </div>
      <div className="product-preview__frame">
        <img src={src} alt={alt} loading="lazy" />
      </div>
    </div>
  )
}
