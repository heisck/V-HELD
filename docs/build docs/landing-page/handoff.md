# V-HELD Landing Page Engineering Handoff

> **Feature**: V-HELD Landing Page (`/`)  
> **Source Documents**: [`landing-page.md`](landing-page.md), [`progress.md`](progress.md)

---

## 1. Primary Background Asset & Configuration

- **Asset Path**: `public/assets/landing/hero-primary.jpg`
- **Component File**: `src/app/page.tsx`
- **Implementation**:
  ```tsx
  import Image from 'next/image';

  export default function HomePage() {
    return (
      <main className="relative min-h-screen w-full overflow-hidden bg-stone-950">
        <Image
          src="/assets/landing/hero-primary.jpg"
          alt="V-HELD primary landing visual"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-center select-none"
        />
      </main>
    );
  }
  ```

---

## 2. Storage Strategy: Local Codebase (`public/`) vs. Cloud Storage

- **Core UI & Hero Artwork (Codebase / `public/`)**:
  - Delivers instantaneous LCP via local origin / edge caching.
  - Zero external DNS or authentication dependencies.
  - Native Next.js image optimization pipeline.
- **Dynamic Content (Cloud Storage)**:
  - Used strictly for user-submitted uploads, applicant documents, and CMS-managed media.
