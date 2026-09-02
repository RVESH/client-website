import { useCallback, useEffect, useRef, useState } from 'react'
import { CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react'
import ProductPreview from '../../components/ProductPreview/ProductPreview.jsx'
import './ProductPreviewSection.scss'

// The site's single compact product/feature carousel — cycles through
// three real product surfaces rather than a generic marketing hero slider.
const slides = [
  {
    id: 'automations',
    label: 'nexora.ai/automations',
    image: 'featureAutomationPreview',
    title: 'Design automations visually',
    desc: 'Drag, drop and branch multi-step workflows without writing a line of code.',
    points: [
      'One workspace for automations, analytics and integrations',
      'Every decision explainable, auditable and reversible',
    ],
  },
  {
    id: 'analytics',
    label: 'nexora.ai/analytics',
    image: 'featureAnalyticsPreview',
    title: 'Watch performance in real time',
    desc: 'Live dashboards surface trends and anomalies as they happen, not after the fact.',
    points: [
      'Sub-minute data latency across every workflow',
      'Custom, saved views for every team',
    ],
  },
  {
    id: 'security',
    label: 'nexora.ai/security',
    image: 'featureSecurityPreview',
    title: 'Operate with enterprise controls',
    desc: 'Encryption, role-based access and full audit trails, built into the foundation.',
    points: [
      'AES-256 encryption in transit and at rest',
      'Role-based access with SSO support',
    ],
  },
]

const AUTOPLAY_MS = 6000

export default function ProductPreviewSection() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)
  const touchStartX = useRef(null)
  const trackRef = useRef(null)

  const goTo = useCallback((next) => {
    setIndex(((next % slides.length) + slides.length) % slides.length)
  }, [])

  const goNext = useCallback(() => goTo(index + 1), [goTo, index])
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index])

  // Autoplay, paused on hover/focus and while a touch drag is active
  useEffect(() => {
    if (paused) return undefined
    timerRef.current = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length)
    }, AUTOPLAY_MS)
    return () => clearInterval(timerRef.current)
  }, [paused])

  function handleKeyDown(e) {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      goNext()
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      goPrev()
    }
  }

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX
    setPaused(true)
  }

  function handleTouchEnd(e) {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    const threshold = 40
    if (delta > threshold) goPrev()
    else if (delta < -threshold) goNext()
    touchStartX.current = null
    setPaused(false)
  }

  const slide = slides[index]

  return (
    <section className="section product-showcase">
      <div className="container">
        <div className="section-head">
          <span className="section-head__eyebrow">Inside Nexora</span>
          <h2 className="section-head__title">One interface for the entire workflow</h2>
        </div>

        <div
          className="product-showcase__carousel"
          role="region"
          aria-roledescription="carousel"
          aria-label="Product feature previews"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="product-showcase__inner">
            <div className="product-showcase__copy">
              <p className="product-showcase__desc">{slide.desc}</p>
              <h3 className="product-showcase__title">{slide.title}</h3>
              <ul className="product-showcase__points">
                {slide.points.map((point) => (
                  <li key={point}>
                    <CheckCircle2 size={16} strokeWidth={2} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="product-showcase__visual"
              ref={trackRef}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <ProductPreview
                image={slide.image}
                label={slide.label}
                alt={slide.title}
                variant="compact"
              />
            </div>
          </div>

          <div className="product-showcase__controls">
            <button
              type="button"
              className="product-showcase__arrow"
              onClick={goPrev}
              aria-label="Previous preview"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="product-showcase__dots" role="tablist" aria-label="Choose preview">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show ${s.title}`}
                  className={`product-showcase__dot ${i === index ? 'product-showcase__dot--active' : ''}`}
                  onClick={() => goTo(i)}
                />
              ))}
            </div>

            <button
              type="button"
              className="product-showcase__arrow"
              onClick={goNext}
              aria-label="Next preview"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
