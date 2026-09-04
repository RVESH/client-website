import { useMemo, useState } from 'react'
import Card from '../../components/Card'
import SearchInput from '../../components/SearchInput'
import Dropdown from '../../components/Dropdown'
import Avatar from '../../components/Avatar'
import Icon from '../../components/Icon'
import EmptyState from '../../components/EmptyState'
import { SkeletonBlock } from '../../components/Skeleton'
import useDemoLoading from '../../hooks/useDemoLoading'
import { activities as initialActivities, activityTypes } from '../../data/activities'
import { getUserById } from '../../data/team'
import { getContactById } from '../../data/contacts'
import { getDealById } from '../../data/deals'
import { formatDate, relativeDay } from '../../utils/format'
import styles from './Activities.module.scss'

const ACTIVITY_ICON = {
  Call: 'phone',
  Email: 'mail',
  Meeting: 'calendar',
  Task: 'checkCircle',
  Note: 'note',
}

function groupLabel(dateStr) {
  const rel = relativeDay(dateStr)
  if (rel === 'Today' || rel === 'Yesterday') return rel
  const date = new Date(dateStr)
  return date > new Date() ? 'Upcoming' : 'Earlier'
}

export default function Activities() {
  const loading = useDemoLoading()
  const [activities, setActivities] = useState(initialActivities)
  const [search, setSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState(null)

  const filtered = useMemo(() => {
    return activities.filter((act) => {
      const contact = getContactById(act.contactId)
      const matchesSearch =
        !search ||
        act.subject.toLowerCase().includes(search.toLowerCase()) ||
        contact.name.toLowerCase().includes(search.toLowerCase())
      const matchesType = !typeFilter || act.type === typeFilter
      return matchesSearch && matchesType
    })
  }, [activities, search, typeFilter])

  const groups = useMemo(() => {
    const order = ['Upcoming', 'Today', 'Yesterday', 'Earlier']
    const map = {}
    filtered.forEach((act) => {
      const label = groupLabel(act.at)
      if (!map[label]) map[label] = []
      map[label].push(act)
    })
    return order.filter((label) => map[label]?.length).map((label) => ({ label, items: map[label] }))
  }, [filtered])

  const toggleComplete = (id) => {
    setActivities((prev) =>
      prev.map((act) => (act.id === id ? { ...act, completed: !act.completed } : act))
    )
  }

  return (
    <div className={styles.page}>
      <Card padding={false}>
        <div className={styles.toolbar}>
          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="Search activities by subject or contact…"
            className={styles.search}
          />
          <Dropdown label="Type" options={activityTypes} value={typeFilter} onChange={setTypeFilter} />
        </div>
      </Card>

      <Card>
        {loading ? (
          <div className={styles.skeletonList}>
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonBlock key={i} height={56} />
            ))}
          </div>
        ) : groups.length === 0 ? (
          <EmptyState
            icon="activities"
            title="No activities found"
            message="Try a different search term or activity type."
          />
        ) : (
          <div className={styles.timeline}>
            {groups.map((group) => (
              <div key={group.label} className={styles.group}>
                <h3 className={styles.groupLabel}>{group.label}</h3>
                <ul className={styles.list}>
                  {group.items.map((act) => {
                    const owner = getUserById(act.ownerId)
                    const contact = getContactById(act.contactId)
                    const deal = getDealById(act.dealId)
                    const isTask = act.type === 'Task'
                    return (
                      <li
                        key={act.id}
                        className={[styles.item, isTask && act.completed ? styles.itemDone : ''].join(' ')}
                      >
                        {isTask ? (
                          <button
                            type="button"
                            className={[styles.checkbox, act.completed ? styles.checkboxChecked : ''].join(' ')}
                            onClick={() => toggleComplete(act.id)}
                            aria-pressed={act.completed}
                            aria-label={act.completed ? 'Mark task incomplete' : 'Mark task complete'}
                          >
                            {act.completed && <Icon name="check" size={12} />}
                          </button>
                        ) : (
                          <span className={styles.typeIcon}>
                            <Icon name={ACTIVITY_ICON[act.type]} size={15} />
                          </span>
                        )}

                        <div className={styles.itemBody}>
                          <div className={styles.itemTop}>
                            <span className={styles.itemType}>{act.type}</span>
                            <span className={styles.itemDot}>·</span>
                            <span className={styles.itemTime}>
                              {formatDate(act.at, { style: 'short' })} at{' '}
                              {formatDate(act.at, { style: 'time' })}
                            </span>
                          </div>
                          <p className={styles.itemSubject}>{act.subject}</p>
                          <div className={styles.itemMeta}>
                            <span className={styles.metaChip}>
                              <Icon name="user" size={12} /> {contact.name}
                            </span>
                            {deal && (
                              <span className={styles.metaChip}>
                                <Icon name="deals" size={12} /> {deal.name}
                              </span>
                            )}
                          </div>
                        </div>

                        <Avatar name={owner.name} color={owner.color} size={28} />
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  )
}
