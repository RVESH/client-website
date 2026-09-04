import { useMemo, useState } from 'react'
import Card from '../../components/Card'
import SearchInput from '../../components/SearchInput'
import Avatar from '../../components/Avatar'
import StatusBadge from '../../components/StatusBadge'
import Pagination from '../../components/Pagination'
import EmptyState from '../../components/EmptyState'
import Icon from '../../components/Icon'
import { SkeletonCard } from '../../components/Skeleton'
import useDemoLoading from '../../hooks/useDemoLoading'
import usePagination from '../../hooks/usePagination'
import { contacts } from '../../data/contacts'
import { getCompanyById } from '../../data/companies'
import { getUserById } from '../../data/team'
import { relativeDay } from '../../utils/format'
import styles from './Contacts.module.css'

export default function Contacts() {
  const loading = useDemoLoading()
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    if (!search) return contacts
    const q = search.toLowerCase()
    return contacts.filter((c) => {
      const company = getCompanyById(c.companyId)
      return (
        c.name.toLowerCase().includes(q) ||
        c.title.toLowerCase().includes(q) ||
        company.name.toLowerCase().includes(q)
      )
    })
  }, [search])

  const { page, setPage, totalPages, pageItems, total, pageSize } = usePagination(filtered, 9)

  return (
    <div className={styles.page}>
      <Card>
        <div className={styles.toolbar}>
          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="Search contacts by name, title, or company…"
            className={styles.search}
          />
          <span className={styles.count}>{filtered.length} contacts</span>
        </div>
      </Card>

      {loading ? (
        <div className={styles.grid}>
          {Array.from({ length: 9 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : pageItems.length === 0 ? (
        <Card>
          <EmptyState
            icon="contacts"
            title="No contacts found"
            message="Try a different search term."
          />
        </Card>
      ) : (
        <>
          <div className={styles.grid}>
            {pageItems.map((contact) => {
              const company = getCompanyById(contact.companyId)
              const owner = getUserById(contact.ownerId)
              return (
                <Card key={contact.id} className={styles.contactCard}>
                  <div className={styles.cardTop}>
                    <Avatar name={contact.name} size={44} />
                    <div className={styles.cardTopText}>
                      <h3 className={styles.name}>{contact.name}</h3>
                      <p className={styles.title}>{contact.title}</p>
                    </div>
                  </div>

                  <div className={styles.companyRow}>
                    <Icon name="building" size={14} />
                    <span>{company.name}</span>
                  </div>

                  <div className={styles.tags}>
                    {contact.tags.map((tag) => (
                      <StatusBadge key={tag} label={tag} tone="neutral" />
                    ))}
                  </div>

                  <div className={styles.contactLinks}>
                    <a href={`mailto:${contact.email}`} className={styles.contactLink}>
                      <Icon name="mail" size={14} />
                      <span className={styles.linkText}>{contact.email}</span>
                    </a>
                    <a href={`tel:${contact.phone}`} className={styles.contactLink}>
                      <Icon name="phone" size={14} />
                      <span className={styles.linkText}>{contact.phone}</span>
                    </a>
                  </div>

                  <div className={styles.cardFooter}>
                    <div className={styles.ownerInfo}>
                      <Avatar name={owner.name} color={owner.color} size={20} />
                      <span>{owner.name}</span>
                    </div>
                    <span className={styles.lastContact}>
                      {relativeDay(contact.lastContactedAt)}
                    </span>
                  </div>
                </Card>
              )
            })}
          </div>

          <Card padding={false}>
            <div className={styles.paginationWrap}>
              <Pagination
                page={page}
                totalPages={totalPages}
                onChange={setPage}
                total={total}
                pageSize={pageSize}
              />
            </div>
          </Card>
        </>
      )}
    </div>
  )
}
