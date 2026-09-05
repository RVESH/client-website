// ============================================
// IMAGE REGISTRY
// Every image used on the site is registered here.
// Physical files live in public/images/. Artwork is an original
// illustration set (not stock photography) in the Keystone palette.
// To swap in real photography later, keep the same key and filename,
// and replace the file in public/images/.
// ============================================

const path = (file) => `/images/${file}`

export const images = {
  hero: {
    src: path('hero01.svg'),
    alt: 'Illustration of a mentor and learner reviewing a growth plan together',
  },
  about01: {
    src: path('about01.svg'),
    alt: 'Illustration of the Keystone founding story, books and a growth chart',
  },
  contact01: {
    src: path('contact01.svg'),
    alt: 'Illustration of a welcoming mentorship office space',
  },

  mentorElena: {
    src: path('mentor-elena.svg'),
    alt: 'Portrait illustration of Dr. Elena Marsh, Founder and Lead Mentor',
  },
  mentorMarcus: {
    src: path('mentor-marcus.svg'),
    alt: 'Portrait illustration of Marcus Whitfield, Leadership and Career Coach',
  },
  mentorPriya: {
    src: path('mentor-priya.svg'),
    alt: 'Portrait illustration of Priya Nandakumar, Product and Design Mentor',
  },
  mentorSam: {
    src: path('mentor-sam.svg'),
    alt: 'Portrait illustration of Sam Okonkwo, Marketing and Growth Mentor',
  },

  courseDataAnalytics: {
    src: path('course-data-analytics.svg'),
    alt: 'Illustration representing data and analytics coursework',
  },
  courseDesignProduct: {
    src: path('course-design-product.svg'),
    alt: 'Illustration representing product design coursework',
  },
  courseBusinessLeadership: {
    src: path('course-business-leadership.svg'),
    alt: 'Illustration representing business and leadership coursework',
  },
  courseMarketingGrowth: {
    src: path('course-marketing-growth.svg'),
    alt: 'Illustration representing marketing and growth coursework',
  },
  courseTechnology: {
    src: path('course-technology.svg'),
    alt: 'Illustration representing technology and web development coursework',
  },
  courseCareerDev: {
    src: path('course-career-dev.svg'),
    alt: 'Illustration representing career development coursework',
  },

  programCareerAccelerator: {
    src: path('program-career-accelerator.svg'),
    alt: 'Illustration representing the Career Accelerator Program',
  },
  programExecutivePresence: {
    src: path('program-executive-presence.svg'),
    alt: 'Illustration representing the Executive Presence Coaching program',
  },
  programCohortMastery: {
    src: path('program-cohort-mastery.svg'),
    alt: 'Illustration representing the Cohort Mastery Track program',
  },
  programNewManager: {
    src: path('program-new-manager.svg'),
    alt: 'Illustration representing the New Manager Mentorship Program',
  },
}
