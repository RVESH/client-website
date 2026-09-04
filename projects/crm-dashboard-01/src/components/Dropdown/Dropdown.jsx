import { useRef, useState } from 'react'
import Icon from '../Icon'
import useClickOutside from '../../hooks/useClickOutside'
import styles from './Dropdown.module.scss'

/**
 * Simple filter dropdown: a trigger button + option list.
 * `options` is an array of strings; `value` is the selected one (or null/undefined for "All").
 */
export default function Dropdown({ label, options, value, onChange, allLabel = 'All' }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useClickOutside(ref, () => setOpen(false), open)

  const displayValue = value || allLabel

  return (
    <div className={styles.wrap} ref={ref}>
      <button
        type="button"
        className={[styles.trigger, open ? styles.triggerOpen : ''].join(' ')}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span className={styles.label}>{label}:</span>
        <span className={styles.value}>{displayValue}</span>
        <Icon name="chevronDown" size={14} className={styles.chevron} />
      </button>

      {open && (
        <ul className={styles.menu} role="listbox">
          <li>
            <button
              type="button"
              className={[styles.option, !value ? styles.optionActive : ''].join(' ')}
              onClick={() => {
                onChange(null)
                setOpen(false)
              }}
            >
              {allLabel}
            </button>
          </li>
          {options.map((opt) => (
            <li key={opt}>
              <button
                type="button"
                className={[styles.option, value === opt ? styles.optionActive : ''].join(' ')}
                onClick={() => {
                  onChange(opt)
                  setOpen(false)
                }}
              >
                {opt}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
