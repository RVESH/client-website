import { useCallback, useEffect, useRef, useState } from 'react'
import './Slider.scss'

/**
 * A single refined slider used across the site wherever browsing a
 * sequence of projects benefits from it. Supports touch/swipe, arrow
 * controls, dot navigation, keyboard (left/right when focused), and
 * optional autoplay that pauses on hover or focus.
 */
export default function Slider({ items, renderItem, autoplay = false, interval = 6000, label = 'Projects' }) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const trackRef = useRef(null)
  const touchStartX = useRef(null)
  const touchDeltaX = useRef(0)

  const count = items.length

  const goTo = useCallback((index) => {
    const next = ((index % count) + count) % count
    setActive(next)
  }, [count])

  const next = useCallback(() => goTo(active + 1), [active, goTo])
  const prev = useCallback(() => goTo(active - 1), [active, goTo])

  // Autoplay
  useEffect(() => {
    if (!autoplay || paused || count <= 1) return
    const id = setInterval(() => goTo(active + 1), interval)
    return () => clearInterval(id)
  }, [autoplay, paused, active, count, goTo, interval])

  // Keyboard support when the slider region has focus
  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); next() }
    if (e.key === 'ArrowLeft') { e.preventDefault(); prev() }
  }

  // Touch / swipe support
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
    touchDeltaX.current = 0
  }
  const onTouchMove = (e) => {
    if (touchStartX.current === null) return
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current
  }
  const onTouchEnd = () => {
    const threshold = 40
    if (touchDeltaX.current > threshold) prev()
    else if (touchDeltaX.current < -threshold) next()
    touchStartX.current = null
    touchDeltaX.current = 0
  }

  return (
    <div
      className="slider"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      tabIndex={0}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className="slider__viewport"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          ref={trackRef}
          className="slider__track"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {items.map((item, i) => (
            <div
              className="slider__slide"
              key={item.id ?? i}
              aria-hidden={i !== active}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}`}
            >
              {renderItem(item, i)}
            </div>
          ))}
        </div>
      </div>

      {count > 1 && (
        <div className="slider__controls">
          <button type="button" className="slider__arrow" onClick={prev} aria-label="Previous slide">
            <span aria-hidden="true">&larr;</span>
          </button>

          <div className="slider__dots">
            {items.map((item, i) => (
              <button
                key={item.id ?? i}
                type="button"
                className={'slider__dot' + (i === active ? ' is-active' : '')}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === active}
                onClick={() => goTo(i)}
              />
            ))}
          </div>

          <button type="button" className="slider__arrow" onClick={next} aria-label="Next slide">
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      )}
    </div>
  )
}
