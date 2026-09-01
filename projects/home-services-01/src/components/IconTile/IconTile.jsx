import {
  ChefHat, Zap, Droplets, PaintRoller, TreePine, Wrench,
  FileText, Clock, ShieldCheck, Users, Ruler, HeartHandshake,
  Hammer,
} from 'lucide-react';
import './IconTile.scss';

const ICONS = {
  ChefHat, Zap, Droplets, PaintRoller, TreePine, Wrench,
  FileText, Clock, ShieldCheck, Users, Ruler, HeartHandshake,
  Hammer,
};

/**
 * Renders a lucide icon by name inside a bracketed tile — the
 * corner-mark motif scaled down for inline use.
 */
export default function IconTile({ name, size = 'md', tone = 'brass' }) {
  const Icon = ICONS[name] || Hammer;
  return (
    <span className={`icon-tile icon-tile--${size} icon-tile--${tone}`}>
      <Icon size={size === 'lg' ? 30 : size === 'sm' ? 18 : 24} strokeWidth={1.75} aria-hidden="true" />
    </span>
  );
}
