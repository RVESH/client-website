import { useEffect, useState } from 'react'
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import CourseCard from '../../components/CourseCard/CourseCard.jsx'
import CTA from '../../components/CTA/CTA.jsx'
import { courses, courseCategories } from '../../data/courses.js'
import styles from './Courses.module.scss'

function Courses() {
  useEffect(() => {
    document.title = 'Courses | Keystone Learning'
  }, [])

  const [activeCategory, setActiveCategory] = useState('all')

  const filtered =
    activeCategory === 'all' ? courses : courses.filter((c) => c.category === activeCategory)

  return (
    <>
      <section className={styles.intro}>
        <div className="container">
          <SectionHeading
            eyebrow="Our courses"
            title="Skill-based courses, taught with structure and feedback"
            description="Filter by category to find the right fit. Every course pairs a clear curriculum with real mentor guidance."
          />
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className={styles.tabs} role="tablist" aria-label="Filter courses by category">
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === 'all'}
              className={activeCategory === 'all' ? styles.tabActive : styles.tab}
              onClick={() => setActiveCategory('all')}
            >
              All courses
            </button>
            {courseCategories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat.value}
                className={activeCategory === cat.value ? styles.tabActive : styles.tab}
                onClick={() => setActiveCategory(cat.value)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {filtered.length > 0 ? (
            <div className={styles.grid}>
              {filtered.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <p className={styles.empty}>No courses in this category right now.</p>
          )}
        </div>
      </section>

      <CTA
        title="Not sure which course is right for you?"
        description="Book a free call and a mentor will help you pick a starting point based on your goals."
      />
    </>
  )
}

export default Courses
