// ============================================================
// solutions.js — solutions-by-business-type content for the
// Solutions page (and referenced sections on Home).
// ============================================================

export const solutions = [
  {
    id: 'sales',
    icon: 'TrendingUp',
    title: 'Sales teams',
    desc: 'Give reps a copilot that scores leads, drafts outreach and flags deals that need attention.',
    image: 'solutionsScreenshotSales',
    workflow: [
      'New lead enters the pipeline',
      'AI scores fit and intent automatically',
      'High-priority leads route to the right rep',
      'Follow-up sequence drafted and queued',
    ],
    benefits: [
      '32% faster lead response time',
      'Fewer deals slipping through the cracks',
      'Consistent follow-up without manual tracking',
    ],
  },
  {
    id: 'support',
    icon: 'Headset',
    title: 'Support teams',
    desc: 'Triage tickets instantly, surface the right knowledge and resolve routine requests automatically.',
    image: 'solutionsScreenshotSupport',
    workflow: [
      'Ticket arrives from any channel',
      'AI classifies intent and urgency',
      'Suggested resolution drafted for review',
      'Escalations routed to the right specialist',
    ],
    benefits: [
      '41% reduction in first-response time',
      'Consistent answers across every channel',
      'Agents focus on complex, high-value cases',
    ],
  },
  {
    id: 'operations',
    icon: 'Settings2',
    title: 'Operations teams',
    desc: 'Keep cross-functional processes moving with automated approvals, handoffs and exception handling.',
    image: 'solutionsScreenshotOps',
    workflow: [
      'Process request submitted or triggered',
      'Automated checks validate the request',
      'Approvals routed based on policy',
      'Exceptions flagged for human review',
    ],
    benefits: [
      '2.4x faster process cycle time',
      'Full audit trail on every step',
      'Fewer manual handoffs between teams',
    ],
  },
  {
    id: 'product',
    icon: 'LayoutGrid',
    title: 'Product teams',
    desc: 'Turn scattered feedback and usage data into a prioritized, defensible roadmap.',
    image: 'solutionsScreenshotOps',
    workflow: [
      'Feedback collected across channels',
      'AI clusters themes and sentiment',
      'Impact scored against usage data',
      'Roadmap items generated for review',
    ],
    benefits: [
      'Faster signal from noisy feedback',
      'Roadmap decisions backed by data',
      'Less time spent tagging and sorting manually',
    ],
  },
]
