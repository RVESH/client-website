import './Tag.scss'

const TONE_MAP = {
  New: 'lime',
  Bestseller: 'ink',
  Limited: 'coral',
  'In stock': 'success',
  'Made to order': 'cobalt',
  'Sold out': 'mute',
}

export default function Tag({ children, tone }) {
  const resolvedTone = tone || TONE_MAP[children] || 'ink'
  return <span className={`tag tag--${resolvedTone}`}>{children}</span>
}
