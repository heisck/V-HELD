# Responsive Design Standards

## Core Philosophy

Do not treat mobile as an afterthought. Design deliberately for every form factor and input modality:

* **Large Desktop** (1920px+)
* **Standard Desktop** (1440px)
* **Laptop** (1024px – 1280px)
* **Tablet Portrait & Landscape** (768px – 1024px)
* **Mobile Portrait & Landscape** (320px – 480px, 481px – 767px)
* **Touch Devices & Hybrids**
* **High-DPI / Retina Screens**
* **Low-Powered Devices & Reduced Hardware Acceleration**

---

## Graceful Degradation Principle

Interactive or 3D effects must degrade gracefully:
* If an effect or calculation is too expensive for a target device: **simplify or disable the effect rather than allowing the website to become slow or unresponsive**.
* Provide accessible, performant fallbacks for touchscreens where hover states are unavailable.

---

## Responsive Verification Checklist

Verify across all viewports:
* [ ] **No horizontal overflow** or unintended horizontal scrolling.
* [ ] **No clipped content** or truncated headings.
* [ ] **No overlapping text** across breakpoints.
* [ ] **No overlapping interactive elements** (buttons, links, inputs).
* [ ] **No accidental z-index stacking problems**.
* [ ] **No content hidden behind fixed elements** (headers, floating banners, sticky controls).
* [ ] **No broken canvases** or WebGL context failures.
* [ ] **No broken navigation** or inaccessible mobile menus.
* [ ] **No unusable controls** (minimum 44x44px touch targets).
* [ ] **No unreadable typography** (body font size minimum 16px on mobile).
* [ ] **No unexpected scrollbars**.
