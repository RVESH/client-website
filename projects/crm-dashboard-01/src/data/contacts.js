// ============================================================================
// CONTACTS — demo data
// Contacts represent people at companies who have already been qualified
// (distinct from raw leads, which are earlier in the funnel).
// ============================================================================

import { companies } from './companies'
import { team } from './team'

const names = [
  ['Ravi', 'Subramaniam'], ['Claire', 'Dubois'], ['Marcus', 'Webb'],
  ['Lena', 'Fischer'], ['Tomas', 'Novak'], ['Fatima', 'Haidari'],
  ['Grace', 'O\u2019Malley'], ['Andre', 'Silva'], ['Naomi', 'Kessler'],
  ['Victor', 'Iwu'], ['Ingrid', 'Solberg'], ['Kenji', 'Watanabe'],
  ['Isla', 'MacLeod'], ['Rafael', 'Ortiz'], ['Yuki', 'Tanaka'],
  ['Colin', 'Farrell'], ['Priti', 'Deshmukh'], ['Samuel', 'Osei'],
  ['Anya', 'Petrova'], ['Malik', 'Robinson'],
]

const titles = [
  'Chief Technology Officer', 'Director of Procurement', 'Head of Marketing',
  'VP Customer Success', 'Operations Manager', 'Finance Director',
  'IT Director', 'General Manager', 'Founder & CEO', 'VP Engineering',
]

const tagPool = [
  ['Decision Maker'], ['Champion'], ['Technical Buyer'], ['Economic Buyer'],
  ['Champion', 'Decision Maker'], ['Influencer'], ['Referral Source'],
]

function seededPick(list, seed) {
  return list[seed % list.length]
}

function generateContacts(count) {
  const rows = []
  for (let i = 0; i < count; i++) {
    const [first, last] = seededPick(names, i)
    const company = seededPick(companies, i * 3 + 1)
    const owner = seededPick(team, i * 2 + 1)
    const title = seededPick(titles, i * 4 + 2)
    const tags = seededPick(tagPool, i + 1)
    const daysAgo = (i * 5) % 90

    rows.push({
      id: `contact-${String(i + 1).padStart(3, '0')}`,
      name: `${first} ${last}`,
      title,
      companyId: company.id,
      email: `${first.toLowerCase()}.${last.toLowerCase().replace(/[^a-z]/gi, '')}@${company.name
        .toLowerCase()
        .replace(/[^a-z]/g, '')
        .slice(0, 12)}.com`,
      phone: `+1 (${300 + (i % 6) * 13}) 555-${String(2000 + i * 41).slice(-4)}`,
      ownerId: owner.id,
      tags,
      lastContactedAt: new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000).toISOString(),
    })
  }
  return rows
}

export const contacts = generateContacts(20)

export const getContactById = (id) => contacts.find((c) => c.id === id)
