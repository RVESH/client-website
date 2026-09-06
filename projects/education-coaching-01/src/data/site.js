// ============================================
// SITE DATA
// Core business information, editable in one place.
// ============================================

export const site = {
  companyName: 'Keystone Learning',
  shortName: 'Keystone',
  tagline: 'Structured learning. Real mentorship.',

  description:
    'Keystone Learning pairs structured, career-focused courses with real 1:1 mentorship — for people who want to build skills deliberately, not guess their way through a video library alone.',

  phone: '+1 617 555 0142',
  phoneDisplay: '(617) 555-0142',
  email: 'hello@keystonelearning.co',
  emailLink: 'mailto:hello@keystonelearning.co',
  whatsapp: '+1 617 555 0142',
  whatsappLink: 'https://wa.me/16175550142',

  address: {
    line1: '88 Federal Street',
    line2: 'Suite 400',
    city: 'Boston',
    region: 'MA',
    postalCode: '02110',
    full: '88 Federal Street, Suite 400, Boston, MA 02110',
  },

  hours: [
    { day: 'Monday – Friday', time: '9:00 AM – 7:00 PM ET' },
    { day: 'Saturday', time: '10:00 AM – 2:00 PM ET' },
    { day: 'Sunday', time: 'Closed' },
  ],

  social: {
    instagram: 'https://instagram.com',
    linkedin: 'https://linkedin.com',
    youtube: 'https://youtube.com',
  },

  nav: [
    { label: 'Home', to: '/' },
    { label: 'Courses', to: '/courses' },
    { label: 'Programs', to: '/programs' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ],

  headerCta: { label: 'Book a Free Call', to: '/contact' },

  stats: [
    { value: '1,200+', label: 'Learners mentored since 2016' },
    { value: '9', label: 'Years of coaching experience' },
    { value: '13', label: 'Courses and programs offered' },
    { value: '4.9/5', label: 'Average mentor rating' },
  ],

  outcomes: [
    {
      value: '78%',
      label: 'of learners report a promotion or career change within 12 months',
    },
    {
      value: '92%',
      label: 'completion rate across all cohort-based programs',
    },
    {
      value: '85%',
      label: 'would recommend Keystone to a colleague or friend',
    },
    {
      value: '3,000+',
      label: 'hours of 1:1 mentoring delivered to learners to date',
    },
  ],

  benefits: [
    {
      title: 'Mentorship, not just content',
      description:
        'Every learner is paired with a real mentor who knows their goals — not left alone with a video library.',
    },
    {
      title: 'Structure, not guesswork',
      description:
        'Clear curriculum, milestones, and pacing designed by people who have done the work themselves.',
    },
    {
      title: 'Small cohorts, real feedback',
      description:
        'Cohorts stay small enough that mentors know your name, your project, and where you are stuck.',
    },
    {
      title: 'Outcome-focused, always',
      description:
        'Every course and program ties back to something concrete you can point to in an interview or review.',
    },
    {
      title: 'Formats that fit your life',
      description:
        'Self-paced courses, live cohorts, or 1:1 coaching — choose the format that fits your schedule.',
    },
    {
      title: 'A community that continues',
      description:
        'Alumni keep access to the community and resources long after their program wraps up.',
    },
  ],

  approach: [
    {
      title: 'Assess where you\u2019re starting',
      description:
        'A short conversation or diagnostic to understand your goals, current skill level, and timeline.',
    },
    {
      title: 'Build a personalized plan',
      description:
        'Your mentor maps out a path — which courses, which program format, and what pace fits your life.',
    },
    {
      title: 'Learn with structured guidance',
      description:
        'Work through the curriculum with regular mentor check-ins, not a self-paced library you complete alone.',
    },
    {
      title: 'Apply, get feedback, adjust',
      description:
        'Real projects and honest feedback loops, so skills actually stick and your plan adapts as you grow.',
    },
  ],
}
