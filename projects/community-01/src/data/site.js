// ============================================================
// site.js — client-editable brand, navigation and footer content.
// ============================================================

export const site = {
  name: 'Orbit',
  tagline: 'Find your people',
  description:
    'Orbit is where curious, creative people find their communities — discover spaces built around what you love, join the conversation and never miss a moment.',
  domain: 'orbit.community',
}

// Nav items scroll to in-page sections (single-page product site).
export const nav = [
  { label: 'Discover', href: '#discover' },
  { label: 'Categories', href: '#categories' },
  { label: 'Discussions', href: '#discussions' },
  { label: 'Events', href: '#events' },
  { label: 'Members', href: '#members' },
]

export const ctaLinks = {
  primary: { label: 'Join Orbit', href: '#join' },
  secondary: { label: 'Explore communities', href: '#discover' },
}

export const footerLinks = {
  product: [
    { label: 'Discover communities', href: '#discover' },
    { label: 'Categories', href: '#categories' },
    { label: 'Events', href: '#events' },
    { label: 'Discussions', href: '#discussions' },
  ],
  company: [
    { label: 'About Orbit', href: '#' },
    { label: 'Community guidelines', href: '#' },
    { label: 'Careers', href: '#' },
  ],
  resources: [
    { label: 'Help center', href: '#' },
    { label: 'Creator toolkit', href: '#' },
    { label: 'Status', href: '#' },
  ],
}

export const social = [
  { label: 'X', url: 'https://x.com/orbitcommunity' },
  { label: 'Instagram', url: 'https://instagram.com/orbitcommunity' },
  { label: 'Discord', url: 'https://discord.gg/orbit' },
  { label: 'YouTube', url: 'https://youtube.com/@orbitcommunity' },
]

export const platformStats = [
  { value: '2.4M+', label: 'Members worldwide' },
  { value: '18,600+', label: 'Active communities' },
  { value: '340K+', label: 'Posts this month' },
  { value: '120+', label: 'Countries represented' },
]
