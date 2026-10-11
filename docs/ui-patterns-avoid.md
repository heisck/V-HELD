# Design & UI Standards: Patterns to Avoid

Avoid making the application look "vibecoded" or like an AI-generated template. Specifically avoid the following 32 patterns:

### Core AI Template & Vibecoding Patterns to Avoid
1. **Purple-to-blue gradients**
2. **Gradient hero text**
3. **Emojis in headings**
4. **Using Inter everywhere**
5. **Colored-border cards**
6. **Glassmorphism cards**
7. **Low-contrast dark mode**
8. **Three icon boxes in a row**
9. **Badge above the headline** (e.g., floating pills with dots or em dashes like `[• MEASURABLE OUTCOMES]`, `[• VOICES FROM THE FIELD]`, `[• TAKE ACTION TODAY]`)
10. **Lucide icons everywhere** (decorative icon clouds)
11. **Untouched Shadcn UI**
12. **Fade-in-on-scroll effects**
13. **Cursor-following beams**
14. **Buttons that only fade/change on hover**
15. **Inconsistent spacing**
16. **Em dashes everywhere** (repetitive `—` in headings, labels, and badges)
17. **Generic buzzword copy** ("synergizing innovative solutions")
18. **Serif italic accents**
19. **Space Grotesk + Instrument Serif as a generic combination**
20. **Grain/noise texture over gradients**

---

### Critical Structural & Visual Anti-Patterns (Lessons from Production Codebase & Removed Sections)

21. **Text-Only Skeleton Sections / Pages (The Banned "Bold Header + Plain Text Div" Anti-Pattern)**:
    - *Root Cause & Why It Was Stripped in Commit `ee9ee21`*: In previous commits, the model created sections (`IntroSection`, `FocusAreasSection`, `WhyVolunteerSection`, `HowItWorksSection`, `ImpactSection`, `StoriesSection`, `CtaSection`) with nothing but a giant bold headline and divs with plain text bullet points or tags. This is sterile, hollow, and looks like an unfinished AI wireframe.
    - *The Rule*: **NEVER build pages or sections that are just text.** Sections must incorporate rich layout craft, tailored visual media, genuine photographic or illustrative assets, structured editorial hierarchy, and asymmetric density.

22. **Skipping Tailored Image Generation for Reference Media Slots**:
    - *The Rule*: When building from Landingfolio or UI references that feature images, agents **MUST generate tailored visual assets** fitting V-HELD's Ghanaian community development context (education, healthcare, youth leadership), place them into the layout, and **convert them to `.webp` format** for high performance.
    - *Violation*: Replacing image containers with empty colored divs or plain text boxes is strictly forbidden.

23. **Verbose / Descriptive Button Labels ("Describing" Instead of "Being" the Action)**:
    - *The Rule*: Buttons must **BE the action, not describe it**. Use short, decisive action words: `Apply`, `Volunteer`, `Partner`.
    - *Violation*: Verbose phrases like "Apply to Volunteer", "Become a Volunteer Today", or "Partner With Us" clutter UI controls and look amateur.

24. **Misplaced or Nonsensical Icons on Actions**:
    - *The Rule*: Icons must strictly match the semantic context of the action.
    - *Violation*: An NGO volunteer application button must NEVER display monetary symbols (like dollar signs) or random shapes. Do not blindly repeat generic forward arrows (`→`) across every button. Use clean typography or contextually appropriate semantic icons.

25. **Dark Mode / Dark Endpoints in Light-Mode Application**:
    - *The Rule*: V-HELD is **strictly light-mode**. Zero dark theme toggle, zero dark endpoints, zero auto `prefers-color-scheme` switching.
    - *Violation*: Using `dark:` Tailwind variants, dark canvas backgrounds (`#090807`), or low-contrast dark cards. Surfaces must be pure crisp white (`#FFFFFF`) or organic warm sand (`#EFE9E2`).

26. **Compositor Flash via Animated Backdrop Filters on Scroll**:
    - *The Rule*: Never animate `backdrop-filter` (e.g. from `blur-sm` to `blur-md`) or background opacities (e.g. `bg-white/80` to `bg-white/95`) with `transition-all`. This forces the browser to drop the GPU texture cache on the layout boundary, flashing raw white on scroll.
    - *Fix*: Maintain **100% identical background and blur properties** across resting and scrolled states (`bg-white/95 backdrop-blur-md border border-stone-200`). Constrain transitions strictly to geometry/elevation: `transition-[max-width,padding,box-shadow] duration-300 ease-out`, and apply `transform-gpu`.

27. **Artificial Hero Seal / Badge Boxes**:
    - *Violation*: Artificial floating badge cards containing vertical seals or logos on the right side of the hero section. They clutter visual weight and look like boilerplate filler.
    - *Fix*: Clean centered editorial hero with high-impact headlines and authentic tailored illustrations/photography.

28. **Confined / Island Navbar at Rest**:
    - *Violation*: Confining the navigation bar inside a floating rounded island/div at rest at the top of the page.
    - *Fix*: Unconfined full viewport width at rest (`w-full rounded-none border-0 pt-0 px-0`), melting seamlessly into the `#EFE9E2` page surface. Packs into a centered pill (`max-w-4xl rounded-full border border-stone-200 shadow-md`) only when scrolled (`scrollY > 20px`).

29. **Oversized Cartoonish Corner Curvatures**:
    - *Violation*: Excessively large border radii (e.g., `4.5rem` / `72px`) look cartoonish and detach sections visually from internal card components.
    - *Fix*: Refined, modern proportion: `rounded-t-2xl sm:rounded-t-3xl` (16px–24px) harmonizing with internal card components (`rounded-2xl`).

30. **Empty Disconnected Stroke Dividers**:
    - *Violation*: Placing separate disconnected stroke SVGs between sections.
    - *Fix*: Container edges serve as natural boundaries with subtle highlights (`border-t border-white/10`) and elevation drop shadows.

31. **Bulky Dropdown Card Fluff**:
    - *Violation*: Multi-line descriptions and block headers underneath navigation dropdown links.
    - *Fix*: Lightweight, clean, scannable link lists (`Why Volunteer`, `How It Works`, `Impact`, `Stories`).

32. **Superficial MCP Reference Usage**:
    - *Violation*: Fetching Landingfolio references but ignoring their grid ratios, typographic scale, micro-spacing, visual weight, asymmetry, and media assets, then falling back to generic AI card grids.
    - *Fix*: Literally deconstruct the reference screenshot and code. Replicate the proven layout architecture directly.

---

## Core Design Principle

Design must feel:
* **Intentional**
* **Polished**
* **Distinctive**
* **Functional**
* **Product-specific** (reflecting V-HELD's mission: warm, human, authentic Ghanaian community development, professional NGO aesthetic)

Rather than resembling a generic or AI-generated template, every element must have a defined reason to exist. Every section must have tactile craft, tailored media, and clear visual hierarchy.
