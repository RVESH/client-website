import { images } from './images.js'

export const courseCategories = [
  { value: 'data-analytics', label: 'Data & Analytics' },
  { value: 'design-product', label: 'Design & Product' },
  { value: 'business-leadership', label: 'Business & Leadership' },
  { value: 'marketing-growth', label: 'Marketing & Growth' },
  { value: 'technology', label: 'Technology' },
  { value: 'career-development', label: 'Career Development' },
]

export const courses = [
  {
    id: 'data-analysis-fundamentals',
    title: 'Data Analysis Fundamentals',
    category: 'data-analytics',
    level: 'Beginner',
    duration: '6 weeks',
    format: 'Live cohort',
    description:
      'Build a real foundation in data analysis — from clean data practices to the charts and summaries that actually drive decisions.',
    outcomes: [
      'Clean and structure messy datasets confidently',
      'Build clear, decision-ready charts and dashboards',
      'Explain findings to a non-technical audience',
    ],
    image: images.courseDataAnalytics,
  },
  {
    id: 'applied-sql-data-modeling',
    title: 'Applied SQL & Data Modeling',
    category: 'data-analytics',
    level: 'Intermediate',
    duration: '8 weeks',
    format: 'Live cohort',
    description:
      'Go beyond basic queries into the data modeling decisions that make analysis fast, reliable, and easy for others to build on.',
    outcomes: [
      'Write efficient, production-ready SQL queries',
      'Design normalized and analytics-friendly schemas',
      'Debug and optimize slow-running queries',
    ],
    image: images.courseDataAnalytics,
  },
  {
    id: 'product-design-foundations',
    title: 'Product Design Foundations',
    category: 'design-product',
    level: 'Beginner',
    duration: '6 weeks',
    format: 'Live cohort',
    description:
      'Learn the end-to-end product design process, from problem framing through wireframes to a portfolio-ready case study.',
    outcomes: [
      'Run a structured design process from brief to prototype',
      'Build wireframes and high-fidelity screens with intent',
      'Present and defend design decisions clearly',
    ],
    image: images.courseDesignProduct,
  },
  {
    id: 'ux-research-in-practice',
    title: 'UX Research in Practice',
    category: 'design-product',
    level: 'Intermediate',
    duration: '6 weeks',
    format: 'Self-paced + mentor check-ins',
    description:
      'Move past assumptions and learn to plan, run, and synthesize research that actually changes what gets built.',
    outcomes: [
      'Plan research that answers real product questions',
      'Run interviews and usability tests without leading the witness',
      'Turn findings into decisions stakeholders act on',
    ],
    image: images.courseDesignProduct,
  },
  {
    id: 'leadership-for-new-managers',
    title: 'Leadership for New Managers',
    category: 'business-leadership',
    level: 'Beginner',
    duration: '5 weeks',
    format: 'Live cohort',
    description:
      'The first-time-manager course built for people who were promoted for their skills, not for their management training.',
    outcomes: [
      'Run effective 1:1s and delegate without micromanaging',
      'Give feedback that lands without damaging trust',
      'Handle conflict and underperformance directly',
    ],
    image: images.courseBusinessLeadership,
  },
  {
    id: 'strategic-communication',
    title: 'Strategic Communication',
    category: 'business-leadership',
    level: 'Intermediate',
    duration: '4 weeks',
    format: 'Live cohort',
    description:
      'Sharpen how you write, present, and influence — for meetings, memos, and moments when the stakes are higher.',
    outcomes: [
      'Structure a persuasive case in half the words',
      'Present to skeptical or senior audiences with confidence',
      'Adjust tone and framing for different stakeholders',
    ],
    image: images.courseBusinessLeadership,
  },
  {
    id: 'growth-marketing-essentials',
    title: 'Growth Marketing Essentials',
    category: 'marketing-growth',
    level: 'Beginner',
    duration: '6 weeks',
    format: 'Live cohort',
    description:
      'A practical introduction to growth marketing: channels, experiments, and the metrics that actually matter.',
    outcomes: [
      'Design and run a basic growth experiment',
      'Read funnel and channel metrics without getting lost',
      'Build a simple, defensible growth plan',
    ],
    image: images.courseMarketingGrowth,
  },
  {
    id: 'full-stack-web-foundations',
    title: 'Full-Stack Web Foundations',
    category: 'technology',
    level: 'Beginner',
    duration: '10 weeks',
    format: 'Live cohort',
    description:
      'A structured on-ramp into web development — HTML, CSS, JavaScript, and enough backend to ship a working project.',
    outcomes: [
      'Build and style responsive web pages from scratch',
      'Write JavaScript that handles real user interaction',
      'Ship a small full-stack project to a live URL',
    ],
    image: images.courseTechnology,
  },
  {
    id: 'career-storytelling-interview-mastery',
    title: 'Career Storytelling & Interview Mastery',
    category: 'career-development',
    level: 'All levels',
    duration: '3 weeks',
    format: 'Self-paced + mentor check-ins',
    description:
      'Turn your work history into a clear, confident narrative — and practice telling it under real interview conditions.',
    outcomes: [
      'Build a resume and story that highlight real impact',
      'Answer behavioral questions with structured, specific stories',
      'Walk into interviews with a rehearsed, confident narrative',
    ],
    image: images.courseCareerDev,
  },
]
