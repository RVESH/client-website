import { X } from "lucide-react";
import { categories } from "../../data/categories";
import "./FilterPanel.scss";

const JOB_TYPES = ["Full-time", "Part-time", "Contract", "Internship"];
const WORK_MODES = ["Remote", "On-site", "Hybrid"];
const EXPERIENCE_LEVELS = ["Entry-level", "Mid-level", "Senior", "Lead"];

export default function FilterPanel({ filters, onChange, onClear, activeCount }) {
  return (
    <div className="filter-panel">
      <div className="filter-panel__grid">
        <div className="filter-panel__field">
          <label htmlFor="filter-category">Category</label>
          <select
            id="filter-category"
            value={filters.category}
            onChange={(e) => onChange("category", e.target.value)}
          >
            <option value="">All categories</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.label}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-panel__field">
          <label htmlFor="filter-type">Job type</label>
          <select
            id="filter-type"
            value={filters.type}
            onChange={(e) => onChange("type", e.target.value)}
          >
            <option value="">All types</option>
            {JOB_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-panel__field">
          <label htmlFor="filter-workmode">Work mode</label>
          <select
            id="filter-workmode"
            value={filters.workMode}
            onChange={(e) => onChange("workMode", e.target.value)}
          >
            <option value="">Remote, on-site or hybrid</option>
            {WORK_MODES.map((w) => (
              <option key={w} value={w}>
                {w}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-panel__field">
          <label htmlFor="filter-experience">Experience</label>
          <select
            id="filter-experience"
            value={filters.experience}
            onChange={(e) => onChange("experience", e.target.value)}
          >
            <option value="">Any experience</option>
            {EXPERIENCE_LEVELS.map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </select>
        </div>
      </div>

      {activeCount > 0 && (
        <button type="button" className="filter-panel__clear" onClick={onClear}>
          <X size={14} strokeWidth={2} aria-hidden="true" />
          <span>Clear filters ({activeCount})</span>
        </button>
      )}
    </div>
  );
}
