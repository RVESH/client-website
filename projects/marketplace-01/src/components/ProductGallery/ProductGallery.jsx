import { useState } from 'react'
import './ProductGallery.scss'

export default function ProductGallery({ images, alt }) {
  const [active, setActive] = useState(0)

  return (
    <div className="product-gallery">
      <div className="product-gallery__main">
        <img src={images[active]} alt={alt} />
      </div>

      {images.length > 1 && (
        <div className="product-gallery__thumbs" role="tablist" aria-label="Product images">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              role="tab"
              aria-selected={active === i}
              aria-label={`Show image ${i + 1} of ${images.length}`}
              className={`product-gallery__thumb ${active === i ? 'product-gallery__thumb--active' : ''}`}
              onClick={() => setActive(i)}
            >
              <img src={src} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
