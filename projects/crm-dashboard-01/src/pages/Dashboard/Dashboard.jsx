import KpiCard from '../../components/KpiCard'
import Card, { CardHeader } from '../../components/Card'
import { BarChart, DonutChart } from '../../components/Charts'
import Avatar from '../../components/Avatar'
import StatusBadge from '../../components/StatusBadge'
import Icon from '../../components/Icon'
import { SkeletonKpiCard, SkeletonBlock } from '../../components/Skeleton'
import useDemoLoading from '../../hooks/useDemoLoading'
import { kpis, revenueTrend, leadsBySource, teamLeaderboard } from '../../data/metrics'
import { deals, getStageTotals } from '../../data/deals'
import { activities } from '../../data/activities'
import { getCompanyById } from '../../data/companies'
import { getUserById } from '../../data/team'
import { getContactById } from '../../data/contacts'
import { formatCurrency, relativeDay, formatDate } from '../../utils/format'
import styles from './Dashboard.module.css'

const ACTIVITY_ICON = { Call: 'phone', Email: 'mail', Meeting: 'calendar', Task: 'checkCircle', Note: 'note' }

export default function Dashboard() {
  const loading = useDemoLoading()

  const topDeals = [...deals]
    .filter((d) => d.stageId !== 'closed-won' && d.stageId !== 'closed-lost')
    .sort((a, b) => b.value - a.value)
    .slice(0, 5)

  const recentActivity = activities.slice(0, 6)
  const stageTotals = getStageTotals()

  return (
    <div className={styles.page}>
      <div className={styles.kpiGrid}>
        {loading
          ? Array.from({ length: 4 }).map((_, i) => <SkeletonKpiCard key={i} />)
          : kpis.map((kpi) => <KpiCard key={kpi.id} {...kpi} />)}
      </div>

      <div className={styles.chartsGrid}>
        <Card>
          <CardHeader
            title="Revenue trend"
            subtitle="Closed-won revenue over the last 8 months"
          />
          {loading ? (
            <SkeletonBlock width="100%" height={220} />
          ) : (
            <BarChart data={revenueTrend} />
          )}
        </Card>

        <Card>
          <CardHeader title="Leads by source" subtitle="Last 30 days" />
          {loading ? (
            <SkeletonBlock width="100%" height={200} />
          ) : (
            <DonutChart data={leadsBySource} />
          )}
        </Card>
      </div>

      <div className={styles.midGrid}>
        <Card>
          <CardHeader
            title="Top open deals"
            subtitle="Highest-value deals currently in progress"
          />
          {loading ? (
            <div className={styles.skeletonList}>
              {Array.from({ length: 5 }).map((_, i) => (
                <SkeletonBlock key={i} height={48} />
              ))}
            </div>
          ) : (
            <ul className={styles.dealList}>
              {topDeals.map((deal) => {
                const company = getCompanyById(deal.companyId)
                const owner = getUserById(deal.ownerId)
                return (
                  <li key={deal.id} className={styles.dealRow}>
                    <div className={styles.dealMain}>
                      <span className={styles.dealName}>{deal.name}</span>
                      <span className={styles.dealCompany}>{company.name}</span>
                    </div>
                    <div className={styles.dealMeta}>
                      <Avatar name={owner.name} color={owner.color} size={26} />
                      <span className={styles.dealValue}>{formatCurrency(deal.value)}</span>
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </Card>

        <Card>
          <CardHeader title="Recent activity" subtitle="Across your whole team" />
          {loading ? (
            <div className={styles.skeletonList}>
              {Array.from({ length: 5 }).map((_, i) => (
                <SkeletonBlock key={i} height={44} />
              ))}
            </div>
          ) : (
            <ul className={styles.timeline}>
              {recentActivity.map((act) => {
                const owner = getUserById(act.ownerId)
                const contact = getContactById(act.contactId)
                return (
                  <li key={act.id} className={styles.timelineItem}>
                    <span className={styles.timelineIcon}>
                      <Icon name={ACTIVITY_ICON[act.type]} size={14} />
                    </span>
                    <div className={styles.timelineBody}>
                      <p className={styles.timelineText}>
                        <strong>{owner.name}</strong> — {act.subject}
                        {contact && <span className={styles.timelineContact}> with {contact.name}</span>}
                      </p>
                      <span className={styles.timelineTime}>
                        {relativeDay(act.at)} · {formatDate(act.at, { style: 'time' })}
                      </span>
                    </div>
                  </li>
                )
              })}
            </ul>
          )}
        </Card>
      </div>

      <Card>
        <CardHeader title="Pipeline snapshot" subtitle="Open value by stage" />
        {loading ? (
          <SkeletonBlock width="100%" height={56} />
        ) : (
          <div className={styles.stageStrip}>
            {stageTotals.map((stage) => (
              <div key={stage.id} className={styles.stageBlock}>
                <div className={styles.stageBlockHead}>
                  <span className={styles.stageDot} style={{ background: stage.color }} />
                  <span className={styles.stageLabel}>{stage.label}</span>
                </div>
                <span className={styles.stageValue}>{formatCurrency(stage.total, { compact: true })}</span>
                <span className={styles.stageCount}>{stage.count} deals</span>
              </div>
            ))}
          </div>
        )}
      </Card>

      <Card>
        <CardHeader title="Team leaderboard" subtitle="Deals closed this quarter" />
        {loading ? (
          <div className={styles.skeletonList}>
            {Array.from({ length: 4 }).map((_, i) => (
              <SkeletonBlock key={i} height={40} />
            ))}
          </div>
        ) : (
          <ul className={styles.leaderboard}>
            {teamLeaderboard.map((rep, i) => (
              <li key={rep.name} className={styles.leaderRow}>
                <span className={styles.leaderRank}>{i + 1}</span>
                <Avatar name={rep.name} size={30} />
                <span className={styles.leaderName}>{rep.name}</span>
                <StatusBadge label={`${rep.deals} deals`} tone="neutral" />
                <span className={styles.leaderRevenue}>{formatCurrency(rep.revenue)}</span>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  )
}
