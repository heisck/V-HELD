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

## 1.2 Mandatory Branch-to-Main Development Workflow

> **Detailed Specification**: [`docs/workflow.md`](docs/workflow.md)

Until the entire application is completed, all development must strictly follow this closed-loop workflow:

1. **Branch Isolation**:
   - Never build directly on `main`.
   - Create a dedicated branch for every feature or task track: `git checkout -b <branch-name>`.
2. **Branch Documentation Suite**:
   - Immediately create a dedicated subfolder under `docs/build docs/<branch-name>/` containing the 3 mandatory living files:
     - `<branch-name>.md`: Architecture blueprints, component contracts, tokens, and visual specifications.
     - `progress.md`: Living tracker with milestone breakdown, status table, checklist items, and test history.
     - `handoff.md`: Engineering handoff, interaction physics, runtime configs, and verification steps.
3. **Incremental Build & Periodic Synchronization**:
   - Follow the 9-step incremental validation lifecycle ([`docs/incremental-validation.md`](docs/incremental-validation.md)).
   - Sync periodically with upstream (`git fetch` / status checks) during the build to avoid code drift.
4. **Periodic Atomic Commits with Strict User Authorship (CRITICAL)**:
   - Make small, frequent, atomic commits as logical milestones are hit.
   - **Commit strictly as the user**: All commits must be authored strictly by `Heisck <kelvinkwabenaparkingston@gmail.com>`.
   - **ZERO AI attribution**: Absolutely NO "Gemini", "Antigravity", or agent mentions in author, committer, or commit messages.
   - **ZERO co-author tags**: Never append `Co-authored-by: Gemini...` or any AI contributor trailers. Commits must look 100% human-authored by the user.
5. **Multi-Disciplinary Completion Gate (Single Agent, Full Skill Stack)**:
   - When the build is finished, run an exhaustive triple-pillar audit using **one single unified agent utilizing all available specialized skills**:
     - **UI Critic**: Enforce 20 anti-vibecoding rules ([`docs/ui-patterns-avoid.md`](docs/ui-patterns-avoid.md)), 7-viewport responsive QA, WCAG AA contrast, typography scale, headless Chromium frame review.
     - **"Pony Tail" Security Review**: Deep, paranoid, tight review covering all 40 security mandates ([`docs/security-requirements.md`](docs/security-requirements.md)): RLS, server-side Zod validation on all inputs/mutations, sanitization, secret leakage prevention, secure headers, auth/session locks.
     - **Code Review**: Strict TypeScript (`tsc --noEmit`), lint checks (`next lint`), Vitest test suite, clean modular structure, zero dead code, zero console warnings.
   - **Fix 100% of Findings**: Remediate every defect, warning, or gap immediately. No deferred bugs, no TODOs.
6. **Acceptance Gate & Context Auto-Compaction**:
   - Execute `npm run check:agent` (`tsc --noEmit && next lint && vitest run`).
   - Compact agent context by recording progress, decisions, and handoff contracts into `progress.md` and `handoff.md`, freeing working memory.
7. **Merge Branch to Main & Final Verification**:
   - Switch to `main`, ensure `main` is current, and cleanly merge: `git merge --no-ff <branch-name>`.
   - Re-verify `npm run check:agent` on `main`. Repeat cycle for the next branch until complete.

---

## 2. Design & UI Standards

> **Detailed Specification**: [`docs/ui-patterns-avoid.md`](docs/ui-patterns-avoid.md)

Avoid making the app look "vibecoded." Specifically avoid:

1. Purple-to-blue gradients
2. Gradient hero text
3. Emojis in headings
4. Using Inter everywhere
5. Colored-border cards
6. Glassmorphism cards
7. Low-contrast dark mode
8. Three icon boxes in a row
9. Badge above the headline
10. Lucide icons everywhere
11. Untouched Shadcn UI
12. Fade-in-on-scroll effects
13. Cursor-following beams
14. Buttons that only fade/change on hover
15. Inconsistent spacing
16. Em dashes everywhere
17. Generic buzzword copy
18. Serif italic accents
19. Space Grotesk + Instrument Serif as a generic combination
20. Grain/noise texture over gradients

**Design Philosophy**: Design should feel intentional, polished, distinctive, functional, and product-specific (reflecting V-HELD's mission: warm, human, authentic Ghanaian community development, professional NGO aesthetic) rather than resembling an AI-generated template.

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
