# Engineering Principles

All engineers and automated agents working on the codebase must adhere strictly to these principles:

1. **Do not blindly implement generated code.** Understand the mechanics, edge cases, and architectural impact of every line.
2. **Inspect the existing architecture before changing it.** Maintain consistency with existing patterns and conventions.
3. **Preserve existing functionality unless a change explicitly requires otherwise.** Prevent unintended regressions.
4. **Avoid unnecessary dependencies.** Every package added to `package.json` must have a compelling, justified reason.
5. **Keep components modular and maintainable.** Single responsibility, explicit prop interfaces, and clear composition.
6. **Keep spacing, typography, sizing, and interaction patterns consistent.** Adhere to the defined design system.
7. **Reuse the established design system instead of introducing random styles.** Avoid ad-hoc utility classes that break visual cohesion.
8. **Never expose secrets in client-side code.** Keep tokens, service role keys, and private credentials strictly server-side.
9. **Validate security-sensitive logic on the server.** Never trust client assertions or client-side validation alone.
10. **Test changes before considering them complete.** Verify rendering, user interactions, console cleanliness, and edge cases.
11. **Fix root causes instead of patching symptoms.** Trace issues to their source rather than applying brittle workarounds.
12. **Do not leave TODOs for critical security or production requirements.** Implement complete, production-ready solutions immediately.
13. **Keep commits small and focused.** Make atomic changes with descriptive, conventional commit messages.
14. **Make production readiness a requirement, not an afterthought.** Code is only complete when it meets all performance, security, and accessibility standards.
