// ============================================================================
// ACTIVITIES — calls, emails, meetings, notes, and tasks
// ============================================================================

import { team } from './team'
import { contacts } from './contacts'
import { deals } from './deals'

export const activityTypes = ['Call', 'Email', 'Meeting', 'Task', 'Note']

const callSubjects = [
  'Discovery call', 'Follow-up call', 'Renewal check-in', 'Pricing discussion',
  'Technical requirements call',
]
const emailSubjects = [
  'Sent proposal', 'Follow-up email', 'Shared case study', 'Contract redline',
  'Intro email',
]
const meetingSubjects = [
  'Product demo', 'Onboarding kickoff', 'Executive review', 'Contract review meeting',
  'Quarterly business review',
]
const taskSubjects = [
  'Prepare proposal', 'Send updated pricing', 'Schedule demo', 'Follow up on contract',
  'Confirm implementation timeline',
]
const noteSubjects = [
  'Internal note re: budget', 'Competitor mentioned', 'Champion changed roles',
  'Renewal risk flagged',
]

const subjectsByType = {
  Call: callSubjects,
  Email: emailSubjects,
  Meeting: meetingSubjects,
  Task: taskSubjects,
  Note: noteSubjects,
}

function seededPick(list, seed) {
  return list[seed % list.length]
}

function generateActivities(count) {
  const rows = []
  for (let i = 0; i < count; i++) {
    const type = seededPick(activityTypes, i)
    const subject = seededPick(subjectsByType[type], i * 3 + 1)
    const owner = seededPick(team, i * 2 + 1)
    const contact = seededPick(contacts, i * 4 + 2)
    const deal = seededPick(deals, i * 3 + 1)
    // Spread across past 6 days and next 5 days so we get Today / Upcoming / Earlier groups.
    const offsetDays = (i % 12) - 6
    const at = new Date(Date.now() + offsetDays * 24 * 60 * 60 * 1000)
    at.setHours(8 + (i % 9), (i * 13) % 60, 0, 0)

    rows.push({
      id: `act-${String(i + 1).padStart(3, '0')}`,
      type,
      subject,
      ownerId: owner.id,
      contactId: contact.id,
      dealId: deal.id,
      at: at.toISOString(),
      completed: type === 'Task' ? i % 3 === 0 : true,
    })
  }
  return rows.sort((a, b) => new Date(b.at) - new Date(a.at))
}

export const activities = generateActivities(28)
