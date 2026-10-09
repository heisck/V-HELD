# V-HELD Landing Page Build Specification

> **Status**: Active  
> **Route**: `/` (`src/app/page.tsx`)  
> **Primary Visual Asset**: `/public/assets/landing/hero-primary.jpg`  
> **Governing Standards**: [`AGENTS.md`](../../../AGENTS.md), [`docs/README.md`](../../README.md)

---

## 1. Primary Page Visual & Background Architecture

The landing page features a full-bleed, unscaled, high-clarity background image displaying teammates climbing a mountain peak together at sunrise:

### Asset Details & Storage
- **Location**: `public/assets/landing/hero-primary.jpg`
- **Native Resolution**: 4096 × 2672 (High Definition 4K)
### Section 2: Hero Section (Editorial Layout)
- **Main Headline (H1)**: Positioned flush to the **bottom left edge** of the screen (`left-3 sm:left-5 lg:left-8 bottom-2 sm:bottom-4 lg:bottom-5`):
  - **Mountain-Filling Typography**: Ultra-bold uppercase with expanded letter and word spacing (`font-black uppercase tracking-[0.03em] [word-spacing:0.2em] sm:[word-spacing:0.28em] leading-[0.90] sm:leading-[0.92] lg:leading-[0.94] text-[15vw] sm:text-[13vw] lg:text-[11vw] xl:text-[10vw]`), commanding the entire lower mountain silhouette.
  - **Text**: `GIVE BACK.` / `MAKE A` / `DIFFERENCE!` (warm amber `#FBBF24`).
- **Right Light Zone Placement (Buttons & Supporting Narrative)**:
  - Positioned high in the radiant open sky (`top-[22%] sm:top-[26%] lg:top-[28%] right-3 sm:right-6 lg:right-10`) to completely clear the climbing figures in the center-left.
  - **Segmented Capsule Pill Button**: `[ Explore Programmes | Volunteer → ]` matching the reference.
  - **Stepped Downward Triangle Description**:
    - Line 1 (widest, max-w-[290px]): *"Join volunteers from Ghana & across the world"*
    - Line 2 (medium, max-w-[240px]): *"to support grassroots communities in"*
    - Line 3 (shortest, max-w-[190px]): *"health, education & leadership."*
- **Synchronized Navigation Color Transition**:
  - All navigation links and buttons share the exact identical `duration-400 ease-out` transition timing, ensuring all items transition from `rgb(245, 245, 244)` to `rgb(41, 37, 36)` uniformly at the exact same millisecond.




---

## 2. Floating Pill Navigation Architecture

The navigation is modeled after the minimalist floating pill layout:
- **Logo**: Simple, minimal icon-only SVG mark (`/assets/logo.svg` & `/icon.svg`). Clicking it navigates to Home (`/`). No text name in the navbar.
- **Dynamic Scroll States**:
  - **Initial / Top State**: Sits naturally directly on top of the hero backdrop with **no outer white container, no border, no bottom line, and no shadow**. Logo on the left, clean links in the middle, and Volunteer button on the right.
  - **On Scroll**: Transitions into a slim, compact, centered floating dock in the middle (`rounded-full bg-[#FAF7F5]/92 backdrop-blur-md border border-stone-200/70 shadow-lg px-4 py-1.5`).
- **Interactive Context Menus**:
  - Open automatically on **hover** for pointer devices (laptops/desktops via `hover: hover and pointer: fine`).
  - Open with a **tap/click** on touchscreen devices (tablets/phones).
- **Volunteer Dropdown**: Strictly contains the proof items (`Our Impact` and `Stories`), with no extra button inside.
- **Volunteer Button**: Features the direct entry action arrow icon with no enclosing circular border.
- **Scrollbar**: Completely hidden across all browsers while retaining native smooth scrolling.




---

## 2. Codebase vs. Cloud Storage: Architectural Comparison

### What Industry Professionals Do:
For **core brand artwork, hero backgrounds, and foundational UI assets**:
- **Store in the Codebase (`public/assets/`)**:
  1. **Instant First Paint & CDN Edge Delivery**: Served directly from the host CDN/edge alongside the HTML document without secondary DNS lookups or third-party SSL handshakes.
  2. **Zero Third-Party Latency or Failure Points**: The page renders even if external media services or API tokens experience downtime or rate limiting.
  3. **Native Next.js `<Image>` Optimization**: Next.js automatically creates device-specific modern image formats (AVIF/WebP) and serves responsive resolution `srcset`s while retaining maximum sharpness.
  4. **Version Control & CI/CD Portability**: Assets are versioned atomically with git commits and immediately available during local development, staging, and automated testing.

### When Cloud Storage (Cloudinary, AWS S3) is Used:
- Reserved for **dynamic, user-generated content (UGC)** such as:
  - Volunteer application attachments (CVs, passports, medical certificates).
  - Community photo gallery posts uploaded through an admin dashboard.
  - Dynamic blog articles and press release media.

**Decision for Primary Hero Background**: Kept directly in `public/assets/landing/hero-primary.jpg`.

---

## 3. Responsive Cropping & Clarity Directives

- **Component Configuration**:
  ```tsx
  <Image
    src="/assets/landing/hero-primary.jpg"
    alt="V-HELD primary landing visual"
    fill
    priority
    quality={100}
    sizes="100vw"
    className="object-cover object-center select-none"
  />
  ```
- **Clarity Rules**:
  - `quality={100}`: No aggressive downsampling or lossy artifacting.
  - `priority`: Preloaded immediately in the HTML `<head>` for near-zero Largest Contentful Paint (LCP).
  - `object-cover object-center`: Neatly fills 100% of the viewport on all viewports (mobile, tablet, desktop, ultra-wide) while keeping the ascending climbers and sunburst centered.
