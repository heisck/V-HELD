# V-HELD Landing Page Engineering Handoff

> **Target Audience**: Full-Stack Engineers, Frontend Developers & AI Coding Agents  
> **Feature**: V-HELD Website Landing Page (`/`)  
> **Source Documents**: [`landing-page.md`](landing-page.md), [`progress.md`](progress.md), [`AGENTS.md`](../../../AGENTS.md)

---

## 1. Engineering Principles & Directives

When implementing the V-HELD landing page, adhere strictly to the following architectural and stylistic rules:

1. **Modular Component Architecture**:
   - Do **NOT** write the entire landing page in a single monolithic `src/app/page.tsx`.
   - Separate every section into its own dedicated component inside `src/components/landing/`.
   - Reusable layout elements (Navbar, Footer, MobileNav) live in `src/components/layout/`.
2. **Anti-Vibecoding Rules Enforcement**:
   - Absolutely no purple-to-blue or cyan-to-magenta gradients.
   - No gradient hero text (`bg-clip-text text-transparent`).
   - No emojis in headings or labels.
   - No generic pill badges hovering above every single headline.
   - No generic 3-in-a-row Lucide icon boxes with neon borders.
   - Use warm, grounded earthy tones reflecting Ghana: Terracotta (`#C2410C`), Deep Forest Green (`#15803D`), Warm Ochre (`#D97706`), Warm Sand (`#FAF8F5`), Slate Dark (`#0F172A`).
3. **Accessibility (WCAG AA)**:
   - Ensure all interactive elements have visible focus outlines (`focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-700`).
   - Touch targets must be at least `44px x 44px`.
   - Landmark elements must be used properly: `<header>`, `<nav>`, `<main>`, `<section aria-labelledby="...">`, `<footer>`.
   - Images must have authentic, descriptive `alt` text.
4. **Mandatory Review Gate**:
   - Run `npm run check:agent` (or `tsc --noEmit && npm run lint && npm test`) before submitting changes.

---

## 2. Directory & Component Structure

Organize the implementation files as follows:

```
src/
├── app/
│   ├── layout.tsx                # Root layout with global metadata, fonts, header & footer
│   ├── page.tsx                  # Home page assembling section components
│   └── page.test.tsx             # Unit and integration tests for landing page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Accessible sticky navigation with branding & CTAs
│   │   ├── MobileMenu.tsx        # Mobile navigation dialog / drawer
│   │   └── Footer.tsx            # Complete sitemap, legal disclosures & contact links
│   └── landing/
│       ├── HeroSection.tsx       # Hero with authentic messaging and dual CTAs
│       ├── IntroSection.tsx      # Welcome to V-HELD narrative block
│       ├── FocusAreasSection.tsx # The 3 pillars: Education, Health, Leadership
│       ├── ValuePropsSection.tsx # "Make Your Time Matter" 6 value anchors
│       ├── AudienceSection.tsx   # Who can volunteer: Ghanaian & International
│       ├── JourneySection.tsx    # 7-Step Volunteer Journey timeline
│       ├── ImpactMetricsSection.tsx # Verified impact statistics
│       └── CtaSection.tsx        # Final high-conversion CTA banner
└── types/
    └── landing.ts                # TypeScript interfaces for section data
```

---

## 3. Data Contracts & Component Signatures

### Type Definitions (`src/types/landing.ts`)

```typescript
export interface NavItem {
  label: string;
  href: string;
}

export interface FocusArea {
  id: 'education' | 'health' | 'leadership';
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  ctaLabel: string;
  ctaHref: string;
}

export interface ValuePillar {
  title: string;
  description: string;
}

export interface JourneyStep {
  step: string;
  title: string;
  description: string;
}

export interface ImpactStat {
  metric: string;
  label: string;
  description: string;
}
```

---

## 4. Design System Tokens & Styling Classes

Tailwind utility classes to maintain brand consistency:

| Purpose | Tailwind Classes |
| :--- | :--- |
| **Page Background** | `bg-[#FAF8F5]` (Warm Alabaster / Sand) |
| **Surface Cards** | `bg-white border border-stone-200 shadow-sm rounded-xl` |
| **Primary Button** | `bg-amber-800 hover:bg-amber-900 text-white font-medium px-6 py-3 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-amber-800 focus-visible:ring-offset-2` |
| **Secondary Button** | `bg-transparent hover:bg-stone-100 text-stone-800 border border-stone-300 font-medium px-6 py-3 rounded-lg transition-colors` |
| **Accent Text / Eyebrow**| `text-xs font-semibold uppercase tracking-wider text-amber-800` |
| **H1 Headline** | `text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.15]` |
| **H2 Section Headline** | `text-3xl sm:text-4xl font-bold tracking-tight text-stone-900` |
| **Body Paragraph** | `text-stone-600 text-base sm:text-lg leading-relaxed` |

---

## 5. Step-by-Step Implementation Guide for Developer / Agent

1. **Step 1: Create Type Definitions**  
   Create `src/types/landing.ts` with the data structures above.
2. **Step 2: Build Layout Shell**  
   Implement `src/components/layout/Navbar.tsx` and `src/components/layout/Footer.tsx`. Verify keyboard navigation and responsive breakpoints.
3. **Step 3: Build Individual Landing Sections**  
   Implement each section sequentially in `src/components/landing/`:
   - `HeroSection.tsx`
   - `IntroSection.tsx`
   - `FocusAreasSection.tsx`
   - `ValuePropsSection.tsx`
   - `AudienceSection.tsx`
   - `JourneySection.tsx`
   - `ImpactMetricsSection.tsx`
   - `CtaSection.tsx`
4. **Step 4: Assemble Page**  
   Import and compose all sections in `src/app/page.tsx`.
5. **Step 5: Write Component & Smoke Tests**  
   Create `src/app/page.test.tsx` testing that all headings, key buttons, links, and accessibility landmarks render.
6. **Step 6: Execute Quality Gate**  
   Run:
   ```bash
   npm run check:agent
   ```
   Verify 0 TypeScript errors, 0 ESLint warnings, and 100% test pass rate.
7. **Step 7: Update Progress File**  
   Mark off completed tasks in [`docs/build docs/landing-page/progress.md`](progress.md).
