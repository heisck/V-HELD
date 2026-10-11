# Incremental Code Validation

## Core Rule

Do not build the entire system and test it once at the end. **Work incrementally.** Every piece of code and every major component requires immediate, rigorous validation before proceeding to the next.

---

## The 9-Step Component Lifecycle

For every major component, feature, or section:

1. **Build it**: Implement the clean, type-safe component, deconstructing literal references and including tailored WebP imagery.
2. **Run its relevant test**: Execute component/unit tests.
3. **Verify it renders via Headless Chrome Screenshot**: Confirm visual rendering in the DOM with a headless Chromium screenshot.
4. **Inspect the rendered image (Never Code Blind)**:
   - Ask: *Does this look high-craft? Is it cramped? Does it replicate the approved reference?*
   - Verify it is **NOT a text-only skeleton** (no big bold header + plain text divs).
   - Verify tailored WebP imagery is actively rendered.
   - Verify no floating badges above headlines or em-dash clutter.
5. **Check console errors**: Ensure zero runtime errors, React hydration warnings, or unhandled promises in the browser console.
6. **Check interaction & scroll dynamics**: Test clicks, inputs, keyboard navigation, focus, state updates, and ensure zero compositor flash on scroll.
7. **Check responsive behavior**: Validate on mobile (375px), tablet (768px), and desktop (1440px).
8. **Fix problems immediately at root cause**: Address any flaw, aesthetic defect, or bug before moving forward.
9. **Only then move to the next feature**: Advance to subsequent milestones only after the current feature is validated and passing.

---

## Feature Validation Mapping

* **Navigation**: Resting full-width unconfined check, scroll transition to centered pill, zero line divider at rest, zero compositor flash, focus trap testing, mobile toggle verification.
* **Hero / Introduction**: Editorial composition, headline pairing, tailored WebP imagery, action button purity (`Apply`, `Volunteer`), responsive scaling.
* **Deck / Programmes**: Stacked card deck mechanics, sticky tiered offsets (16px–24px tabs), chromatic green depth staging (`#0b7342` to `#065830` to `#054c29` to `#033d20`), refined corner radii (`rounded-t-3xl`), tailored WebP photography.
* **Impact & Stories**: High-contrast display numerals, authentic community voice, structured editorial cards, verified non-profit metrics.
* **Volunteer Application Form**: Schema validation (Zod), CSRF/sanitization, submission state transitions, error messages.
* **Mobile Layout**: Touch target usability (min 44x44px), no horizontal scroll, drawer/sheet mechanics.
* **Animations**: Reduced-motion compliance, zero layout shifts (CLS), GPU acceleration check (`transform-gpu`).

No untested or uninspected major feature may remain in the codebase.

