import {
  Activity,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Code,
  Compass,
  CreditCard,
  Database,
  FileSearch,
  FileText,
  Gauge,
  Handshake,
  Headset,
  HelpCircle,
  Kanban,
  LineChart,
  Lock,
  Magnet,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MessageSquare,
  Phone,
  PlayCircle,
  PlugZap,
  Quote,
  Send,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users2,
  Workflow,
  Zap,
  X,
} from 'lucide-react'

const icons = {
  Activity,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Code,
  Compass,
  CreditCard,
  Database,
  FileSearch,
  FileText,
  Gauge,
  Handshake,
  Headset,
  HelpCircle,
  Kanban,
  LineChart,
  Lock,
  Magnet,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MessageSquare,
  Phone,
  PlayCircle,
  PlugZap,
  Quote,
  Send,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users2,
  Workflow,
  Zap,
  X,
}

export default function Icon({
  name,
  size = 20,
  strokeWidth = 1.8,
  className = '',
  ...props
}) {
  const IconComponent = icons[name]

  if (!IconComponent) {
    return null
  }

  return (
    <IconComponent
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      aria-hidden="true"
      {...props}
    />
  )
}