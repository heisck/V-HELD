# V-HELD Landing Page Engineering Handoff

> **Feature**: V-HELD Landing Page (`/`)  
> **Source Documents**: [`landing-page.md`](landing-page.md), [`progress.md`](progress.md)

---

## 1. Primary Background Asset & Configuration

- **Asset Path**: `public/assets/landing/hero-primary.jpg`
- **Logo Mark Path**: `public/assets/logo.svg` & `src/app/icon.svg`
- **Component File**: `src/app/page.tsx`
- **Navigation File**: `src/components/layout/Navbar.tsx`

---

## 2. Floating Navbar Specs

1. **Appearance**:
   - Floating pill shape (`rounded-full bg-white/95 border border-stone-200/80 shadow-lg backdrop-blur-md`).
   - Icon-only logo on the left (links to `/`).
   - Center navigation:
     - `About` (`/about`)
     - `Volunteer` (Context menu: "Our Impact", "Stories", and "Volunteer Now" button)
     - `Programmes` (`/programmes`)
     - `Join` (Context menu: "Partner With Us", "Support Our Work")
     - `Contact` (`/contact`)
   - Right action: Single pill button labeled **Volunteer** (`/apply`).
2. **Scroll Dynamics**:
   - Top of page: `w-[94%] max-w-6xl top-6`.
   - On scroll (`scrollY > 40`): smooth transition to a centered floating dock `w-[90%] max-w-4xl top-4 shadow-2xl`.
