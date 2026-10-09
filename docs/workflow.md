# Mandatory Ticket-Driven Development & Review Workflow (Develop Trunk)

> **Standard**: This document defines the mandatory, non-negotiable end-to-end development, git, documentation, review, and merge lifecycle for every feature, ticket, and milestone in V-HELD. All contributors and agents must follow this workflow iteratively until the entire application is completed.

---

## 1. Workflow Architecture & Lifecycle Loop

All ongoing feature and component development is rooted in the **`develop`** branch. The **`main`** branch is strictly reserved for verified, production-ready releases.

### 1.1 Hierarchical Branching Model
```text
main (Protected Production Releases)
  ▲
  │ (Milestone PR after full integration)
  │
develop (Active Integration Trunk)
  │
  ├──► 1. Create Ticket Branch ────────────────► ticket/<ticket-id>-<feature> (from develop)
  │      │
  │      ├──► 2. Create Documentation Suite ───► docs/build docs/<ticket-name>/
  │      │                                         ├── <ticket-name>.md
  │      │                                         ├── progress.md (with MCP counter)
  │      │                                         └── handoff.md
  │      │
  │      ├──► 3. Create Sub-Task Branches ─────► subtask/<ticket-id>-<section-name> (from ticket)
  │      │      │                                  (e.g., header, hero, impact, footer)
  │      │      ├── Reference Landingfolio MCP ─► Fetch once, cache locally (≤ 100 calls/day)
  │      │      ├── Subagent Design Taste Audit ─► Evaluate UI options before code
  │      │      ├── 9-Step Incremental Build ───► Component, test, DOM, console, responsive
  │      │      ├── Periodic User Commits ──────► Strictly authored as Heisck (ZERO AI tags)
  │      │      └── Merge into Parent Ticket ───► git merge --no-ff subtask/...
  │      │
  │      ├──► 4. Multi-Disciplinary Gate ──────► Single Agent with all specialized skills:
  │      │                                         ├── UI Critic (Anti-vibecoding, 7 viewports)
  │      │                                         ├── "Pony Tail" Security (40 mandates, zero leaks)
  │      │                                         └── Code Review (Strict TS, lint, vitest)
  │      │
  │      ├──► 5. Remediate ALL Findings ───────► Fix 100% of findings; zero warnings or debt
  │      ├──► 6. Acceptance Gate & Compaction ─► npm run check:agent & compact context
  │      │
  │      └──► 7. Open PR Targeting 'develop' ──► gh pr create --base develop --head ticket/...
  │             │
  │             ▼
  │      8. HUMAN INSPECTION & APPROVAL GATE
  │             │
  │             ├── Agent informs user to inspect and test the running build
  │             │
  │             ├── User Remarks / Changes Requested ──► Fix on ticket branch ──► Re-inspect
  │             │
  │             └── User Explicit Approval ───────────► Merge PR into develop
  │
  └──► Repeat for next ticket branch
```

---

## 2. Phase 1: Trunk Architecture & Ticket Branch Creation

### 2.1 The `develop` Trunk Rule
1. **Never build directly on `main`**: `main` contains only deployed production code.
2. **Never branch features directly from `main`**: All feature and ticket branches branch exclusively from `develop`.
3. **Always sync before branching**:
   ```bash
   git checkout develop
   git pull origin develop
   ```

### 2.2 Ticket Branch Naming Convention
Every task or feature track must be tied to a specific ticket identifier:
- **Format**: `ticket/<ticket-id>-<ticket-slug>`
- **Examples**:
  - `ticket/VH-101-landing-page`
  - `ticket/VH-102-authentication-flow`
  - `ticket/VH-103-programmes-directory`
  - `ticket/VH-104-volunteer-application`

```bash
git checkout -b ticket/<ticket-id>-<ticket-slug>
```

Verify the active branch:
```bash
git branch --show-current
```

---

## 3. Phase 2: Branch Documentation Suite

Every ticket branch must have a dedicated documentation subfolder created immediately under `docs/build docs/<ticket-name>/` (e.g. `docs/build docs/landing-page/`). This folder must contain three living documents:

### 3.1 `<ticket-name>.md` (Feature & Architecture Specification)
- Route and layout structure (e.g., `/`, `/programmes`, `/apply`).
- Wireframe/editorial component breakdown and visual hierarchy.
- Design tokens, typography rules, color palettes, and asset paths.
- Component interface contracts, TypeScript props, and state models.
- Anti-vibecoding checklist specific to the feature.

### 3.2 `progress.md` (Living Status Tracker & MCP Quota Counter)
- **Status Overview Table**: Metrics, current status (Completed / In Progress / Pending), and details.
- **Landingfolio MCP Daily Usage Tracker**: Active counter tracking requests against the 100 calls/day limit:
  ```markdown
  ### Landingfolio MCP Daily Usage Tracker (Daily Limit: 100)
  | Call # | Date | Component / Section Queried | Local Cache Path | Calls Remaining |
  | :--- | :--- | :--- | :--- | :--- |
  | 01 | 2026-10-09 | Hero Editorial Layout | docs/build docs/landing-page/references/hero.png | 99 |
  ```
- **Deliverables Checklist**: Granular checkbox list (`- [x]` / `- [ ]`) of implemented components and features.
- **Validation & Test History**: Record of type-check, lint, unit tests, and browser verification passes.
- **Blockers & Decisions**: Architecture decisions or dependencies resolved.

### 3.3 `handoff.md` (Engineering Handoff Document)
- Primary asset paths, local MCP reference files, and CDN configurations.
- Interaction physics, scroll dynamic thresholds, and animation specs.
- API endpoint contracts, Zod schemas, and server actions.
- Responsive breakpoints, touch targets, and accessibility requirements.
- Verification notes and deployment considerations.

---

## 4. Phase 3: UI Design Reference via Landingfolio MCP & Design Taste Governance

### 4.1 Strict Security: `folio-mcp.json` Permanently Gitignored
- `folio-mcp.json` resides in the project root and configures the Landingfolio MCP server with an authorized bearer token.
- **NON-NEGOTIABLE RULE**: `folio-mcp.json` is and **must always remain gitignored** (`.gitignore`).
- Never stage, commit, log, or leak `folio-mcp.json` or its bearer token into Git history.

### 4.2 The "No Designing From Your Head" Mandate
- **Never design in isolation**: Agents must **NOT** invent UI layouts, components, card hierarchies, section flows, or animation choreography purely from memory or default AI templates.
- **Mandatory Reference Source**: All UI components, section structures (landing page heroes, features, impact metrics, stories, footers), micro-layouts, divs, and animations must be explicitly referenced from the Landingfolio collection via the Folio MCP.
- Use the MCP collection to retrieve real, production-grade visual designs, section blueprints, interaction patterns, and code implementations.

### 4.3 Daily Quota & Mandatory Call Counter (Max 100 Requests / Day)
- **Hard Ceiling**: We operate under a strict rate limit of **100 MCP requests per day**.
- Every ticket track must log and maintain the active MCP call counter in `docs/build docs/<ticket-name>/progress.md`.
- Before making an MCP call, check the day's total calls. If the counter reaches 100, no further MCP requests may be issued until the next day; rely entirely on previously cached references.

### 4.4 Aggressive Local Storage & Asset Caching (Fetch Once, Reuse Forever)
- To conserve the 100-calls/day budget, **never make repeated calls for the same design, section, or asset**:
  - Whenever querying the MCP, download and store the code snippet, screenshot, and screen recording directly on the local filesystem (under `docs/build docs/<ticket-name>/references/` or `public/assets/reference/<section>/`).
  - Read from the saved local reference files during implementation.
  - Re-use cached references across similar sections or future iterations rather than calling the MCP again.

### 4.5 Subagent Design Taste Audits for UI Options
- When selecting between design options, section layouts, animations, or styling treatments:
  - **Spawn a specialized subagent** via `invoke_subagent`.
  - Provide the subagent with the retrieved MCP options, screenshots, and proposed code.
  - The subagent conducts a **Design Taste Audit**, assessing:
    1. Alignment with V-HELD's brand (warm, authentic Ghanaian community development, professional NGO aesthetic).
    2. Adherence to anti-vibecoding rules ([`docs/ui-patterns-avoid.md`](ui-patterns-avoid.md)).
    3. Editorial typography, spacing harmony, visual weight, and interaction subtlety.
  - Implement only the option that passes the subagent's design taste audit.

---

## 5. Phase 4: Sub-Task Section Branching & Incremental Build

### 5.1 Sub-Task Branch Creation
For complex tickets composed of multiple sections or components (e.g. `landing-page` containing header, hero, impact metrics, program grid, stories, CTA, and footer), break the work into isolated sub-task branches:
- **Base**: The parent ticket branch (`ticket/<ticket-id>-<ticket-slug>`).
- **Naming**: `subtask/<ticket-id>-<section-name>`
- **Example**:
  ```bash
  # Ensure you are on the ticket branch
  git checkout ticket/VH-101-landing-page
  
  # Branch off for a specific section
  git checkout -b subtask/VH-101-header-component
  ```

### 5.2 9-Step Incremental Validation Lifecycle
Work on the section following the **9-step incremental validation protocol** ([`docs/incremental-validation.md`](incremental-validation.md)):
1. Build component referencing local MCP cache
2. Run relevant unit/component test
3. Verify DOM render
4. Check browser and terminal console for errors
5. Check interaction behavior and micro-interactions
6. Check responsive layout across 7 viewports
7. Check performance impact (<150 KB bundle, 60fps)
8. Fix any identified defects at root cause immediately
9. Advance to next subtask or section

### 5.3 Periodic Atomic Commits with Strict User Authorship (CRITICAL)
- Make small, frequent, atomic commits as components or milestones are finished.
- **Commit as User ONLY**: All commits must be authored strictly and exclusively as the repository owner (`Heisck <kelvinkwabenaparkingston@gmail.com>`).
- **ZERO AI Attributions**:
  - **NEVER** include "Gemini", "Antigravity", "AI Assistant", or any third-party agent names in the commit author, committer, or commit message body.
  - **NEVER** add `Co-authored-by: Gemini...` or `Co-authored-by: ...` trailers to commit messages.
  - **NEVER** include contributor annotations attributing work to an AI agent.
- Commits must look 100% human-authored by the user with standard conventional commit syntax (e.g. `feat(header): implement floating navigation bar with scroll dynamics`).

### 5.4 Merging Sub-Task Branches into Parent Ticket Branch
Once a section is validated:
```bash
git checkout ticket/<ticket-id>-<ticket-slug>
git merge --no-ff subtask/<ticket-id>-<section-name> -m "feat(<section>): integrate <section-name> into <ticket-slug>"
git branch -d subtask/<ticket-id>-<section-name>
```
Repeat for each section until all subtasks for the ticket are merged into the parent ticket branch.

---

## 6. Phase 5: Multi-Disciplinary Completion Gate (Single Unified Agent)

When all subtasks of the ticket are integrated into the parent ticket branch, execute a comprehensive, rigorous multi-disciplinary audit using **one single unified agent utilizing all available specialized skills**. The audit covers three non-negotiable pillars:

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
- **Aesthetic & Brand Fidelity**: Verify warm, authentic Ghanaian community development identity with refined editorial typography and structured whitespace. Verify alignment with the approved MCP reference.
- **Responsive Inspection**: Inspect rendering across mobile (375px), tablet (768px), laptop (1024px), desktop (1440px), and ultrawide (1920px). Zero horizontal scrolling, zero container clipping.
- **Accessibility Check**: WCAG AA contrast ratios (4.5:1 body, 3:1 large text), 44x44px touch targets, visible keyboard focus indicators, `prefers-reduced-motion` compliance.
- **Headless Chromium Inspection**: Run against the production build to capture and inspect screenshots for z-index collisions, text overflows, or rendering artifacts.

### Pillar 2: "Pony Tail" Security Review
> *A "Pony Tail" review is tight, taut, uncompromising, and paranoid—leaving zero loose strands or overlooked security gaps.*

- **Full 40 Security Mandates Audit**: Inspect against all rules in [`docs/security-requirements.md`](security-requirements.md).
- **Zero Exposed Secrets**: Verify no API keys, private credentials, or internal secrets are exposed in client-side code or git history (including ensuring `folio-mcp.json` remains gitignored).
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

## 7. Phase 6: Acceptance Review Gate & Context Auto-Compaction

### 7.1 Acceptance Review Gate
Execute the formal acceptance review gate command on the ticket branch:
```bash
npm run check:agent
```
All checks (`tsc --noEmit`, `next lint`, `vitest run`) must pass with zero errors and zero warnings.

### 7.2 Context Auto-Compaction
To prevent context bloat and keep working memory sharp:
- **Summarize in Living Docs**: Record key architectural decisions, resolved issues, MCP references used, and component APIs into `progress.md` and `handoff.md`.
- **Compact Context**: Condense verbose intermediate reasoning, tool outputs, and transient artifacts so only critical, high-signal information persists into the next cycle.

---

## 8. Phase 7: Pull Request to Develop & Human Inspection / Approval Gate

Once the ticket branch is fully built, audited, remediated, and verified:

### 8.1 Push Ticket Branch & Open PR Targeting `develop`
1. Push the parent ticket branch to origin:
   ```bash
   git push -u origin ticket/<ticket-id>-<ticket-slug>
   ```
2. Open a Pull Request targeting `develop`:
   ```bash
   gh pr create --base develop --head ticket/<ticket-id>-<ticket-slug> \
     --title "feat(<ticket-id>): <ticket-slug> implementation" \
     --body "..."
   ```

### 8.2 The Human Inspection & Approval Gate
1. **Notify User to Inspect**: The agent informs the user that the PR is ready and requests visual and functional inspection of the running build.
2. **Review Scenarios**:
   - **User Requests Changes / Gives Remarks**:
     - Do NOT merge into `develop`.
     - Return to the ticket branch (`ticket/<ticket-id>-<ticket-slug>`).
     - Remediate all user remarks.
     - Re-run `npm run check:agent`.
     - Push commits to the branch (`Heisck <kelvinkwabenaparkingston@gmail.com>`).
     - Prompt user to re-inspect.
   - **User Approves**:
     - Merge the PR into `develop`:
       ```bash
       gh pr merge --squash # or git merge --no-ff
       ```
     - Pull updated `develop` locally:
       ```bash
       git checkout develop
       git pull origin develop
       ```
     - Proceed to the next ticket.

---

## 9. Phase 8: Promoting Releases from Develop to Main

When major milestone releases are complete and all tickets for a cycle have been integrated and verified on `develop`:
1. Open a release Pull Request from `develop` into `main`:
   ```bash
   gh pr create --base main --head develop \
     --title "release: <milestone-version> - <summary>" \
     --body "..."
   ```
2. User reviews and approves the release PR.
3. Merge `develop` into `main` and tag the release version.
4. Verify production deployment.
