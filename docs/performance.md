# Performance Standards & Asset Optimization

Performance is NOT something to check at the end. Build performance into the architecture from the beginning.

---

## 1. Core Performance Targets & Metrics
* **Target 60 FPS** interaction on all capable devices.
* **Lighthouse Score ≥ 95** on Performance, Accessibility, Best Practices, and SEO.
* **Core Web Vitals**:
  - LCP < 1.8s
  - CLS < 0.05
  - INP < 100ms
  - TTFB < 600ms
* **Initial Gzipped JS Bundle < 150 KB**.

---

## 2. Mandatory WebP Asset Optimization & Image Generation Protocol
* **Strict WebP Format Requirement**: All raster images, hero assets, community photos, and illustrations MUST be in `.webp` format. WebP ensures high visual fidelity with up to 70% smaller file size, guaranteeing rapid loading and optimal LCP.
* **Mandatory Reference Image Generation**:
  - When building sections referenced from Landingfolio or UI libraries that have image placeholders or photos, agents **MUST generate tailored visual assets** matching V-HELD's Ghanaian community development mission (education, health, youth leadership).
  - Convert all generated assets to `.webp` before integrating into components.
  - **NEVER leave image containers empty** or replace them with plain text divs or colored placeholder boxes.
* **Next.js Image Component**: Use `next/image` with explicit `width`, `height`, and priority attributes on above-the-fold media (e.g. hero illustration) to eliminate Cumulative Layout Shift (CLS).

---

## 3. Compositor Layering & Zero Scroll Flash
* **GPU Compositing**: Use `transform-gpu` on elements that transition geometry (such as floating navbars or stacked cards) to keep them on dedicated GPU layers.
* **Zero Compositor Dropping**: Never animate `backdrop-filter` or background opacity with `transition-all`. This drops the GPU raster cache and flashes raw white. Constrain transitions to `transition-[max-width,padding,box-shadow]` and preserve identical blur/background properties.

---

## 4. 3D & WebGL Governance (Where Applicable)
* Monitor draw calls, geometries, and textures.
* Use instancing where appropriate.
* Dispose of WebGL resources, materials, and geometries cleanly on component unmount.
* Pause expensive render loops when canvases are scrolled off-screen or tab is hidden.
* Degrade gracefully to lightweight 2D assets on low-power devices.
* Strictly honor `prefers-reduced-motion: reduce`.

