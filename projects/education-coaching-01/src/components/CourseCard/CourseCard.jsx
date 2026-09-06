import Button from '../Button/Button.jsx'
import { courseCategories } from '../../data/courses.js'
import styles from './CourseCard.module.scss'

const categoryLabel = (value) =>
  courseCategories.find((c) => c.value === value)?.label || value

function CourseCard({ course }) {
  const contactUrl = `/contact?interest=${encodeURIComponent(course.title)}`

  return (
    <article className={styles.card}>
      <div className={styles.imageFrame}>
        <img
          src={course.image.src}
          alt={course.image.alt}
          loading="lazy"
          width="480"
          height="320"
        />
        <span className={styles.levelBadge}>{course.level}</span>
      </div>

      <div className={styles.body}>
        <span className={styles.category}>
          {categoryLabel(course.category)}
        </span>

        <h3>{course.title}</h3>
        <p className={styles.description}>{course.description}</p>

        <div className={styles.metaRow}>
          <span>{course.duration}</span>
          <span className={styles.dot} aria-hidden="true">
            ·
          </span>
          <span>{course.format}</span>
        </div>

        <ul className={styles.outcomes}>
          {course.outcomes.slice(0, 2).map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>

        <Button
          to={contactUrl}
          variant="ghost"
          className={styles.cta}
        >
          Ask about this course
        </Button>
      </div>
    </article>
  )
}

export default CourseCard