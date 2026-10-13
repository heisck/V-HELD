# AGENTS.md — Master Project Guidelines & Operating Standards

> **Project**: V-HELD (Volunteers in Health, Education and Leadership Development)  
> **Source of Truth**: This file defines mandatory engineering, design, security, and behavioral rules for all agents and contributors working on this codebase.  
> **Documentation Index**: Every requirement is detailed in modular specification files within the [`docs/`](docs/) directory. Consult the specific markdown documents referenced in each section.

---

## 1. Documentation Map & Modular References

Before implementing or modifying code, read and follow the dedicated specification files in `docs/`:

* **Documentation Governance & Index**: [`docs/README.md`](docs/README.md)
* **Project Identity & Content Brief**: [`docs/project-details.md`](docs/project-details.md)
* **Technology Stack**: [`docs/technology-stack.md`](docs/technology-stack.md)
* **Design & UI Patterns to Avoid**: [`docs/ui-patterns-avoid.md`](docs/ui-patterns-avoid.md)
* **Before Building Checklist**: [`docs/before-building.md`](docs/before-building.md)
* **Security Requirements (Launch & Additional)**: [`docs/security-requirements.md`](docs/security-requirements.md)
* **Engineering Principles**: [`docs/engineering-principles.md`](docs/engineering-principles.md)
* **Typography & Font Direction**: [`docs/typography.md`](docs/typography.md)
* **Agent Behavior & Protocol**: [`docs/agent-behavior.md`](docs/agent-behavior.md)
* **Navigation Architecture**: [`docs/navigation.md`](docs/navigation.md)
* **Motion System**: [`docs/motion.md`](docs/motion.md)
* **Performance Standards & WebGL**: [`docs/performance.md`](docs/performance.md)
* **Performance Budget & Core Web Vitals**: [`docs/performance-budget.md`](docs/performance-budget.md)
* **Responsive Design & Viewports**: [`docs/responsive-design.md`](docs/responsive-design.md)
* **Accessibility (WCAG AA)**: [`docs/accessibility.md`](docs/accessibility.md)
* **Headless Chromium QA**: [`docs/headless-chromium-qa.md`](docs/headless-chromium-qa.md)
* **Incremental Validation Protocol**: [`docs/incremental-validation.md`](docs/incremental-validation.md)
* **Automated Testing Strategy**: [`docs/automated-testing.md`](docs/automated-testing.md)
* **Visual Regression Testing**: [`docs/visual-regression-testing.md`](docs/visual-regression-testing.md)
* **Micro-Details & Craft**: [`docs/micro-details.md`](docs/micro-details.md)
* **Content Quality & Voice**: [`docs/content-standards.md`](docs/content-standards.md)
* **Signature Interactions**: [`docs/signature-interactions.md`](docs/signature-interactions.md)
* **Definition of Done (Master Checklist)**: [`docs/definition-of-done.md`](docs/definition-of-done.md)
* **Mandatory Development & Review Workflow**: [`docs/workflow.md`](docs/workflow.md)
* **Raw Requirements Archive**: [`docs/raw-spec.md`](docs/raw-spec.md)

---

## 1.0 CRITICAL RULES THE MODEL PREVIOUSLY VIOLATED (MANDATORY & NON-NEGOTIABLE)

> **WARNING TO ALL AGENTS — READ CAREFULLY**: In prior implementation runs, the model failed to follow explicit instructions. It produced text-only skeleton pages (just a big bold headline and divs with text/bullets), skipped generating tailored images for reference media slots, violated anti-vibecoding rules by plastering badges above headlines and em-dashes everywhere, animated backdrop filters causing compositor flashes, and bloated the navigation. Consequently, **7 entire sections were stripped from the codebase in commit `ee9ee21`**.
>
> **THESE RULES ARE NON-NEGOTIABLE. EVERY AGENT AND CONTRIBUTOR MUST STRICTLY ADHERE TO THEM. NEVER IGNORE OR BYPASS THEM.**

### 1. **MANDATORY REFERENCE IMAGE GENERATION & WEBP ASSETS (NEVER REPLACE IMAGES WITH TEXT DIVS)**
- **When referencing designs from Landingfolio or UI libraries that contain images, the agent MUST generate tailored visual assets fitting V-HELD's Ghanaian community development context (education, healthcare, youth leadership, authentic community partnership).**
- **ALL generated and imported raster images MUST be converted to `.webp` format for rapid loading, low bandwidth, and optimal Core Web Vitals (LCP < 1.8s).**
- **NEVER LEAVE AN IMAGE SLOT EMPTY. NEVER SUBSTITUTE A REFERENCE IMAGE WITH A PLAIN TEXT BOX OR COLORED DIV.**

### 2. **ABSOLUTE BAN ON TEXT-ONLY SKELETON / EMPTY DIV PAGES (WHY PAST SECTIONS WERE REMOVED)**
- **A PAGE OR SECTION THAT CONSISTS MERELY OF A BIG BOLD HEADER TEXT AND DIVS WITH PLAIN TEXT / BULLET POINTS IS COMPLETELY WRONG AND WILL BE REJECTED.**
- **Commit `ee9ee21` stripped 7 sections (`IntroSection`, `FocusAreasSection`, `WhyVolunteerSection`, `HowItWorksSection`, `ImpactSection`, `StoriesSection`, `CtaSection`) specifically because the model built them as text-only boxes.**
- **Agents MUST look at those removed UIs and REFRAIN from ever building sections like that again.** Every section must possess rich visual craft, tailored media, structured hierarchy, and physical depth.

### 3. **STRICT UI CRITIC ENFORCEMENT & ZERO-TOLERANCE ANTI-VIBECODING**
- **The UI Critic agent must NEVER falsely claim compliance.**
- **ZERO BADGES ABOVE HEADLINES**: No floating pill tags, dot markers, or uppercase tracking badges above headings (e.g. `[• MEASURABLE OUTCOMES]`, `[• VOICES FROM THE FIELD]`, `[• TAKE ACTION TODAY]`). Headlines must speak with confidence.
- **ZERO EM-DASHES EVERYWHERE**: Eliminate repetitive `—` crutches across headings, subtitles, and labels.
- **ZERO GENERIC BOOTSTRAP CARDS / 3 ICON BOXES**: Replicate the literal asymmetry, density, and scale contrast of approved references.

### 4. **STRICT PURE LIGHT THEME & BACKGROUND HARMONY (ZERO `dark:` CLASSES)**
- **The platform is STRICTLY LIGHT-MODE ONLY.** No dark theme toggle, no dark endpoints, no auto `prefers-color-scheme` switching.
- **STRIP ALL `dark:` TAILWIND CLASSES FROM THE CODEBASE.**
- **Harmonize backgrounds directly to `#FFFFFF` (crisp white) and `#EFE9E2` (organic warm sand). Brand colors (Ghanaian Forest Green `#065830`, African Gold `#E3A709`, Terracotta `#C34D21`) provide high contrast on white surfaces.**

### 5. **BUTTON & NAVIGATION PURITY ("BE THE ACTION", SINGLE-WORD LABELS)**
- **BUTTONS MUST BE THE ACTION, NOT DESCRIBE IT**: Use short decisive action verbs (`Apply`, `Volunteer`, `Partner`). Never use verbose phrases like "Apply to Volunteer" or "Partner With Us Today".
- **MAXIMUM 3 TO 4 TOP-LEVEL NAV ITEMS WITH SINGLE-WORD LABELS**: `About`, `Focus`, `Volunteer`, `Partner`, `Contact`. Double-word labels look amateur.
- **NO CLUTTER IN DROPDOWNS**: Clean, scannable link lists without descriptive multi-line card filler.
- **NAVBAR UNCONFINED AT REST**: Edge-to-edge full width at rest (`scrollY = 0`), borderless (`border-0`), melting seamlessly into the `#EFE9E2` page surface. Packs into a centered floating pill only on scroll.

### 6. **ZERO COMPOSITOR FLASH DURING SCROLL (NEVER ANIMATE `backdrop-filter`)**
- **NEVER animate `backdrop-filter` or background opacity with `transition-all`.** Doing so forces the browser's compositor to drop the GPU texture cache, flashing raw white on scroll.
- **Maintain 100% identical background and blur properties across resting and scrolled states.** Constrain transitions strictly to geometry/elevation (`transition-[max-width,padding,box-shadow,border-radius]`), and apply `transform-gpu`.

### 7. **PHYSICAL CRAFT, CHROMATIC STACKED CARD DECKS & REFINED RADII**
- **Use interactive stacked card decks with sticky tiered stacking mechanics and chromatic green hierarchy (`#0b7342` -> `#065830` -> `#054c29` -> `#033d20`) with upward elevation drop shadows.**
- **Refined corner radii: `rounded-t-2xl sm:rounded-t-3xl` (16px–24px). NEVER use oversized cartoonish `4.5rem` / `72px` curvatures.**
- **No empty disconnected stroke SVG dividers.**

### 8. **VISUAL INSPECTION LOOP (NEVER CODE BLIND)**
- **Never just write code and assume it looks good. The mandatory loop is:**
  1. Write the component cleanly with literal reference deconstruction and tailored WebP assets.
  2. Capture a headless Chromium screenshot.
  3. Visually inspect the image file.
  4. Verify it is NOT a text-only skeleton, has no badges above headlines, and has no compositor glitches.
  5. Refine immediately before proceeding.

---

## 1.1 Core Architectural Principles & Review Gate

All contributors and agents must uphold two core architectural principles:

1. **The platform stores nothing personal unnecessarily (Data Privacy by Design)**:
   Volunteer applicants' sensitive data, passports, and CVs are kept in encrypted storage with strict access controls and RLS. The primary database stores only what the organisation strictly needs for vetting and placement.
2. **No input or structured output reaches users or the database unchecked (Code-Level Validation Layer)**:
   All structured submissions and data must pass schema validation (Zod) on the server. Invalid submissions are rejected with corrective feedback, never accepted blindly.

### The Mandatory Acceptance Review Gate (`npm run check:agent`)

Before opening a pull request, committing code, or completing an implementation milestone, agents must execute:
```bash
npm run check:agent
```
This runs the full gate: `tsc --noEmit` + lint + unit/integration tests. This is a non-negotiable prerequisite to the [Definition of Done](docs/definition-of-done.md).

---

## 1.2 Mandatory Develop-Trunk Ticket-Driven Development Workflow

> **Detailed Specification**: [`docs/workflow.md`](docs/workflow.md)

Until the entire application is completed, all development must strictly follow this closed-loop workflow:

1. **Develop Trunk Rule & Ticket Branch Isolation**:
   - Never build directly on `main`. Never branch feature work from `main`.
   - `develop` is the active development integration branch.
   - For every task or feature track, branch from `develop` with a Ticket ID:
     `git checkout develop && git pull origin develop && git checkout -b ticket/<ticket-id>-<ticket-slug>`.
2. **Branch Documentation Suite**:
   - Immediately create a dedicated subfolder under `docs/build docs/<ticket-name>/` containing the 3 mandatory living files:
     - `<ticket-name>.md`: Architecture blueprints, component contracts, tokens, and visual specifications.
     - `progress.md`: Living tracker with milestone breakdown, status table, checklist items, MCP usage counter, and test history.
     - `handoff.md`: Engineering handoff, interaction physics, runtime configs, and verification steps.
3. **UI Design Reference via Landingfolio MCP & Taste Governance**:
   - **`folio-mcp.json` Security**: `folio-mcp.json` in the root is strictly gitignored and must **remain gitignored permanently**. Never commit, stage, or expose it in git history.
   - **Never Design "From Your Head"**: Do not invent UI layouts, divs, sections, or animations in isolation. All design patterns must be referenced from the Landingfolio collection via the Folio MCP.
   - **Daily Quota & Call Counter (≤ 100 calls/day)**: Hard limit of 100 MCP requests per day. Maintain an active usage counter in `progress.md` tracking every call.
   - **Local Reference Caching**: Fetch code, screenshots, or screen recordings once and store them on the local filesystem (`docs/build docs/<ticket-name>/references/`) so you never query the MCP again for the same component.
   - **Subagent Design Taste Audit**: Spawn a specialized subagent to review and evaluate design options for any page, section, div, or animation before implementation.
4. **Sub-Task Section Branches & 9-Step Incremental Build**:
   - For component sections (e.g. `header-component`, `hero-section`), create subtask branches from the parent ticket branch:
     `git checkout -b subtask/<ticket-id>-<section-name>`.
   - Follow the 9-step incremental validation lifecycle ([`docs/incremental-validation.md`](docs/incremental-validation.md)).
   - Merge verified sections back into the parent ticket branch: `git merge --no-ff subtask/...`.
5. **Periodic Atomic Commits with Strict User Authorship (CRITICAL)**:
   - Make small, frequent, atomic commits as logical milestones are hit.
   - **Commit strictly as the user**: All commits must be authored strictly by `Heisck <kelvinkwabenaparkingston@gmail.com>`.
   - **ZERO AI attribution**: Absolutely NO "Gemini", "Antigravity", or agent mentions in author, committer, or commit messages.
   - **ZERO co-author tags**: Never append `Co-authored-by: Gemini...` or any AI contributor trailers. Commits must look 100% human-authored by the user.
6. **Multi-Disciplinary Completion Gate (Single Agent, Full Skill Stack)**:
   - When the ticket build is finished, run an exhaustive triple-pillar audit using **one single unified agent utilizing all available specialized skills**:
     - **UI Critic**: Enforce 20 anti-vibecoding rules ([`docs/ui-patterns-avoid.md`](docs/ui-patterns-avoid.md)), 7-viewport responsive QA, WCAG AA contrast, typography scale, headless Chromium frame review.
     - **"Pony Tail" Security Review**: Deep, paranoid, tight review covering all 40 security mandates ([`docs/security-requirements.md`](docs/security-requirements.md)): RLS, server-side Zod validation on all inputs/mutations, sanitization, secret leakage prevention, secure headers, auth/session locks.
     - **Code Review**: Strict TypeScript (`tsc --noEmit`), lint checks (`next lint`), Vitest test suite, clean modular structure, zero dead code, zero console warnings.
   - **Fix 100% of Findings**: Remediate every defect, warning, or gap immediately. No deferred bugs, no TODOs.
7. **Acceptance Gate & Context Auto-Compaction**:
   - Execute `npm run check:agent` (`tsc --noEmit && next lint && vitest run`).
   - Compact agent context by recording progress, decisions, MCP usage, and handoff contracts into `progress.md` and `handoff.md`, freeing working memory.
8. **Pull Request Targeting `develop` & Human Review Gate**:
   - Push the parent ticket branch: `git push -u origin ticket/<ticket-id>-<ticket-slug>`.
   - Open PR targeting `develop`: `gh pr create --base develop --head ticket/<ticket-id>-<ticket-slug> ...`.
   - **Inform the user to inspect/check out the running build**.
   - If the user provides remarks/feedback, fix remarks on the ticket branch until approved.
   - Once explicitly approved by the user, merge the PR into `develop`.
9. **Production Releases from `develop` to `main`**:
   - When major milestones are achieved on `develop`, open a PR from `develop` to `main`, inspect, and merge for production release.

---

## 2. Design & UI Standards

> **Detailed Specification**: [`docs/ui-patterns-avoid.md`](docs/ui-patterns-avoid.md)

Avoid making the app look "vibecoded" or like an AI template. Specifically avoid the following 32 anti-patterns:

1. **Purple-to-blue gradients**
2. **Gradient hero text**
3. **Emojis in headings**
4. **Using Inter everywhere**
5. **Colored-border cards**
6. **Glassmorphism cards**
7. **Low-contrast dark mode**
8. **Three icon boxes in a row**
9. **Badge above the headline** (e.g. `[• MEASURABLE OUTCOMES]`, `[• VOICES FROM THE FIELD]`, `[• TAKE ACTION TODAY]`)
10. **Lucide icons everywhere** (decorative icon clouds)
11. **Untouched Shadcn UI**
12. **Fade-in-on-scroll effects**
13. **Cursor-following beams**
14. **Buttons that only fade/change on hover**
15. **Inconsistent spacing**
16. **Em dashes everywhere** (repetitive `—` crutches)
17. **Generic buzzword copy**
18. **Serif italic accents**
19. **Space Grotesk + Instrument Serif as a generic combination**
20. **Grain/noise texture over gradients**
21. **Text-Only Skeleton Sections (BANNED: Big bold header + plain text divs — the pattern stripped in commit `ee9ee21`)**
22. **Skipping Tailored Image Generation for Reference Media Slots (must generate WebP assets for all reference slots)**
23. **Verbose / Descriptive Button Labels (Buttons must BE the action: `Apply`, `Volunteer`, not "Apply to Volunteer")**
24. **Misplaced / Nonsensical Icons (No currency/dollar icons on volunteer buttons; no blind forward arrows `→` everywhere)**
25. **Dark Mode / Dark Endpoints in Light-Mode Application (Strictly light-mode `#FFFFFF` and `#EFE9E2`; zero `dark:` classes)**
26. **Compositor Flash via Animated Backdrop Filters (Never animate `backdrop-filter` with `transition-all`)**
27. **Artificial Hero Seal / Badge Boxes (Floating seal cards cluttering hero)**
28. **Confined / Island Navbar at Rest (Navbar must be edge-to-edge unconfined at rest, packing to centered pill on scroll)**
29. **Oversized Cartoonish Corner Curvatures (Avoid `4.5rem` / `72px`; use sleek `rounded-t-2xl sm:rounded-t-3xl`)**
30. **Empty Disconnected Stroke Dividers (Use container boundaries and elevation drop shadows)**
31. **Bulky Dropdown Card Fluff (Keep dropdowns lightweight and scannable without multi-line filler)**
32. **Superficial MCP Usage (Literally deconstruct grid ratios, scale, spacing, density, and media; do not invent from memory)**

**Design Philosophy**: Design should feel intentional, polished, distinctive, functional, and product-specific (reflecting V-HELD's mission: warm, human, authentic Ghanaian community development, professional NGO aesthetic) rather than resembling an AI-generated template. Every section must possess physical craft, tailored WebP media, and clear visual hierarchy.

### 2.1 Landingfolio MCP UI Reference & Taste Governance

> **Mandate**: All UI designs, sections, divs, and animations must be referenced from Landingfolio collections via MCP. Never design "from your head."

1. **`folio-mcp.json` Gitignore Permanence**:
   The root `folio-mcp.json` file configures the Landingfolio MCP endpoint and bearer authentication. It is `.gitignore`d and must **permanently remain gitignored**. Never stage, commit, or expose it in git history.
2. **Mandatory MCP Reference (Zero Designing in Isolation)**:
   Do NOT synthesize UI components, section layouts, card structures, or animations out of thin air. All UI implementations must reference concrete designs and code from the Landingfolio collection via the Folio MCP.
3. **Daily Quota Ceiling (100 Calls/Day) & Active Counter**:
   MCP usage is strictly limited to 100 requests per day. Maintain an active counter in `progress.md` tracking each call and the remaining daily balance. Never exceed 100 calls in a 24-hour cycle.
4. **Local Device Storage & Caching**:
   When querying the MCP, immediately store retrieved code, screenshots, and screen recordings locally on disk (under `docs/build docs/<branch-name>/references/` or `public/assets/reference/`). Always reference the locally stored asset for development to avoid duplicate calls.
5. **Subagent Design Taste Audits**:
   To choose between design options for any page, section, div, or animation, spawn a specialized subagent to review the MCP options against V-HELD's brand values, anti-vibecoding guidelines, and aesthetic taste before implementing.

---

## 3. Before Building

> **Detailed Specification**: [`docs/before-building.md`](docs/before-building.md)

Before building or making major changes:

1. Create a PRD
2. Define the value proposition, pain, and ICP
3. Export the PRD to Markdown
4. Load the PRD into the coding agent
5. Write/maintain AGENTS.md
6. Install appropriate coding-agent plugins/tools
7. Connect GitHub
8. Add a .gitignore
9. Generate a brand/design document
10. Lock in the technology stack
11. Set up a design system
12. Break the PRD into concrete tasks
13. Set up the database and authentication
14. Move secrets/API keys into environment variables
15. Separate staging from production
16. Add a README
17. Plan the folder/project structure
18. Add error tracking
19. Explicitly define what will NOT be built
20. Commit small changes frequently

---

## 4. Security Requirements Before Launch

> **Detailed Specification**: [`docs/security-requirements.md`](docs/security-requirements.md)

1. Never expose API keys
2. Purge secrets from Git history
3. Use public database keys only where appropriate
4. Enable Row Level Security (RLS)
5. Encrypt sensitive data
6. Enforce authentication server-side
7. Lock record access to authorized users
8. Prevent field/property tampering
9. Secure session cookies
10. Hash passwords securely
11. Rate-limit login attempts
12. Add bot/abuse protection
13. Parameterize database queries
14. Validate all input
15. Escape/sanitize user-generated content
16. Restrict file uploads
17. Return only necessary API data
18. Add security headers
19. Force HTTPS in production
20. Scan dependencies for vulnerabilities

---

## 5. Additional Security Requirements

> **Detailed Specification**: [`docs/security-requirements.md`](docs/security-requirements.md)

1. Add HSTS
2. Add CSRF protection/tokens where applicable
3. Reset/invalidate sessions after password changes
4. Expire password-reset links
5. Prevent user/account enumeration
6. Whitelist permitted upload file types
7. Verify payment webhooks
8. Set/validate prices server-side
9. Protect against prompt injection
10. Cap and control AI usage
11. Limit request/body size
12. Rate-limit password-reset requests
13. Sanitize data before storing it
14. Lock down CORS to trusted origins
15. Disable directory listing
16. Remove default/admin routes that should not be publicly accessible
17. Lock accounts or apply protection after repeated failed logins
18. Log important security events
19. Set secure cookie flags
20. Restrict database permissions using least privilege

---

## 6. Engineering Principles

> **Detailed Specification**: [`docs/engineering-principles.md`](docs/engineering-principles.md)

- Do not blindly implement generated code.
- Inspect the existing architecture before changing it.
- Preserve existing functionality unless a change explicitly requires otherwise.
- Avoid unnecessary dependencies.
- Keep components modular and maintainable.
- Keep spacing, typography, sizing, and interaction patterns consistent.
- Reuse the established design system instead of introducing random styles.
- Never expose secrets in client-side code.
- Validate security-sensitive logic on the server.
- Test changes before considering them complete.
- Fix root causes instead of patching symptoms.
- Do not leave TODOs for critical security or production requirements.
- Keep commits small and focused.
- Make production readiness a requirement, not an afterthought.

---

## 7. Typography / Font Direction

> **Detailed Specification**: [`docs/typography.md`](docs/typography.md)

Do not automatically default to Inter, Space Grotesk, Instrument Serif, or other trendy AI-generated font combinations.

Choose typography intentionally based on the product's actual brand and design system. Typography must have:
- Clear hierarchy
- Strong readability
- Consistent weights
- Consistent line heights
- Appropriate letter spacing
- Proper responsive behavior

Do not use trendy font combinations simply because they are popular in AI-generated interfaces.

---

## 8. Agent Behavior

> **Detailed Specification**: [`docs/agent-behavior.md`](docs/agent-behavior.md)

Before implementing a feature, check AGENTS.md and follow all applicable requirements.

When reviewing or modifying the application, actively look for:
- Vibecoded visual patterns
- Inconsistent UI
- Security vulnerabilities
- Poor accessibility
- Broken responsive behavior
- Duplicate logic
- Unnecessary complexity
- Exposed secrets
- Weak authentication/authorization
- Unsafe database access
- Unvalidated input
- Missing error handling
- Production-readiness issues

AGENTS.md is the source of truth for these project-wide standards. Keep it updated whenever new architectural, security, design, or engineering rules are established.

---

## 9. Incremental Validation Protocol

> **Detailed Specification**: [`docs/incremental-validation.md`](docs/incremental-validation.md)

Do not build the entire website and test it once. Work incrementally.
For every major component/feature:
1. Build it.
2. Run its relevant test.
3. Verify it renders.
4. Check console errors.
5. Check interaction behavior.
6. Check responsive behavior.
7. Check performance impact.
8. Fix problems immediately.
9. Only then move to the next feature.

No untested major feature should remain.

---

## 10. Headless Chromium QA & Visual Regression

> **Detailed Specifications**: [`docs/headless-chromium-qa.md`](docs/headless-chromium-qa.md) & [`docs/visual-regression-testing.md`](docs/visual-regression-testing.md)

Install and use **headless Chromium** for automated browser testing and visual inspection.
Test against the **production build**, inspecting screenshots across all viewports (mobile, tablet, desktop).
Look specifically for:
- Overlapping elements
- Text collisions
- Content hidden behind other elements
- Broken z-index
- Incorrect fixed positioning
- Overflowing containers
- Clipped text
- Broken mobile layouts
- Elements outside the viewport
- Animation glitches
- Loading artifacts
- Broken canvases
- Unexpected scrollbars
- Inaccessible controls

---

## 11. Performance Standards & Budget

> **Detailed Specifications**: [`docs/performance.md`](docs/performance.md) & [`docs/performance-budget.md`](docs/performance-budget.md)

- Target 60 FPS interaction on capable devices.
- Lighthouse scores ≥ 95 on Performance, Accessibility, Best Practices, and SEO.
- LCP < 1.8s, CLS < 0.05, INP < 100ms, TTFB < 600ms.
- Initial gzipped JS bundle < 150 KB.
- Monitor WebGL draw calls, dispose resources cleanly on unmount, and pause rendering when canvas is not visible.
- **Rule of thumb**: If an effect looks impressive but causes unacceptable performance, **remove or redesign the effect**. Performance always wins.

---

## 12. Accessibility Standards

> **Detailed Specification**: [`docs/accessibility.md`](docs/accessibility.md)

- Full keyboard navigation and visible focus states.
- Semantic HTML and appropriate ARIA roles.
- WCAG AA contrast ratios (4.5:1 body, 3:1 large text).
- Full support for `prefers-reduced-motion: reduce`.
- Minimum 44 × 44px touch targets.
- Zero essential information trapped inside animations or hover states.

---

## 13. Content Quality & Voice

> **Detailed Specification**: [`docs/content-standards.md`](docs/content-standards.md) & [`docs/project-details.md`](docs/project-details.md)

- No Lorem Ipsum or placeholder images.
- No dead buttons or unfinished interactive controls.
- Confident, warm, authentic writing reflecting Ghanaian community service and international collaboration.
- Detailed, clear, and actionable program descriptions.

---

## 14. DEFINITION OF DONE

> **Complete Checklist**: [`docs/definition-of-done.md`](docs/definition-of-done.md)

**DO NOT DECLARE THIS PROJECT COMPLETE UNTIL EVERY REQUIREMENT IN [`docs/definition-of-done.md`](docs/definition-of-done.md) IS VERIFIED TRUE.**

The project is DONE only when verified on the running production application:
* **Creative Direction**: Authentic Ghanaian NGO aesthetic, intentional information architecture, no generic templates.
* **Design Quality**: Consistent typography, spacing, colors, icons, and micro-interactions.
* **Interaction Design**: Discoverable navigation, accessible controls, immediate feedback.
* **Motion**: Smooth Lenis scrolling, GSAP timelines, reduced-motion compliance.
* **3D / WebGL**: Efficient, non-blocking, properly disposed.
* **Performance**: Lighthouse ≥ 95, LCP < 1.8s, CLS < 0.05, zero main-thread blocking.
* **Responsive QA**: Tested and verified across desktop, tablet, and mobile (portrait & landscape).
* **Headless Chromium**: Run against production build, screenshots inspected, zero console errors.
* **Automated Testing**: Unit, component, and E2E tests pass.
* **Accessibility**: Keyboard, focus, contrast, screen-reader verified.
* **Code Quality**: Zero TypeScript errors, no dead code, strict security and input validation.
* **Content**: Authentic, proofread, and complete.
* **Final Regression Pass**: Executed after all audit fixes.
* **Final Ship Gate**: Fully verified with empirical evidence.
