# Headless Chromium QA & Visual Inspection

## Purpose & Mandate

Do not assume code works simply because a build command succeeds or a development server runs.

**Headless Chromium testing is required against the production build.** The application must actually be opened, rendered, navigated, and inspected in a real Chromium browser environment.

---

## What to Test

Execute automated and scripted browser sessions across:
* **Desktop viewports** (1920x1080, 1440x900, 1280x800)
* **Tablet viewports** (768x1024 portrait, 1024x768 landscape)
* **Mobile viewports** (375x812, 412x915, 320x568)
* **Primary interactions**:
  - Menu / Navigation open & close
  - Page routing / link transitions
  - Volunteer application form interaction & validation
  - Scrolling & scroll-triggered motion
  - Button clicks and form inputs
  - Animation and transition completions
  - 3D canvas / WebGL initialization and frame delivery
  - Dynamic imports, lazy-loaded components, and images

---

## Screenshot Inspection Protocol

Capture screenshots during automated test runs and inspect them visually. Look specifically for:

* **Overlapping elements**: text overlapping cards, floating controls colliding with content.
* **Text collisions**: titles colliding with navigation or subtitle text.
* **Content hidden behind other elements**: sticky headers covering top content, floating badges obscuring inputs.
* **Broken z-index stacking**: dropdowns or modals rendering behind background layers.
* **Incorrect fixed or sticky positioning**: elements jumping off-screen during scroll.
* **Overflowing containers**: text or images escaping container boundaries.
* **Clipped text**: truncated buttons or sliced headings.
* **Broken mobile layouts**: multi-column elements failing to reflow cleanly into single column.
* **Elements outside the viewport**: horizontal scrollbars appearing unintentionally.
* **Animation glitches**: partial transforms, flash of unstyled content (FOUC), jitter.
* **Loading artifacts**: distorted skeleton states, broken images, unstyled canvases.
* **Broken 3D / WebGL canvases**: black screens, WebGL context errors, misaligned dimensions.
* **Unexpected scrollbars**: secondary scrollbars inside body containers.
* **Inaccessible controls**: touch targets too small or obscured.

---

## Production Build Verification

Always test against the compiled **production build**:
* Zero browser console errors.
* Zero uncaught JavaScript exceptions.
* Zero failed critical network requests (404s, CORS failures, 500s).
* Clean runtime performance traces.
