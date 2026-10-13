# Motion System & Interaction Physics
 
 Motion should feel **designed, tactile, and grounded**, not randomly animated.
 
 ---
 
 ## 1. Core Motion Guidelines
 
 Motion should establish hierarchy. Do not animate everything. The visitor should always know what deserves attention.
 
 * **GSAP & ScrollTrigger**: Use for orchestrated multi-stage reveals, pin sequences, and scrub timelines.
 * **Lenis Smooth Scroll**: Provide natural, momentum-based scrolling without hijacking user intent or causing input lag.
 * **`prefers-reduced-motion: reduce`**: Strictly respect user preferences by replacing complex motion with instant or subtle opacity fades.
 
 ---
 
 ## 2. Stacked Card Deck Scrolling with Chromatic Depth Hierarchy
 
 When building long-form narrative tracks or multi-phase pathways (e.g. community programmes, volunteer journey):
 
 1. **Autonomous Physical Cards**:
    - Rather than one flat continuous div, each key thematic track is an autonomous physical card.
 2. **Sticky Tiered Stacking Mechanics**:
    - Cards stack via CSS `position: sticky` within a shared parent relative container.
    - Staggered `top` offsets (`top-14 sm:top-20`, `top-18 sm:top-24`, `top-22 sm:top-28`, etc.) ensure each preceding card leaves a ~16px–24px tab visible at the top.
    - Preceding cards pin cleanly below the navbar, and following cards slide smoothly over them.
 3. **Chromatic Hierarchy (Green Shade Staging)**:
    - Preceding background cards use noticeably fainter/lighter shades (e.g., `#0b7342`) so the eye immediately registers visual depth and spatial layering when subsequent cards (`#065830`, `#054c29`, `#033d20`) slide over them.
    - Each card casts an elevated upward drop shadow:
      ```css
      shadow-[0_-10px_35px_rgba(0,0,0,0.25)]
      ```
 4. **Refined Corner Radii**:
    - Use tight, sleek border radii: `rounded-t-2xl sm:rounded-t-3xl` (16px–24px).
    - **Never use oversized cartoonish curvatures** (e.g. `4.5rem` / `72px`).
    - Eliminate empty stroke SVG dividers; container edges with subtle border highlights (`border-t border-white/10`) and shadows serve as the physical boundaries.
 
 ---
 
 ## 3. Zero Compositor Flash During Scroll Transitions
 
 * **Root Cause**: Animating `backdrop-filter` or background opacity with `transition-all` forces the browser's compositor to drop the GPU texture cache, resulting in jarring white flashes during scroll transitions.
 * **Mandatory Technical Standard**:
   1. Maintain **100% identical background and blur properties** across resting and scrolled states (`bg-white/95 backdrop-blur-md border border-stone-200`).
   2. **NEVER use `transition-all`** on elements with backdrop filters. Constrain transitions strictly to geometry and elevation:
      ```css
      transition-[max-width,padding,box-shadow,border-radius] duration-300 ease-out
      ```
   3. Apply `transform-gpu` (`transform: translateZ(0)`) to maintain a dedicated GPU compositing layer.

