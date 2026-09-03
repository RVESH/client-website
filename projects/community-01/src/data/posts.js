// ============================================================
// posts.js — sample discussion posts and activity feed items.
// ============================================================

export const posts = [
  {
    id: 'p1',
    author: 'Maren Ito',
    avatar: 'avatar1',
    community: 'Pixel Collective',
    title: 'Sharing my full case study for the Aria dashboard redesign',
    excerpt:
      'Broke down the whole process from research to final handoff — including the three directions we scrapped along the way.',
    tag: 'Portfolio review',
    likes: 482,
    comments: 96,
    time: '2h ago',
  },
  {
    id: 'p2',
    author: 'Devon Cole',
    avatar: 'avatar2',
    community: 'Build Loop',
    title: 'Hit $10K MRR after 14 months — full breakdown inside',
    excerpt:
      'Channel mix, churn numbers and the one pricing change that actually moved the needle. Ask me anything.',
    tag: 'Launches',
    likes: 1204,
    comments: 213,
    time: '4h ago',
  },
  {
    id: 'p3',
    author: 'Priya Shah',
    avatar: 'avatar3',
    community: 'Ironclad Training',
    title: '12-week strength block results — before/after numbers',
    excerpt:
      'Started at a 185lb squat, finished at 255lb. Full program, deload weeks and what I\'d change next time.',
    tag: 'Progress',
    likes: 356,
    comments: 58,
    time: '6h ago',
  },
  {
    id: 'p4',
    author: 'Théo Laurent',
    avatar: 'avatar4',
    community: 'Lower Frequency',
    title: 'New stem pack up for feedback — looking for mix critique',
    excerpt:
      'Working on a deep house track, low end feels muddy past 300Hz. Would love a second pair of ears.',
    tag: 'Mix feedback',
    likes: 189,
    comments: 41,
    time: '9h ago',
  },
  {
    id: 'p5',
    author: 'Amara Boateng',
    avatar: 'avatar5',
    community: 'Golden Hour',
    title: 'Shot an entire wedding on one prime lens — here\'s what I learned',
    excerpt:
      'No zoom, no second body. Forced me to think differently about composition and moving my feet.',
    tag: 'Street photo',
    likes: 274,
    comments: 37,
    time: '11h ago',
  },
  {
    id: 'p6',
    author: 'Jonas Feld',
    avatar: 'avatar6',
    community: 'Nightfall Guild',
    title: 'Our five-person raid finally cleared the mythic tier tonight',
    excerpt:
      'Six months of attempts. Sharing our comp, cooldown timing and the wipe that almost broke us at 2%.',
    tag: 'Co-op',
    likes: 621,
    comments: 128,
    time: '13h ago',
  },
]

// Lightweight activity feed used in the "Member activity" section.
export const activityFeed = [
  { id: 'a1', avatar: 'avatar7', text: 'Sana K. joined Build Loop', time: 'just now' },
  { id: 'a2', avatar: 'avatar8', text: 'Marco R. started a discussion in Nightfall Guild', time: '3m ago' },
  { id: 'a3', avatar: 'avatar9', text: 'Liu Wei hit a 30-day streak in Ironclad Training', time: '12m ago' },
  { id: 'a4', avatar: 'avatar10', text: 'Nadia F. shared a shoot in Golden Hour', time: '24m ago' },
  { id: 'a5', avatar: 'avatar11', text: 'Kwame O. posted a track in Lower Frequency', time: '38m ago' },
  { id: 'a6', avatar: 'avatar12', text: 'Elin S. joined Pixel Collective', time: '52m ago' },
]
