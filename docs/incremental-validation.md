# Incremental Code Validation

## Core Rule

Do not build the entire system and test it once at the end. **Work incrementally.** Every piece of code and every major component requires immediate, rigorous validation before proceeding to the next.

---

## The 9-Step Component Lifecycle

For every major component, feature, or section:

1. **Build it**: Implement the clean, type-safe component and its dependencies.
2. **Run its relevant test**: Execute component/unit tests.
3. **Verify it renders**: Confirm visual rendering in the DOM without flash or layout distortion.
4. **Check console errors**: Ensure zero runtime errors, React hydration warnings, or unhandled promises in the browser console.
5. **Check interaction behavior**: Test clicks, inputs, keyboard navigation, focus, and state updates.
6. **Check responsive behavior**: Validate on mobile (375px), tablet (768px), and desktop (1440px).
7. **Check performance impact**: Ensure it doesn't cause frame drops, layout thrashing, or memory leaks.
8. **Fix problems immediately**: Address any flaw or bug at the root cause before moving forward.
9. **Only then move to the next feature**: Advance to subsequent milestones only after the current feature is validated and passing.

---

## Feature Validation Mapping

* **Navigation**: Interaction tests, focus trap testing, mobile toggle verification, keyboard escape behavior.
* **Hero / Introduction**: Visual composition, copy alignment, responsive scaling, entrance choreography.
* **3D Scene / Canvas**: WebGL context initialization, frame rate stability (60 FPS), memory disposal on unmount.
* **Programmes / Focus Areas**: Layout stability, dynamic data binding, filtering/sorting behavior.
* **Volunteer Application Form**: Schema validation (Zod), CSRF/sanitization, submission state transitions, error messages.
* **Stories / Testimonials**: Media loading performance, aspect ratio preservation, responsive grid behavior.
* **Mobile Layout**: Touch target usability, no horizontal scroll, drawer/sheet mechanics.
* **Animations**: Reduced-motion compliance, zero layout shifts (CLS), GPU acceleration check.

No untested major feature may remain in the codebase.
