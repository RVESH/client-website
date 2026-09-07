import styles from './DoctorCard.module.scss'

export default function DoctorCard({ doctor }) {
  return (
    <article className={styles.card}>
      <div className={styles.photo}>
        <img src={doctor.image} alt={doctor.name} loading="lazy" />
      </div>
      <div className={styles.body}>
        <h3 className={styles.name}>{doctor.name}</h3>
        <p className={styles.role}>{doctor.role}</p>
        <p className={styles.credentials}>
          {doctor.credentials} · {doctor.experience} experience
        </p>
        <p className={styles.bio}>{doctor.bio}</p>
        <p className={styles.focusLabel}>Focus areas</p>
        <div className={styles.focusTags}>
          {doctor.focus.map((item) => (
            <span key={item} className={styles.focusTag}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
