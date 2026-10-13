# GEMINI.md — Agent Directives for V-HELD

See [`AGENTS.md`](AGENTS.md) for the complete, authoritative source of truth.

---

## **CRITICAL MANDATORY RULES (PREVIOUSLY VIOLATED — NON-NEGOTIABLE & PERMANENT)**

1. **MANDATORY REFERENCE IMAGE GENERATION & WEBP ASSETS**:
   - Whenever building from Landingfolio or UI references that feature images, agents **MUST generate tailored visual assets** matching V-HELD's Ghanaian community development context (education, healthcare, youth leadership).
   - **Convert all assets to `.webp` format**.
   - **NEVER leave an image container empty or substitute it with a plain text box or colored div.**

2. **ABSOLUTE BAN ON TEXT-ONLY SKELETON / EMPTY DIV PAGES**:
   - **Never build sections that are just a big bold headline and divs with plain text bullet points.**
   - Commit `ee9ee21` stripped 7 sections (`IntroSection`, `FocusAreasSection`, `WhyVolunteerSection`, etc.) specifically because they were built as text-only boxes.
   - Refrain from ever building sections like that again. Every section must have visual craft, tailored media, structured hierarchy, and physical depth.

3. **STRICT UI CRITIC ENFORCEMENT & ZERO-TOLERANCE ANTI-VIBECODING**:
   - The UI Critic must actively audit rendered screenshots against all 32 anti-patterns.
   - **Zero badges above headlines** (no floating pills like `[• MEASURABLE OUTCOMES]`).
   - **Zero em-dashes everywhere**.
   - **Zero generic 3-box card grids**.

4. **STRICT PURE LIGHT THEME ARCHITECTURE (ZERO `dark:` CLASSES)**:
   - Platform is **strictly light-mode only**. Zero dark mode, zero dark endpoints, zero auto color-scheme switching.
   - **Strip all `dark:` classes from code**. Surfaces: `#FFFFFF` (crisp white) and `#EFE9E2` (organic warm sand).

5. **BUTTON & NAVIGATION PURITY**:
   - **Buttons must BE the action**: `Apply`, `Volunteer`, `Partner`. Never "Apply to Volunteer".
   - **Single-word nav labels**: `About`, `Focus`, `Volunteer`, `Partner`, `Contact` (max 3–4 items).
   - **Navbar unconfined at rest**: Full width edge-to-edge at rest (`border-0`), centered pill on scroll.

6. **ZERO COMPOSITOR FLASH DURING SCROLL**:
   - Never animate `backdrop-filter` or opacity with `transition-all`. Keep background and blur identical across states; transition only geometry/elevation; use `transform-gpu`.

7. **VISUAL INSPECTION LOOP**:
   - **Never code blind**: Write component -> capture headless Chromium screenshot -> inspect actual rendered image -> refine immediately.

---

## Quick Documentation Links
* Master Rules & Operating Standards: [`AGENTS.md`](AGENTS.md)
* Documentation Governance & Index: [`docs/README.md`](docs/README.md)
* 32 Anti-Vibecoding Patterns: [`docs/ui-patterns-avoid.md`](docs/ui-patterns-avoid.md)
* Mandatory Workflow (Develop Trunk & Ticket-Driven): [`docs/workflow.md`](docs/workflow.md)
* Content Standards & Button Philosophy: [`docs/content-standards.md`](docs/content-standards.md)
* Navigation Architecture & Compositor Rules: [`docs/navigation.md`](docs/navigation.md)
* Motion System & Stacked Card Decks: [`docs/motion.md`](docs/motion.md)
* Performance Standards & WebP Assets: [`docs/performance.md`](docs/performance.md)
* Technology Stack: [`docs/technology-stack.md`](docs/technology-stack.md)
* Headless Chromium QA: [`docs/headless-chromium-qa.md`](docs/headless-chromium-qa.md)
* Incremental Validation (9-Step Lifecycle): [`docs/incremental-validation.md`](docs/incremental-validation.md)
* Security Checklist (40 rules): [`docs/security-requirements.md`](docs/security-requirements.md)
* Engineering Principles: [`docs/engineering-principles.md`](docs/engineering-principles.md)
* Typography Guidelines: [`docs/typography.md`](docs/typography.md)
* Definition of Done: [`docs/definition-of-done.md`](docs/definition-of-done.md)

Refer to [`AGENTS.md`](AGENTS.md) and the respective documents in [`docs/`](docs/) before performing any task.

