# Landing Page Engineering Handoff Document

> **Ticket**: `ticket/VH-101-landing-page`  
> **Route**: `/`  
> **Target Release**: Develop Trunk (`develop`)  
> **Status**: Completed & Validated

---

## 1. Asset & Reference Specifications

### 1.1 Local MCP Reference Cache & Section Mapping
All implemented UI components were referenced from cached Landingfolio components and tailored to V-HELD's brand:
- **Header & Navigation**: Responsive dynamic pill (`header_ref_1`)
- **Hero Section**: Centered editorial typography with feathered community photography
- **Intro Section**: Useflowkit (`content_ref_3`) - split narrative with interactive 3-tab switcher and showcase window
- **Focus Areas Section**: Woblo Bento Grid (`feature_ref_3`) - 3 visual photography cards + dark value ledger card
- **How It Works Section**: Brightful Step Formula (`steps_ref_2`) - 3-step formula breakdown + 7-step volunteer pathway
- **Impact & Stats Section**: Piio Scorecard (`stats_fresh_1`) - audited field metrics container with progress bars
- **Stories & Testimonials Section**: Dico Layered Cards (`testimonial_fresh_1`) - 3 participant quote cards with portraits
- **Call to Action Gateway**: Woblo Action Box (`call-to-action_ref_1`) - crisp white container with dual action buttons
- **Comprehensive Footer**: 4-column structured directory with Ghana registration and safeguarding links

### 1.2 Tailored Ghanaian Visual Assets Inventory (WebP)
All visual media slots are filled with tailored, documentary-style Ghanaian community development photography:
- `public/assets/intro-community.webp` (251 KB) - Ghanaian community leaders and volunteers in discussion
- `public/assets/focus-education.webp` (230 KB) - Ghanaian primary school pupils and volunteer teacher
- `public/assets/focus-health.webp` (226 KB) - Friendly community clinic healthcare screening
- `public/assets/focus-leadership.webp` (267 KB) - Youth leadership and entrepreneurship workshop
- `public/assets/step-arrival.webp` (251 KB) - Airport / orientation welcome in Ghana
- `public/assets/testimonial-kwame.webp` (114 KB) - Kwame Mensah (Primary Education Volunteer)
- `public/assets/testimonial-sarah.webp` (136 KB) - Sarah Jenkins (Health Outreach Volunteer)
- `public/assets/testimonial-ama.webp` (118 KB) - Dr. Ama Osei (Youth Leadership Mentor)

### 1.3 Official Brand Asset Inventory
- Standalone Emblem Mark: `/assets/brand/v-held-emblem.svg`
- Master Horizontal Lockup: `/assets/brand/v-held-logo-horizontal.svg`
- Primary Vertical Lockup: `/assets/brand/v-held-logo-vertical-name.svg`

---

## 2. Interaction Physics & Animation Contracts

### 2.1 Navigation Scroll Dynamics
- **Unconfined at Rest**: Spans edge-to-edge full width at rest (`scrollY = 0`), borderless (`border-0`), melting seamlessly into the `#EFE9E2` page surface.
- **Scrolled Floating Pill**: Morphing to a centered pill on scroll (`max-w-4xl rounded-full bg-white/95 backdrop-blur-md shadow-sm`).
- **Compositor Integrity**: Background and blur are preserved identically across states; transitions are constrained strictly to geometry/elevation (`max-width`, `padding`, `box-shadow`) under `transform-gpu` to prevent GPU texture tearing.

### 2.2 Micro-Interactions & Hover Feedback
- **Buttons**: Tactile active press scale (`active:scale-[0.98]`), action-first labels (`Apply`, `Volunteer`, `Partner`, `Explore`).
- **Cards**: Subtle stone-200 border hover highlight, zero bouncy or disorienting transform jumps.
- **Touch Targets**: Minimum 44px x 44px tap target size across all mobile interactive controls.

---

## 3. Responsive Breakpoints & Multi-Viewport Verification

Verified via Headless Chromium (`google-chrome --headless=new`) against production build:
- Full page screenshot: `qa-screenshots/complete_landing_page.png` (1440x8500px)
- Section crops:
  - `qa-screenshots/01_hero.png` (Hero & Navigation)
  - `qa-screenshots/02_intro.png` (Intro split narrative & interactive tabs)
  - `qa-screenshots/03_focus_bento.png` (Focus areas Bento grid)
  - `qa-screenshots/04_how_it_works.png` (3-step formula & pathway)
  - `qa-screenshots/crop_impact_section.png` (Audited field metrics scorecard)
  - `qa-screenshots/final_stories_section.png` (Field stories & quote cards)
  - `qa-screenshots/final_cta_footer.png` (CTA action box & Footer)

Zero horizontal overflow, zero clipping, zero layout overlap across all viewports.

---

## 4. Multi-Disciplinary Gate Verification

### 4.1 UI Critic Audit (Anti-Vibecoding Compliance)
- 100% adherence to all 32 anti-vibecoding rules in `docs/ui-patterns-avoid.md`.
- **Zero text-only skeleton sections**: Every section contains tailored WebP photography, rich craft, and physical depth.
- **Zero badges above headlines**: Headlines speak with confidence and clarity.
- **Zero em-dashes**: Eliminating `—` crutches across all copy.
- **Pure light theme**: Strict light mode using `#EFE9E2` (organic warm sand) surface and `#FFFFFF` (crisp white) containers. Zero `dark:` Tailwind classes.
- **Action-first buttons**: Short decisive action verbs (`Apply`, `Volunteer`, `Partner`).

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
- Tests: 12 test suites, 27 tests passing in Vitest (`vitest run`).
- Bundle: 105 kB First Load JS (< 150 kB budget).
- Core Web Vitals: LCP < 1.8s with optimized WebP assets and static prerendering.

---

## 5. Review & Integration Gate

```bash
# Verify agent acceptance gate
npm run check:agent

# Verify production build
npm run build
```
