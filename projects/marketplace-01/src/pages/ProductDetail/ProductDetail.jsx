import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { Star, ShieldCheck } from 'lucide-react'
import Tag from '../../components/Tag/Tag.jsx'
import Button from '../../components/Button/Button.jsx'
import ProductGallery from '../../components/ProductGallery/ProductGallery.jsx'
import ProductGrid from '../../components/ProductGrid/ProductGrid.jsx'
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import { getProductById, getRelatedProducts } from '../../data/products.js'
import { getSellerById } from '../../data/sellers.js'
import { getCategoryById } from '../../data/categories.js'
import { images } from '../../data/images.js'
import './ProductDetail.scss'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)

  useEffect(() => {
    if (product) window.scrollTo({ top: 0, behavior: 'auto' })
  }, [product])

  if (!product) {
    return <Navigate to="/marketplace" replace />
  }

  const seller = getSellerById(product.seller)
  const category = getCategoryById(product.category)
  const related = getRelatedProducts(product, 4)
  const onSale = product.compareAtPrice && product.compareAtPrice > product.price

  return (
    <div className="page product-detail-page">
      <section className="section--tight product-detail__crumbs-section">
        <div className="container">
          <nav className="product-detail__crumbs" aria-label="Breadcrumb">
            <Link to="/marketplace">Marketplace</Link>
            <span>/</span>
            <Link to={`/marketplace?category=${product.category}`}>{category?.name}</Link>
            <span>/</span>
            <span aria-current="page">{product.title}</span>
          </nav>
        </div>
      </section>

      <section className="section--tight product-detail">
        <div className="container product-detail__inner">
          <div className="product-detail__gallery">
            <ProductGallery images={product.images} alt={product.title} />
          </div>

          <div className="product-detail__info">
            <div className="product-detail__tags">
              {product.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
              <Tag tone={product.availability === 'In stock' ? 'success' : 'cobalt'}>{product.availability}</Tag>
            </div>

            <h1 className="product-detail__title">{product.title}</h1>

            <Link to={`/marketplace`} className="product-detail__seller">
              By <strong>{seller?.name}</strong> · {seller?.location}
            </Link>

            <div className="product-detail__rating">
              <Star size={15} strokeWidth={0} fill="currentColor" />
              {product.rating} <span>({product.reviewCount} reviews)</span>
            </div>

            <div className="product-detail__price-row">
              <span className="product-detail__price">${product.price}</span>
              {onSale && <span className="product-detail__price-compare">${product.compareAtPrice}</span>}
            </div>

            <p className="product-detail__desc">{product.description}</p>

            <div className="product-detail__actions">
              <Button
                to="/contact"
                state={{ productTitle: product.title, category: category?.name }}
                variant="primary"
                size="lg"
                icon="ArrowRight"
              >
                Enquire about this piece
              </Button>
            </div>
            <p className="product-detail__actions-note">
              <ShieldCheck size={14} strokeWidth={2} /> No payment required — enquiries route to our team for a
              direct reply.
            </p>

            <div className="product-detail__specs">
              <h2>Specifications</h2>
              <dl>
                {product.specs.map((spec) => (
                  <div key={spec.label} className="product-detail__spec-row">
                    <dt>{spec.label}</dt>
                    <dd>{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {seller && (
              <div className="product-detail__seller-card">
                <img src={images[seller.avatar]} alt={`${seller.name} studio mark`} loading="lazy" />
                <div>
                  <h3>{seller.name}</h3>
                  <p>{seller.tagline}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section product-detail__related">
          <div className="container">
            <SectionHeading kicker="You might also like" title="Related pieces" />
            <ProductGrid products={related} />
          </div>
        </section>
      )}
    </div>
  )
}
