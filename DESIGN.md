# Design System Specification: High-End Hardware Editorial

## 1. Overview & Creative North Star: "The Precision Atelier"
This design system moves away from the aggressive, dark-themed tropes of the computer hardware industry. Instead, it adopts a "Precision Atelier" philosophy—treating high-end components like pieces of fine jewelry or architectural feats. 

The system rejects the "box-within-a-box" layout typical of e-commerce. Instead, it uses **Intentional Asymmetry** and **Floating Geometry**. Large-scale typography bleeds off-grid, and product imagery is treated with a "Heroic Scale," often overlapping multiple tonal layers to create a sense of three-dimensional space. The result is a high-tech environment that feels breathable, premium, and human-centric.

---

## 2. Colors & Surface Philosophy
The palette is rooted in absolute clarity, using blue not just as an accent, but as the "atmospheric" light source of the UI.

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders to define sections. Layout boundaries must be achieved through background shifts.
- To separate a "Product Specs" section from a "Review" section, transition from `surface` (#f7f9fb) to `surface-container-low` (#f2f4f6).
- For internal card groupings, use `surface-container-lowest` (#ffffff) sitting on `surface-container` (#eceef0).

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of semi-translucent materials.
1.  **Base Layer:** `surface` (#f7f9fb) — The infinite canvas.
2.  **Section Layer:** `surface-container-low` (#f2f4f6) — Large content blocks.
3.  **Object Layer:** `surface-container-lowest` (#ffffff) — Floating product cards or interactive modules.

### The "Glass & Gradient" Rule
To elevate the "high-tech" feel, use **Glassmorphism** for persistent elements like the top navigation bar or floating filter chips. 
- **Recipe:** `surface` at 70% opacity + `backdrop-blur: 24px`.
- **Signature Texture:** Use a subtle linear gradient on primary CTAs: `primary` (#0058be) to `primary-container` (#2170e4) at a 135-degree angle. This prevents the "flat-web" look and adds a machined, metallic depth.

---

## 3. Typography: Editorial Authority
We use a dual-font system to balance technical precision with high-end editorial flair.

*   **Display & Headlines (Manrope):** The "Workhorse of Tech." Use `display-lg` (3.5rem) with tight letter-spacing (-0.02em) for hero product names. Manrope’s geometric nature mirrors the precision of hardware engineering.
*   **Body & UI (Inter):** The "Standard of Clarity." Used for all functional data. Inter's high x-height ensures that complex technical specifications (voltage, clock speeds, dimensions) remain legible at `body-sm` (0.75rem).

**Hierarchy Tip:** Never use "Bold" for body text. Use `medium` weight with a higher contrast color (`on-surface`) to maintain the sophisticated, light-touch aesthetic.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too "dirty" for this system. We use **Ambient Blue Shadows** to mimic the glow of a high-end liquid-cooled PC.

### The Layering Principle
Depth is achieved by stacking. A `primary_fixed` card placed on a `surface` background creates a "soft lift" without a single pixel of shadow.

### Ambient Shadows
When an element must float (e.g., a "Compare" modal), use an ultra-diffused shadow:
- **X/Y:** 0px 20px
- **Blur:** 40px
- **Color:** `primary` (#0058be) at **5% opacity**.
- This creates a soft, blue-tinted "aura" rather than a grey smudge.

### The "Ghost Border" Fallback
If contrast is required for accessibility (e.g., input fields), use a **Ghost Border**: `outline-variant` (#c2c6d6) at 20% opacity. It should be felt, not seen.

---

## 5. Components

### Buttons: The Kinetic Engine
*   **Primary:** Gradient fill (`primary` to `primary-container`), `xl` (3rem) corner radius. On hover, increase the blue ambient shadow spread.
*   **Secondary:** Ghost style. No fill, `outline-variant` at 20% opacity. Text in `primary`.
*   **Tertiary:** Text-only with `label-md` styling, using an arrowhead icon (→) that shifts 4px on hover.

### Cards: The Product Pedestal
*   **Forbid Dividers:** Do not use lines between the product image and the price. Use a `1.4rem` (Spacing 4) vertical gap.
*   **Interaction:** On hover, the card should scale to 102% and the background should shift from `surface-container-lowest` to a subtle blue tint (`primary_fixed`).

### Input Fields: Clean Logic
*   **Style:** `surface-container-high` fill with no border. On focus, a `2px` "Ghost Border" appears using `primary` at 40% opacity.
*   **Corner Radius:** `sm` (0.5rem) to maintain a slightly more "technical" feel than the rounded buttons.

### Spec Sheets (Unique Component)
Instead of a table, use a staggered grid of `surface-container-lowest` tiles. Each tile features a `label-sm` category header in `on-surface-variant` and a `title-md` value.

---

## 6. Do’s and Don’ts

### Do:
*   **Use Whitespace as a Component:** Treat empty space as a luxury feature. Give product images "room to breathe."
*   **Asymmetric Layouts:** Place a `display-lg` headline on the left and a product description on the right, but offset them vertically by `Spacing 8` (2.75rem).
*   **Color as Light:** Use `primary_fixed` (#d8e2ff) for backgrounds of small callouts to make them feel like they are glowing.

### Don't:
*   **No "Pure Black" Shadows:** Never use #000000 for shadows. Always tint with the primary blue.
*   **No Hard Edges:** Avoid the `none` roundedness scale except for the very edges of the browser window.
*   **No Divider Fatigue:** If you feel the urge to add a horizontal line, try adding `Spacing 12` (4rem) of empty space instead. If that fails, use a subtle background color shift.
*   **No Default "Dark Mode":** When the dark mode toggle is triggered, the background should shift to `inverse_surface` (#2d3133), not #000000, to maintain the soft-tech aesthetic.