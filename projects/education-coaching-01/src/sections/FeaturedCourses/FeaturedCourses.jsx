import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import CourseCard from '../../components/CourseCard/CourseCard.jsx'
import Button from '../../components/Button/Button.jsx'
import { courses } from '../../data/courses.js'
import styles from './FeaturedCourses.module.scss'

function FeaturedCourses() {
  const featured = [
    courses.find((c) => c.id === 'data-analysis-fundamentals'),
    courses.find((c) => c.id === 'product-design-foundations'),
    courses.find((c) => c.id === 'leadership-for-new-managers'),
  ].filter(Boolean)

  return (
    <section className="section">
      <div className="container">
        <div className={styles.headRow}>
          <SectionHeading
            eyebrow="Featured courses"
            title="Skill-based courses with structure built in"
            description="Every course pairs a clear curriculum with mentor check-ins — not a video library you're left to finish alone."
          />
          <Button to="/courses" variant="ghost" className={styles.viewAll}>
            View all courses
          </Button>
        </div>

        <div className={styles.grid}>
          {featured.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedCourses
