# Agent Behavior Standards

## Operating Protocol

Before implementing any feature or modifying existing code, consult `AGENTS.md` and adhere to all documented guidelines.

When building, reviewing, or refactoring the application, agents must actively inspect and guard against:

* **Vibecoded visual patterns**: Reject AI template clichés (purple gradients, generic cards, emojis in headings, etc.).
* **Inconsistent UI**: Enforce design tokens, strict spacing scales, consistent component behavior, and aligned typography.
* **Security vulnerabilities**: Audit authentication barriers, database permissions, API payloads, and secret management.
* **Poor accessibility**: Ensure full keyboard navigability, visible focus rings, WCAG AAA/AA color contrast, and proper ARIA semantics.
* **Broken responsive behavior**: Test all layouts across mobile, tablet, and desktop viewports without clipping or horizontal overflow.
* **Duplicate logic**: Extract reusable utilities, hooks, and clean abstractions without introducing over-engineering.
* **Unnecessary complexity**: Keep solutions direct, clean, and maintainable.
* **Exposed secrets**: Ensure zero client-side leakage of credentials or sensitive environment variables.
* **Weak authentication / authorization**: Verify server-side authorization checks on every state change and sensitive resource.
* **Unsafe database access**: Enforce parameterized queries, Row Level Security, and least privilege database roles.
* **Unvalidated input**: Require strict server-side schema parsing (e.g., Zod) on all incoming requests and form submissions.
* **Missing error handling**: Provide comprehensive fallback UI, resilient network retry mechanisms, and structured error tracking.
* **Production-readiness issues**: Verify bundle size, build outputs, runtime performance, and zero console warnings/errors.

`AGENTS.md` is the single source of truth for all project-wide standards. Keep it continuously synchronized as new architectural or operational requirements emerge.
