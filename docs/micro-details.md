# Micro-Details & Craft Standards

## Philosophy: Nothing Accidental

The experience must feel meticulously authored and intentional down to the smallest micro-interaction and sub-pixel alignment. Nothing should feel accidental or like an unconfigured browser default.

---

## Craft Checklist

* **Typography**: Intentional font pairing reflecting Ghanaian warmth and NGO credibility; strict vertical baseline rhythm.
* **Line Height**: Proportional leading across all heading and body styles (1.1–1.25 for display, 1.5–1.6 for body).
* **Letter Spacing**: Subtle optical tracking (-0.02em to -0.01em on large headings; normal to +0.01em on body/caps).
* **Baseline Alignment**: Text properly aligned with adjacent iconography and badges.
* **Whitespace & Spacing Scale**: Consistent 4px/8px modular scale for margins, padding, and layout gutters.
* **Cursor Behavior**: Standard pointer cursors for interactive items; custom cursors must feel responsive and never lag.
* **Borders & Dividers**: Subtle, high-contrast, purpose-driven borders; no heavy or arbitrary colored-borders.
* **Shadows & Elevation**: Physically plausible elevation tokens with soft, diffuse ambient falloff.
* **Gradients & Colors**: Organic, purposeful color accents derived from Ghanaian heritage (warm earth tones, rich greens, golds); no generic AI purple/blue neon gradients.
* **Textures & Warmth**: Tactile, human qualities where appropriate, avoiding artificial grain filters over generic gradients.
* **Icon Sizing & Alignment**: Consistent stroke weight (1.5px or 2px) and optical alignment with adjacent labels.
* **Hover Timing & Transitions**: Snappy 150ms–250ms transitions; intentional micro-scaling or background shifts.
* **Easing Curves**: Custom cubic-bezier easings (e.g., `cubic-bezier(0.16, 1, 0.3, 1)`) rather than linear or abrupt transitions.
* **Scroll Velocity & Dynamics**: Smooth scrolling (Lenis) tuned for natural inertia without sluggishness or wheel hijacking.
* **Image Treatment & Cropping**: Responsive focal points ensuring faces and community activities are never awkwardly cropped.
* **Loading States**: Purposeful, branded skeleton loaders and subtle indicators that prevent cumulative layout shifts.
* **Empty States**: Thoughtful, encouraging messaging with actionable next steps when no results exist.
* **Focus States**: High-contrast, custom accessible focus indicators for keyboard navigation.
* **Button Physics & Micro-feedback**: Tactile active/pressed state feedback (subtle scale, depth shift, or color response).
* **Section Spacing**: Generous, breathable vertical spacing (e.g., 80px–120px desktop, 48px–64px mobile) between thematic sections.
* **Mobile Spacing**: Compact but comfortable padding (16px–24px horizontal gutters) preventing edge collision.
* **Z-Index Hierarchy**: Strict, structured z-index scale (base: 0, dropdown: 10, sticky: 20, modal-backdrop: 40, modal: 50, toast: 100) preventing stacking conflicts.
