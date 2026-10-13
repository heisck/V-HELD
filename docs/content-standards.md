# Content Standards & Messaging Guidelines

## Core Content Principles

1. **Zero Lorem Ipsum**: No mock Latin or generic dummy text anywhere in production or staging builds.
2. **Zero Placeholder Images & Mandatory Tailored Imagery**:
   - Use real, authentic, high-quality images representing Ghanaian communities, healthcare, education, and youth development. Avoid generic stock photography.
   - When building sections referenced from Landingfolio or design specs with media, agents **must generate tailored imagery** aligned with Ghanaian non-profit service and convert them to `.webp` format. Never leave image slots empty or replace them with text-only boxes.
3. **No Fake Unfinished Elements**: Every button, link, and form control must be fully functional and route to an active destination.
4. **No Meaningless Corporate Filler**: Avoid clichés such as "synergizing innovative solutions" or "making the world a better place through synergy."
5. **Authentic Voice**: Warm, professional, youthful, trustworthy, and impact-driven—communicating genuine community service and Ghanaian hospitality (Akwaaba) with mutual respect and community agency.
6. **Program Information Completeness**: Every programme card and detail view must clearly articulate:
   * Programme title and focus area (Education, Health, Leadership Development, Community)
   * Clear location (e.g., Accra, Eastern Region, Volta Region, Northern Ghana)
   * Duration options (e.g., 2 weeks to 6 months)
   * Eligibility / Who can apply
   * Volunteer responsibilities and daily activities
   * Expected outcomes and learning opportunities
   * Inclusions, exclusions, and transparent fees
7. **Proofread Copy**: All copy must be rigorously checked for spelling, grammar, punctuation, and consistent terminology.

---

## Action & Navigation Content Standards

### 8. Button Philosophy: "Be the Action, Don't Describe It"
* **Short, Decisive Action Verbs**: Buttons must directly represent the immediate action taken by the user.
  - Good: `Apply`, `Volunteer`, `Partner`, `Donate`, `Explore`.
  - Bad: "Apply to Volunteer", "Become a Volunteer Today", "Partner With Us Here".
* **Context-Appropriate Semantics**: Icons and labels must match the action context. Never show currency/dollar icons on volunteer pathways. Do not repeat forward arrows (`→`) on every button.

### 9. Navigation Architecture & Cognitive Load
* **Maximum 3 to 4 Top-Level Items**: Never overwhelm the navigation bar with 7–8 loose links.
* **Single-Word Labels Only**: Top-level navigation items must strictly be single words:
  - `About`, `Focus`, `Volunteer`, `Partner`, `Contact`.
  - Double-word labels (e.g., "Our Programmes", "Why Volunteer", "Volunteer With Us") clutter the bar and look amateur.
* **Lightweight Context Menus for Secondary Pathways**:
  - Nest sub-paths under clean dropdowns (e.g., `Volunteer` nests `Why Volunteer`, `Impact`, `Stories`).
  - No bulky paragraph summaries or multi-line card fluff inside dropdowns. Keep links scannable and direct.

### 10. Editorial Headlines & Banned Clutter Badges
* **Zero Badges Above Headlines**: Eliminate all artificial floating pill badges, dot markers, and dashed badges above section titles (e.g., `[• VOICES FROM THE FIELD]`, `[• MEASURABLE OUTCOMES]`, `[• TAKE ACTION TODAY]`). Let the typography lead with confidence.
* **Zero Em-Dash Overuse**: Avoid relying on repetitive em dashes (`—`) across titles, subtitles, and labels. Use clean sentence structure and intentional hierarchy.
* **Display Headline Pairing**: Pair strong display headers with concise, high-contrast narrative copy. Ensure complete headline thoughts are accessible (via clean DOM structure or `sr-only` helpers where appropriate).

