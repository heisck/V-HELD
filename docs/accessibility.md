# Accessibility (a11y) Standards

## Core Requirement

Implement production-grade accessibility compliant with WCAG 2.1 / 2.2 AA standards. An unconventional or bespoke design must never sacrifice accessibility.

---

## Verification Checklist

1. **Keyboard Navigation**
   * Full tab order across all interactive elements (navigation, application forms, modal dialogs, buttons, links).
   * Logical tab sequence following visual DOM hierarchy.
   * No keyboard traps.

2. **Visible Focus States**
   * Clear, high-contrast focus rings on all active and focused elements.
   * Never suppress `:focus` or `:focus-visible` without an accessible custom styling replacement.

3. **Semantic HTML**
   * Use native semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<button>`, `<a>`, `<form>`, `<input>`, `<label>`).
   * Do not use `<div onclick>` when `<button>` or `<a>` is appropriate.

4. **ARIA Usage**
   * Apply ARIA only when necessary to bridge custom interactive components.
   * Respect the first rule of ARIA: use native HTML elements whenever possible.
   * Ensure `aria-expanded`, `aria-controls`, `aria-label`, and `aria-live` are applied correctly.

5. **Color Contrast & Readability**
   * Text and interactive controls must meet minimum 4.5:1 contrast ratio against their backgrounds (3:1 for large text).
   * Do not rely on color alone to convey state, errors, or essential information.

6. **Reduced Motion Support**
   * Honor `prefers-reduced-motion: reduce`.
   * Disable or minimize intense parallax, 3D rotations, and auto-playing scroll transitions when reduced motion is preferred.

7. **Screen-Reader Compatibility**
   * Accessible text alternatives (`alt` attributes) for all meaningful images.
   * Decorative icons or 3D visual effects flagged with `aria-hidden="true"`.
   * Form inputs clearly associated with `<label>` elements.

8. **Touch Targets & Scaling**
   * Interactive targets must be at least 44 × 44 CSS pixels.
   * Layout must remain functional and readable when zoomed/scaled to 200%.

9. **Content Availability**
   * No critical information or copy may exist solely within an animation, temporary canvas effect, or hover-only state.
