# V-HELD Landing Page Build Specification

> **Status**: Approved Specification  
> **Route**: `/` (`src/app/page.tsx`)  
> **Governing Standards**: [`AGENTS.md`](../../../AGENTS.md), [`docs/project-details.md`](../../project-details.md), [`docs/ui-patterns-avoid.md`](../../ui-patterns-avoid.md), [`docs/typography.md`](../../typography.md), [`docs/signature-interactions.md`](../../signature-interactions.md)

---

## 1. Executive Summary & Brand Purpose

The V-HELD landing page serves as the digital front door for **Volunteers in Health, Education and Leadership Development (V-HELD)**, a grassroots-anchored Ghanaian volunteer and community development organisation.

### Core Objectives
1. **Dignified Community Representation**: Present Ghanaian communities not through an exploitative "poverty tourism" lens, but as proactive partners in sustainable health, education, and youth leadership initiatives.
2. **Dual-Audience Conversion**: Deliver seamless conversion pathways for both:
   - **Local Ghanaian Volunteers** (students, graduates, healthcare professionals, community leaders).
   - **International Volunteers & Academic Partners** (gap year, medical electives, university groups, career-break professionals).
3. **Institutional Credibility**: Establish trust with international universities, development organisations, and donors through transparent operational roadmaps, safety protocols, and ethical community placement.
4. **Anti-Vibecoding Aesthetic**: Reject generic AI-generated startup templates (no purple/blue gradients, no floating orb blobs, no emojis in headers, no three identical icon boxes in a row). Embody warmth, authentic Ghanaian craftsmanship, editorial clarity, and tactical usability.

---

## 2. Information Architecture & Section Hierarchy

The landing page follows a narrative arc designed to build curiosity, establish grounded trust, provide concrete programme specifics, and culminate in accessible action.

```
┌─────────────────────────────────────────────────────────────┐
│ 1. Header & Navigation (Global Sticky / Mobile Drawer)      │
├─────────────────────────────────────────────────────────────┤
│ 2. Hero Section: "Give Back. Make a Difference!"            │
│    - Editorial Headline & Grounded Subtitle                 │
│    - Dual Actions: "Become a Volunteer" / "Explore Programs"│
│    - Authenticity Banner: Accra, Volta & Northern Regions   │
├─────────────────────────────────────────────────────────────┤
│ 3. Introduction: "Welcome to V-HELD"                        │
│    - Organisational Narrative & Ethos                       │
│    - Direct link to "Learn More About V-HELD"               │
├─────────────────────────────────────────────────────────────┤
│ 4. The Three Pillars of Impact (Focus Areas)                │
│    - Education & Teaching                                   │
│    - Community Health & Wellbeing                           │
│    - Youth & Leadership Development                         │
├─────────────────────────────────────────────────────────────┤
│ 5. Why Volunteer With V-HELD: "Make Your Time Matter"       │
│    - 6 Distinct Value Anchor Points                         │
├─────────────────────────────────────────────────────────────┤
│ 6. Who Can Volunteer (Inclusivity & Readiness)             │
│    - Local Ghanaian Path vs. International Volunteer Path   │
├─────────────────────────────────────────────────────────────┤
│ 7. The 7-Step Volunteer Journey (How It Works)              │
│    - 01 Explore → 02 Apply → 03 Connect → 04 Prepare        │
│      → 05 Arrive & Orient → 06 Volunteer → 07 Reflect & Grow │
├─────────────────────────────────────────────────────────────┤
│ 8. Verified Community Impact & Metrics                      │
│    - Key indicators (Learners, Clinics, Volunteers, Partners)│
├─────────────────────────────────────────────────────────────┤
│ 9. Stories & Voices from the Field (Testimonials Preview)   │
├─────────────────────────────────────────────────────────────┤
│ 10. Partner & Institutional Collaboration Banner            │
├─────────────────────────────────────────────────────────────┤
│ 11. Final Conversion Anchor (Call to Action)                │
├─────────────────────────────────────────────────────────────┤
│ 12. Global Footer & Regulatory Disclosure                   │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. Detailed Section Blueprints & Copy

### Section 1: Header & Global Navigation
* **Components**: `src/components/layout/Navbar.tsx`, `src/components/layout/MobileMenu.tsx`
* **Desktop Items**:
  - `About V-HELD` (`/about`)
  - `Our Programmes` (`/programmes`)
  - `Volunteer With Us` (`/volunteer`)
  - `Our Impact` (`/impact`)
  - `Stories` (`/stories`)
  - `Partner With Us` (`/partner`)
  - `Support Our Work` (`/support`)
  - `Contact` (`/contact`)
* **Primary Action**: `Apply to Volunteer` (pill button, high contrast terracotta/deep forest).
* **Behavior**: Visible focus rings (`focus-visible:ring-2 focus-visible:ring-amber-600`), mobile hamburger with `aria-expanded` and trap focus dialog.

### Section 2: Hero Section
* **Component**: `src/components/landing/HeroSection.tsx`
* **Eyebrow**: `Volunteers in Health, Education and Leadership Development`
* **Heading (H1)**: `Give Back. Make a Difference!`
* **Body Copy**: 
  > *"Join volunteers from Ghana and around the world in supporting communities through health, education and leadership development. V-HELD welcomes passionate individuals to work alongside communities, contribute their skills, and gain meaningful experiences while driving sustainable change."*
* **Primary CTA**: `Become a Volunteer` (routes to `/apply`)
* **Secondary CTA**: `Explore Our Programmes` (routes to `#programmes` or `/programmes`)
* **Visual Anchor**: Curated, responsive imagery depicting real community collaboration in Ghana, using Next.js `<Image priority>` with warm editorial framing and dual picture-in-picture caption card: *"Akwaaba — Field placements across Greater Accra, Eastern & Volta Regions"*.

### Section 3: Welcome & Mission Introduction
* **Component**: `src/components/landing/IntroSection.tsx`
* **Heading (H2)**: `Welcome to V-HELD`
* **Narrative Copy**:
  > *"Volunteers in Health, Education and Leadership Development (V-HELD) is a Ghanaian community development organisation committed to creating opportunities for individuals to contribute to grassroots initiatives. We connect passionate people with opportunities to serve in communities through education, health, and leadership initiatives.*
  > 
  > *Whether you are a student, professional, graduate, retired specialist, or someone dedicated to service, there is a place for you at V-HELD. From Ghana or from across the world, you can volunteer, learn, connect, and contribute."*
* **Link Action**: `Learn More About V-HELD →` (`/about`)

### Section 4: The Three Focus Areas
* **Component**: `src/components/landing/FocusAreasSection.tsx`
* **Header**: `Our Areas of Focus`
* **Pillars**:
  1. **Education**: Classroom teaching support, literacy tutoring, STEM mentoring, after-school learning clubs, and teacher aid tailored to local curriculum demands.
  2. **Health**: Community health education, maternal and child wellness awareness, clinical support for qualified medical/nursing students, and hygiene campaigns.
  3. **Leadership Development**: Youth empowerment workshops, vocational skills, ethical leadership, entrepreneurship bootcamps, and cross-cultural mentorship.
* **Card Design**: Asymmetric editorial layout with rich contextual tags, clear learning outcomes, and direct links to each respective track.

### Section 5: Why Volunteer With V-HELD
* **Component**: `src/components/landing/ValuePropsSection.tsx`
* **Section Tag**: `Why Choose V-HELD`
* **Headline (H2)**: `Make Your Time Matter`
* **Pillars (6 Authentic Anchors)**:
  - **Make a Meaningful Impact**: Put your real skills to work on community-identified priorities.
  - **Connect With Communities**: Forge enduring bonds and experience Ghana well beyond conventional tourist trails.
  - **Grow Your Skills**: Hone cultural intelligence, adaptability, project facilitation, and leadership.
  - **Learn Through Experience**: Gain hands-on field practice under the guidance of local mentors.
  - **Experience Ghana**: Discover Ghana’s rich heritage, warm hospitality, and historic landscapes responsibly.
  - **Be Part of a Community**: Join an international alumni network of changemakers and advocates.

### Section 6: Who Can Volunteer
* **Component**: `src/components/landing/AudienceSection.tsx`
* **Headline**: `Who Can Volunteer With V-HELD?`
* **Copy**: *"You do not always need professional experience to volunteer. What matters most is your commitment, willingness to learn, respect for communities, and readiness to contribute responsibly."*
* **Dual Pathway Split**:
  - **Volunteers From Ghana**: Students, national service personnel, local healthcare workers, educators, and community champions.
  - **International Volunteers**: Medical electives, gap-year seekers, university groups, and international volunteers looking for safe, vetted, structured placement in Ghana.

### Section 7: The 7-Step Volunteer Journey
* **Component**: `src/components/landing/JourneySection.tsx`
* **Heading**: `Your V-HELD Volunteer Journey`
* **Steps**:
  - `01 — EXPLORE`: Find an opportunity matching your schedule and skills.
  - `02 — APPLY`: Submit our structured online volunteer application.
  - `03 — CONNECT`: Interview and align with our local programme coordinator.
  - `04 — PREPARE`: Receive pre-departure briefing, packing guide, and cultural orientation.
  - `05 — ARRIVE & ORIENT`: Airport pickup, host family / lodge settlement, and community protocol induction.
  - `06 — VOLUNTEER`: Active field contribution alongside community leaders.
  - `07 — REFLECT & GROW`: Debrief, impact documentation, and lifetime membership in the V-HELD network.

### Section 8: Verified Impact Indicators
* **Component**: `src/components/landing/ImpactMetricsSection.tsx`
* **Headline**: `Grounded Community Impact`
* **Metrics Grid**:
  - **Communities Reached**
  - **Learners & Youth Supported**
  - **Health Screenings & Outreach Sessions**
  - **Active Volunteer Alumni from Ghana & Abroad**

### Section 9: Call to Action Anchor
* **Component**: `src/components/landing/CtaSection.tsx`
* **Heading**: `Ready to Make a Difference in Ghana?`
* **Body**: *"Join a passionate community of changemakers. Submit your application today or talk with our coordinator to find your ideal placement."*
* **Buttons**:
  - `Apply to Volunteer Now` (`/apply`)
  - `Speak With Our Team` (`/contact`)

---

## 4. Visual Token Architecture & Styling Rules

To enforce the **anti-vibecoding rules** from `docs/ui-patterns-avoid.md`:

| Category | Forbidden | Enforced Standard |
| :--- | :--- | :--- |
| **Color Gradients** | Purple-to-blue, neon cyan | Earthy Ghana palette: Warm Ochre (`#D97706`), Terracotta (`#C2410C`), Forest Green (`#15803D`), Warm Sand (`#FDFBF7`), Charcoal Slate (`#1E293B`). |
| **Typography** | Generic Inter defaults everywhere | Balanced typographic scale with intentional weights (`font-serif` or warm human grotesque headings, high-contrast readable body). |
| **Card Borders** | Thin vibrant colored neon borders | Subtle stone borders (`border-stone-200`), warm background tints (`bg-stone-50`), soft natural shadows (`shadow-sm`). |
| **Icons** | Gratuitous Lucide icons in every box | Contextual SVG icons with purposeful weights, pairing text and iconography meaningfully. |
| **Badges** | Generic pill badge above every title | Editorial uppercase category breadcrumbs with clear typographic contrast (`tracking-widest text-xs font-semibold`). |
| **Motion** | Distracting bouncy scroll triggers | Clean semantic CSS transitions (`transition-colors duration-200`, subtle transforms, reduced-motion overrides). |

---

## 5. Technical Validation & Acceptance Criteria

1. **Type Safety**: `npm run typecheck` passes with zero errors.
2. **Linting**: `npm run lint` passes with zero warnings or errors.
3. **Automated Unit / Component Tests**: Vitest suite validates all section headers, accessible landmark roles (`<main>`, `<header>`, `<nav>`, `<footer>`), and button links.
4. **Responsive Integrity**: Flawless rendering on:
   - Mobile Portrait (360px, 390px)
   - Mobile Landscape (844px)
   - Tablet (768px, 1024px)
   - Desktop (1280px, 1440px, 1920px)
5. **Accessibility**:
   - WCAG 2.1 AA minimum contrast ratios (4.5:1 text, 3:1 graphical elements).
   - Keyboard navigable throughout with clear focus indicators.
   - All interactive controls have meaningful `aria-label` or visible text.
