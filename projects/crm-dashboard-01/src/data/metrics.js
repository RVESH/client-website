// ============================================================================
// METRICS — dashboard KPIs and chart series (demo data)
// ============================================================================

export const kpis = [
  {
    id: 'revenue',
    label: 'Revenue Won (MTD)',
    value: 184200,
    format: 'currency',
    delta: 12.4,
    trend: 'up',
  },
  {
    id: 'open-deals',
    label: 'Open Deal Value',
    value: 642500,
    format: 'currency',
    delta: 6.8,
    trend: 'up',
  },
  {
    id: 'new-leads',
    label: 'New Leads (30d)',
    value: 32,
    format: 'number',
    delta: -4.2,
    trend: 'down',
  },
  {
    id: 'conversion',
    label: 'Lead → Deal Rate',
    value: 24,
    format: 'percent',
    delta: 2.1,
    trend: 'up',
  },
]

// Monthly revenue trend (closed-won), last 8 months.
export const revenueTrend = [
  { label: 'Feb', value: 92000 },
  { label: 'Mar', value: 108500 },
  { label: 'Apr', value: 97200 },
  { label: 'May', value: 121800 },
  { label: 'Jun', value: 134600 },
  { label: 'Jul', value: 129300 },
  { label: 'Aug', value: 156900 },
  { label: 'Sep', value: 184200 },
]

// Leads by source, for the donut chart.
export const leadsBySource = [
  { label: 'Website', value: 34, color: '#6366f1' },
  { label: 'Referral', value: 22, color: '#10b981' },
  { label: 'Cold Outreach', value: 18, color: '#f59e0b' },
  { label: 'Event', value: 14, color: '#3b82f6' },
  { label: 'Paid Ads', value: 8, color: '#8b5cf6' },
  { label: 'Partner', value: 4, color: '#ef4444' },
]

export const teamLeaderboard = [
  { name: 'Priya Nair', deals: 9, revenue: 218500 },
  { name: 'Maya Chen', deals: 7, revenue: 176200 },
  { name: 'Ethan Brooks', deals: 6, revenue: 142800 },
  { name: 'Jonah Wexler', deals: 5, revenue: 118400 },
  { name: 'Sofia Alvarez', deals: 4, revenue: 76900 },
]
