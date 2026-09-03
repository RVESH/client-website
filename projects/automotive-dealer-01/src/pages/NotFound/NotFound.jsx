import Button from '../../components/Button'
import styles from './NotFound.module.scss'

export default function NotFound({
  title = 'Page not found',
  message = "The page you're looking for doesn't exist or may have moved.",
  backTo = '/',
  backLabel = 'Back to Home',
}) {
  return (
    <div className={styles.wrap}>
      <div className={['container', styles.inner].join(' ')}>
        <span className={styles.code}>404</span>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.message}>{message}</p>
        <Button to={backTo} variant="accent">
          {backLabel}
        </Button>
      </div>
    </div>
  )
}
