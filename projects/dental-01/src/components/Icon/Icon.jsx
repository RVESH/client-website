import * as Icons from 'lucide-react'
import { HelpCircle } from 'lucide-react'

// Resolves a lucide-react icon by its string name so data files
// (treatments.js, etc.) can declare icons declaratively.
export default function Icon({ name, size = 20, strokeWidth = 1.75, className = '' }) {
  const Component = Icons[name] || HelpCircle
  return <Component size={size} strokeWidth={strokeWidth} className={className} aria-hidden="true" />
}
