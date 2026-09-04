// ============================================================================
// DEALS — demo data, distributed across pipeline stages
// ============================================================================

import { companies } from './companies'
import { team } from './team'
import { contacts } from './contacts'
import { pipelineStages } from './pipeline'

const dealNameTemplates = [
  'Annual Platform License', 'Enterprise Rollout', 'Q3 Expansion Deal',
  'Multi-Seat Renewal', 'Onboarding + Implementation', 'Pilot Program',
  'Team Upgrade Package', 'Custom Integration Deal', 'Growth Plan Upgrade',
  'Strategic Partnership', 'Regional Expansion', 'Migration Project',
]

// Stage distribution weighted toward earlier stages, like a real funnel.
const stageDistribution = [
  'prospecting', 'prospecting', 'prospecting', 'prospecting', 'prospecting',
  'qualification', 'qualification', 'qualification', 'qualification',
  'proposal', 'proposal', 'proposal',
  'negotiation', 'negotiation',
  'closed-won', 'closed-won', 'closed-won',
  'closed-lost', 'closed-lost',
]

function seededPick(list, seed) {
  return list[seed % list.length]
}

function generateDeals(count) {
  const rows = []
  for (let i = 0; i < count; i++) {
    const company = seededPick(companies, i * 2 + 1)
    const owner = seededPick(team, i + 3)
    const contact = seededPick(contacts, i * 3 + 2)
    const stageId = seededPick(stageDistribution, i)
    const nameTemplate = seededPick(dealNameTemplates, i * 5 + 1)
    const value = 6000 + ((i * 4231) % 94000)
    const daysToClose = 5 + ((i * 7) % 60)
    const closeDate = new Date(Date.now() + daysToClose * 24 * 60 * 60 * 1000).toISOString()
    const probability = seededPick([20, 35, 50, 65, 80, 90], i + 1)

    rows.push({
      id: `deal-${String(i + 1).padStart(3, '0')}`,
      name: `${company.name} — ${nameTemplate}`,
      companyId: company.id,
      contactId: contact.id,
      ownerId: owner.id,
      stageId,
      value,
      probability,
      closeDate,
    })
  }
  return rows
}

export const deals = generateDeals(26)

export const getDealsByStage = (stageId) => deals.filter((d) => d.stageId === stageId)

export const getStageTotals = () =>
  pipelineStages.map((stage) => {
    const stageDeals = getDealsByStage(stage.id)
    return {
      ...stage,
      count: stageDeals.length,
      total: stageDeals.reduce((sum, d) => sum + d.value, 0),
    }
  })

export const getDealById = (id) => deals.find((d) => d.id === id)
