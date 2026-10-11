# Technology Stack & Asset Infrastructure

## 1. Frontend Core
* **Framework**: Next.js (App Router, Server Components where appropriate)
* **Language**: TypeScript (strict mode, zero `any`)
* **Styling**: Tailwind CSS
  - **Strict Pure Light Theme Only**: Zero `dark:` classes, zero auto `prefers-color-scheme` switching, zero dark theme toggle.
  - Core Palette: Ghanaian Forest Green (`#065830`), African Gold (`#E3A709`), Terracotta (`#C34D21`), Pure White (`#FFFFFF`), Organic Warm Sand (`#EFE9E2`), Deep Charcoal (`#121110`).
* **Motion & Animation**:
  - GSAP & ScrollTrigger
  - Lenis smooth scroll
  - Framer Motion (where appropriate for layout transitions)
* **3D / WebGL**: Three.js, React Three Fiber, Drei (strictly where justified, with proper resource disposal)

---

## 2. Media, Asset & Imagery Architecture
* **Format Standard**: Strictly **WebP (`.webp`)** for all raster images, community photos, and generated illustrations.
* **Tailored Image Generation**: Whenever a UI reference from Landingfolio or wireframe includes image slots, agents must generate tailored images matching V-HELD's Ghanaian community development context and convert them to WebP. Never substitute image slots with empty text divs.
* **Vector Assets**: Clean SVGs for logos and semantic icons (`v-held-logo-horizontal.svg`, light variants).
* **Production Storage**: Cloudinary cloud storage for volunteer media and dynamic assets.

---

## 3. Backend, Database & Infrastructure
* **Database**: Turso DB (libSQL / SQLite edge database) with Drizzle ORM / parameterized queries
* **Validation**: Zod (100% server-side validation on all mutations and inputs)
* **Caching & Rate Limiting**: Upstash Redis (rate limiting, session stores)
* **Error Tracking**: Sentry error monitoring
* **Development Containers**: Podman container services bound strictly to `127.0.0.1` (sqld, Redis, local mock storage)

---

## 4. Governance
* Do NOT blindly install libraries.
* Every dependency must have a documented reason.
* Reuse established UI primitives and design system tokens.

