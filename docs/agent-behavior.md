# Agent Behavior Standards

## Operating Protocol

Before implementing any feature or modifying existing code, consult `AGENTS.md` and adhere to all documented guidelines. All work must strictly follow the mandatory branch-to-main lifecycle specified in [`docs/workflow.md`](workflow.md) (branch isolation, branch documentation in `docs/build docs/<branch-name>/`, atomic user-only commits with zero AI co-authorship, multi-disciplinary completion gate, and clean main merge).

When building, reviewing, or refactoring the application, agents must actively inspect and guard against:

* **Text-only skeleton sections / pages (CRITICAL)**: Immediately reject and refactor any section constructed as merely a big bold headline and divs with plain text bullet points (the banned pattern stripped in commit `ee9ee21`). Every section must possess rich visual craft, tailored media, structured hierarchy, and physical depth.
* **Missing tailored media**: When building from UI references that include images, verify that tailored visual assets were generated and converted to `.webp`. Never accept empty text-box substitutions.
* **Vibecoded visual patterns**: Reject all 32 banned anti-patterns in [`docs/ui-patterns-avoid.md`](ui-patterns-avoid.md) (no badges above headlines, no em-dashes everywhere, no generic card boxes, no dark theme in this light-mode app).
* **Verbose action buttons**: Enforce "Be the action, don't describe it" (`Apply`, `Volunteer`, not "Apply to Volunteer").
* **Navigation bloat**: Enforce maximum 3–4 top-level items with single-word labels (`About`, `Focus`, `Volunteer`, `Partner`, `Contact`). Ensure navbar is unconfined at rest and zero compositor flash occurs during scroll.
* **Inconsistent UI**: Enforce design tokens, strict spacing scales, consistent component behavior, and aligned typography.
* **Security vulnerabilities**: Audit authentication barriers, database permissions, API payloads, and secret management.
* **Poor accessibility**: Ensure full keyboard navigability, visible focus rings, WCAG AAA/AA color contrast, and proper ARIA semantics.
* **Broken responsive behavior**: Test all layouts across mobile, tablet, and desktop viewports without clipping or horizontal overflow.
* **Duplicate logic**: Extract reusable utilities, hooks, and clean abstractions without introducing over-engineering.
* **Unnecessary complexity**: Keep solutions direct, clean, and maintainable.
* **Exposed secrets**: Ensure zero client-side leakage of credentials or sensitive environment variables (keep `folio-mcp.json` gitignored).
* **Weak authentication / authorization**: Verify server-side authorization checks on every state change and sensitive resource.
* **Unsafe database access**: Enforce parameterized queries, Row Level Security, and least privilege database roles.
* **Unvalidated input**: Require strict server-side schema parsing (e.g., Zod) on all incoming requests and form submissions.
* **Missing error handling**: Provide comprehensive fallback UI, resilient network retry mechanisms, and structured error tracking.
* **Production-readiness issues**: Verify bundle size, build outputs, runtime performance, and zero console warnings/errors.

`AGENTS.md` is the single source of truth for all project-wide standards. Keep it continuously synchronized as new architectural or operational requirements emerge.

