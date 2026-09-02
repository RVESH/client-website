// ============================================================
// features.js — feature copy for Home + Features pages.
// `icon` values map to lucide-react icon names used in components.
// ============================================================

export const coreCapabilities = [
  {
    icon: 'BrainCircuit',
    title: 'Adaptive AI models',
    desc: 'Models that learn from your workflows and improve decisions over time, without manual retraining.',
  },
  {
    icon: 'Workflow',
    title: 'Visual automation',
    desc: 'Build multi-step automations with a drag-and-drop canvas — no engineering ticket required.',
  },
  {
    icon: 'BarChart3',
    title: 'Real-time analytics',
    desc: 'Track performance, usage and outcomes as they happen with live, queryable dashboards.',
  },
  {
    icon: 'PlugZap',
    title: 'Deep integrations',
    desc: 'Connect the tools your team already runs on — data flows in and out without duplication.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Enterprise security',
    desc: 'SOC 2-aligned infrastructure, encryption at rest and in transit, and granular access control.',
  },
  {
    icon: 'Sparkles',
    title: 'Continuous improvement',
    desc: 'Every workflow run feeds back into the system, sharpening accuracy release after release.',
  },
]

export const featureHighlights = [
  {
    icon: 'Zap',
    title: 'Automate the repetitive work',
    desc: 'Turn multi-step manual processes into automations that trigger, decide and act on their own.',
    image: 'featureAutomationPreview',
  },
  {
    icon: 'LineChart',
    title: 'See what is actually happening',
    desc: 'Live dashboards surface trends, anomalies and bottlenecks before they become problems.',
    image: 'featureAnalyticsPreview',
  },
  {
    icon: 'Lock',
    title: 'Built for serious teams',
    desc: 'Enterprise-grade controls, audit trails and reliability baked into the foundation.',
    image: 'featureSecurityPreview',
  },
]

export const useCases = [
  {
    icon: 'Headset',
    title: 'Customer support',
    desc: 'Auto-triage tickets, surface the right answer and route escalations instantly.',
  },
  {
    icon: 'TrendingUp',
    title: 'Revenue operations',
    desc: 'Score leads, prioritize pipeline and flag deals at risk before they slip.',
  },
  {
    icon: 'Settings2',
    title: 'Operations',
    desc: 'Keep processes moving with automated approvals, handoffs and exception handling.',
  },
  {
    icon: 'FileSearch',
    title: 'Research & insights',
    desc: 'Summarize, tag and cross-reference large volumes of documents in seconds.',
  },
]

export const stats = [
  { value: '12,800+', label: 'Teams onboarded' },
  { value: '340M+', label: 'Workflow runs / month' },
  { value: '99.99%', label: 'Platform uptime' },
  { value: '4.9 / 5', label: 'Average review score' },
]

export const detailedFeatureGroups = [
  {
    id: 'ai',
    icon: 'BrainCircuit',
    title: 'AI capabilities',
    desc: 'Purpose-built models that understand your data and act on it responsibly.',
    image: 'featureAutomationPreview',
    points: [
      'Context-aware models trained on structured and unstructured data',
      'Human-in-the-loop review for sensitive decisions',
      'Confidence scoring on every AI-generated output',
      'Configurable guardrails per workflow and team',
    ],
  },
  {
    id: 'automation',
    icon: 'Workflow',
    title: 'Automation',
    desc: 'Design multi-step automations visually, then let them run without supervision.',
    image: 'featureAutomationPreview',
    points: [
      'Drag-and-drop automation canvas with branching logic',
      'Trigger on events, schedules or data changes',
      'Built-in retries, error handling and fallbacks',
      'Version history for every automation you publish',
    ],
  },
  {
    id: 'analytics',
    icon: 'BarChart3',
    title: 'Analytics',
    desc: 'Understand exactly how your workflows are performing, in real time.',
    image: 'featureAnalyticsPreview',
    points: [
      'Live dashboards with sub-minute data latency',
      'Custom reports and saved views per team',
      'Anomaly detection with automatic alerts',
      'Exportable data for downstream BI tools',
    ],
  },
  {
    id: 'integrations',
    icon: 'PlugZap',
    title: 'Integrations',
    desc: 'Nexora sits alongside your existing stack instead of replacing it.',
    image: 'featureSecurityPreview',
    points: [
      '80+ native connectors across sales, support and ops tools',
      'Two-way sync keeps systems of record consistent',
      'Open API and webhooks for custom connections',
      'Granular field-level mapping control',
    ],
  },
  {
    id: 'security',
    icon: 'ShieldCheck',
    title: 'Security & reliability',
    desc: 'Infrastructure designed for teams that cannot afford downtime or data risk.',
    image: 'featureSecurityPreview',
    points: [
      'Encryption in transit and at rest (AES-256)',
      'Role-based access control and SSO support',
      'Full audit logging across every workspace action',
      '99.99% uptime backed by a public status page',
    ],
  },
]

export const integrations = [
  { name: 'Slack', category: 'Communication', icon: 'MessageSquare' },
  { name: 'Salesforce', category: 'CRM', icon: 'Cloud' },
  { name: 'HubSpot', category: 'CRM', icon: 'Magnet' },
  { name: 'Google Workspace', category: 'Productivity', icon: 'Mail' },
  { name: 'Notion', category: 'Docs', icon: 'FileText' },
  { name: 'Zendesk', category: 'Support', icon: 'Headset' },
  { name: 'Jira', category: 'Project mgmt', icon: 'Kanban' },
  { name: 'Stripe', category: 'Billing data', icon: 'CreditCard' },
  { name: 'Snowflake', category: 'Data warehouse', icon: 'Database' },
  { name: 'Zapier', category: 'Automation', icon: 'Zap' },
  { name: 'Amplitude', category: 'Analytics', icon: 'Activity' },
{ name: 'GitHub', category: 'Engineering', icon: 'Code' },]
