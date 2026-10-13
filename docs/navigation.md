# Navigation Design Standards

## Purpose & Principles

Do not simply drop in a generic, cookie-cutter navbar. Invent navigation that feels integrated into the world of V-HELD (warm, inviting, community-grounded, professional NGO interface) with minimal cognitive load and instant clarity.

---

## Refined Navigation Architecture

Avoid overwhelming users with 8–10 loose buttons or verbose multi-word labels. Navigation must be concise, dignified, and scannable.

### 1. Top-Level Navigation Hierarchy (Single-Word Labels Only)
* **Maximum 3 to 4 Top-Level Items**:
  1. **`About`** (Heritage, leadership, community mission)
  2. **`Focus`** (Core pillars: Education, Health, Youth Leadership)
  3. **`Volunteer`** (Context menu / dropdown hub for volunteer pathways)
  4. **`Partner`** (Institutional partnerships, schools, clinics)
  5. **`Contact`** (Direct inquiry, Accra office, WhatsApp)
* **Primary Action**: **`Apply`** (Short, decisive action verb. Never "Apply to Volunteer").

### 2. Context Menus / Dropdowns for Secondary Pathways
Nest secondary destinations under lightweight dropdowns rather than scattering them across the main navbar:
* **`Volunteer`** nests:
  - **Why Volunteer** (Philosophy, two-way learning, community value)
  - **How It Works** (7-step journey from application to reflection)
  - **Impact** (Measurable outcomes, community data)
  - **Stories** (Field reflections, local & international voices)
* **No Bulky Dropdown Cards**: Dropdowns must be lightweight, clean link lists. Avoid bulky paragraph summaries and multi-line card filler inside menus.

### 3. Clean Brand Lockup
* Use the official horizontal vector logo (`/assets/brand/v-held-logo-horizontal.svg`).
* Do NOT tack on distracting, redundant subtitles like "Ghana" underneath the logo in the header.

---

## Resting vs. Scrolled Dynamics & Compositor Rules

### 1. Unconfined Full-Width Header at Rest
* At the top of the page (`scrollY <= 20px`), the navigation bar is **completely unconfined** across the full viewport width:
  - `w-full rounded-none border-0 pt-0 px-0`
  - Background: `bg-[#EFE9E2]/80` or matches page surface
  - Brand logo aligned to the left, navigation centered/spaced, action buttons aligned to the right.
* **Zero Line Divider at Rest**: The navbar must have no bottom border divider (`border-0`), melting seamlessly into the `#EFE9E2` page surface.

### 2. Centered Floating Pill on Scroll
* As the user scrolls down (`scrollY > 20px`), the navbar packs inward into a centered floating pill:
  - `max-w-4xl rounded-full border border-stone-200 shadow-md pt-3`

### 3. Zero Compositor Flash Mandate (CRITICAL)
* **Root Cause of White Flash**: Animating `backdrop-filter` (e.g. from `blur-sm` to `blur-md`) or animating `background-color` opacities (e.g. `bg-white/80` to `bg-white/95`) with `transition-all` forces the browser's compositor to drop the GPU texture cache on the layout boundary, flashing raw white before re-rasterizing the blur shader.
* **Mandatory Technical Implementation**:
  1. Maintain **100% identical background and blur properties** across both resting and scrolled states (`bg-white/95 backdrop-blur-md border border-stone-200`).
  2. **NEVER use `transition-all`** on elements with backdrop filters. Constrain the transition strictly to geometry/elevation:
     ```css
     transition-[max-width,padding,box-shadow,border-radius] duration-300 ease-out
     ```
  3. Apply `transform-gpu` (`transform: translateZ(0)`) to ensure the compositor maintains a dedicated hardware layer.

---

## Usability Over Novelty

* **Instant Wayfinding**: Clear active states, intuitive routes, and effortless return to home.
* **Mobile Drawer**:
  - Full-screen accessible dialog with clean vertical links.
  - Minimum 44 × 44px touch targets.
  - Direct contact links (Accra office & WhatsApp).
  - Full keyboard accessibility (Tab, Shift+Tab, Escape to close) and focus trap.

