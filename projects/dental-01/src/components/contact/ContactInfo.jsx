import Icon from '../ui/Icon.jsx'
import { clinicInfo } from '../../data/clinicInfo.js'
import styles from './ContactInfo.module.scss'

export default function ContactInfo() {
  const telHref = `tel:${clinicInfo.phone.replace(/[^+\d]/g, '')}`
  const whatsappHref = `https://wa.me/${clinicInfo.whatsapp.replace(/[^\d]/g, '')}`
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    clinicInfo.mapEmbedQuery
  )}&output=embed`

  return (
    <div className={styles.wrap}>
      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Get in touch</h3>
        <div className={styles.rows}>
          <div className={styles.row}>
            <span className={styles.rowIcon}>
              <Icon name="phone" size={18} />
            </span>
            <div>
              <p className={styles.rowLabel}>Phone</p>
              <p className={styles.rowValue}>
                <a href={telHref}>{clinicInfo.phoneDisplay}</a>
              </p>
            </div>
          </div>

          <div className={styles.row}>
            <span className={styles.rowIcon}>
              <Icon name="mail" size={18} />
            </span>
            <div>
              <p className={styles.rowLabel}>Email</p>
              <p className={styles.rowValue}>
                <a href={`mailto:${clinicInfo.email}`}>{clinicInfo.email}</a>
              </p>
            </div>
          </div>

          <div className={styles.row}>
            <span className={styles.rowIcon}>
              <Icon name="mapPin" size={18} />
            </span>
            <div>
              <p className={styles.rowLabel}>Address</p>
              <p className={styles.rowValue}>
                {clinicInfo.address.line1}
                <br />
                {clinicInfo.address.line2}, {clinicInfo.address.city}
              </p>
            </div>
          </div>
        </div>

        <a
          className={styles.whatsappRow}
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          style={{ marginTop: 22 }}
        >
          <Icon name="whatsapp" size={20} />
          Message us on WhatsApp
        </a>
      </div>

      <div className={styles.card}>
        <h3 className={styles.cardTitle}>Opening hours</h3>
        <div className={styles.hoursList}>
          {clinicInfo.hours.map((slot) => (
            <div key={slot.day} className={styles.hoursItem}>
              <span className={styles.hoursDay}>{slot.day}</span>
              <span className={styles.hoursTime}>{slot.time}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.mapCard}>
        <iframe
          src={mapSrc}
          title={`Map showing the location of ${clinicInfo.name}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}
