import { useMemo, useState } from 'react'
import Card from '../../components/Card'
import DataTable from '../../components/DataTable'
import SearchInput from '../../components/SearchInput'
import Dropdown from '../../components/Dropdown'
import StatusBadge from '../../components/StatusBadge'
import Avatar from '../../components/Avatar'
import Pagination from '../../components/Pagination'
import Button from '../../components/Button'
import Drawer from '../../components/Drawer'
import Icon from '../../components/Icon'
import useDemoLoading from '../../hooks/useDemoLoading'
import usePagination from '../../hooks/usePagination'
import { leads, leadStatuses, leadSources } from '../../data/leads'
import { getCompanyById } from '../../data/companies'
import { getUserById } from '../../data/team'
import { formatCurrency, formatDate } from '../../utils/format'
import styles from './Leads.module.css'

export default function Leads() {
  const loading = useDemoLoading()
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState(null)
  const [sourceFilter, setSourceFilter] = useState(null)
  const [selectedIds, setSelectedIds] = useState([])
  const [activeLead, setActiveLead] = useState(null)

  const filtered = useMemo(() => {
    return leads.filter((lead) => {
      const company = getCompanyById(lead.companyId)
      const matchesSearch =
        !search ||
        lead.name.toLowerCase().includes(search.toLowerCase()) ||
        company.name.toLowerCase().includes(search.toLowerCase()) ||
        lead.email.toLowerCase().includes(search.toLowerCase())
      const matchesStatus = !statusFilter || lead.status === statusFilter
      const matchesSource = !sourceFilter || lead.source === sourceFilter
      return matchesSearch && matchesStatus && matchesSource
    })
  }, [search, statusFilter, sourceFilter])

  const { page, setPage, totalPages, pageItems, total, pageSize } = usePagination(filtered, 8)

  const toggleSelect = (id) =>
    setSelectedIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))

  const toggleSelectAll = () =>
    setSelectedIds((prev) =>
      prev.length === pageItems.length ? [] : pageItems.map((l) => l.id)
    )

  const columns = [
    {
      key: 'name',
      header: 'Lead',
      render: (lead) => (
        <div className={styles.leadCell}>
          <Avatar name={lead.name} size={32} />
          <div className={styles.leadCellText}>
            <span className={styles.leadName}>{lead.name}</span>
            <span className={styles.leadTitle}>{lead.title}</span>
          </div>
        </div>
      ),
    },
    {
      key: 'company',
      header: 'Company',
      hideBelow: 'md',
      render: (lead) => getCompanyById(lead.companyId).name,
    },
    {
      key: 'source',
      header: 'Source',
      hideBelow: 'sm',
      render: (lead) => lead.source,
    },
    {
      key: 'status',
      header: 'Status',
      render: (lead) => <StatusBadge label={lead.status} />,
    },
    {
      key: 'value',
      header: 'Est. Value',
      align: 'right',
      render: (lead) => formatCurrency(lead.estValue),
    },
    {
      key: 'owner',
      header: 'Owner',
      hideBelow: 'md',
      render: (lead) => {
        const owner = getUserById(lead.ownerId)
        return (
          <div className={styles.ownerCell}>
            <Avatar name={owner.name} color={owner.color} size={24} />
            <span>{owner.name}</span>
          </div>
        )
      },
    },
  ]

  const activeCompany = activeLead ? getCompanyById(activeLead.companyId) : null
  const activeOwner = activeLead ? getUserById(activeLead.ownerId) : null

  return (
    <div className={styles.page}>
      <Card padding={false}>
        <div className={styles.toolbar}>
          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="Search leads by name, company, or email…"
            className={styles.search}
          />
          <div className={styles.filters}>
            <Dropdown label="Status" options={leadStatuses} value={statusFilter} onChange={setStatusFilter} />
            <Dropdown label="Source" options={leadSources} value={sourceFilter} onChange={setSourceFilter} />
          </div>
        </div>

        {selectedIds.length > 0 && (
          <div className={styles.bulkBar}>
            <span>{selectedIds.length} selected</span>
            <div className={styles.bulkActions}>
              <Button variant="secondary" size="sm">Export</Button>
              <Button variant="ghost" size="sm" onClick={() => setSelectedIds([])}>
                Clear
              </Button>
            </div>
          </div>
        )}

        <div className={styles.tableWrap}>
          <DataTable
            columns={columns}
            rows={pageItems}
            selectable
            selectedIds={selectedIds}
            onToggleSelect={toggleSelect}
            onToggleSelectAll={toggleSelectAll}
            onRowClick={(lead) => setActiveLead(lead)}
            loading={loading}
            emptyTitle="No leads match your filters"
            emptyMessage="Try clearing the search or filters above."
          />
        </div>

        {!loading && filtered.length > 0 && (
          <div className={styles.paginationWrap}>
            <Pagination page={page} totalPages={totalPages} onChange={setPage} total={total} pageSize={pageSize} />
          </div>
        )}
      </Card>

      <Drawer
        open={!!activeLead}
        onClose={() => setActiveLead(null)}
        title={activeLead?.name}
        subtitle={activeLead?.title}
        footer={
          activeLead && (
            <>
              <Button variant="secondary" icon={<Icon name="phone" size={15} />}>
                Call
              </Button>
              <Button icon={<Icon name="mail" size={15} />}>Email</Button>
            </>
          )
        }
      >
        {activeLead && (
          <div className={styles.detail}>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Status</span>
              <StatusBadge label={activeLead.status} />
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Company</span>
              <span className={styles.detailValue}>{activeCompany.name}</span>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Source</span>
              <span className={styles.detailValue}>{activeLead.source}</span>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Estimated Value</span>
              <span className={styles.detailValue}>{formatCurrency(activeLead.estValue)}</span>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Lead Score</span>
              <div className={styles.scoreBar}>
                <div className={styles.scoreFill} style={{ width: `${activeLead.score}%` }} />
                <span className={styles.scoreValue}>{activeLead.score}</span>
              </div>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Owner</span>
              <div className={styles.ownerCell}>
                <Avatar name={activeOwner.name} color={activeOwner.color} size={22} />
                <span>{activeOwner.name}</span>
              </div>
            </div>
            <div className={styles.detailRow}>
              <span className={styles.detailLabel}>Created</span>
              <span className={styles.detailValue}>{formatDate(activeLead.createdAt)}</span>
            </div>

            <hr className={styles.divider} />

            <div className={styles.contactBlock}>
              <span className={styles.detailLabel}>Contact Info</span>
              <a href={`mailto:${activeLead.email}`} className={styles.contactLink}>
                <Icon name="mail" size={14} /> {activeLead.email}
              </a>
              <a href={`tel:${activeLead.phone}`} className={styles.contactLink}>
                <Icon name="phone" size={14} /> {activeLead.phone}
              </a>
            </div>
          </div>
        )}
      </Drawer>
    </div>
  )
}
