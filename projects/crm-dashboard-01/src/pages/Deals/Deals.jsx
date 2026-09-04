import { useMemo, useState } from 'react'
import Card from '../../components/Card'
import Tabs from '../../components/Tabs'
import DataTable from '../../components/DataTable'
import StatusBadge from '../../components/StatusBadge'
import Avatar from '../../components/Avatar'
import SearchInput from '../../components/SearchInput'
import Icon from '../../components/Icon'
import EmptyState from '../../components/EmptyState'
import { SkeletonBlock } from '../../components/Skeleton'
import useDemoLoading from '../../hooks/useDemoLoading'
import { deals as initialDeals } from '../../data/deals'
import { pipelineStages } from '../../data/pipeline'
import { getCompanyById } from '../../data/companies'
import { getUserById } from '../../data/team'
import { formatCurrency, formatDate } from '../../utils/format'
import styles from './Deals.module.css'

export default function Deals() {
  const loading = useDemoLoading()
  const [view, setView] = useState('board')
  const [deals, setDeals] = useState(initialDeals)
  const [search, setSearch] = useState('')
  const [dragDealId, setDragDealId] = useState(null)
  const [dragOverStage, setDragOverStage] = useState(null)

  const filteredDeals = useMemo(() => {
    if (!search) return deals
    const q = search.toLowerCase()
    return deals.filter((d) => {
      const company = getCompanyById(d.companyId)
      return d.name.toLowerCase().includes(q) || company.name.toLowerCase().includes(q)
    })
  }, [deals, search])

  const dealsByStage = (stageId) => filteredDeals.filter((d) => d.stageId === stageId)

  const moveDeal = (dealId, stageId) => {
    setDeals((prev) => prev.map((d) => (d.id === dealId ? { ...d, stageId } : d)))
  }

  const handleDrop = (stageId) => {
    if (dragDealId) moveDeal(dragDealId, stageId)
    setDragDealId(null)
    setDragOverStage(null)
  }

  const listColumns = [
    {
      key: 'name',
      header: 'Deal',
      render: (deal) => (
        <div className={styles.dealNameCell}>
          <span className={styles.dealNameText}>{deal.name}</span>
          <span className={styles.dealNameCompany}>{getCompanyById(deal.companyId).name}</span>
        </div>
      ),
    },
    {
      key: 'stage',
      header: 'Stage',
      render: (deal) => {
        const stage = pipelineStages.find((s) => s.id === deal.stageId)
        return <StatusBadge label={stage.label} tone={stageTone(stage.id)} />
      },
    },
    {
      key: 'value',
      header: 'Value',
      align: 'right',
      render: (deal) => formatCurrency(deal.value),
    },
    {
      key: 'probability',
      header: 'Probability',
      hideBelow: 'sm',
      render: (deal) => `${deal.probability}%`,
    },
    {
      key: 'closeDate',
      header: 'Close Date',
      hideBelow: 'md',
      render: (deal) => formatDate(deal.closeDate, { style: 'short' }),
    },
    {
      key: 'owner',
      header: 'Owner',
      hideBelow: 'md',
      render: (deal) => {
        const owner = getUserById(deal.ownerId)
        return (
          <div className={styles.ownerCell}>
            <Avatar name={owner.name} color={owner.color} size={24} />
            <span>{owner.name}</span>
          </div>
        )
      },
    },
  ]

  return (
    <div className={styles.page}>
      <div className={styles.toolbar}>
        <SearchInput
          value={search}
          onChange={setSearch}
          placeholder="Search deals by name or company…"
          className={styles.search}
        />
        <Tabs
          options={[
            { value: 'board', label: 'Board', icon: <Icon name="grip" size={14} /> },
            { value: 'list', label: 'List', icon: <Icon name="menu" size={14} /> },
          ]}
          value={view}
          onChange={setView}
        />
      </div>

      {view === 'board' ? (
        loading ? (
          <div className={styles.board}>
            {pipelineStages.map((stage) => (
              <div className={styles.column} key={stage.id}>
                <SkeletonBlock width="100%" height={20} />
                <SkeletonBlock width="100%" height={90} />
                <SkeletonBlock width="100%" height={90} />
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.board}>
            {pipelineStages.map((stage) => {
              const stageDeals = dealsByStage(stage.id)
              const stageTotal = stageDeals.reduce((sum, d) => sum + d.value, 0)
              const isDragOver = dragOverStage === stage.id

              return (
                <div
                  key={stage.id}
                  className={[styles.column, isDragOver ? styles.columnDragOver : ''].join(' ')}
                  onDragOver={(e) => {
                    e.preventDefault()
                    setDragOverStage(stage.id)
                  }}
                  onDragLeave={() => setDragOverStage((prev) => (prev === stage.id ? null : prev))}
                  onDrop={() => handleDrop(stage.id)}
                >
                  <div className={styles.columnHead}>
                    <div className={styles.columnHeadTop}>
                      <span className={styles.stageDot} style={{ background: stage.color }} />
                      <span className={styles.columnTitle}>{stage.label}</span>
                      <span className={styles.columnCount}>{stageDeals.length}</span>
                    </div>
                    <span className={styles.columnTotal}>{formatCurrency(stageTotal, { compact: true })}</span>
                  </div>

                  <div className={styles.columnBody}>
                    {stageDeals.length === 0 ? (
                      <div className={styles.columnEmpty}>No deals</div>
                    ) : (
                      stageDeals.map((deal) => {
                        const company = getCompanyById(deal.companyId)
                        const owner = getUserById(deal.ownerId)
                        return (
                          <article
                            key={deal.id}
                            className={[
                              styles.dealCard,
                              dragDealId === deal.id ? styles.dealCardDragging : '',
                            ].join(' ')}
                            draggable
                            onDragStart={() => setDragDealId(deal.id)}
                            onDragEnd={() => {
                              setDragDealId(null)
                              setDragOverStage(null)
                            }}
                          >
                            <div className={styles.dealCardHead}>
                              <span className={styles.dealCardName}>{deal.name}</span>
                              <Icon name="grip" size={14} className={styles.gripIcon} />
                            </div>
                            <span className={styles.dealCardCompany}>{company.name}</span>
                            <span className={styles.dealCardValue}>{formatCurrency(deal.value)}</span>

                            <div className={styles.dealCardFoot}>
                              <span className={styles.dealCardDate}>
                                {formatDate(deal.closeDate, { style: 'short' })}
                              </span>
                              <Avatar name={owner.name} color={owner.color} size={22} />
                            </div>

                            <label className={styles.moveSelectWrap}>
                              <span className="sr-only">Move deal to stage</span>
                              <select
                                className={styles.moveSelect}
                                value={deal.stageId}
                                onChange={(e) => moveDeal(deal.id, e.target.value)}
                              >
                                {pipelineStages.map((s) => (
                                  <option key={s.id} value={s.id}>
                                    Move to: {s.label}
                                  </option>
                                ))}
                              </select>
                            </label>
                          </article>
                        )
                      })
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )
      ) : (
        <Card padding={false}>
          <div className={styles.listTableWrap}>
            <DataTable
              columns={listColumns}
              rows={filteredDeals}
              loading={loading}
              emptyTitle="No deals match your search"
              emptyMessage="Try a different company or deal name."
            />
          </div>
        </Card>
      )}

      {!loading && view === 'board' && filteredDeals.length === 0 && (
        <Card>
          <EmptyState icon="deals" title="No deals match your search" message="Try a different search term." />
        </Card>
      )}
    </div>
  )
}

function stageTone(stageId) {
  if (stageId === 'closed-won') return 'success'
  if (stageId === 'closed-lost') return 'danger'
  if (stageId === 'negotiation') return 'violet'
  if (stageId === 'proposal') return 'warning'
  if (stageId === 'qualification') return 'info'
  return 'neutral'
}
