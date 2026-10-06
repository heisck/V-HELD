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
- **Role**: Primary background image for the system.
- **Display Mode**: Pure full-page background fit (`min-h-screen w-full relative overflow-hidden`), `object-cover object-center`.
- **UI Elements**: None (pure image presentation without buttons, text overlays, or extra elements).

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
