# Security Requirements

## Part 1: Security Requirements Before Launch

1. **Never expose API keys** in client-side code or public repositories.
2. **Purge secrets from Git history** if ever accidentally committed.
3. **Use public database keys only where appropriate**; keep admin keys server-side only.
4. **Enable Row Level Security (RLS)** or equivalent access barriers on all database tables.
5. **Encrypt sensitive data** at rest and in transit.
6. **Enforce authentication server-side** on all protected routes and API actions.
7. **Lock record access to authorized users** (strict ownership/role-based checks).
8. **Prevent field/property tampering** (mass-assignment protection and strict schema validation).
9. **Secure session cookies** (HttpOnly, Secure, SameSite=Lax/Strict).
10. **Hash passwords securely** using modern algorithms (e.g., Argon2id or bcrypt with appropriate work factor).
11. **Rate-limit login attempts** to protect against brute-force attacks.
12. **Add bot/abuse protection** (e.g., Turnstile, honeypots, rate limiting).
13. **Parameterize database queries** to eliminate SQL injection vulnerabilities.
14. **Validate all input** strictly using type-safe schemas (e.g., Zod).
15. **Escape/sanitize user-generated content** before rendering to prevent XSS.
16. **Restrict file uploads** by file type, MIME type, and size; store in isolated cloud storage (Cloudinary).
17. **Return only necessary API data** (never leak full database rows, password hashes, or internal IDs).
18. **Add security headers** (Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, Referrer-Policy).
19. **Force HTTPS in production** with automatic redirection.
20. **Scan dependencies for vulnerabilities** regularly using automated tooling (`npm audit`, Dependabot).

---

## Part 2: Additional Security Requirements

1. **Add HSTS** (HTTP Strict Transport Security) with appropriate max-age and preload directives.
2. **Add CSRF protection/tokens where applicable** for state-changing operations.
3. **Reset/invalidate sessions after password changes** across all devices.
4. **Expire password-reset links** after a short window (e.g., 15–30 minutes) and single use.
5. **Prevent user/account enumeration** (use uniform response messages and timings on auth/reset endpoints).
6. **Whitelist permitted upload file types** explicitly using extension and magic-byte/MIME inspection.
7. **Verify payment webhooks** cryptographically using official webhook signatures.
8. **Set/validate prices server-side** (never trust amounts or currencies submitted by the client).
9. **Protect against prompt injection** when integrating AI or LLM capabilities.
10. **Cap and control AI usage** with strict per-user rate limits and quotas.
11. **Limit request/body size** to prevent denial-of-service via large payloads.
12. **Rate-limit password-reset requests** to stop email flooding/abuse.
13. **Sanitize data before storing it** in database records.
14. **Lock down CORS to trusted origins** only.
15. **Disable directory listing** on servers and storage buckets.
16. **Remove default/admin routes that should not be publicly accessible**.
17. **Lock accounts or apply progressive delay protection after repeated failed logins**.
18. **Log important security events** (auth failures, privilege changes, suspicious input) for audit trails.
19. **Set secure cookie flags** (`__Host-` or `__Secure-` prefixes where supported).
20. **Restrict database permissions using least privilege** (application connection should not have DDL/superuser rights).
