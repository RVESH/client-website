// ============================================================================
// PIPELINE — stage definitions for the Deals board
// ============================================================================

export const pipelineStages = [
  { id: 'prospecting', label: 'Prospecting', color: '#a0a8b6' },
  { id: 'qualification', label: 'Qualification', color: '#3b82f6' },
  { id: 'proposal', label: 'Proposal Sent', color: '#f59e0b' },
  { id: 'negotiation', label: 'Negotiation', color: '#8b5cf6' },
  { id: 'closed-won', label: 'Closed Won', color: '#10b981' },
  { id: 'closed-lost', label: 'Closed Lost', color: '#ef4444' },
]

export const getStageById = (id) => pipelineStages.find((s) => s.id === id)
