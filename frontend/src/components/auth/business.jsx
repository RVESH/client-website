/**
 * AuthFlow.jsx
 * ─────────────────────────────────────────────────────────────
 * Drop-in React component: Login + Signup screens
 * Topic: NovaPay — a premium digital banking / fintech app
 *
 * Usage:
 *   import AuthFlow from "./AuthFlow"
 *   <AuthFlow onAuth={(userData) => console.log(userData)} />
 *
 * Paste the <style> block into AuthFlow.scss if you prefer
 * separate files — the JSX className strings match exactly.
 * ─────────────────────────────────────────────────────────────
 */

import React, { useState, useEffect } from "react"

// ─── Inline styles (paste into AuthFlow.scss for separate-file workflow) ──────
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg-deep:     #080b14;
    --bg-panel:    #0d1221;
    --bg-card:     #121929;
    --bg-input:    #0e1520;
    --border:      rgba(255,255,255,0.07);
    --border-act:  rgba(99,179,255,0.45);
    --accent:      #3b9eff;
    --accent-soft: rgba(59,158,255,0.12);
    --accent-glow: rgba(59,158,255,0.25);
    --gold:        #f5c842;
    --gold-soft:   rgba(245,200,66,0.1);
    --text-1:      #eef2ff;
    --text-2:      #8b95b0;
    --text-3:      #4a5370;
    --success:     #2dd4a0;
    --error:       #ff5f7e;
    --font-head:   'Syne', sans-serif;
    --font-body:   'DM Sans', sans-serif;
    --radius:      14px;
    --radius-sm:   8px;
    --transition:  0.22s cubic-bezier(0.4,0,0.2,1);
  }

  /* ── Page shell ── */
  .af-root {
    min-height: 100vh;
    background: var(--bg-deep);
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-family: var(--font-body);
    color: var(--text-1);
    overflow: hidden;
    position: relative;
  }
  @media (max-width: 860px) {
    .af-root { grid-template-columns: 1fr; }
    .af-hero  { display: none; }
  }

  /* ── Left hero panel ── */
  .af-hero {
    background: var(--bg-panel);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2.5rem 3rem 3rem;
    overflow: hidden;
  }
  .af-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 60% 50% at 20% 80%, rgba(59,158,255,0.13) 0%, transparent 70%),
      radial-gradient(ellipse 40% 40% at 80% 20%, rgba(245,200,66,0.08) 0%, transparent 70%);
    pointer-events: none;
  }
  .af-hero-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
    background-size: 44px 44px;
    mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
  }

  .af-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
    z-index: 1;
  }
  .af-logo-mark {
    width: 36px; height: 36px;
    background: linear-gradient(135deg, var(--accent) 0%, #6c3bff 100%);
    border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    font-family: var(--font-head);
    font-weight: 800;
    font-size: 16px;
    color: #fff;
    letter-spacing: -0.5px;
  }
  .af-logo-name {
    font-family: var(--font-head);
    font-weight: 700;
    font-size: 20px;
    letter-spacing: -0.3px;
    color: var(--text-1);
  }
  .af-logo-name span { color: var(--accent); }

  .af-hero-body {
    position: relative;
    z-index: 1;
  }
  .af-hero-tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: var(--gold-soft);
    border: 1px solid rgba(245,200,66,0.18);
    color: var(--gold);
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 5px 12px;
    border-radius: 99px;
    margin-bottom: 1.5rem;
  }
  .af-hero-tag::before {
    content: '';
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--gold);
    animation: pulse-dot 1.8s ease-in-out infinite;
  }
  @keyframes pulse-dot {
    0%,100% { opacity: 1; transform: scale(1); }
    50%      { opacity: 0.4; transform: scale(0.8); }
  }

  .af-hero-headline {
    font-family: var(--font-head);
    font-weight: 800;
    font-size: clamp(2rem, 3.5vw, 2.8rem);
    line-height: 1.12;
    letter-spacing: -0.04em;
    color: var(--text-1);
    margin-bottom: 1rem;
  }
  .af-hero-headline em {
    font-style: normal;
    background: linear-gradient(90deg, var(--accent) 0%, #a78bfa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .af-hero-sub {
    font-size: 15px;
    color: var(--text-2);
    line-height: 1.65;
    max-width: 340px;
    margin-bottom: 2.5rem;
  }

  .af-hero-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }
  .af-stat {
    background: rgba(255,255,255,0.04);
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    padding: 14px 12px;
    text-align: center;
  }
  .af-stat-val {
    font-family: var(--font-head);
    font-weight: 700;
    font-size: 20px;
    color: var(--text-1);
    letter-spacing: -0.03em;
    display: block;
    margin-bottom: 4px;
  }
  .af-stat-label {
    font-size: 11px;
    color: var(--text-3);
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .af-hero-testimonial {
    position: relative;
    z-index: 1;
    background: rgba(255,255,255,0.035);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 20px 22px;
  }
  .af-tes-text {
    font-size: 13.5px;
    color: var(--text-2);
    line-height: 1.6;
    font-style: italic;
    margin-bottom: 14px;
  }
  .af-tes-author {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .af-tes-avatar {
    width: 30px; height: 30px;
    border-radius: 50%;
    background: linear-gradient(135deg, #3b9eff, #6c3bff);
    font-size: 12px;
    font-weight: 600;
    display: flex; align-items: center; justify-content: center;
    color: #fff;
    flex-shrink: 0;
  }
  .af-tes-name {
    font-size: 13px;
    font-weight: 500;
    color: var(--text-1);
  }
  .af-tes-role {
    font-size: 11px;
    color: var(--text-3);
  }

  /* ── Right form panel ── */
  .af-form-panel {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 1.5rem;
    position: relative;
  }
  .af-form-panel::before {
    content: '';
    position: absolute;
    top: -120px; right: -80px;
    width: 300px; height: 300px;
    background: radial-gradient(circle, rgba(59,158,255,0.06) 0%, transparent 70%);
    pointer-events: none;
  }

  .af-form-box {
    width: 100%;
    max-width: 420px;
    position: relative;
    z-index: 1;
  }

  .af-form-header {
    margin-bottom: 2rem;
  }
  .af-form-pretitle {
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent);
    font-weight: 500;
    margin-bottom: 10px;
  }
  .af-form-title {
    font-family: var(--font-head);
    font-weight: 800;
    font-size: 2rem;
    letter-spacing: -0.04em;
    color: var(--text-1);
    line-height: 1.1;
    margin-bottom: 8px;
  }
  .af-form-subtitle {
    font-size: 14px;
    color: var(--text-2);
    line-height: 1.5;
  }

  /* ── Tabs ── */
  .af-tabs {
    display: flex;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 4px;
    margin-bottom: 2rem;
    gap: 4px;
  }
  .af-tab {
    flex: 1;
    padding: 9px;
    text-align: center;
    font-size: 13.5px;
    font-weight: 500;
    font-family: var(--font-body);
    color: var(--text-3);
    background: transparent;
    border: none;
    border-radius: 7px;
    cursor: pointer;
    transition: var(--transition);
    letter-spacing: 0.01em;
  }
  .af-tab:hover { color: var(--text-2); }
  .af-tab.active {
    background: var(--bg-input);
    color: var(--text-1);
    border: 1px solid var(--border);
    box-shadow: 0 1px 6px rgba(0,0,0,0.3);
  }

  /* ── Form fields ── */
  .af-field {
    margin-bottom: 1rem;
    position: relative;
  }
  .af-field label {
    display: block;
    font-size: 12.5px;
    font-weight: 500;
    color: var(--text-2);
    margin-bottom: 7px;
    letter-spacing: 0.02em;
  }
  .af-input-wrap {
    position: relative;
    display: flex;
    align-items: center;
  }
  .af-input-icon {
    position: absolute;
    left: 14px;
    color: var(--text-3);
    display: flex;
    align-items: center;
    pointer-events: none;
  }
  .af-input {
    width: 100%;
    height: 46px;
    background: var(--bg-input);
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    color: var(--text-1);
    font-family: var(--font-body);
    font-size: 14px;
    padding: 0 42px 0 42px;
    outline: none;
    transition: var(--transition);
    letter-spacing: 0.01em;
  }
  .af-input::placeholder { color: var(--text-3); }
  .af-input:hover { border-color: rgba(255,255,255,0.12); }
  .af-input:focus {
    border-color: var(--border-act);
    box-shadow: 0 0 0 3px var(--accent-soft);
    background: rgba(14,21,32,0.85);
  }
  .af-input.error {
    border-color: rgba(255,95,126,0.5);
    box-shadow: 0 0 0 3px rgba(255,95,126,0.1);
  }
  .af-input-right {
    position: absolute;
    right: 12px;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--text-3);
    display: flex;
    align-items: center;
    padding: 4px;
    border-radius: 4px;
    transition: var(--transition);
  }
  .af-input-right:hover { color: var(--text-2); }
  .af-field-error {
    font-size: 11.5px;
    color: var(--error);
    margin-top: 5px;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  /* ── Name row ── */
  .af-name-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 1rem;
  }

  /* ── Password strength ── */
  .af-strength {
    margin-top: 8px;
  }
  .af-strength-bar {
    display: flex;
    gap: 4px;
    margin-bottom: 5px;
  }
  .af-strength-seg {
    flex: 1;
    height: 3px;
    border-radius: 99px;
    background: var(--border);
    transition: background 0.3s;
  }
  .af-strength-seg.s1 { background: var(--error); }
  .af-strength-seg.s2 { background: #ff9a3c; }
  .af-strength-seg.s3 { background: var(--gold); }
  .af-strength-seg.s4 { background: var(--success); }
  .af-strength-label {
    font-size: 11px;
    color: var(--text-3);
  }

  /* ── Extras row ── */
  .af-extras {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
  }
  .af-remember {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 13px;
    color: var(--text-2);
    user-select: none;
  }
  .af-remember input[type="checkbox"] {
    width: 16px; height: 16px;
    accent-color: var(--accent);
    cursor: pointer;
  }
  .af-forgot {
    font-size: 13px;
    color: var(--accent);
    background: none;
    border: none;
    cursor: pointer;
    font-family: var(--font-body);
    transition: opacity var(--transition);
  }
  .af-forgot:hover { opacity: 0.75; }

  /* ── Terms (signup) ── */
  .af-terms {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    margin-bottom: 1.5rem;
    cursor: pointer;
  }
  .af-terms input[type="checkbox"] {
    margin-top: 2px;
    accent-color: var(--accent);
    flex-shrink: 0;
  }
  .af-terms-text {
    font-size: 12.5px;
    color: var(--text-3);
    line-height: 1.5;
  }
  .af-terms-text a {
    color: var(--accent);
    text-decoration: none;
  }
  .af-terms-text a:hover { text-decoration: underline; }

  /* ── Submit button ── */
  .af-submit {
    width: 100%;
    height: 50px;
    background: linear-gradient(135deg, var(--accent) 0%, #2d6fcf 100%);
    border: none;
    border-radius: var(--radius-sm);
    color: #fff;
    font-family: var(--font-head);
    font-weight: 700;
    font-size: 15px;
    letter-spacing: 0.01em;
    cursor: pointer;
    transition: var(--transition);
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-bottom: 1.5rem;
  }
  .af-submit::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255,255,255,0);
    transition: background var(--transition);
  }
  .af-submit:hover::after { background: rgba(255,255,255,0.08); }
  .af-submit:active { transform: scale(0.985); }
  .af-submit:disabled { opacity: 0.6; cursor: not-allowed; }
  .af-submit-spinner {
    width: 18px; height: 18px;
    border: 2.5px solid rgba(255,255,255,0.35);
    border-top-color: #fff;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  /* ── Divider ── */
  .af-divider {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 1.25rem;
    color: var(--text-3);
    font-size: 12px;
  }
  .af-divider::before,
  .af-divider::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--border);
  }

  /* ── Social buttons ── */
  .af-socials {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-bottom: 1.75rem;
  }
  .af-social-btn {
    height: 44px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    color: var(--text-2);
    font-family: var(--font-body);
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: var(--transition);
  }
  .af-social-btn:hover {
    border-color: rgba(255,255,255,0.13);
    background: rgba(255,255,255,0.04);
    color: var(--text-1);
  }
  .af-social-btn svg { flex-shrink: 0; }

  /* ── Switch line ── */
  .af-switch {
    text-align: center;
    font-size: 13.5px;
    color: var(--text-3);
  }
  .af-switch button {
    background: none;
    border: none;
    color: var(--accent);
    font-size: 13.5px;
    font-family: var(--font-body);
    font-weight: 500;
    cursor: pointer;
    transition: opacity var(--transition);
  }
  .af-switch button:hover { opacity: 0.75; }

  /* ── Toast ── */
  .af-toast {
    position: fixed;
    bottom: 24px; right: 24px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 14px 18px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13.5px;
    color: var(--text-1);
    box-shadow: 0 16px 40px rgba(0,0,0,0.5);
    z-index: 9999;
    animation: toast-in 0.3s cubic-bezier(0.4,0,0.2,1);
  }
  .af-toast.success .af-toast-icon { color: var(--success); }
  .af-toast.error   .af-toast-icon { color: var(--error); }
  @keyframes toast-in {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`

// ─── SVG Icon helpers ─────────────────────────────────────────────────────────
const Icon = {
  User: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  ),
  Mail: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  ),
  Lock: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  ),
  Eye: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  ),
  EyeOff: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
      <line x1="1" y1="1" x2="23" y2="23"/>
    </svg>
  ),
  Phone: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.5 2 2 0 0 1 3.6 1.37h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  Check: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  X: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  ),
  Google: () => (
    <svg width="16" height="16" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  ),
  Apple: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
    </svg>
  ),
}

// ─── Password strength calculator ────────────────────────────────────────────
const getStrength = (pw) => {
  if (!pw) return 0
  let score = 0
  if (pw.length >= 8)  score++
  if (/[A-Z]/.test(pw)) score++
  if (/[0-9]/.test(pw)) score++
  if (/[^A-Za-z0-9]/.test(pw)) score++
  return score
}

const strengthLabels = ["", "Weak", "Fair", "Good", "Strong"]
const strengthClasses = ["", "s1", "s2", "s3", "s4"]

// ─── Toast ────────────────────────────────────────────────────────────────────
const Toast = ({ message, type }) => (
  <div className={`af-toast ${type}`}>
    <span className="af-toast-icon">
      {type === "success" ? <Icon.Check /> : <Icon.X />}
    </span>
    {message}
  </div>
)

// ─── Main Component ───────────────────────────────────────────────────────────
const business = ({ onAuth }) => {
  const [mode, setMode]         = useState("login")   // "login" | "signup"
  const [showPw, setShowPw]     = useState(false)
  const [showCpw, setShowCpw]   = useState(false)
  const [loading, setLoading]   = useState(false)
  const [toast, setToast]       = useState(null)
  const [errors, setErrors]     = useState({})

  // Login fields
  const [loginEmail, setLoginEmail]   = useState("")
  const [loginPw, setLoginPw]         = useState("")
  const [remember, setRemember]       = useState(false)

  // Signup fields
  const [firstName, setFirstName]     = useState("")
  const [lastName, setLastName]       = useState("")
  const [signupEmail, setSignupEmail] = useState("")
  const [signupPhone, setSignupPhone] = useState("")
  const [signupPw, setSignupPw]       = useState("")
  const [confirmPw, setConfirmPw]     = useState("")
  const [agreeTerms, setAgreeTerms]   = useState(false)

  const pwStrength = getStrength(signupPw)

  const showToast = (message, type = "success") => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 3500)
  }

  // ── Validate ──────────────────────────────────────────────────────────────
  const validate = () => {
    const e = {}
    if (mode === "login") {
      if (!loginEmail) e.loginEmail = "Email is required"
      else if (!/\S+@\S+\.\S+/.test(loginEmail)) e.loginEmail = "Invalid email"
      if (!loginPw) e.loginPw = "Password is required"
    } else {
      if (!firstName.trim()) e.firstName = "Required"
      if (!lastName.trim())  e.lastName  = "Required"
      if (!signupEmail) e.signupEmail = "Email is required"
      else if (!/\S+@\S+\.\S+/.test(signupEmail)) e.signupEmail = "Invalid email"
      if (signupPw.length < 8) e.signupPw = "Minimum 8 characters"
      if (confirmPw !== signupPw) e.confirmPw = "Passwords don't match"
      if (!agreeTerms) e.agreeTerms = "Please accept the terms"
    }
    setErrors(e)
    return Object.keys(e).length === 0
  }

  // ── Submit ────────────────────────────────────────────────────────────────
  const handleSubmit = async () => {
    if (!validate()) return
    setLoading(true)
    // Simulate API delay
    await new Promise(r => setTimeout(r, 1400))
    setLoading(false)
    if (mode === "login") {
      showToast("Welcome back to NovaPay!", "success")
      onAuth?.({ email: loginEmail, mode: "login" })
    } else {
      showToast("Account created! Welcome aboard 🎉", "success")
      onAuth?.({ email: signupEmail, mode: "signup" })
    }
  }

  const switchMode = (m) => {
    setMode(m)
    setErrors({})
    setShowPw(false)
    setShowCpw(false)
  }

  // ─── Field component ──────────────────────────────────────────────────────
  const Field = ({ label, icon, error, children }) => (
    <div className="af-field">
      <label>{label}</label>
      <div className="af-input-wrap">
        <span className="af-input-icon">{icon}</span>
        {children}
      </div>
      {error && <div className="af-field-error"><Icon.X />{error}</div>}
    </div>
  )

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      <div className="af-root">

        {/* ── Left Hero ── */}
        <div className="af-hero">
          <div className="af-hero-grid" />

          {/* Logo */}
          <div className="af-logo">
            <div className="af-logo-mark">N</div>
            <div className="af-logo-name">Nova<span>Pay</span></div>
          </div>

          {/* Headline */}
          <div className="af-hero-body">
            <div className="af-hero-tag">Trusted by 2M+ users</div>
            <h1 className="af-hero-headline">
              Banking that<br />works <em>for you,</em><br />not against you.
            </h1>
            <p className="af-hero-sub">
              Send money globally, grow your savings, and control every rupee — all from one elegant app.
            </p>

            <div className="af-hero-stats">
              <div className="af-stat">
                <span className="af-stat-val">₹480Cr</span>
                <span className="af-stat-label">Processed daily</span>
              </div>
              <div className="af-stat">
                <span className="af-stat-val">2.1M</span>
                <span className="af-stat-label">Active users</span>
              </div>
              <div className="af-stat">
                <span className="af-stat-val">99.9%</span>
                <span className="af-stat-label">Uptime SLA</span>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="af-hero-testimonial">
            <p className="af-tes-text">
              "Switched from my old bank account and never looked back. NovaPay is stupidly fast and the UI is genuinely beautiful."
            </p>
            <div className="af-tes-author">
              <div className="af-tes-avatar">PR</div>
              <div>
                <div className="af-tes-name">Priya Raghunathan</div>
                <div className="af-tes-role">Startup Founder, Bengaluru</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right Form Panel ── */}
        <div className="af-form-panel">
          <div className="af-form-box">

            <div className="af-form-header">
              <div className="af-form-pretitle">
                {mode === "login" ? "Welcome back" : "Get started free"}
              </div>
              <h2 className="af-form-title">
                {mode === "login" ? "Sign in to NovaPay" : "Create your account"}
              </h2>
              <p className="af-form-subtitle">
                {mode === "login"
                  ? "Enter your credentials to access your dashboard."
                  : "Join 2 million users managing money the smart way."}
              </p>
            </div>

            {/* Tabs */}
            <div className="af-tabs">
              <button className={`af-tab ${mode === "login"  ? "active" : ""}`} onClick={() => switchMode("login")}>Sign In</button>
              <button className={`af-tab ${mode === "signup" ? "active" : ""}`} onClick={() => switchMode("signup")}>Create Account</button>
            </div>

            {/* Social buttons */}
            <div className="af-socials">
              <button className="af-social-btn"><Icon.Google /> Continue with Google</button>
              <button className="af-social-btn"><Icon.Apple /> Continue with Apple</button>
            </div>

            <div className="af-divider">or continue with email</div>

            {/* ── LOGIN FORM ── */}
            {mode === "login" && (
              <>
                <Field label="Email address" icon={<Icon.Mail />} error={errors.loginEmail}>
                  <input
                    className={`af-input${errors.loginEmail ? " error" : ""}`}
                    type="email"
                    placeholder="you@example.com"
                    value={loginEmail}
                    onChange={e => setLoginEmail(e.target.value)}
                    autoComplete="email"
                  />
                </Field>

                <Field label="Password" icon={<Icon.Lock />} error={errors.loginPw}>
                  <input
                    className={`af-input${errors.loginPw ? " error" : ""}`}
                    type={showPw ? "text" : "password"}
                    placeholder="Your password"
                    value={loginPw}
                    onChange={e => setLoginPw(e.target.value)}
                    autoComplete="current-password"
                  />
                  <button className="af-input-right" type="button" onClick={() => setShowPw(v => !v)}>
                    {showPw ? <Icon.EyeOff /> : <Icon.Eye />}
                  </button>
                </Field>

                <div className="af-extras">
                  <label className="af-remember">
                    <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} />
                    Remember me
                  </label>
                  <button className="af-forgot" type="button">Forgot password?</button>
                </div>
              </>
            )}

            {/* ── SIGNUP FORM ── */}
            {mode === "signup" && (
              <>
                <div className="af-name-row">
                  <div className="af-field">
                    <label>First name</label>
                    <div className="af-input-wrap">
                      <span className="af-input-icon"><Icon.User /></span>
                      <input
                        className={`af-input${errors.firstName ? " error" : ""}`}
                        type="text"
                        placeholder="Arjun"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                      />
                    </div>
                    {errors.firstName && <div className="af-field-error"><Icon.X />{errors.firstName}</div>}
                  </div>
                  <div className="af-field">
                    <label>Last name</label>
                    <div className="af-input-wrap">
                      <span className="af-input-icon"><Icon.User /></span>
                      <input
                        className={`af-input${errors.lastName ? " error" : ""}`}
                        type="text"
                        placeholder="Sharma"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                      />
                    </div>
                    {errors.lastName && <div className="af-field-error"><Icon.X />{errors.lastName}</div>}
                  </div>
                </div>

                <Field label="Email address" icon={<Icon.Mail />} error={errors.signupEmail}>
                  <input
                    className={`af-input${errors.signupEmail ? " error" : ""}`}
                    type="email"
                    placeholder="you@example.com"
                    value={signupEmail}
                    onChange={e => setSignupEmail(e.target.value)}
                    autoComplete="email"
                  />
                </Field>

                <Field label="Phone number (optional)" icon={<Icon.Phone />}>
                  <input
                    className="af-input"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={signupPhone}
                    onChange={e => setSignupPhone(e.target.value)}
                  />
                </Field>

                <Field label="Password" icon={<Icon.Lock />} error={errors.signupPw}>
                  <input
                    className={`af-input${errors.signupPw ? " error" : ""}`}
                    type={showPw ? "text" : "password"}
                    placeholder="Min 8 characters"
                    value={signupPw}
                    onChange={e => setSignupPw(e.target.value)}
                    autoComplete="new-password"
                  />
                  <button className="af-input-right" type="button" onClick={() => setShowPw(v => !v)}>
                    {showPw ? <Icon.EyeOff /> : <Icon.Eye />}
                  </button>
                </Field>

                {signupPw && (
                  <div className="af-strength">
                    <div className="af-strength-bar">
                      {[1,2,3,4].map(i => (
                        <div key={i} className={`af-strength-seg${i <= pwStrength ? ` ${strengthClasses[pwStrength]}` : ""}`} />
                      ))}
                    </div>
                    <span className="af-strength-label">{strengthLabels[pwStrength]} password</span>
                  </div>
                )}

                <div style={{ marginBottom: "1rem" }} />

                <Field label="Confirm password" icon={<Icon.Lock />} error={errors.confirmPw}>
                  <input
                    className={`af-input${errors.confirmPw ? " error" : ""}`}
                    type={showCpw ? "text" : "password"}
                    placeholder="Re-enter password"
                    value={confirmPw}
                    onChange={e => setConfirmPw(e.target.value)}
                    autoComplete="new-password"
                  />
                  <button className="af-input-right" type="button" onClick={() => setShowCpw(v => !v)}>
                    {showCpw ? <Icon.EyeOff /> : <Icon.Eye />}
                  </button>
                </Field>

                <label className="af-terms">
                  <input type="checkbox" checked={agreeTerms} onChange={e => setAgreeTerms(e.target.checked)} />
                  <span className="af-terms-text">
                    I agree to NovaPay's <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
                    {errors.agreeTerms && <span style={{ color: "var(--error)", display: "block", marginTop: 3 }}>{errors.agreeTerms}</span>}
                  </span>
                </label>
              </>
            )}

            {/* Submit */}
            <button
              className="af-submit"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading
                ? <><div className="af-submit-spinner" /> {mode === "login" ? "Signing in…" : "Creating account…"}</>
                : mode === "login" ? "Sign In to NovaPay" : "Create Free Account"
              }
            </button>

            {/* Switch */}
            <div className="af-switch">
              {mode === "login"
                ? <>Don't have an account? <button onClick={() => switchMode("signup")}>Sign up free</button></>
                : <>Already have an account? <button onClick={() => switchMode("login")}>Sign in</button></>
              }
            </div>

          </div>
        </div>
      </div>

      {/* Toast notification */}
      {toast && <Toast message={toast.message} type={toast.type} />}
    </>
  )
}

export default business