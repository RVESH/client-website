// ============================================================================
// TEAM — sales reps who own leads, deals, and activities
// ============================================================================

export const team = [
  { id: 'u-01', name: 'Maya Chen', role: 'Account Executive', color: '#6366f1' },
  { id: 'u-02', name: 'Diego Ramirez', role: 'Sales Development Rep', color: '#f59e0b' },
  { id: 'u-03', name: 'Priya Nair', role: 'Account Executive', color: '#10b981' },
  { id: 'u-04', name: 'Jonah Wexler', role: 'Sales Manager', color: '#ef4444' },
  { id: 'u-05', name: 'Sofia Alvarez', role: 'Sales Development Rep', color: '#3b82f6' },
  { id: 'u-06', name: 'Ethan Brooks', role: 'Account Executive', color: '#8b5cf6' },
]

export const getUserById = (id) => team.find((u) => u.id === id)

export const currentUser = team[0]
