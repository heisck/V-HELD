# Automated Testing Strategy

## Purpose & Tools

Set up appropriate, comprehensive automated testing that validates real user behavior rather than chasing superficial line coverage metrics.

### Tooling Stack:
* **Playwright**: End-to-end (E2E) browser testing, multi-viewport layout validation, user journey automation, and screenshot regression.
* **Vitest**: Blazing-fast unit and integration testing with native ESM and TypeScript support.
* **Testing Library (@testing-library/react)**: Component behavior testing focusing on accessible user interactions and screen-reader queries.
* **Lighthouse CI / Performance APIs**: Automated performance, accessibility, SEO, and best-practices audits.

---

## Testing Tiers

1. **Unit & Utility Tests (Vitest)**
   * Form validation schemas (Zod).
   * Data formatters, date/currency utilities, and state reducers.
   * Security sanitizers and string mappers.

2. **Component & Integration Tests (Testing Library + Vitest)**
   * Application form submission flows (valid inputs, invalid inputs, error states, success banners).
   * Program filtering, accordion toggles, navigation disclosure components.
   * Modal dialogs and accessibility focus trapping.

3. **End-to-End & Browser Tests (Playwright)**
   * Complete volunteer application submission journey.
   * Navigation between Home, About, Programmes, Impact, and Contact pages.
   * Responsive layout checks across mobile, tablet, and desktop viewports.
   * Verification of zero console errors and clean network request logs.

4. **Performance & Audit Automation (Lighthouse)**
   * Automated verification of Core Web Vitals (LCP, CLS, INP).
   * Accessibility score verification (target 95+).

---

## Testing Mandate

* Every core user workflow must have a behavioral test.
* Tests must test real user outcomes (can the volunteer apply? can the user find program details?), not internal component implementation details.
* The complete test suite must be executed and green prior to any production deployment.
