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
- **Main Headline (H1)**: Positioned at the **bottom left** under the mountain slope:
  - **Typography**: Heavy condensed uppercase with tight tracking matching the reference image (`font-black tracking-tighter uppercase leading-[0.88]`).
  - **Text**: `GIVE BACK.` / `MAKE A` / `DIFFERENCE!`
- **Vision Narrative**: Positioned in the lower-right area where the vision text sits in the architectural reference:
  - *"Join volunteers from Ghana and across the world to empower communities through education, health, and leadership development."*
- **Segmented Capsule Pill Button**: Matches Reference Image 1:
  - Unified capsule container (`rounded-full bg-[#F4EFEB]/95 backdrop-blur-md border border-stone-200/80 shadow-2xl p-1`).
  - **Left Segment**: `Explore Programmes` (light interactive pill).
  - **Right Segment**: `Volunteer` (solid dark pill with entry action arrow icon).


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
