# Landing Page Feature & Architecture Specification

> **Ticket**: `ticket/VH-101-landing-page`  
> **Route**: `/` (Root Homepage)  
> **Status**: In Progress  
> **Target Audience**: Local Ghanaian volunteers, international volunteers, university students, medical/educational professionals, and institutional partners.

---

## 1. Executive Summary & Purpose

The V-HELD homepage is the premier digital gateway to the organisation. It conveys the authority, credibility, and heartfelt warmth of a dedicated Ghanaian community development and volunteer organisation.

### Core Objectives:
1. **Differentiate from Tourism**: Clearly establish V-HELD as an authentic, high-impact non-profit community development organisation rather than a commercial voluntourism operator.
2. **Dual-Audience Inclusivity**: Welcome Ghanaian nationals and international participants equally with tailored onboarding tracks.
3. **Transparent Program Architecture**: Showcase the core pillars: Education, Community Health, and Youth Leadership Development.
4. **Frictionless Conversion**: Direct prospective volunteers to the online application flow and organisations to partnership pathways.

---

## 2. Visual Identity & Design Tokens

### 2.1 Brand Color Palette (Official Vector System)
- **Ghanaian Forest Green**: `#065830` (Primary brand color, symbolizes sustainability, vitality, Ghanaian landscape)
- **Warm African Gold**: `#E3A709` (Accent color, leadership, warmth, optimism, intellectual illumination)
- **Terracotta Earth**: `#C34D21` (Warm soil, community solidarity, foundational strength)
- **Vibrant Sprout Green**: `#186835` (Growth, health, community renewal)
- **Sand Warm Neutral**: `#F7F4EE` (Warm light backgrounds, editorial card surfaces)
- **Deep Charcoal Surface**: `#121110` / Dark BG `#090807` (Deep dark mode / contrast grounding)
- **Muted Stone Text**: `#A8A29E` / `#E7E5E4` (High-contrast typography)

### 2.2 Typography Scale & Rules
- **Display / Hero**: Bold, assertive, human sans-serif typography with calibrated negative tracking (`tracking-tight`), grounded line-height (`leading-[1.08]`).
- **Section Headers**: 28px - 44px (`text-3xl` to `text-5xl`), font-semibold, clear visual hierarchy.
- **Body Text**: 16px - 18px (`text-base` to `text-lg`), line-height 1.6 - 1.7, high contrast against dark or warm surfaces.
- **Labels / Badges**: 12px - 14px uppercase tracking (`tracking-wider` / `tracking-widest`), font-medium, discreet and purposeful.
- **Anti-Vibecoding Typography Rule**: Never use Inter everywhere, never combine Space Grotesk + Instrument Serif, never use serif italic accents or emoji in headings.

### 2.3 Official Vector Asset Inventory
- Standalone Emblem Mark: `/assets/brand/v-held-emblem.svg`
- Primary Vertical Lockup: `/assets/brand/v-held-logo-vertical-name.svg`
- Master Horizontal Lockup: `/assets/brand/v-held-logo-horizontal.svg`
- Master Horizontal Lockup (Dark mode): `/assets/brand/v-held-logo-horizontal-dark.svg`
- Full Stacked Vertical Lockup: `/assets/brand/v-held-logo-vertical-full.svg`
- Full Stacked Vertical Lockup (Dark mode): `/assets/brand/v-held-logo-vertical-full-dark.svg`

---

## 3. Page Structure & Component Breakdown

```text
Homepage (/)
├── 1. Header / Navigation Component (Navbar)
│   ├── Official Vector Logo lockup
│   ├── Quick links (About, Programs, Impact, Stories, Partner)
│   ├── Secondary utility (Contact, Login/Status)
│   └── Primary CTA: "Apply to Volunteer"
│
├── 2. Hero Section
│   ├── Eyebrow: "Volunteers in Health, Education and Leadership Development"
│   ├── Headline: "Give Back. Make a Difference."
│   ├── Subheadline: "Join volunteers from Ghana and across the world working alongside communities to build sustainable futures."
│   ├── Dual Action CTAs: "Apply to Volunteer" & "Explore Our Programmes"
│   ├── Social Proof / Verification Badges (Accredited NGO in Ghana, Community Driven)
│   └── High-fidelity visual showcase
│
├── 3. Introduction & Welcome Section
│   ├── "Welcome to V-HELD" editorial overview
│   ├── Community-grounded philosophy: Mutual respect, sustainable impact, experiential learning
│   └── Ghanaian hospitality & international collaboration framing
│
├── 4. Core Focus Areas (Our Three Pillars)
│   ├── Pillar 1: Education (Classroom support, tutoring, mentorship, resources)
│   ├── Pillar 2: Community Health (Health education, clinical support, hygiene campaigns)
│   ├── Pillar 3: Leadership Development (Youth empowerment, skills workshops, entrepreneurship)
│   └── Cross-link to full Programmes directory
│
├── 5. Why Volunteer With V-HELD (Value Architecture)
│   ├── Meaningful Impact (Tangible local outcomes)
│   ├── Community Immersion (Genuine relationships beyond tourism)
│   ├── Professional & Personal Growth (Experiential skill building)
│   └── Authentic Ghanaian Culture (Heritage, warmth, welcoming communities)
│
├── 6. How It Works (7-Step Volunteer Pathway)
│   ├── 01 Explore ➔ 02 Apply ➔ 03 Connect ➔ 04 Prepare ➔ 05 Arrive & Orient ➔ 06 Volunteer ➔ 07 Reflect & Grow
│   └── Clear guidance for both Local & International applicants
│
├── 7. Impact Metrics & Accountability
│   ├── Volunteers Placed & Supported
│   ├── Partner Communities Reached
│   ├── Learners & Schools Assisted
│   └── Health & Leadership Sessions Conducted
│
├── 8. Stories from the Field & Testimonials
│   ├── Real volunteer narratives (Ghanaian and international voices)
│   ├── Community partner quotes and perspectives
│   └── Unfiltered, dignified field reflections
│
├── 9. Primary Call to Action Section
│   ├── Compelling invitation to serve
│   ├── Direct entry point to application form
│   └── Alternative pathways: Partner with Us / Support Our Work
│
└── 10. Comprehensive Footer
    ├── Full brand lockup and mission statement
    ├── Complete navigation links & programme directories
    ├── Safeguarding, Child Protection & Volunteer Code of Conduct
    ├── Official Ghana contact information & social links
    └── Copyright & Non-profit registration details
```

---

## 4. Component Interface Contracts

### 4.1 Header (`Navbar.tsx`)
```typescript
interface NavLinkItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}
```

### 4.2 Hero Section (`HeroSection.tsx`)
```typescript
interface HeroProps {
  headline: string;
  tagline: string;
  leadParagraph: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}
```

### 4.3 Focus Areas Grid (`FocusAreasSection.tsx`)
```typescript
interface FocusArea {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  badge: string;
  highlights: string[];
  color: string;
}
```

### 4.4 Impact Section (`ImpactSection.tsx`)
```typescript
interface ImpactMetric {
  value: string;
  label: string;
  description: string;
}
```

### 4.5 Testimonials Section (`TestimonialsSection.tsx`)
```typescript
interface StoryItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  origin: string;
  focusArea: string;
}
```

---

## 5. Anti-Vibecoding Compliance Checklist

- [x] No purple-to-blue gradients (using Ghanaian Forest Green `#065830`, Warm African Gold `#E3A709`, Terracotta `#C34D21`).
- [x] No gradient hero text (solid, high-contrast, readable typography).
- [x] No emojis in headings.
- [x] No generic Inter font pairing.
- [x] No colored-border cards.
- [x] No glassmorphism cards.
- [x] No low-contrast dark mode (all text meets WCAG AA 4.5:1 ratio).
- [x] No three icon boxes in a row (using rich asymmetric editorial cards).
- [x] No generic badge above headline.
- [x] No Lucide icons overloaded everywhere.
- [x] No untouched Shadcn UI templates.
- [x] No gimmicky scroll beams or generic fade effects.
- [x] Full responsive compliance across 7 viewports (375px to 1920px).
- [x] Zero console errors or warnings.
