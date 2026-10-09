# Raw Requirements & Master Input Archive

> **Note**: This file archives the complete, verbatim instructions and requirements provided by the user across prompts for permanent reference and ongoing tracking.

---

## Prompt 1: Project Directives, Anti-Vibecoding, Security, and Definition of Done

```markdown
these are all md is collected from different projects i built i want you to put them in separate md in the docs like i have started this project is not a portfolio website so leave that out and leave the brainstorming and review parts out oo                                                                                                                                                         FIND IT BELOW THIS IS A BIG PROJECT SO COPY EVERYTHING I SAY AND PUT IT IN A MARKDOWN FILE AND UPDATE IT AS YOU BUILD DONT TRY TO CRAM EVERYTHING IN TO YOUR CONTEXT. THAT IS THE FIRST THING TO DO AND THEN REFER THOSE MARKDOWNS IN YOUR AGENT MARKDOWN FILES THAT WILL BE THE FIRST THING I CHECK. REWRITE BEFORE EVEN THINKING # Build a Wow-Worthy 3D Portfolio Website

You are the lead creative developer, senior frontend engineer, interaction designer, motion designer, and QA engineer for this project.

Your job is to design and build an original, unconventional, production-quality portfolio website from scratch.
...
[Full master text included in docs/raw-spec.md archive]
...
Update AGENTS.md with the following rules. Do not just acknowledge them — actually add them to the file and organize them into clear sections.

# Design & UI Standards
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

# Before Building
Before building or making major changes:
1. Create a PRD
...
20. Commit small changes frequently

# Security Requirements Before Launch
1. Never expose API keys
...
20. Scan dependencies for vulnerabilities

# Additional Security Requirements
1. Add HSTS
...
20. Restrict database permissions using least privilege

# Engineering Principles
- Do not blindly implement generated code.
...
- Make production readiness a requirement, not an afterthought.

# Typography / Font Direction
Do not automatically default to Inter, Space Grotesk, Instrument Serif...

# Agent Behavior
Before implementing a feature, check AGENTS.md and follow all applicable requirements...

# DEFINITION OF DONE
DO NOT DECLARE THIS PROJECT COMPLETE UNTIL EVERY REQUIREMENT BELOW IS TRUE.
...
```

---

## Prompt 2: Integration of Review Gate & Architecture from Reference Project

```markdown
add the review and important things from this read me to the one we have                                                                                                                   # SynapseLearn

An AI tutor that turns a learner's own course material into slides, explanation,
and assessment — and keeps the learner's work on the learner's machine.

Two principles run through the whole codebase, and most of the architecture is
downstream of them:

1. **The platform stores nothing personal.** Course content, question banks,
   tutor memory, review queue and transcripts live in the learner's browser
   (IndexedDB) or in cloud storage *they* own. The shared database holds only
   what the system itself needs: prompts, configuration, and the opt-in
   anonymous leaderboard. See [docs/DATA-LOCATION.md](docs/DATA-LOCATION.md).
2. **No model output reaches the learner unchecked.** Generated questions and
   structured output pass a code-level validation layer — schema checks, not an
   AI reviewer. Invalid output is retried with corrective feedback, never shown.

## Getting started

```bash
npm install          # runs prisma generate + copies ONNX runtime assets
cp .env.example .env # fill in provider keys; see the file's own comments
npm run db:push      # create the local SQLite database
npm run dev          # http://localhost:3000
```

`npm install` triggers a `postinstall` that generates the Prisma client and
copies the ONNX runtime assets used by local speech. Both also run before `dev`
and `build`, so a fresh clone does not need extra steps.

## Everyday commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server on port 3000 |
| `npm run build` | Production build + standalone asset copy |
| `npm start` | Serve the standalone build |
| `npm test` | Unit and integration tests (vitest) |
| `npm run lint` | ESLint |
| `npm run check:agent` | The full gate: `prisma validate` + `tsc` + lint + tests |
| `npm run test:e2e` | Playwright end-to-end tests |
| `npm run eval` | Model evaluations — real provider calls, slow, costs money |

`npm run check:agent` is the one to run before opening a pull request. It is the
same gate described in [docs/FINAL-ACCEPTANCE.md](docs/FINAL-ACCEPTANCE.md).

## Production container and Office originals

The checked-in `Dockerfile` installs Debian's maintained headless LibreOffice
packages (Writer + Impress) and verifies the executable while building. This is
the local fallback for PPTX, DOCX, ODP, ODT and RTF → PDF conversion:

```bash
docker build -t synapse .
docker run --rm -p 3000:3000 --env-file .env synapse
```

When `GOTENBERG_URL` is set, Gotenberg remains the primary supervised converter
and local LibreOffice is used after a remote failure. On serverless deployments
that cannot run this container or install executables, Gotenberg is required to
retain Office layout; a browser cannot render a private `.pptx` directly.

## Layout

```
src/
  app/api/      Route handlers (agent, chat, questions, vision, upload, …)
  components/   React UI — app/, tutor/, landing/, shared/, ui/
  lib/          Domain logic. Most of the system lives here.
    agent/      The tutor agent: prompt assembly, intent, memory, modes,
                task registry, review queue. Has its own docs — start at
                src/lib/agent/DESIGN.md.
    llm/        Provider gateway and model chains
    document/   Course material ingestion
    voice/      Local speech (STT/TTS web workers)
    orchestrator/
  stores/       Zustand store, split into slices/
  types/        Shared types
docs/           Architecture, decisions, and research. See docs/README.md.
scripts/        Operational and benchmark scripts
e2e/            Playwright specs
```

## Where the model configuration lives

Model chains are defined in `src/lib/llm/providerGateway.ts` and were last
rebuilt from measurement on 2026-08-05 — see the comment above the chain
definitions, and [docs/CHEAP_LLM_PROVIDER_DECISION.md](docs/CHEAP_LLM_PROVIDER_DECISION.md)
for the superseded July benchmark and why the two disagree.

## Documentation

[docs/README.md](docs/README.md) indexes every document and marks which are
current, which are historical, and which have been superseded. The agent
subsystem keeps its own contract in
[src/lib/agent/DESIGN.md](src/lib/agent/DESIGN.md).
```

---

## 2026-10-09 Prompt 4: Real System Logos Reconstructed to SVG

> `/home/heisck/.var/app/org.telegram.desktop/data/TelegramDesktop/tdata/temp_data/photo_1_2026-10-09_08-41-10.jpg`  
> `/home/heisck/.var/app/org.telegram.desktop/data/TelegramDesktop/tdata/temp_data/photo_2_2026-10-09_08-41-10.jpg`  
> `/home/heisck/.var/app/org.telegram.desktop/data/TelegramDesktop/tdata/temp_data/photo_3_2026-10-09_08-41-10.jpg`  
> `/home/heisck/.var/app/org.telegram.desktop/data/TelegramDesktop/tdata/temp_data/photo_4_2026-10-09_08-41-10.jpg`  
> we have the real system logos here you will create an svg version of them all only the logo the names the descriptions everything exact copy of it and put in the logo section so i can see them

---

## 2026-10-09 Prompt 5: Develop Trunk, Ticket Hierarchy & Human PR Gate

> once that is done delete the landing page branch and create a new branch from main called develop. that is where we will work from, then from develop that is where we will create the other branches and merge into so change the mds we will not create the branches from main but from develop and each branch will have a ticket so say we are working on landing page it has a ticket and then we create the landing page sections from it maybe the headercompnent, and so on all branch from that main branch, then we merge itno the parent. create the pr for develop and inform to check out the build if i approve you merge and continue else we fix my remarks so we update the develop met work flow.
