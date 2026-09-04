// ============================================================================
// FORMAT UTILITIES
// ============================================================================

export function formatCurrency(value, { compact = false } = {}) {
  if (compact) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 1,
    }).format(value)
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)
}

export function formatNumber(value) {
  return new Intl.NumberFormat('en-US').format(value)
}

export function formatPercent(value, { showSign = false } = {}) {
  const sign = showSign && value > 0 ? '+' : ''
  return `${sign}${value}%`
}

export function formatDate(date, { style = 'medium' } = {}) {
  const d = typeof date === 'string' ? new Date(date) : date
  if (style === 'short') {
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(d)
  }
  if (style === 'time') {
    return new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit' }).format(d)
  }
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(d)
}

export function relativeDay(date) {
  const d = typeof date === 'string' ? new Date(date) : date
  const now = new Date()
  const startOfDay = (dt) => new Date(dt.getFullYear(), dt.getMonth(), dt.getDate())
  const diffDays = Math.round((startOfDay(now) - startOfDay(d)) / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return 'Today'
  if (diffDays === 1) return 'Yesterday'
  if (diffDays === -1) return 'Tomorrow'
  if (diffDays > 1 && diffDays < 7) return `${diffDays} days ago`
  if (diffDays < -1 && diffDays > -7) return `In ${Math.abs(diffDays)} days`
  return formatDate(d, { style: 'short' })
}

export function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

export function truncate(str, length = 60) {
  if (!str || str.length <= length) return str
  return `${str.slice(0, length).trim()}…`
}
