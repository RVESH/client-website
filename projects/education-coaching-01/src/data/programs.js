import { images } from './images.js'

export const programs = [
  {
    id: 'career-accelerator',
    title: 'Career Accelerator Program',
    tagline: 'For professionals ready to make a deliberate next move.',
    format: '1:1 coaching',
    duration: '3 months',
    description:
      'A personalized coaching program for people who know they want more — a promotion, a pivot, or a plan — but need structure and an experienced second opinion to get there.',
    benefits: [
      'Weekly 1:1 sessions with a dedicated mentor',
      'A personalized roadmap based on your goals and timeline',
      'Resume, portfolio, and LinkedIn review',
      'Mock interviews with structured feedback',
      'A concrete job-search or promotion strategy',
    ],
    image: images.programCareerAccelerator,
  },
  {
    id: 'executive-presence-coaching',
    title: 'Executive Presence Coaching',
    tagline: 'Communicate and lead with the confidence your role requires.',
    format: '1:1 coaching',
    duration: '2 months',
    description:
      'Built for managers and senior individual contributors who need to influence up, communicate under pressure, and carry themselves with more authority in the room.',
    benefits: [
      'Biweekly 1:1 coaching sessions',
      'Communication and presence coaching tailored to real meetings',
      'Practice for high-stakes presentations and conversations',
      'Personalized, direct feedback after each session',
    ],
    image: images.programExecutivePresence,
  },
  {
    id: 'cohort-mastery-track',
    title: 'Cohort Mastery Track: Data & Analytics',
    tagline: 'Go deep on data skills alongside a committed peer group.',
    format: 'Cohort-based',
    duration: '12 weeks',
    description:
      'A structured, cohort-based deep dive into data and analytics, combining live weekly sessions, a real capstone project, and ongoing mentor office hours.',
    benefits: [
      'Live weekly sessions with a small, committed cohort',
      'A capstone project built on real-world data',
      'Weekly mentor office hours for unblocking questions',
      'Peer accountability and a lasting alumni network',
    ],
    image: images.programCohortMastery,
  },
  {
    id: 'new-manager-mentorship',
    title: 'New Manager Mentorship Program',
    tagline: 'Structured support for your first year of managing people.',
    format: 'Hybrid — self-paced + 1:1 check-ins',
    duration: '10 weeks',
    description:
      'A hybrid program for first-time managers: a structured curriculum you work through at your own pace, backed by regular 1:1 mentor check-ins when real situations come up.',
    benefits: [
      'Structured management curriculum, self-paced',
      'Biweekly 1:1 calls with an experienced people-manager mentor',
      'A practical leadership toolkit you can reuse on the job',
      'A peer cohort of other first-time managers',
    ],
    image: images.programNewManager,
  },
]
