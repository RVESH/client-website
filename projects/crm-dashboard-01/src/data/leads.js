// ============================================================================
// LEADS — demo data
// Generated deterministically from a fixed name/company list so the data
// is realistic in volume without being hand-typed one-by-one.
// ============================================================================

import { companies } from './companies'
import { team } from './team'

export const leadStatuses = ['New', 'Contacted', 'Qualified', 'Unqualified', 'Converted']
export const leadSources = ['Website', 'Referral', 'Cold Outreach', 'Event', 'Paid Ads', 'Partner']

const firstNames = [
  'Olivia', 'Liam', 'Emma', 'Noah', 'Ava', 'Elijah', 'Sophia', 'Lucas',
  'Isabella', 'Mason', 'Mia', 'Ethan', 'Amelia', 'Logan', 'Harper', 'James',
  'Evelyn', 'Benjamin', 'Abigail', 'Henry', 'Emily', 'Alexander', 'Charlotte',
  'Sebastian', 'Grace', 'Jack', 'Chloe', 'Owen', 'Zoey', 'Daniel',
]

const lastNames = [
  'Bennett', 'Coleman', 'Foster', 'Grant', 'Hayes', 'Ingram', 'Jennings',
  'Kessler', 'Lawson', 'Mercer', 'Nolan', 'Osei', 'Pruitt', 'Quintero',
  'Rowland', 'Sanders', 'Tran', 'Ulrich', 'Vance', 'Whitfield', 'Yamada',
  'Zapata', 'Alvarado', 'Brantley',
]

const titles = [
  'VP of Sales', 'Marketing Director', 'Head of Operations', 'IT Manager',
  'Procurement Lead', 'CFO', 'COO', 'Product Manager', 'Founder',
  'Business Development Manager',
]

function seededPick(list, seed) {
  return list[seed % list.length]
}

function generateLeads(count) {
  const rows = []
  for (let i = 0; i < count; i++) {
    const first = seededPick(firstNames, i * 3 + 1)
    const last = seededPick(lastNames, i * 5 + 2)
    const company = seededPick(companies, i * 2 + 3)
    const status = seededPick(leadStatuses, i + 1)
    const source = seededPick(leadSources, i * 4 + 1)
    const owner = seededPick(team, i + 2)
    const title = seededPick(titles, i * 3 + 2)
    const score = 30 + ((i * 17) % 70)
    const daysAgo = (i * 3) % 45
    const createdAt = new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000).toISOString()
    const estValue = 4000 + ((i * 2137) % 46000)

    rows.push({
      id: `lead-${String(i + 1).padStart(3, '0')}`,
      name: `${first} ${last}`,
      title,
      email: `${first.toLowerCase()}.${last.toLowerCase()}@${company.name
        .toLowerCase()
        .replace(/[^a-z]/g, '')
        .slice(0, 12)}.com`,
      phone: `+1 (${200 + (i % 7) * 11}) 555-${String(1000 + i * 37).slice(-4)}`,
      companyId: company.id,
      status,
      source,
      ownerId: owner.id,
      score,
      estValue,
      createdAt,
    })
  }
  return rows
}

export const leads = generateLeads(32)

export const getLeadById = (id) => leads.find((l) => l.id === id)
