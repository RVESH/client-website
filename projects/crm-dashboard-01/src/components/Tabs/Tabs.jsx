import styles from './Tabs.module.scss'

export default function Tabs({ options, value, onChange }) {
  return (
    <div className={styles.wrap} role="tablist">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          role="tab"
          aria-selected={value === opt.value}
          className={[styles.tab, value === opt.value ? styles.tabActive : ''].join(' ')}
          onClick={() => onChange(opt.value)}
        >
          {opt.icon}
          {opt.label}
        </button>
      ))}
    </div>
  )
}
