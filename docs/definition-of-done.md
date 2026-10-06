# DEFINITION OF DONE

**DO NOT DECLARE THIS PROJECT COMPLETE UNTIL EVERY REQUIREMENT BELOW IS VERIFIED TRUE.**

> “Looks good” is NOT a definition of done.  
> “Build succeeds” is NOT a definition of done.  
> “Tests pass” is NOT a definition of done.  

The project is **DONE** only when the following conditions have been **actually verified on the running production application**.

---

## 1. Creative Direction — Must Pass

* [ ] The website does NOT look like a generic corporate or AI-generated template.
* [ ] The design feels deeply authentic to V-HELD: a credible, warm, African community development and volunteer organisation.
* [ ] There is NO generic “logo + nav links + CTA” boilerplate attached without intentional adaptation.
* [ ] The information architecture is deliberately and thoughtfully structured around volunteer exploration, community impact, and partnership.
* [ ] The website feels like a cohesive world and community ecosystem rather than a disjointed collection of web sections.
* [ ] The core message can be clearly articulated in one sentence: *V-HELD connects passionate volunteers from Ghana and across the globe with impactful community health, education, and youth leadership initiatives in Ghana.*
* [ ] Every major visual and interactive design decision has an explicit reason for existing.
* [ ] Interactive or 3D elements exist because they enhance understanding and engagement, not merely for cosmetic effect.
* [ ] The organisation's visual identity is distinctive, dignified, and culturally grounded.
* [ ] The experience contains at least one genuinely memorable, delightful, and signature interaction ("WOW" moment).
* [ ] The final experience feels authored rather than assembled from templates.

---

## 2. Design Quality

* [ ] Typography is intentionally selected (avoiding generic Inter / Space Grotesk / Instrument Serif clichés).
* [ ] Font sizes, weights, and hierarchical scales are consistent across all views.
* [ ] Letter spacing (tracking) is calibrated to font size.
* [ ] Line heights (leading) maintain proper vertical rhythm without collisions.
* [ ] Spacing follows a coherent, strict modular scale (4px / 8px system).
* [ ] Visual hierarchy is immediate, natural, and guiding.
* [ ] Composition feels balanced, intentional, and human.
* [ ] Colors have a defined purpose and draw inspiration from warm Ghanaian tones (earth, sun, forest greens, deep accents).
* [ ] Borders, shadows, textures, and subtle gradients are cohesive across components.
* [ ] Iconography belongs to a unified visual language and stroke weight.
* [ ] Hover states are designed, smooth, and informative.
* [ ] Active/pressed states provide tactile feedback.
* [ ] Focus states are distinct, high-contrast, and custom-styled.
* [ ] Loading states (skeletons/spinners) prevent layout shifts.
* [ ] Empty states are designed with helpful next actions.
* [ ] No element looks like an unstyled browser default.
* [ ] No component appears accidentally copied from a template or library demo.
* [ ] No section feels unfinished, hollow, or like an afterthought.

---

## 3. Interaction Design

* [ ] Navigation is immediately discoverable and effortless to operate.
* [ ] Users always understand where they are within the site and programme hierarchy.
* [ ] Users can easily recover or return to previous sections if they explore deeply.
* [ ] Interactive objects clearly communicate their affordances.
* [ ] Hover interactions provide clear, non-jarring feedback.
* [ ] Touch interactions work seamlessly on phones and tablets.
* [ ] Keyboard interactions (Tab, Enter, Space, Escape, Arrows) function smoothly.
* [ ] Modals, drawers, and transitions never trap or disorient users.
* [ ] No essential interaction or critical information depends exclusively on hover.
* [ ] No animation prevents immediate access to vital content or application forms.
* [ ] Interaction feedback is immediate, responsive, and intentional.

---

## 4. Motion System

* [ ] GSAP and Framer Motion animations are purposeful and choreographed.
* [ ] Lenis smooth scrolling operates fluidly without hijacking user control or causing scroll lag.
* [ ] Scroll-triggered animations activate reliably at the correct scroll positions.
* [ ] Animations never cause layout shifts (CLS = 0).
* [ ] Animations do not produce visible jitter, stutter, or dropped frames.
* [ ] Animations never fight or delay user gestures.
* [ ] Animation timing, durations, and easings feel natural and consistent across views.
* [ ] Motion hierarchy exists: primary content is prioritized over background elements.
* [ ] `prefers-reduced-motion: reduce` is strictly respected, replacing large motion with subtle fades or instant transitions.
* [ ] Mobile motion has been independently audited and tuned for touch performance.

---

## 5. 3D / WebGL (Where Applicable)

* [ ] 3D canvases initialize cleanly without blocking initial page render.
* [ ] 3D scenes render smoothly in Headless Chromium.
* [ ] Zero WebGL warnings or errors in the console.
* [ ] Zero runaway animation frames; render loops pause when canvases scroll off-screen.
* [ ] All geometries, textures, materials, and WebGL contexts are properly disposed of on component unmount.
* [ ] Textures are compressed and dimensioned appropriately (power-of-two, WebP/PNG).
* [ ] Draw calls and polygon counts are minimized and budgeted.
* [ ] Shaders are efficient and do not cause GPU throttling.
* [ ] 3D experience degrades gracefully to 2D/lightweight visuals on weaker devices.
* [ ] Mobile 3D performance has been explicitly benchmarked and verified.

---

## 6. Performance

* [ ] Automated Lighthouse audits score ≥ 95 on Performance, Accessibility, Best Practices, and SEO.
* [ ] Largest Contentful Paint (LCP) < 2.0s on standard network throttling.
* [ ] Cumulative Layout Shift (CLS) < 0.05.
* [ ] Interaction to Next Paint (INP) < 100ms.
* [ ] Time to First Byte (TTFB) < 600ms.
* [ ] JavaScript execution profiling confirms no long tasks (> 50ms) blocking the main thread.
* [ ] Initial gzipped JavaScript bundle is lean and within budget (< 150 KB).
* [ ] Memory profiling confirms no detached DOM nodes or GPU memory leaks.
* [ ] All images are optimized (WebP/AVIF), sized responsively, and lazy-loaded below the fold.
* [ ] Web fonts are preloaded with `font-display: swap` and zero FOIT.
* [ ] Heavy modules are code-split and loaded via dynamic imports.
* [ ] Zero redundant, obsolete, or heavy dependencies in `package.json`.

---

## 7. Responsive QA

The running production build must be validated across all seven form factors:
* [ ] **Large Desktop** (1920px × 1080px)
* [ ] **Standard Desktop** (1440px × 900px)
* [ ] **Laptop** (1280px × 800px)
* [ ] **Tablet Portrait** (768px × 1024px)
* [ ] **Tablet Landscape** (1024px × 768px)
* [ ] **Mobile Portrait** (375px × 812px and 412px × 915px)
* [ ] **Mobile Landscape** (812px × 375px)

Verify on each:
* [ ] No horizontal overflow or accidental horizontal scrolling.
* [ ] No clipped text, images, or interactive elements.
* [ ] No text collisions or awkward wraps.
* [ ] No interactive element overlap.
* [ ] No broken z-index layers.
* [ ] No content obscured by sticky headers or floating controls.
* [ ] No distorted or broken canvas elements.
* [ ] Mobile navigation drawer operates cleanly with full keyboard/touch accessibility.
* [ ] Touch targets are at least 44 × 44 CSS pixels.
* [ ] Mobile typography remains clear and readable (minimum 16px body font).
* [ ] No unexpected scrollbars appear within sub-containers.

---

## 8. Headless Chromium Verification

* [ ] Application is verified directly against the compiled **production build** (`next build && next start`).
* [ ] All routes (`/`, `/about`, `/programmes`, `/volunteer`, `/impact`, `/partner`, `/support`, `/contact`, `/policies/*`) load completely.
* [ ] Zero browser console errors.
* [ ] Zero uncaught JavaScript exceptions or runtime warnings.
* [ ] Zero failed network requests (4xx / 5xx) on initial render or user navigation.
* [ ] Automated browser tests exercise real user journeys: form fill, button clicks, page transitions.
* [ ] Screenshots captured across all canonical viewports and visually inspected.
* [ ] Visual inspection confirms zero rendering defects, layout distortions, or stacking anomalies.

---

## 9. Automated Testing

* [ ] Unit tests pass (Vitest) for utility functions, validators, and data transformations.
* [ ] Component tests pass (React Testing Library) for forms, filters, and interactive dialogs.
* [ ] Integration tests verify full application submission and state flows.
* [ ] End-to-End (E2E) tests pass (Playwright) covering end-to-end user and volunteer journeys.
* [ ] All tests validate real user outcomes rather than trivial assertions.
* [ ] Zero failing or skipped tests.

---

## 10. Accessibility (a11y)

* [ ] Full keyboard navigation across every page, link, button, input, and modal dialog.
* [ ] Visible, high-contrast focus rings on all focusable elements.
* [ ] Correct semantic HTML tags used throughout.
* [ ] ARIA attributes applied only where required and verified correct.
* [ ] WCAG AA color contrast verified (≥ 4.5:1 for body copy, ≥ 3:1 for large text and UI components).
* [ ] Layout and typography remain functional and readable when browser zoom is set to 200%.
* [ ] `prefers-reduced-motion: reduce` fully functional.
* [ ] Screen-reader accessible: images have descriptive alt text, decorative items have `aria-hidden="true"`, inputs have explicit labels.
* [ ] Zero critical information conveyed solely through animation or color.

---

## 11. Code Quality & Architecture

* [ ] TypeScript compiles cleanly with zero type errors (`tsc --noEmit`).
* [ ] Strict typing enforced; no arbitrary `any` types.
* [ ] Zero dead code or unreferenced imports.
* [ ] Code is modular, following single responsibility and clean component composition.
* [ ] Established design tokens and Tailwind utility conventions reused consistently.
* [ ] Secrets and API keys strictly isolated in server-side environment variables (`.env.local`).
* [ ] Server-side input validation and sanitization (Zod) on all forms and API endpoints.
* [ ] Database operations parameterized with Row Level Security enabled.
* [ ] Zero `TODO` comments for critical security, performance, or production requirements.
* [ ] Clean error boundaries and comprehensive user-facing error handling.

---

## 12. Content Quality & Integrity

* [ ] Zero Lorem Ipsum or placeholder dummy copy.
* [ ] Zero placeholder image boxes or broken image links.
* [ ] Zero non-functional or dead buttons/links.
* [ ] No generic corporate buzzwords; copy reflects genuine community service and Ghanaian warmth.
* [ ] Every programme includes complete details: title, focus area, location, duration, eligibility, responsibilities, inclusions, and fees.
* [ ] Impact figures, stories, and testimonials are clearly structured and authentic.
* [ ] All text has been rigorously proofread for grammar, spelling, and consistency.

---

## 13. Final Multi-Agent Independent Audit

Before declaring completion, run independent evaluations across multiple auditing lenses:
* **UX Lens**: Review usability, form clarity, navigation discoverability, and volunteer onboarding ease.
* **Visual QA Lens**: Inspect spacing, alignment, typography, visual hierarchy, and cross-browser consistency.
* **Performance Lens**: Audit Core Web Vitals, bundle size, runtime frame rate, and asset delivery.
* **Engineering & Security Lens**: Audit code architecture, secret isolation, server-side validation, and database safety.
* **Accessibility Lens**: Audit keyboard flows, screen-reader semantics, contrast ratios, and reduced motion.
* **Brand & Content Lens**: Verify authenticity, tone of voice, cultural respect, and messaging precision.
* **Brutal Critic Lens**: Critically evaluate whether the site feels like a distinguished, high-impact international NGO experience or a generic template.
* **Cross-Examination**: Investigate all discovered issues, measure them empirically, implement root-cause fixes, and re-verify.

---

## 14. Final Regression Pass

After resolving all audit findings, execute the entire verification suite one final time:
* [ ] Clean production build (`npm run build`)
* [ ] Complete automated test suite (`npm run test`)
* [ ] E2E browser test suite (`npx playwright test`)
* [ ] Headless Chromium visual inspection of all route screenshots
* [ ] Lighthouse audit verification (all scores ≥ 95)
* [ ] Accessibility audit verification (axe-core / pa11y)

---

## 15. Final Ship Gate

The project can only be marked **SHIPPED** when every single requirement above is verified with empirical evidence.

> If even **one requirement** is not verified, you are **NOT DONE**.  
> Do not say: *“The website is mostly complete.”*  
> Do not say: *“Everything should work.”*  
> Do not say: *“I recommend testing this manually.”*  
>  
> Test it, inspect it, fix it, verify it, and prove it with evidence.
