import styles from './MentorCard.module.scss'

function MentorCard({ mentor }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageFrame}>
        <img src={mentor.image.src} alt={mentor.image.alt} loading="lazy" width="320" height="320" />
      </div>
      <div className={styles.body}>
        <h3>{mentor.name}</h3>
        <span className={styles.role}>{mentor.role}</span>
        <p className={styles.bio}>{mentor.bio}</p>
        <span className={styles.credentials}>{mentor.credentials}</span>
      </div>
    </article>
  )
}

export default MentorCard
