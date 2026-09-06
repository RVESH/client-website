import { GraduationCap, Clock } from 'lucide-react'
import { images } from '../../data/images.js'
import './DoctorCard.scss'

export default function DoctorCard({ name, title, specialty, experience, image, education, bio, variant = 'full' }) {
  return (
    <article className={`doctor-card doctor-card--${variant}`}>
      <div className="doctor-card__photo">
        <img src={images[image]} alt={`Portrait of ${name}, ${title}`} loading="lazy" />
      </div>

      <div className="doctor-card__body">
        <h3 className="doctor-card__name">{name}</h3>
        <p className="doctor-card__title">{title}</p>
        <p className="doctor-card__specialty">{specialty}</p>

        <div className="doctor-card__meta">
          <span className="doctor-card__meta-item">
            <Clock size={14} strokeWidth={2} />
            <span>{experience}</span>
          </span>
        </div>

        {variant === 'full' && (
          <>
            <p className="doctor-card__bio">{bio}</p>

            <div className="doctor-card__education">
              <span className="doctor-card__education-label">
                <GraduationCap size={14} strokeWidth={2} /> Education & credentials
              </span>
              <ul>
                {education.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </article>
  )
}
