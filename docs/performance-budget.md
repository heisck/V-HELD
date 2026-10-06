# Performance Budget & Core Web Vitals

## Explicit Targets

| Metric | Target | Warning Threshold | Failure Threshold |
| :--- | :--- | :--- | :--- |
| **Lighthouse Performance Score** | ≥ 95 | 90–94 | < 90 |
| **Largest Contentful Paint (LCP)** | < 1.8s | 1.8s – 2.5s | > 2.5s |
| **Interaction to Next Paint (INP)** | < 100ms | 100ms – 200ms | > 200ms |
| **Cumulative Layout Shift (CLS)** | < 0.05 | 0.05 – 0.10 | > 0.10 |
| **Time to First Byte (TTFB)** | < 600ms | 600ms – 800ms | > 800ms |
| **Frame Rate** | Constant 60 FPS | 50–59 FPS | < 50 FPS |
| **Initial Gzipped JavaScript Bundle**| < 150 KB | 150 KB – 200 KB | > 200 KB |

---

## Architectural Performance Mandates

1. **Performance Over Vanity**: If any 3D scene, shader, or heavy visual animation causes frame drops or degrades Core Web Vitals, **performance wins**—the effect must be optimized, simplified, or replaced.
2. **Asset Optimization**:
   * All images must be served in modern responsive formats (AVIF / WebP) with explicit `width`, `height`, and `sizes` attributes.
   * Remote media uploaded to Cloudinary must utilize auto-formatting (`f_auto`) and quality optimization (`q_auto`).
   * Self-hosted or web fonts must be preloaded, subsetted, and use `font-display: swap`.
3. **Code Splitting & Dynamic Imports**:
   * Heavy libraries (Three.js, WebGL canvases, complex charts) must be dynamically loaded with `next/dynamic` and rendered only when scrolled into view.
4. **WebGL & Three.js Governance**:
   * Limit draw calls (< 50 draw calls per frame).
   * Share geometries and materials across instances.
   * Listen to viewport visibility (`IntersectionObserver`) and pause rendering when canvas is outside the viewport.
   * Dispose of geometries, textures, materials, and WebGL contexts upon component unmount to prevent GPU memory leaks.
5. **Zero Layout Shift (CLS)**:
   * Reserve layout space for images, skeletons, dynamic content, and cards to avoid layout jitter during hydration and network fetching.
