# Visual Regression Testing

## Purpose

Prevent subtle visual regressions, styling collisions, and layout breakages across updates by capturing and comparing visual snapshots of critical UI states.

---

## Minimum Required Test States

Capture and inspect screenshots across all canonical states:

1. **Initial Page / Landing View**
2. **Navigation State (Open & Closed, Desktop & Mobile Drawer)**
3. **Programmes Overview & Category Filtering**
4. **Programme Detail View / Interaction State**
5. **Impact Statistics & Stories Section**
6. **Volunteer Application Form (Clean, Filled, and Error States)**
7. **Contact & Partner Inquiry Form**
8. **Mobile Viewport Layout (375px & 412px)**
9. **Tablet Viewport Layout (768px & 1024px)**
10. **Desktop Viewport Layout (1440px & 1920px)**

---

## Regression Protocol

* Whenever layout styling, global CSS, or responsive breakpoints are modified, execute the visual test suite.
* If any visual snapshot deviates unexpectedly:
  1. Inspect the visual diff.
  2. Determine whether it is an intended design evolution or an accidental defect.
  3. If a defect: **fix the underlying CSS/layout immediately and rerun the visual test**.
  4. Only update reference baseline snapshots when an intentional design change is verified.
