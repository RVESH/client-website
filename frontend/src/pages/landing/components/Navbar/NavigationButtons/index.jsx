import React from "react";
import { NavLink } from "react-router-dom";

import "./index.scss";

const NavigationButtons = () => {
  return (
    <div className="navigation-buttons">
      <NavLink
        to="/websites"
        className={({ isActive }) =>
          `navigation-buttons__item ${
            isActive
              ? "navigation-buttons__item--active"
              : ""
          }`
        }
        aria-label="Open Websites"
      >
        {/* Glow */}
        <span
          className="navigation-buttons__glow"
          aria-hidden="true"
        />

        {/* Icon */}
        <span
          className="navigation-buttons__icon"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
          >
            <rect
              x="3"
              y="4"
              width="18"
              height="16"
              rx="2.5"
              stroke="currentColor"
              strokeWidth="1.6"
            />

            <path
              d="M3 8.5h18"
              stroke="currentColor"
              strokeWidth="1.6"
            />

            <circle
              cx="6.5"
              cy="6.25"
              r=".8"
              fill="currentColor"
            />

            <circle
              cx="9.25"
              cy="6.25"
              r=".8"
              fill="currentColor"
            />
          </svg>
        </span>

        {/* Text */}
        <span className="navigation-buttons__text">
          Websites
        </span>

        {/* Arrow */}
        <span
          className="navigation-buttons__arrow"
          aria-hidden="true"
        >
          ↗
        </span>
      </NavLink>
    </div>
  );
};

export default NavigationButtons;