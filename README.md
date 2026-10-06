# V-HELD — Volunteers in Health, Education and Leadership Development

> **Tagline**: Give Back. Make a Difference!  
> **Mission**: Connecting passionate local and international volunteers with community-driven health, education, and youth leadership initiatives across Ghana.

---

## Core Architectural Principles

Two core principles run through the entire codebase, and the system architecture is strictly downstream of them:

1. **The platform stores nothing personal unnecessarily (Data Privacy by Design).**
   Volunteer application materials, identification files, and personal contact details are stored securely in encrypted storage with strict Row Level Security (RLS). File uploads (CVs, credentials) are held in isolated cloud storage (Cloudinary) with restricted access. The database stores only what the organisation strictly needs for programme coordination and vetting. See [`docs/security-requirements.md`](docs/security-requirements.md).
2. **No input or structured data reaches the system unchecked (Code-Level Validation Layer).**
   All form inputs, API payloads, and dynamic content must pass a strict code-level validation layer using type-safe schemas (Zod) on the server—never relying on client-side validation or informal checks alone. Invalid submissions are rejected with clear, actionable corrective feedback, never stored or rendered unsanitized.

---

## Getting Started

```bash
npm install               # install dependencies
cp .env.example .env.local # configure environment keys (Turso, Cloudinary, Sentry)
npm run db:push           # push schema migrations to Turso database
npm run dev               # start local development server at http://localhost:3000
```

---

## Everyday Commands

| Command | What it does |
| :--- | :--- |
| `npm run dev` | Development server on port 3000 |
| `npm run build` | Production build (`next build`) |
| `npm start` | Serve the production build (`next start`) |
| `npm test` | Unit and integration tests (Vitest) |
| `npm run lint` | Code linting and style checks (ESLint) |
| `npm run check:agent` | **The full review gate**: `tsc --noEmit` + lint + unit/integration tests |
| `npm run test:e2e` | Playwright end-to-end browser tests |
| `npm run test:visual` | Visual regression screenshot tests |

> **Review Gate**: `npm run check:agent` is the mandatory verification gate to run before opening a pull request, committing code, or completing an implementation milestone. It guarantees type safety, lint compliance, and passing tests as defined in [`docs/definition-of-done.md`](docs/definition-of-done.md).

---

## Project Layout

```
src/
  app/            Next.js App Router (pages, layout, route handlers)
    api/          Server API endpoints (applications, contact, webhooks)
    programmes/   Programme catalogue and detail dynamic routes
    volunteer/    Volunteer application journey and onboarding
    about/        About V-HELD, mission, leadership, safeguarding
    impact/       Impact metrics and community field stories
    contact/      Contact inquiry and partnership intake
  components/     Modular React components
    ui/           Accessible primitives (buttons, inputs, modal dialogs)
    landing/      Home sections (hero, focus areas, journey, testimonials)
    programmes/   Programme filter, detail cards, requirement badges
    volunteer/    Multi-step volunteer application form
    shared/       Navigation drawer, footer, cookie consent, SEO metadata
  lib/            Domain logic & services
    db/           Turso database client, queries, and schema
    validations/  Zod schemas for all form inputs and API payloads
    storage/      Cloudinary media upload and asset management
    email/        Transactional notification dispatch (applications, alerts)
  stores/         Client-side state management (Zustand)
  types/          Shared TypeScript interfaces and types
docs/             Architecture, decisions, and guidelines. See docs/README.md.
e2e/              Playwright end-to-end testing specifications
scripts/          Deployment, maintenance, and database migration scripts
```

---

## Documentation Index & Governance

[`docs/README.md`](docs/README.md) indexes every project specification document and marks its current governance status (`Current`, `Living`, or `Superseded`).

* **Master Agent Guidelines**: [`AGENTS.md`](AGENTS.md)
* **Project Content Brief**: [`docs/project-details.md`](docs/project-details.md)
* **Technology Stack**: [`docs/technology-stack.md`](docs/technology-stack.md)
* **Design & UI Standards (Anti-vibecoding)**: [`docs/ui-patterns-avoid.md`](docs/ui-patterns-avoid.md)
* **Pre-Building Checklist**: [`docs/before-building.md`](docs/before-building.md)
* **Security Requirements (40 Mandates)**: [`docs/security-requirements.md`](docs/security-requirements.md)
* **Engineering Principles**: [`docs/engineering-principles.md`](docs/engineering-principles.md)
* **Typography & Font Direction**: [`docs/typography.md`](docs/typography.md)
* **Performance Budget**: [`docs/performance-budget.md`](docs/performance-budget.md)
* **Incremental Validation Protocol**: [`docs/incremental-validation.md`](docs/incremental-validation.md)
* **Automated Testing Strategy**: [`docs/automated-testing.md`](docs/automated-testing.md)
* **Headless Chromium QA**: [`docs/headless-chromium-qa.md`](docs/headless-chromium-qa.md)
* **Definition of Done**: [`docs/definition-of-done.md`](docs/definition-of-done.md)

---

## Core Focus Areas

1. **Education & Teaching**: Supporting classrooms, schools, learners, and community educational programs.
2. **Health & Community Wellbeing**: Assisting with community health outreaches, health education, and local health facilities.
3. **Youth & Leadership Development**: Mentorship, skills training, personal growth, and entrepreneurship initiatives for Ghanaian youth.