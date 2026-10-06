# Browser Verification Protocol

## Mandatory Execution Against Production Build

Verification must never rely exclusively on the local development server. The application must be tested in its compiled, production-optimized form (`next build && next start` or static export server).

---

## Complete Verification Protocol

1. **Build Verification**:
   * Execute `npm run build` (or `pnpm build`). Confirm 100% clean output without TypeScript errors, lint errors, or circular dependency warnings.

2. **Full Route Navigation in Headless Chromium**:
   * Launch Headless Chromium via Playwright / automated runner.
   * Visit every single route:
     - `/` (Home)
     - `/about` (About V-HELD)
     - `/programmes` (Programmes Index & Details)
     - `/volunteer` (Volunteer Application & Information)
     - `/impact` (Impact & Stories)
     - `/partner` (Partnership Portal)
     - `/support` (Support & Donate)
     - `/contact` (Contact Form)
     - `/policies/*` (Safeguarding, Privacy, Code of Conduct)

3. **Console & Network Cleanliness**:
   * Monitor browser console: **0 errors, 0 unhandled warnings, 0 hydration mismatches**.
   * Monitor network tab: **0 failed requests (4xx / 5xx)**, 0 CORS rejections, 0 missing font or image assets.

4. **Interaction & State Testing**:
   * Complete volunteer application submission end-to-end with validation triggers.
   * Trigger modal dialogues, mobile navigation drawers, and program filter controls.
   * Test keyboard navigation (Tab, Enter, Space, Escape) through all workflows.

5. **Visual & Responsive Inspection**:
   * Capture high-resolution full-page screenshots at 1920px, 1440px, 768px, and 375px.
   * Inspect screenshots for:
     - Unexpected element collisions or overlaps.
     - Text clipping or container overflow.
     - Z-index conflicts (modals/drawers hidden or obscured).
     - Clean rendering of cards, hero graphics, and footer.

6. **Reduced Motion & Accessibility Audit**:
   * Toggle `prefers-reduced-motion: reduce` in the browser context and confirm animations gracefully disable or reduce to subtle opacity transitions.
   * Run automated axe-core / Lighthouse a11y checks.
