const paths = {
  sparkle: (
    <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" />
  ),
  implant: (
    <>
      <path d="M12 3v6" />
      <path d="M8 5.5c1 1 2.5 1.5 4 1.5s3-.5 4-1.5" />
      <path d="M12 9c-2.5 0-4 1.6-4 4.5S9.5 21 12 21s4-3.6 4-7.5S14.5 9 12 9z" />
    </>
  ),
  aligner: (
    <>
      <path d="M4 9c2 6 4 8 8 8s6-2 8-8" />
      <path d="M4 9c2-4 4-5 8-5s6 1 8 5" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
    </>
  ),
  root: (
    <>
      <path d="M9 3h6l1 6-1 3" />
      <path d="M9 3l-1 6 1 3" />
      <path d="M10 12c-1 3-2 5-1.5 8" />
      <path d="M14 12c1 3 2 5 1.5 8" />
    </>
  ),
  veneer: (
    <>
      <path d="M6 4h5a5 5 0 015 5v11H11a5 5 0 01-5-5V4z" />
      <path d="M9 8h4" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19c9-1 13-6 14-14C10 6 6 10 5 19z" />
      <path d="M5 19c2-4 5-7 9-9" />
    </>
  ),
  child: (
    <>
      <circle cx="12" cy="7" r="3" />
      <path d="M6 21c0-4 2.5-6.5 6-6.5s6 2.5 6 6.5" />
    </>
  ),
  restore: (
    <>
      <path d="M4 12a8 8 0 1 1 2.4 5.7" />
      <path d="M4 17v-4h4" />
    </>
  ),
  pulse: (
    <path d="M3 12h4l2-6 4 12 2-9 2 3h4" />
  ),
  scan: (
    <>
      <path d="M4 8V6a2 2 0 0 1 2-2h2" />
      <path d="M16 4h2a2 2 0 0 1 2 2v2" />
      <path d="M20 16v2a2 2 0 0 1-2 2h-2" />
      <path d="M8 20H6a2 2 0 0 1-2-2v-2" />
      <path d="M4 12h16" />
    </>
  ),
  droplet: (
    <path d="M12 3s6 6.5 6 11a6 6 0 1 1-12 0c0-4.5 6-11 6-11z" />
  ),
  door: (
    <>
      <rect x="6" y="3" width="12" height="18" rx="1" />
      <path d="M14.5 12h.01" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <path d="M4 10h16M8 3v4M16 3v4" />
    </>
  ),
  phone: (
    <path d="M6.6 10.8a15.7 15.7 0 006.6 6.6l2.2-2.2a1.5 1.5 0 011.5-.4c1.2.4 2.4.6 3.7.6a1.5 1.5 0 011.5 1.5V21a1.5 1.5 0 01-1.5 1.5C10.5 22.5 1.5 13.5 1.5 4.5A1.5 1.5 0 013 3h4.1a1.5 1.5 0 011.5 1.5c0 1.3.2 2.5.6 3.7a1.5 1.5 0 01-.4 1.5l-2.2 2.1z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  whatsapp: (
    <path d="M7 17l-3.5 1L4.5 14.6A8 8 0 1 1 7 17zm-.3-2.3l.5.3a6 6 0 1 0-1.9-1.9l.3.5-.7 2.2 1.8-1.1zM9.4 8.6c.2-.4.4-.4.6-.4h.4c.1 0 .3 0 .5.4.2.4.6 1.4.7 1.5.1.1.1.3 0 .4-.1.2-.2.3-.4.5-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1.2-.2.7-.8.9-1.1.2-.2.4-.2.6-.1.2.1 1.4.7 1.7.8.2.1.4.2.5.3.1.2.1.9-.2 1.7-.3.8-1.6 1.5-2.2 1.6-.6.1-1.1.2-3.7-.8-3.1-1.2-5-4.4-5.2-4.6-.1-.2-1.2-1.6-1.2-3 0-1.4.8-2.1 1-2.4z" />
  ),
  mapPin: (
    <>
      <path d="M12 21s7-6.3 7-11.5A7 7 0 0 0 5 9.5C5 14.7 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  menu: (
    <path d="M4 7h16M4 12h16M4 17h16" />
  ),
  close: (
    <path d="M6 6l12 12M18 6L6 18" />
  ),
  arrowRight: (
    <path d="M5 12h13M13 6l6 6-6 6" />
  ),
  check: (
    <path d="M5 12.5l4.5 4.5L19 7" />
  ),
  chevronDown: (
    <path d="M6 9l6 6 6-6" />
  ),
  star: (
    <path d="M12 3.5l2.6 5.6 6 .7-4.4 4.2 1.1 6-5.3-3-5.3 3 1.1-6-4.4-4.2 6-.7z" />
  ),
  quote: (
    <path d="M9 8c-2.8 0-4.5 2-4.5 5S6.2 18 9 18M9 8v5.5M15 8c-2.8 0-4.5 2-4.5 5S12.2 18 15 18M15 8v5.5" />
  ),
  shield: (
    <path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z" />
  ),
  team: (
    <>
      <circle cx="8.5" cy="9" r="2.5" />
      <circle cx="16" cy="9" r="2.2" />
      <path d="M3.5 19c.5-3 2.5-4.5 5-4.5s4.5 1.5 5 4.5" />
      <path d="M14 15c1.9.3 3.3 1.7 3.8 4" />
    </>
  ),
}

export default function Icon({ name, size = 24, strokeWidth = 1.6, className, ...rest }) {
  const path = paths[name]
  if (!path) return null
  const isFilled = name === 'sparkle' || name === 'pulse' || name === 'star' || name === 'whatsapp'
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={isFilled ? 'currentColor' : 'none'}
      stroke={isFilled ? 'none' : 'currentColor'}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {path}
    </svg>
  )
}
