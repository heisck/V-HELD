# Landing Page Engineering Handoff Document

> **Ticket**: `ticket/VH-101-landing-page`  
> **Route**: `/`  
> **Target Release**: Develop Trunk (`develop`)  
> **Status**: Completed & Validated

---

## 1. Asset & Reference Specifications

### 1.1 Local MCP Reference Cache
All implemented UI components were referenced from cached Landingfolio components located in:
`docs/build docs/landing-page/references/`
- `header.json` & `header_ref_*.jpg`
- `hero.json` & `hero_ref_*.jpg`
- `feature.json` & `feature_ref_*.jpg`
- `stats.json` & `stats_ref_*.jpg`
- `testimonial.json` & `testimonial_ref_*.jpg`
- `call-to-action.json` & `call-to-action_ref_*.jpg`
- `footer.json` & `footer_ref_*.jpg`

### 1.2 Official Brand Asset Inventory
- Standalone Emblem Mark: `/assets/brand/v-held-emblem.svg`
- Primary Vertical Lockup: `/assets/brand/v-held-logo-vertical-name.svg`
- Master Horizontal Lockup: `/assets/brand/v-held-logo-horizontal.svg`
- Master Horizontal Lockup (Dark mode): `/assets/brand/v-held-logo-horizontal-dark.svg`
- Full Stacked Vertical Lockup: `/assets/brand/v-held-logo-vertical-full.svg`
- Full Stacked Vertical Lockup (Dark mode): `/assets/brand/v-held-logo-vertical-full-dark.svg`

---

## 2. Interaction Physics & Animation Contracts

### 2.1 Navigation Scroll Dynamics
- **Trigger Threshold**: `window.scrollY > 20px` transitions navbar from wide hero mode (`max-w-7xl`) to compact floating pill (`max-w-5xl rounded-full bg-[#121110]/95 backdrop-blur-md border border-stone-800/80 px-6 py-2.5 shadow-2xl`).
- **Timing & Easing**: 300ms ease-out.
- **Mobile Menu**: Accessible drawer with body lock, ESC key listener, and outside-click dismissal.
- **Reduced Motion**: If `prefers-reduced-motion: reduce` is enabled, all animations and transitions are clamped to 0.01ms and scroll-behavior set to auto via `globals.css`.

### 2.2 Micro-Interactions & Hover Feedback
- **Buttons**: Tactile active press scale (`active:scale-[0.98]`), subtle color transitions, high-contrast gold focus rings (`focus-visible:ring-[#E3A709]`).
- **Cards**: Subtle stone-700 border hover highlight, zero bouncy or disorienting transform jumps.
- **Touch Targets**: Minimum 44px x 44px tap target size across all mobile interactive controls.

---

## 3. Responsive Breakpoints & Multi-Viewport Verification

Verified via Headless Chromium (`google-chrome --headless=new`) against production build:
- **Mobile Small (375px)**: `docs/build docs/landing-page/qa-screenshots/mobile_375.png`
- **Mobile Large (414px)**: `docs/build docs/landing-page/qa-screenshots/mobile_414.png`
- **Tablet Portrait (768px)**: `docs/build docs/landing-page/qa-screenshots/tablet_768.png`
- **Laptop (1024px)**: `docs/build docs/landing-page/qa-screenshots/laptop_1024.png`
- **Desktop Standard (1440px)**: `docs/build docs/landing-page/qa-screenshots/desktop_1440.png`
- **Ultrawide (1920px)**: `docs/build docs/landing-page/qa-screenshots/ultrawide_1920.png`

Zero horizontal overflow, zero clipping, zero layout overlap.

---

## 4. Multi-Disciplinary Gate Verification

### 4.1 UI Critic Audit (Anti-Vibecoding Compliance)
- 100% adherence to all 20 rules in `docs/ui-patterns-avoid.md`.
- No purple-to-blue gradients; official Ghanaian Forest Green (`#065830`), Warm African Gold (`#E3A709`), and Terracotta (`#C34D21`) used purposefully.
- No gradient hero text; solid `#FFFFFF` with negative tracking.
- No emojis in headings.
- No generic 3 icon boxes in a row.

### 4.2 "Pony Tail" Security Audit
- `folio-mcp.json` remains permanently gitignored (`.gitignore`).
- Zero API keys or secrets exposed in code or client bundles.
- Strict security headers configured in `next.config.js`:
  - `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
  - `X-Frame-Options: SAMEORIGIN`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`

### 4.3 Code Review & Performance Budget
- TypeScript: strict mode, 0 errors (`tsc --noEmit`).
- Lint: Next.js ESLint, 0 errors, 0 warnings (`next lint`).
- Tests: 13 test suites, 26 tests passing in Vitest (`vitest run`).
- Bundle: 103 kB First Load JS (< 150 kB budget).

---

## 5. Review & Integration Gate

```bash
# Verify agent acceptance gate
npm run check:agent

# Verify production build
npm run build
```
