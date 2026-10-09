# Landing Page Engineering Handoff Document

> **Ticket**: `ticket/VH-101-landing-page`  
> **Route**: `/`  
> **Target Release**: Develop Trunk (`develop`)

---

## 1. Asset & Reference Specifications

### 1.1 Local MCP Reference Cache
All UI structures are derived from cached Landingfolio components located in:
`docs/build docs/landing-page/references/`
- `header.json` & `header_ref_*.jpg`
- `hero.json` & `hero_ref_*.jpg`
- `feature.json` & `feature_ref_*.jpg`
- `stats.json` & `stats_ref_*.jpg`
- `testimonial.json` & `testimonial_ref_*.jpg`
- `call-to-action.json` & `call-to-action_ref_*.jpg`
- `footer.json` & `footer_ref_*.jpg`

### 1.2 Official Brand Asset Paths
- **Official Emblems & Lockups**:
  - `/assets/brand/v-held-emblem.svg` (240x235)
  - `/assets/brand/v-held-logo-vertical-name.svg` (260x220)
  - `/assets/brand/v-held-logo-horizontal.svg` (480x170)
  - `/assets/brand/v-held-logo-horizontal-dark.svg` (480x170)
  - `/assets/brand/v-held-logo-vertical-full.svg` (320x350)
  - `/assets/brand/v-held-logo-vertical-full-dark.svg` (320x350)

---

## 2. Interaction Physics & Animation Contracts

### 2.1 Navigation Scroll Dynamics
- **Trigger Threshold**: `window.scrollY > 20px` transitions navbar from wide hero mode (`max-w-[72rem]`) to compact floating pill (`max-w-[44rem]`).
- **Timing & Easing**: 400ms duration, standard easing `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Reduced Motion**: If `prefers-reduced-motion: reduce` is enabled, disable fluid transforms and maintain static position without animations.

### 2.2 Micro-Interactions & Hover Feedback
- **Buttons**: Micro-translate on active (`active:scale-[0.98]`), subtle color shifts. Never rely solely on fade opacity.
- **Card States**: 1px subtle highlight transition, elevated drop shadow on pointer interaction, accessible focus-visible rings with 2px offset.
- **Touch Targets**: Minimum 44px x 44px tap target size across all mobile interfaces.

---

## 3. Responsive Breakpoints & Viewport Testing Matrix

| Breakpoint | Width (px) | Device Target | Verification Notes |
| :--- | :--- | :--- | :--- |
| **Mobile Small** | 375px | iPhone SE / Mobile | Single column, stacked CTAs, accessible hamburger menu |
| **Mobile Large** | 414px | iPhone 15 / Plus | Full touch padding, zero text clipping |
| **Tablet Portrait** | 768px | iPad Mini | 2-column grids where appropriate, legible typography |
| **Tablet Landscape** | 834px | iPad Pro 11 | Compact navigation bar, balanced padding |
| **Laptop** | 1024px | Small Desktop | Full desktop navigation, 3-column focus grids |
| **Desktop Standard**| 1440px | MacBook Pro 16 / iMac| Max container widths (`max-w-7xl`), generous vertical rhythm |
| **Ultrawide** | 1920px | 4K Displays | Centered layout containers, zero unbounded stretch |

---

## 4. Accessibility & Quality Contracts

1. **Contrast Compliance**: WCAG AA ratio >= 4.5:1 for standard body text; >= 3:1 for large display titles.
2. **Keyboard Navigation**: Complete tab sequence across all links, buttons, and interactive cards with high-visibility gold focus rings (`focus-visible:ring-amber-500`).
3. **Screen Reader Semantic Structure**: Exactly one `<h1>` per page, hierarchical `<h2>` and `<h3>` tags, meaningful `aria-label` tags on icons and utility links.
4. **Hydration Integrity**: Pure deterministic SSR rendering, zero React hydration mismatches between server and client.

---

## 5. Verification Gate Commands

```bash
# Type check without emitting files
npm run type-check

# Lint check
npm run lint

# Unit and component tests
npm run test

# Full review gate
npm run check:agent
```
