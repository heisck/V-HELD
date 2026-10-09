import numpy as np
from PIL import Image
from skimage.measure import find_contours, approximate_polygon
from scipy.ndimage import label, gaussian_filter
import os

os.makedirs('public/assets/brand', exist_ok=True)

# 1. Load Photo 4 for Emblem
im4 = Image.open('/home/heisck/.var/app/org.telegram.desktop/data/TelegramDesktop/tdata/temp_data/photo_4_2026-10-09_08-41-10.jpg')
arr4 = np.array(im4)
mask4_all = np.max(arr4, axis=2) > 30
lbl4, _ = label(mask4_all)

EMBLEM_ORIG_X = 300.0
EMBLEM_ORIG_Y = 304.0
EMBLEM_ORIG_W = 680.0
EMBLEM_ORIG_H = 666.0

colors = {
    1: "#E3A709",   # Gold Center Head
    6: "#C34D21",   # Terracotta Left Head
    7: "#C34D21",   # Terracotta Right Head
    2: "#065830",   # Forest Green Center Body
    8: "#C34D21",   # Terracotta Left Body
    9: "#C34D21",   # Terracotta Right Body
    12: "#186835",  # Vibrant Green Left Leaf
    11: "#E2A608",  # Gold Right Leaf
    10: "#065830"   # Forest Green Embracing Hand
}

def get_emblem_svg(scale=1.0, tx=0.0, ty=0.0):
    parts = []
    # Circles
    cx_c = (639.8 - EMBLEM_ORIG_X) * scale + tx
    cy_c = (377.1 - EMBLEM_ORIG_Y) * scale + ty
    r_c = 69.5 * scale
    parts.append(f'<circle cx="{cx_c:.2f}" cy="{cy_c:.2f}" r="{r_c:.2f}" fill="#E3A709"/>')

    cx_l = (410.6 - EMBLEM_ORIG_X) * scale + tx
    cy_l = (502.2 - EMBLEM_ORIG_Y) * scale + ty
    r_l = 56.5 * scale
    parts.append(f'<circle cx="{cx_l:.2f}" cy="{cy_l:.2f}" r="{r_l:.2f}" fill="#C34D21"/>')

    cx_r = (868.3 - EMBLEM_ORIG_X) * scale + tx
    cy_r = (502.1 - EMBLEM_ORIG_Y) * scale + ty
    r_r = 56.5 * scale
    parts.append(f'<circle cx="{cx_r:.2f}" cy="{cy_r:.2f}" r="{r_r:.2f}" fill="#C34D21"/>')

    for k, tol in [(2, 1.2), (8, 1.2), (9, 1.2), (12, 1.0), (11, 1.0), (10, 1.5)]:
        c = (lbl4 == k).astype(float)
        smoothed = gaussian_filter(c, sigma=1.0)
        cnt = find_contours(smoothed, 0.5)[0]
        poly = approximate_polygon(cnt, tolerance=tol)
        pts = poly[:, [1, 0]]
        pts_trans = (pts - np.array([EMBLEM_ORIG_X, EMBLEM_ORIG_Y])) * scale + np.array([tx, ty])
        if np.allclose(pts_trans[0], pts_trans[-1]):
            pts_trans = pts_trans[:-1]
        N = len(pts_trans)
        cmds = [f"M {pts_trans[0][0]:.2f} {pts_trans[0][1]:.2f}"]
        for i in range(N):
            p_prev = pts_trans[(i - 1) % N]
            p_curr = pts_trans[i]
            p_next = pts_trans[(i + 1) % N]
            p_next2 = pts_trans[(i + 2) % N]
            cp1 = p_curr + (p_next - p_prev) / 6.0
            cp2 = p_next - (p_next2 - p_curr) / 6.0
            cmds.append(f"C {cp1[0]:.2f} {cp1[1]:.2f}, {cp2[0]:.2f} {cp2[1]:.2f}, {p_next[0]:.2f} {p_next[1]:.2f}")
        cmds.append("Z")
        d = " ".join(cmds)
        col = colors[k]
        parts.append(f'<path d="{d}" fill="{col}"/>')
    return "\n    ".join(parts)

# 2. Geometric V-HELD Logotype Path Generator
# Normalized to box: (0, 0) to (730, 140)
def get_vheld_geometric_svg(scale=1.0, tx=0.0, ty=0.0, fill_color="#065830"):
    # Reference coordinates (from Photo 1 measurement):
    # V: (10, 12) -> (171, 152), height 140
    # Let's shift so y_top=0
    # Original y: 12..152 -> 0..140
    # Original x: 10..736 -> 0..726
    # V:
    # Outer: (0, 0) -> (45, 0) -> (81.5, 102) -> (118, 0) -> (161, 0) -> (99, 140) -> (64, 140)
    # -: (151, 61) to (203, 87)
    # H: left stem (222, 0) to (258, 140), right stem (312, 0) to (348, 140), crossbar y=(58..84)
    # E: stem (369, 0) to (405, 140), top (405, 0)-(469, 28), mid (405, 57)-(462, 83), bot (405, 112)-(469, 140)
    # L: stem (489, 0) to (525, 140), bot (525, 112)-(581, 140)
    # D: stem (596, 0) to (632, 140), outer curve, inner counter
    
    # Let's write path with transform
    transform_attr = f'transform="translate({tx:.2f}, {ty:.2f}) scale({scale:.4f})"'
    d_v = "M 0 0 L 45 0 L 81.5 102 L 118 0 L 161 0 L 99 140 L 64 140 Z"
    d_dash = "M 151 61 H 203 V 87 H 151 Z"
    d_h = "M 222 0 H 258 V 58 H 312 V 0 H 348 V 140 H 312 V 84 H 258 V 140 H 222 Z"
    d_e = "M 369 0 H 469 V 28 H 405 V 57 H 462 V 83 H 405 V 112 H 469 V 140 H 369 Z"
    d_l = "M 489 0 H 525 V 112 H 581 V 140 H 489 Z"
    d_d = "M 596 0 H 660 C 698 0 726 30 726 70 C 726 110 698 140 660 140 H 596 Z M 632 28 V 112 H 660 C 680 112 690 94 690 70 C 690 46 680 28 660 28 Z"
    
    combined = f"{d_v} {d_dash} {d_h} {d_e} {d_l} {d_d}"
    return f'<path fill-rule="evenodd" d="{combined}" {transform_attr} fill="{fill_color}"/>'

# -------------------------------------------------------------
# SVG 1: Pure Standalone Emblem (Photo 4)
# -------------------------------------------------------------
emblem_1 = get_emblem_svg(scale=1.0, tx=20.0, ty=20.0)
svg_1 = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 706" width="720" height="706" fill="none">
  <title>V-HELD Emblem Mark</title>
  <desc>Official standalone emblem mark of V-HELD.</desc>
  <g id="vheld-emblem">
    {emblem_1}
  </g>
</svg>'''
with open('public/assets/brand/v-held-emblem.svg', 'w') as f:
    f.write(svg_1)

# -------------------------------------------------------------
# SVG 2: Vertical Logo with Name (Photo 1)
# -------------------------------------------------------------
SCALE_V1 = 0.626
EMB_W_V1 = EMBLEM_ORIG_W * SCALE_V1 # 426
EMB_H_V1 = EMBLEM_ORIG_H * SCALE_V1 # 417
EMB_TX_V1 = (800 - EMB_W_V1) / 2 # 187
EMB_TY_V1 = 30.0

VH_SCALE_V1 = 1.0
VH_TX_V1 = (800 - 726) / 2 # 37
VH_TY_V1 = EMB_TY_V1 + EMB_H_V1 + 35.0 # 482

emblem_2 = get_emblem_svg(scale=SCALE_V1, tx=EMB_TX_V1, ty=EMB_TY_V1)
vheld_2 = get_vheld_geometric_svg(scale=VH_SCALE_V1, tx=VH_TX_V1, ty=VH_TY_V1, fill_color="#065830")

svg_2 = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 680" width="800" height="680" fill="none">
  <title>V-HELD Logo (Vertical with Name)</title>
  <desc>Official V-HELD vertical logo lockup with emblem and logotype.</desc>
  <g id="emblem">
    {emblem_2}
  </g>
  <g id="logotype">
    {vheld_2}
  </g>
</svg>'''
with open('public/assets/brand/v-held-logo-vertical-name.svg', 'w') as f:
    f.write(svg_2)

# -------------------------------------------------------------
# SVG 3: Full Vertical Stacked Lockup (Photo 3)
# -------------------------------------------------------------
# Canvas: 800 x 870
EMB_TY_V3 = 30.0
VH_TY_V3 = EMB_TY_V3 + EMB_H_V1 + 30.0 # 477

emblem_3 = get_emblem_svg(scale=SCALE_V1, tx=EMB_TX_V1, ty=EMB_TY_V3)
vheld_3 = get_vheld_geometric_svg(scale=VH_SCALE_V1, tx=VH_TX_V1, ty=VH_TY_V3, fill_color="#065830")

svg_3 = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 870" width="800" height="870" fill="none">
  <title>V-HELD Official Logo (Vertical Stacked Full)</title>
  <desc>Official V-HELD stacked logo with emblem, logotype, mission subtitle and tagline.</desc>
  <style>
    .sub-text {{
      font-family: 'Century Gothic', 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-weight: 500;
      font-size: 34px;
      fill: #5A6D63;
      text-anchor: middle;
      letter-spacing: 0.2px;
    }}
    .tag-text {{
      font-family: 'Century Gothic', 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-weight: 700;
      font-style: italic;
      font-size: 27px;
      fill: #0D5C32;
      text-anchor: middle;
      letter-spacing: 0.3px;
    }}
  </style>
  <g id="emblem">
    {emblem_3}
  </g>
  <g id="logotype">
    {vheld_3}
  </g>
  <g id="subtitle">
    <text x="400" y="665" class="sub-text">Volunteers in Health, Education</text>
    <text x="400" y="718" class="sub-text">and Leadership Development</text>
  </g>
  <g id="tagline-group">
    <line x1="38" y1="782" x2="114" y2="782" stroke="#E3A709" stroke-width="4.5" stroke-linecap="round"/>
    <text x="400" y="790" class="tag-text">Give Back, Make a Difference.</text>
    <line x1="686" y1="782" x2="762" y2="782" stroke="#E3A709" stroke-width="4.5" stroke-linecap="round"/>
  </g>
</svg>'''
with open('public/assets/brand/v-held-logo-vertical-full.svg', 'w') as f:
    f.write(svg_3)

# -------------------------------------------------------------
# SVG 4: Horizontal Logo Lockup (Photo 2)
# -------------------------------------------------------------
# Canvas: 1040 x 360
SCALE_H = 0.47
EMB_W_H = EMBLEM_ORIG_W * SCALE_H # 320
EMB_H_H = EMBLEM_ORIG_H * SCALE_H # 313
EMB_TX_H = 20.0
EMB_TY_H = 24.0

VH_SCALE_H = 0.86
VH_TX_H = 370.0
VH_TY_H = 24.0

emblem_4 = get_emblem_svg(scale=SCALE_H, tx=EMB_TX_H, ty=EMB_TY_H)
vheld_4 = get_vheld_geometric_svg(scale=VH_SCALE_H, tx=VH_TX_H, ty=VH_TY_H, fill_color="#065830")

svg_4 = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1020 360" width="1020" height="360" fill="none">
  <title>V-HELD Official Logo (Horizontal Lockup)</title>
  <desc>Official V-HELD horizontal lockup with emblem, logotype, mission subtitle and tagline.</desc>
  <style>
    .sub-text-h {{
      font-family: 'Century Gothic', 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-weight: 500;
      font-size: 28px;
      fill: #5A6D63;
      letter-spacing: 0.1px;
    }}
    .tag-text-h {{
      font-family: 'Century Gothic', 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-weight: 700;
      font-style: italic;
      font-size: 23px;
      fill: #0D5C32;
      text-anchor: middle;
      letter-spacing: 0.2px;
    }}
  </style>
  <g id="emblem">
    {emblem_4}
  </g>
  <g id="logotype">
    {vheld_4}
  </g>
  <g id="subtitle">
    <text x="390" y="196" class="sub-text-h">Volunteers in Health, Education</text>
    <text x="390" y="240" class="sub-text-h">and Leadership Development</text>
  </g>
  <g id="tagline-group">
    <line x1="390" y1="292" x2="445" y2="292" stroke="#E3A709" stroke-width="4.0" stroke-linecap="round"/>
    <text x="680" y="299" class="tag-text-h">Give Back, Make a Difference.</text>
    <line x1="915" y1="292" x2="970" y2="292" stroke="#E3A709" stroke-width="4.0" stroke-linecap="round"/>
  </g>
</svg>'''
with open('public/assets/brand/v-held-logo-horizontal.svg', 'w') as f:
    f.write(svg_4)

# Update default site logos
with open('public/assets/logo.svg', 'w') as f:
    f.write(svg_1)

with open('src/app/icon.svg', 'w') as f:
    f.write(svg_1)

print("All official SVGs built with crisp geometric precision!")
