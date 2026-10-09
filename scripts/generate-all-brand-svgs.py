import numpy as np
from PIL import Image
from skimage.measure import find_contours, approximate_polygon
from scipy.ndimage import label, gaussian_filter
import os

os.makedirs('public/assets/brand', exist_ok=True)

# -------------------------------------------------------------------------
# 1. EMBLEM EXTRACTION FROM PHOTO 4
# -------------------------------------------------------------------------
im4 = Image.open('/home/heisck/.var/app/org.telegram.desktop/data/TelegramDesktop/tdata/temp_data/photo_4_2026-10-09_08-41-10.jpg')
arr4 = np.array(im4)
mask4_all = np.max(arr4, axis=2) > 30
lbl4, _ = label(mask4_all)

# Bounding box of emblem in Photo 4: x=[302, 978], y=[306, 968]
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

def get_emblem_svg_elements(scale=1.0, tx=0.0, ty=0.0):
    parts = []
    # Center Head circle:
    cx_c = (639.8 - EMBLEM_ORIG_X) * scale + tx
    cy_c = (377.1 - EMBLEM_ORIG_Y) * scale + ty
    r_c = 69.5 * scale
    parts.append(f'<circle cx="{cx_c:.2f}" cy="{cy_c:.2f}" r="{r_c:.2f}" fill="#E3A709"/>')

    # Left Head circle:
    cx_l = (410.6 - EMBLEM_ORIG_X) * scale + tx
    cy_l = (502.2 - EMBLEM_ORIG_Y) * scale + ty
    r_l = 56.5 * scale
    parts.append(f'<circle cx="{cx_l:.2f}" cy="{cy_l:.2f}" r="{r_l:.2f}" fill="#C34D21"/>')

    # Right Head circle:
    cx_r = (868.3 - EMBLEM_ORIG_X) * scale + tx
    cy_r = (502.1 - EMBLEM_ORIG_Y) * scale + ty
    r_r = 56.5 * scale
    parts.append(f'<circle cx="{cx_r:.2f}" cy="{cy_r:.2f}" r="{r_r:.2f}" fill="#C34D21"/>')

    # Body paths:
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

# -------------------------------------------------------------------------
# 2. V-HELD LOGOTYPE PATHS EXTRACTION FROM PHOTO 1
# -------------------------------------------------------------------------
im1 = Image.open('/home/heisck/.var/app/org.telegram.desktop/data/TelegramDesktop/tdata/temp_data/photo_1_2026-10-09_08-41-10.jpg')
arr1 = np.array(im1)
crop_vh1 = arr1[780:945, 270:1015]
mask_vh1 = (np.max(crop_vh1, axis=2) > 30).astype(float)
mask_vh1_s = gaussian_filter(mask_vh1, sigma=0.8)
cnts_vh1 = find_contours(mask_vh1_s, 0.5)

# Bounding box of V-HELD in Photo 1: x=[278, 1008], y=[790, 935]
VH_ORIG_X = 278.0
VH_ORIG_Y = 790.0
VH_ORIG_W = 730.0
VH_ORIG_H = 145.0

def get_vheld_paths(scale=1.0, tx=0.0, ty=0.0, fill_color="#065830"):
    subpaths = []
    for cnt in cnts_vh1:
        pts = cnt[:, [1, 0]] + np.array([270.0, 780.0])
        poly = approximate_polygon(pts[:, [1, 0]], tolerance=0.8)
        poly_xy = poly[:, [1, 0]]
        pts_trans = (poly_xy - np.array([VH_ORIG_X, VH_ORIG_Y])) * scale + np.array([tx, ty])
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
        subpaths.append(" ".join(cmds))
    
    combined_d = " ".join(subpaths)
    return f'<path fill-rule="evenodd" d="{combined_d}" fill="{fill_color}"/>'

# -------------------------------------------------------------------------
# 3. SUBTITLE & TAGLINE PATHS EXTRACTION FROM PHOTO 3
# -------------------------------------------------------------------------
im3 = Image.open('/home/heisck/.var/app/org.telegram.desktop/data/TelegramDesktop/tdata/temp_data/photo_3_2026-10-09_08-41-10.jpg')
arr3 = np.array(im3)

# Subtitle lines in Photo 3:
# Line 1: y=888..929, x=278..1005 (w=727, h=41)
# Line 2: y=941..985, x=310..972 (w=662, h=44)
# Tagline: y=1012..1047, x=276..1007 (w=731, h=35)

crop_sub3 = arr3[880:995, 270:1015]
mask_sub3 = (crop_sub3.max(axis=2) > 25).astype(float)
mask_sub3_s = gaussian_filter(mask_sub3, sigma=0.6)
cnts_sub3 = find_contours(mask_sub3_s, 0.5)

# Bounding box of subtitle lines 1 & 2 in Photo 3:
SUB_ORIG_X = 278.0
SUB_ORIG_Y = 885.0
SUB_ORIG_W = 728.0
SUB_ORIG_H = 105.0

def get_subtitle_paths_vertical(scale=1.0, tx=0.0, ty=0.0, fill_color="#7A8B82"):
    subpaths = []
    for cnt in cnts_sub3:
        pts = cnt[:, [1, 0]] + np.array([270.0, 880.0])
        poly = approximate_polygon(pts[:, [1, 0]], tolerance=0.7)
        poly_xy = poly[:, [1, 0]]
        pts_trans = (poly_xy - np.array([SUB_ORIG_X, SUB_ORIG_Y])) * scale + np.array([tx, ty])
        if np.allclose(pts_trans[0], pts_trans[-1]):
            pts_trans = pts_trans[:-1]
        N = len(pts_trans)
        if N < 3:
            continue
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
        subpaths.append(" ".join(cmds))
    
    combined_d = " ".join(subpaths)
    return f'<path fill-rule="evenodd" d="{combined_d}" fill="{fill_color}"/>'

# Tagline text in Photo 3 (x=382..902, y=1013..1047):
crop_tag3 = arr3[1010:1050, 375:910]
mask_tag3 = (crop_tag3.max(axis=2) > 25).astype(float)
mask_tag3_s = gaussian_filter(mask_tag3, sigma=0.6)
cnts_tag3 = find_contours(mask_tag3_s, 0.5)

TAG_ORIG_X = 380.0
TAG_ORIG_Y = 1012.0
TAG_ORIG_W = 525.0
TAG_ORIG_H = 35.0

def get_tagline_paths_vertical(scale=1.0, tx=0.0, ty=0.0, fill_color="#0D5C32"):
    subpaths = []
    for cnt in cnts_tag3:
        pts = cnt[:, [1, 0]] + np.array([375.0, 1010.0])
        poly = approximate_polygon(pts[:, [1, 0]], tolerance=0.7)
        poly_xy = poly[:, [1, 0]]
        pts_trans = (poly_xy - np.array([TAG_ORIG_X, TAG_ORIG_Y])) * scale + np.array([tx, ty])
        if np.allclose(pts_trans[0], pts_trans[-1]):
            pts_trans = pts_trans[:-1]
        N = len(pts_trans)
        if N < 3:
            continue
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
        subpaths.append(" ".join(cmds))
    combined_d = " ".join(subpaths)
    return f'<path fill-rule="evenodd" d="{combined_d}" fill="{fill_color}"/>'

# -------------------------------------------------------------------------
# GENERATE THE 4 OFFICIAL SVGS
# -------------------------------------------------------------------------

# 1. Pure Emblem (Photo 4)
emblem_svg_inner = get_emblem_svg_elements(scale=1.0, tx=20.0, ty=20.0)
svg_1 = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 706" width="720" height="706" fill="none">
  <title>V-HELD Emblem</title>
  <desc>Official Emblem Mark: volunteers united in community development.</desc>
  <g id="emblem-mark">
    {emblem_svg_inner}
  </g>
</svg>'''
with open('public/assets/brand/v-held-emblem.svg', 'w') as f:
    f.write(svg_1)

# 2. Vertical Lockup with Name (Photo 1)
# In Photo 1: Emblem is w=426, h=427 (scale ~ 0.626). Bounding box centered at x=400.
SCALE_V1 = 0.626
EMB_W_V1 = EMBLEM_ORIG_W * SCALE_V1 # ~426
EMB_H_V1 = EMBLEM_ORIG_H * SCALE_V1 # ~417
# Canvas width: 800, height: 680
EMB_TX_V1 = (800 - EMB_W_V1) / 2 # ~187
EMB_TY_V1 = 30.0

VH_TX_V1 = (800 - VH_ORIG_W) / 2 # ~35
VH_TY_V1 = EMB_TY_V1 + EMB_H_V1 + 35.0 # ~482

emb_v1_elements = get_emblem_svg_elements(scale=SCALE_V1, tx=EMB_TX_V1, ty=EMB_TY_V1)
vh_v1_element = get_vheld_paths(scale=1.0, tx=VH_TX_V1, ty=VH_TY_V1, fill_color="#065830")

svg_2 = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 680" width="800" height="680" fill="none">
  <title>V-HELD Logo (Vertical with Name)</title>
  <desc>V-HELD emblem mark with bold logotype.</desc>
  <g id="emblem">
    {emb_v1_elements}
  </g>
  <g id="logotype">
    {vh_v1_element}
  </g>
</svg>'''
with open('public/assets/brand/v-held-logo-vertical-name.svg', 'w') as f:
    f.write(svg_2)

# 3. Full Vertical Lockup with Subtitle and Tagline (Photo 3)
# Canvas width: 800, height: 860
# Emblem at top:
EMB_TY_V3 = 30.0
VH_TY_V3 = EMB_TY_V3 + EMB_H_V1 + 30.0 # ~477
SUB_TY_V3 = VH_TY_V3 + VH_ORIG_H + 25.0 # ~647
TAG_TY_V3 = SUB_TY_V3 + SUB_ORIG_H + 25.0 # ~777

emb_v3_elements = get_emblem_svg_elements(scale=SCALE_V1, tx=EMB_TX_V1, ty=EMB_TY_V3)
vh_v3_element = get_vheld_paths(scale=1.0, tx=VH_TX_V1, ty=VH_TY_V3, fill_color="#065830")
sub_v3_element = get_subtitle_paths_vertical(scale=1.0, tx=(800 - SUB_ORIG_W)/2, ty=SUB_TY_V3, fill_color="#7A8B82")
tag_v3_element = get_tagline_paths_vertical(scale=1.0, tx=(800 - TAG_ORIG_W)/2, ty=TAG_TY_V3, fill_color="#0D5C32")

# Left and Right Gold Accent Rules for Tagline:
# Span from x=35 to x=115 on left, and x=685 to x=765 on right, at y = TAG_TY_V3 + 17
RULE_Y_V3 = TAG_TY_V3 + 17.0
rule_left_v3 = f'<line x1="35" y1="{RULE_Y_V3:.1f}" x2="115" y2="{RULE_Y_V3:.1f}" stroke="#E3A709" stroke-width="4.5" stroke-linecap="round"/>'
rule_right_v3 = f'<line x1="685" y1="{RULE_Y_V3:.1f}" x2="765" y2="{RULE_Y_V3:.1f}" stroke="#E3A709" stroke-width="4.5" stroke-linecap="round"/>'

svg_3 = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 870" width="800" height="870" fill="none">
  <title>V-HELD Full Logo (Vertical Stacked)</title>
  <desc>V-HELD official stacked emblem, logotype, mission subtitle and tagline.</desc>
  <g id="emblem">
    {emb_v3_elements}
  </g>
  <g id="logotype">
    {vh_v3_element}
  </g>
  <g id="subtitle">
    {sub_v3_element}
  </g>
  <g id="tagline-group">
    {rule_left_v3}
    {tag_v3_element}
    {rule_right_v3}
  </g>
</svg>'''
with open('public/assets/brand/v-held-logo-vertical-full.svg', 'w') as f:
    f.write(svg_3)

# 4. Horizontal Lockup (Photo 2)
# In Photo 2: Emblem is on the left (w ~ 318, h ~ 312, scale ~ 0.468)
# Text block is on the right.
# Canvas width: 1040, height: 360
SCALE_H = 0.47
EMB_W_H = EMBLEM_ORIG_W * SCALE_H # ~320
EMB_H_H = EMBLEM_ORIG_H * SCALE_H # ~313
EMB_TX_H = 20.0
EMB_TY_H = 24.0

# Right text block starts at x ~ 370
SCALE_VH_H = 0.855 # 624 / 730
VH_TX_H = 370.0
VH_TY_H = 24.0

SCALE_SUB_H = 0.82
SUB_TX_H = 392.0
SUB_TY_H = VH_TY_H + (VH_ORIG_H * SCALE_VH_H) + 18.0 # ~166

SCALE_TAG_H = 0.82
TAG_TX_H = 470.0
TAG_TY_H = SUB_TY_H + (SUB_ORIG_H * SCALE_SUB_H) + 16.0 # ~268

emb_h_elements = get_emblem_svg_elements(scale=SCALE_H, tx=EMB_TX_H, ty=EMB_TY_H)
vh_h_element = get_vheld_paths(scale=SCALE_VH_H, tx=VH_TX_H, ty=VH_TY_H, fill_color="#065830")
sub_h_element = get_subtitle_paths_vertical(scale=SCALE_SUB_H, tx=SUB_TX_H, ty=SUB_TY_H, fill_color="#7A8B82")
tag_h_element = get_tagline_paths_vertical(scale=SCALE_TAG_H, tx=TAG_TX_H, ty=TAG_TY_H, fill_color="#0D5C32")

RULE_Y_H = TAG_TY_H + 14.0
rule_left_h = f'<line x1="392" y1="{RULE_Y_H:.1f}" x2="452" y2="{RULE_Y_H:.1f}" stroke="#E3A709" stroke-width="4.0" stroke-linecap="round"/>'
rule_right_h = f'<line x1="915" y1="{RULE_Y_H:.1f}" x2="975" y2="{RULE_Y_H:.1f}" stroke="#E3A709" stroke-width="4.0" stroke-linecap="round"/>'

svg_4 = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1020 360" width="1020" height="360" fill="none">
  <title>V-HELD Logo (Horizontal Lockup)</title>
  <desc>V-HELD horizontal lockup: emblem, name, full descriptor, and tagline.</desc>
  <g id="emblem">
    {emb_h_elements}
  </g>
  <g id="logotype">
    {vh_h_element}
  </g>
  <g id="subtitle">
    {sub_h_element}
  </g>
  <g id="tagline-group">
    {rule_left_h}
    {tag_h_element}
    {rule_right_h}
  </g>
</svg>'''
with open('public/assets/brand/v-held-logo-horizontal.svg', 'w') as f:
    f.write(svg_4)

# 5. Set default logo.svg and src/app/icon.svg
with open('public/assets/logo.svg', 'w') as f:
    f.write(svg_1)

with open('src/app/icon.svg', 'w') as f:
    f.write(svg_1)

print("Generated all 4 SVGs + updated logo.svg and icon.svg!")
