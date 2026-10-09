# Mandatory Development & Review Workflow

> **Standard**: This document defines the mandatory, non-negotiable end-to-end development, git, documentation, review, and merge lifecycle for every feature and milestone in V-HELD. All contributors and agents must follow this workflow iteratively until the entire application is completed.

---

## 1. Workflow Overview & Lifecycle Loop

For every feature, milestone, or task track, execute this continuous cycle:

```text
[Main Branch]
      │
      ▼
1. Create & Checkout Feature Branch ──────────► (e.g., feat/xyz or landing-page)
      │
      ▼
2. Create Branch Documentation Subfolder ─────► docs/build docs/<branch-name>/
      │                                         ├── <branch-name>.md
      │                                         ├── progress.md
      │                                         └── handoff.md
      ▼
3. Incremental Build & Validation ────────────► 9-step incremental lifecycle
      │
      ├── Periodic Upstream Sync ─────────────► git fetch / rebase main
      └── Periodic Atomic Commits ────────────► Strict User Authorship ONLY (Heisck)
      │                                         (NO Gemini co-author/contributor tags)
      ▼
4. Multi-Disciplinary Audit Gate ─────────────► Single Agent using all specialized skills:
      │                                         ├── 1. UI Critic Audit
      │                                         ├── 2. "Pony Tail" Security Review
      │                                         └── 3. Code & Architecture Review
      ▼
5. Remediate ALL Findings ────────────────────► Fix 100% of issues; zero warnings/TODOs
      │
      ▼
6. Acceptance Check & Context Compaction ─────► npm run check:agent & compact context
      │
      ▼
7. Merge Branch into Main & Verify ───────────► Clean merge to main, verify build & tests
```

---

## 2. Phase 1: Branch Creation & Environment Isolation

1. **Never build directly on `main`**: All modifications, features, refactors, and assets must be developed on an isolated branch.
2. **Branch Naming**: Use clear, descriptive branch names corresponding to the feature or milestone (e.g., `landing-page`, `auth-flow`, `programmes-directory`, `volunteer-application`).
3. **Branch Creation**:
   ```bash
   git checkout -b <branch-name>
   # or
   git switch -c <branch-name>
   ```
4. Verify you are on the new branch before writing any code:
   ```bash
   git branch --show-current
   ```

---

## 3. Phase 2: Branch Documentation Suite

Every feature branch must have a dedicated documentation subfolder created immediately under `docs/build docs/<branch-name>/`. This folder must contain three core documents:

### 1. `<branch-name>.md` (Feature & Architecture Specification)
- **Purpose**: Blueprints the functional and visual architecture before and during construction.
- **Contents**:
  - Route and layout structure (e.g., `/`, `/programmes`, `/apply`).
  - Wireframe/editorial component breakdown and visual hierarchy.
  - Design tokens, typography rules, color palettes, and asset paths.
  - Component interface contracts, TypeScript props, and state models.
  - Anti-vibecoding checklist specific to the feature.

### 2. `progress.md` (Living Status Tracker)
- **Purpose**: Real-time tracking of milestones, deliverables, test execution, and blockers.
- **Contents**:
  - **Status Overview Table**: Metrics, current status (Completed / In Progress / Pending), and details.
  - **Deliverables Checklist**: Granular checkbox list (`- [x]` / `- [ ]`) of implemented components and features.
  - **Validation & Test History**: Record of type-check, lint, unit tests, and browser verification passes.
  - **Blockers & Decisions**: Architecture decisions or dependencies resolved.

### 3. `handoff.md` (Engineering Handoff Document)
- **Purpose**: Clean interface contracts, asset inventories, and runtime requirements for handoff and downstream integration.
- **Contents**:
  - Primary asset paths and CDN/image configurations.
  - Interaction physics, scroll dynamic thresholds, and animation specs.
  - API endpoint contracts and server actions.
  - Responsive breakpoints, touch targets, and accessibility requirements.
  - Verification notes and deployment considerations.

---

## 4. Phase 3: Incremental Build, Periodic Sync & Atomic Commits

### 4.1 Incremental Execution
- Adhere strictly to the **9-step incremental validation protocol** ([`docs/incremental-validation.md`](incremental-validation.md)):
  1. Build component -> 2. Run relevant test -> 3. Verify DOM render -> 4. Check console errors -> 5. Check interaction -> 6. Check responsive viewports -> 7. Check performance -> 8. Fix root cause immediately -> 9. Advance to next item.

### 4.2 Periodic Synchronization
- As you build, sync periodically with upstream to avoid code drift and merge friction:
  ```bash
  git fetch origin
  git status
  ```

### 4.3 Periodic Atomic Commits
- Commit frequently as logical units of work are completed (e.g., new component built, schema validated, style refined).
- Never accumulate massive uncommitted working trees.

### 4.4 Strict Commit Identity & Authorship Rules (CRITICAL)
- **Commit as User ONLY**: All commits must be authored strictly and exclusively as the repository owner (`Heisck <kelvinkwabenaparkingston@gmail.com>`).
- **NO AI Attributions**:
  - **NEVER** include "Gemini", "Antigravity", "AI Assistant", or any third-party agent names in the commit author, committer, or commit message body.
  - **NEVER** add `Co-authored-by: Gemini...` or `Co-authored-by: ...` trailers to commit messages.
  - **NEVER** include contributor annotations attributing work to an AI agent.
- Commits must look 100% human-authored by the user, adhering to clean conventional commit messages (e.g., `feat: implement floating pill navbar with scroll dynamics`).

---

## 5. Phase 4: Multi-Disciplinary Completion Gate (Single Unified Agent)

When feature implementation is complete, execute a comprehensive, rigorous multi-disciplinary audit using **one single unified agent utilizing all available specialized skills**. The audit covers three non-negotiable pillars:

```text
┌────────────────────────────────────────────────────────────────────────┐
│                   UNIFIED MULTI-DISCIPLINARY REVIEW                    │
│                        (Single Agent, All Skills)                      │
├─────────────────────┬──────────────────────────┬───────────────────────┤
│    1. UI CRITIC     │  2. "PONY TAIL" SECURITY │    3. CODE REVIEW     │
├─────────────────────┼──────────────────────────┼───────────────────────┤
│ • Anti-vibecoding   │ • 40 Security Mandates   │ • Strict TypeScript   │
│ • Spacing & tokens  │ • Zod input validation   │ • Next.js App Router  │
│ • Typography scale  │ • RLS & DB permissions   │ • Component modularity│
│ • WCAG AA contrast  │ • Leaked secrets / env   │ • Zero dead code      │
│ • Responsive (7 VP) │ • Sanitization & XSS/CSRF│ • Error boundaries    │
│ • Motion / Lenis    │ • Session & cookie flags │ • Bundle size & perf  │
│ • Headless Chromium │ • Rate limiting & auth   │ • Console log audit   │
└─────────────────────┴──────────────────────────┴───────────────────────┘
```

### Pillar 1: UI Critic Audit
- **Anti-Vibecoding Check**: Strictly verify that none of the 20 banned patterns ([`docs/ui-patterns-avoid.md`](ui-patterns-avoid.md)) are present (no purple gradients, no emojis in headings, no Lucide overload, no generic cards, no untouched Shadcn).
- **Aesthetic & Brand Fidelity**: Verify warm, authentic Ghanaian community development identity with refined editorial typography and structured whitespace.
- **Responsive Inspection**: Inspect rendering across mobile (375px), tablet (768px), laptop (1024px), desktop (1440px), and ultrawide (1920px). Zero horizontal scrolling, zero container clipping.
- **Accessibility Check**: WCAG AA contrast ratios (4.5:1 body, 3:1 large text), 44x44px touch targets, visible keyboard focus indicators, `prefers-reduced-motion` compliance.
- **Headless Chromium Inspection**: Run against the production build to capture and inspect screenshots for z-index collisions, text overflows, or rendering artifacts.

### Pillar 2: "Pony Tail" Security Review
> *A "Pony Tail" review is tight, taut, uncompromising, and paranoid—leaving zero loose strands or overlooked security gaps.*

- **Full 40 Security Mandates Audit**: Inspect against all rules in [`docs/security-requirements.md`](security-requirements.md).
- **Zero Exposed Secrets**: Verify no API keys, private credentials, or internal secrets are exposed in client-side code or git history.
- **Input Validation & Sanitization**: Ensure 100% of user inputs and structured mutations pass server-side Zod validation and proper sanitization.
- **Authorization & Data Privacy**: Check Row Level Security (RLS), least privilege DB policies, and strict access controls on sensitive volunteer documents (passports, CVs).
- **Network & Headers**: Verify HSTS, CSP headers, CORS policies, secure cookie attributes (`HttpOnly`, `SameSite`, `Secure`), and CSRF defenses.

### Pillar 3: Code & Architecture Review
- **Type Safety**: Zero TypeScript errors (`tsc --noEmit`), zero usage of `any` types.
- **Code Quality & Lints**: Clean lint report (`next lint`), consistent imports, modular components, no duplicate logic.
- **Test Integrity**: Component and unit tests passing in Vitest (`vitest run`).
- **Performance Budget**: Initial gzipped JS bundle within budget (<150 KB), zero memory leaks, cleanup of event listeners and GSAP/Lenis animations on unmount.
- **Console Hygiene**: Zero warnings, errors, or hydration mismatches in terminal or browser console.

### Remediation Mandate: Fix 100% of Findings
- **Zero Deferred Debt**: Every finding discovered across UI Critic, Security, and Code Review must be remediated immediately.
- Do not leave TODOs, temporary skips, or warnings. Re-validate after fixing until all three pillars pass cleanly.

---

## 6. Phase 5: Acceptance Check & Context Auto-Compaction

### 6.1 Acceptance Review Gate
Execute the formal acceptance review gate command:
```bash
npm run check:agent
```
All checks (`tsc --noEmit`, `next lint`, `vitest run`) must pass with zero errors and zero warnings.

### 6.2 Context Auto-Compaction
To prevent context bloat and keep working memory sharp:
- **Summarize in Living Docs**: Record key architectural decisions, resolved issues, and component APIs into `progress.md` and `handoff.md`.
- **Compact Context**: Condense verbose intermediate reasoning, tool outputs, and transient artifacts so only critical, high-signal information persists into the next cycle.

---

## 7. Phase 6: Merge to Main Branch & Final Verification

Once the branch is fully built, audited, remediated, and verified:

1. **Commit All Final Changes on Branch**:
   ```bash
   git add .
   git commit -m "feat(<feature>): complete <feature-name> with verified ui, security, and tests"
   ```
   *(Authored strictly as user, no AI co-author tags).*

2. **Sync and Switch to Main**:
   ```bash
   git checkout main
   git pull origin main
   ```

3. **Merge the Feature Branch**:
   ```bash
   git merge --no-ff <branch-name> -m "merge: integrate <branch-name> into main"
   ```

4. **Post-Merge Verification**:
   ```bash
   npm run check:agent
   ```
   Verify that the merged `main` branch builds cleanly and passes all tests.

5. **Update Living Documentation**:
   Update `docs/README.md` and feature build status to reflect completion.

6. **Repeat Cycle**:
   Move to the next feature branch and repeat until the complete V-HELD platform meets the [Definition of Done](definition-of-done.md).
