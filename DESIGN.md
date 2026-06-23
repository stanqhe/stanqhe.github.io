---
version: alpha
name: Arc Design
slug: arc-design
description: Design system for Stan Q. He’s Quarto-powered personal site.
scope: Editorial portfolio, project writing, analytics notes, and personal publishing.
audience: Humans and AI coding agents working on the site.
contract: Preserve neutral editorial structure, quiet atmospheric color, Quarto-native depth, light/dark parity, and restrained interaction.

implementation:
  framework: "Quarto"
  css_file: "styles.css"
  output_dir: "_site"
  dark_mode: "Quarto dark theme, body.quarto-dark overrides, and prefers-color-scheme fallback"

colors:
  blue: "#a8d8f0"
  purple: "#d9d2e9"
  gold: "#f4dfa8"
  sky_blue: "#f0f9ff"
  lavender: "#f6f1fa"
  light_gold: "#fffcf5"
  starlight: "#f7f7f4"
  midnight: "#191919"
  glass: "rgba(255,255,255,0.72)"
  graphite: "#252525"
  black: "#172033"
  gray: "#5f6879"
  white: "#f1f1ef"
  stone: "#a9a9a5"

typography:
  body:
    fontFamily: "Inter"
    fontSize: "clamp(1rem, 0.98rem + 0.1vw, 1.06rem)"
    fontWeight: 400
    lineHeight: 1.65
  display:
    fontFamily: "Outfit"
    fontWeight: 600
    letterSpacing: "-0.055em"
  section-heading:
    fontFamily: "Outfit"
    fontWeight: 600
    letterSpacing: "-0.025em"
  label:
    fontFamily: "Inter"
    fontWeight: 600
    letterSpacing: "0.04em"

spacing:
  xs: "0.34rem"
  sm: "0.75rem"
  md: "1.1rem"
  lg: "1.5rem"
  xl: "2.25rem"
  paragraph_gap: "1.1rem"
  page_gutter: "clamp(1.25rem, 4vw, 1.375rem)"
  content_max: "936px"

rounded:
  sm: "0.35rem"
  md: "0.75rem"
  lg: "0.9rem"
  pill: "999px"
  full: "999px"

components:
  prose-link:
    color: "{colors.black}"
    darkColor: "{colors.white}"
    decoration: "Subtle neutral underline; muted text on hover or focus."
  contact-link:
    color: "{colors.black}"
    darkColor: "{colors.white}"
    interaction: "Small vertical translation and muted color on hover or focus."
  contact-strip:
    backgroundColor: "{themes.light.surface_subtle}"
    darkBackgroundColor: "{themes.dark.surface_subtle}"
    rounded: "{rounded.pill}"
  identity-panel:
    backgroundColor: "{themes.light.surface_subtle}"
    darkBackgroundColor: "{themes.dark.surface_subtle}"
    rounded: "{rounded.lg}"
    surface: "Low-emphasis panel for landing-page identity support text."
  profile-image:
    rounded: "{rounded.md}"
    border: "Low-contrast neutral border."
  right-toc:
    currentMarkerColor: "{colors.blue}"
    darkCurrentMarkerColor: "{colors.sky_blue}"
    surface: "{colors.glass}"
    darkSurface: "{colors.graphite}"

themes:
  light:
    canvas: "{colors.starlight}"
    surface: "{colors.glass}"
    surface_subtle: "rgba(95,104,121,0.055)"
    navbar: "rgba(247,247,244,0.88)"
    text_primary: "{colors.black}"
    text_muted: "{colors.gray}"
    border: "rgba(73,84,105,0.14)"
    border_hover: "rgba(217,210,233,0.55)"
    shadow: "rgba(78,83,125,0.14)"
    hover_shadow: "rgba(168,216,240,0.13)"
    link_text: "{colors.black}"
    link_hover: "{colors.gray}"
    link_underline: "color-mix(in srgb, {colors.gray} 45%, transparent)"
    highlight: "rgba(95,104,121,0.12)"
    toc_current: "{colors.blue}"
    glow_blue: "rgba(168,216,240,0.07)"
    glow_lavender: "rgba(246,241,250,0.04)"
    glow_gold: "rgba(255,252,245,0.05)"

  dark:
    canvas: "{colors.midnight}"
    surface: "{colors.graphite}"
    surface_subtle: "rgba(169,169,165,0.08)"
    navbar: "rgba(25,25,25,0.88)"
    text_primary: "{colors.white}"
    text_muted: "{colors.stone}"
    border: "rgba(255,255,255,0.105)"
    border_hover: "rgba(217,210,233,0.22)"
    shadow: "rgba(0,0,0,0.28)"
    hover_shadow: "rgba(0,0,0,0.22)"
    link_text: "{colors.white}"
    link_hover: "{colors.stone}"
    link_underline: "rgba(169,169,165,0.45)"
    highlight: "rgba(169,169,165,0.14)"
    toc_current: "{colors.sky_blue}"
    glow_blue: "rgba(168,216,240,0.025)"
    glow_lavender: "rgba(246,241,250,0.015)"
    glow_gold: "rgba(255,252,245,0.012)"

roles:
  text:
    intent: "Support long-form editorial reading."
    default: "Use theme.text_primary for headings and prose; theme.text_muted for metadata, captions, and support text."
    interaction: "No interaction unless text is a link or control."

  link:
    intent: "Provide editorial navigation without turning prose into UI chrome."
    default: "Use neutral text with a subtle neutral underline."
    interaction: "On hover or focus, use muted text, a stronger underline, or a clearer focus state."

  button:
    intent: "Confirm action clearly without promotional styling."
    default: "Use neutral ink/white inversion for primary actions; use glass or graphite surfaces with quiet borders for secondary actions."
    interaction: "Prefer border-color, text-color, or subtle surface changes. Tiny vertical translation is acceptable only for compact icon links."

  highlight:
    intent: "Emphasize reading state or rare editorial detail."
    default: "Use muted gray/stone background for editorial highlights and heading flash."
    interaction: "Temporary states may fade in and out quietly."

  surface:
    intent: "Create quiet structure without heavy cards."
    default: "Use starlight/midnight for canvas; glass/graphite for panels; low-opacity neutral for subtle surfaces."
    interaction: "Clickable surfaces may use subtle border, text, or background changes."

  border:
    intent: "Separate content softly and signal interaction."
    default: "Use low-contrast neutral borders."
    interaction: "Hover borders may lean lavender/purple."

  toc:
    intent: "Provide Quarto-native reading orientation with minimal visual weight."
    default: "Use collapsed dot/dash markers and an expanded glass/graphite panel with neutral text."
    interaction: "Current section uses bold neutral text."

color_system_growth:
  rule: "Use primitive tokens, themes, and roles instead of full numeric color ramps."
  next_step: "Introduce compact role scales only after repeated component needs appear."
  full_ramps: "Introduce numeric ramps only when multiple components need shared ordered intensities."
---

# Arc Design

Arc Design defines the visual and interaction language for Stan Q. He’s personal Quarto site. It is meant to help humans and AI agents keep the site calm, precise, readable, and durable as it grows.

## Source of truth

Use this file for design intent and decision-making. Use `styles.css` as the implementation source of truth for the live site; if the two disagree, inspect the current CSS before changing behavior, then update whichever side is stale.

The YAML front matter keeps a small, machine-readable token surface: top-level `colors`, `typography`, `spacing`, `rounded`, and `components` expose reusable primitives. The `themes` and `roles` maps are project-specific extensions that preserve Arc Design’s implementation model without repeating raw token values.

## Overview

This site is a personal, editorial portfolio built with Quarto and deployed through GitHub Pages. Its visual goal is **quiet authorship**: a calm publication rather than a startup landing page, clear and restrained enough to support projects, writing, notes, legal pages, and future portfolio depth.

Arc Design is benchmark-aware but self-owned. It borrows maturity from editorial publishing and product systems while staying grounded in Quarto’s long-form model; it should not imitate any single company, product, or template.

- **Editorial calm:** neutral prose, generous whitespace, content-first hierarchy, minimal decoration.
- **Product-level restraint:** few colors, high finish, subtle surfaces, smooth but non-performative interactions.
- **AI-readable structure:** clear tokens, theme mappings, roles, component rules, and change constraints.
- **Quarto-native depth:** long-form writing, code-aware project pages, right-side table of contents, footers, document pages, and reproducible article structure should stay honest to Quarto.
- **Personal warmth:** lavender, sky-blue, and light gold appear as atmosphere, state, tint, or micro-accent, not as loud branding.

### Principles

- **Content before chrome.** Layout should reveal identity, projects, writing, notes, and selected public context without competing with them.
- **Restraint is the brand.** Every accent, shadow, border, animation, and surface should have a clear role.
- **Same identity, different lighting.** Light and dark mode are one system under different lighting conditions. Keep one `DESIGN.md` unless dark mode later becomes a distinct art direction.
- **Borrow maturity, not appearance.** Use product-level rigor and AI-readable token structure, but do not copy a product-dashboard aesthetic.
- **Prefer roles over ramps.** Address text, links, buttons, highlights, fills, borders, shadows, focus, and glows through role tokens before adding numeric color scales.

### System model

```text
Primitive tokens → Themes → Roles → Components → Page implementation
```

- **Primitive tokens** are top-level raw values: `colors`, `typography`, `spacing`, and `rounded`. Compatibility aliases such as `rounded.full` may coexist with site-native names such as `rounded.pill`.
- **Themes** map tokens into light and dark mode.
- **Roles** define how interface elements behave: text, link, button, highlight, fill, border, TOC.
- **Components** apply roles to site patterns: navbar, landing identity, right TOC, footer, project cards.
- **Implementation** should reference existing CSS variables whenever possible.

The top-level YAML maps are the single machine-readable token source. The `themes → roles` model is the preferred reasoning path for changes to this site.

## Colors

Color should feel atmospheric and editorial, not promotional. The site uses neutral structure first, then lavender/sky-blue/gold as subtle state, tint, glow, and chart support.

### Tokens

| Token | Value | Intended use |
|---|---:|---|
| `blue` | `#a8d8f0` | State marker, selected item, chart series. |
| `purple` | `#d9d2e9` | Hover border, secondary state, chart series. |
| `gold` | `#f4dfa8` | Micro-accent, small callout, chart highlight. |
| `sky_blue` | `#f0f9ff` | Soft wash, hover tint, quiet glow. |
| `lavender` | `#f6f1fa` | Atmospheric finish, soft panel tint. |
| `light_gold` | `#fffcf5` | Warm surface tint, bottom-edge glow. |
| `starlight` | `#f7f7f4` | Light page canvas. |
| `midnight` | `#191919` | Dark page canvas. |
| `glass` | `rgba(255,255,255,0.72)` | Light surfaces. |
| `graphite` | `#252525` | Dark surfaces. |
| `black` | `#172033` | Main light-mode text. |
| `gray` | `#5f6879` | Muted light-mode text. |
| `white` | `#f1f1ef` | Main dark-mode text. |
| `stone` | `#a9a9a5` | Muted dark-mode text. |

These values are not permanent brand absolutes. They may be challenged later if contrast, tone, or long-form readability improves.

### Themes

| Role | Light | Dark | Notes |
|---|---|---|---|
| `canvas` | `starlight` | `midnight` | Page background. |
| `surface` | `glass` | `graphite` | Cards, panels, navbar/TOC surfaces. |
| `surface_subtle` | `rgba(95,104,121,0.055)` | `rgba(169,169,165,0.08)` | Profile/contact panels. |
| `navbar` | `rgba(247,247,244,0.88)` | `rgba(25,25,25,0.88)` | Sticky navbar surface. |
| `text_primary` | `black` | `white` | Main prose and headings. |
| `text_muted` | `gray` | `stone` | Metadata, intro support text, captions. |
| `border` | `rgba(73,84,105,0.14)` | `rgba(255,255,255,0.105)` | Default quiet border. |
| `border_hover` | `rgba(217,210,233,0.55)` | `rgba(217,210,233,0.22)` | Hover state; purple enters here. |
| `shadow` | `rgba(78,83,125,0.14)` | `rgba(0,0,0,0.28)` | Surface depth. |
| `hover_shadow` | `rgba(168,216,240,0.13)` | `rgba(0,0,0,0.22)` | Optional surface depth; not default button glow. |
| `link_text` | `black` | `white` | Normal editorial prose links. |
| `link_hover` | `gray` | `stone` | Hover state for prose links. |
| `link_underline` | muted neutral underline | muted neutral underline | Normal editorial link underline. |
| `highlight` | `rgba(95,104,121,0.12)` | `rgba(169,169,165,0.14)` | Heading flash and quiet editorial highlight. |
| `toc_current` | `blue` | `sky_blue` | Navigation state marker. |
| `glow_blue` | low-opacity blue | lower-opacity blue | Atmospheric bottom glow. |
| `glow_lavender` | low-opacity lavender | lower-opacity lavender | Atmospheric bottom glow. |
| `glow_gold` | low-opacity light gold | lower-opacity light gold | Atmospheric bottom glow. |

### Roles

- **Text:** main prose uses neutral ink; secondary text uses gray/stone. Use weight, spacing, or quiet background highlight instead of colored prose emphasis.
- **Links:** prose links use neutral text and subtle underline. Hover/focus may use muted text, stronger underline, or clearer focus state.
- **Buttons:** primary actions use black/white inversion; secondary actions use glass/graphite surfaces with quiet borders. Hover should confirm state through border, text, or subtle surface changes rather than glow.
- **Highlights:** article highlights should be background states, not colored text. Heading flashes use muted gray/stone.
- **Surfaces:** page and panel fills are neutral. Accent fills should be low-opacity tints and used sparingly.
- **Borders:** default borders are low-contrast neutral; hover borders may lean lavender/purple.
- **Charts:** blue may be primary, purple secondary, gold a single highlight. Always use legends when color implies meaning.

### Interaction states

- **Default:** neutral text, neutral border, or quiet surface.
- **Hover:** use muted text, stronger underline, subtle border change, or a small surface shift.
- **Focus:** every interactive element must have a visible `:focus-visible` state. Never remove an outline without an accessible replacement.
- **Active/current:** use weight, marker shape, underline, or text label in addition to color.
- **Disabled:** lower contrast only when the control is truly unavailable; do not rely on opacity alone if meaning would become unclear.

## Accessibility

Accessibility is part of the visual system, not a later audit.

- Body text and essential UI text should meet WCAG AA contrast.
- Do not signal state with color alone; pair color with text, weight, underline, shape, marker length, icon, or position.
- Preserve keyboard access for links, contact icons, the table of contents, and future controls.
- Keep touch targets practical on mobile, especially icon-only contact links and future navigation.
- Respect `prefers-reduced-motion` for scroll-based identity behavior, TOC reveal, heading flash, and any future animation.
- Check light and dark mode together when changing color, shadow, focus, or hover behavior.

### Color system growth

Arc Design does not currently use full numeric color ramps such as `blue-100` through `blue-1000`. The site is an editorial portfolio, so colors should be defined by role: canvas, surface, text, border, highlight, glow, and navigation state.

If repeated components later need more nuance—such as chart series, project categories, status badges, filters, or interactive demos—introduce compact role scales first:

```yaml
accent_blue:
  wash: "soft background tint"
  tint: "selected or hover background"
  mark: "current navigation or active state"
  ink: "accessible accent text, only after contrast testing"
```

Only introduce full numeric ramps when multiple components need shared ordered intensities. Do not create ramps just to imitate larger product design systems.

## Typography

Typography should feel editorial, not promotional.

- **Inter** is the default body and UI font.
- **Outfit** is the display font for the identity name and landing-page headings.
- Body: `clamp(1rem, 0.98rem + 0.1vw, 1.06rem)`, line-height `1.65`.
- Paragraph gap: `1.1rem`.
- Landing identity: Outfit, weight `600`, letter-spacing around `-0.055em`.
- Section heading: Outfit, weight `600`, letter-spacing around `-0.025em`.
- Labels/eyebrows: Inter, weight `600`, small size, slight positive letter spacing.
- Use `font-display: swap` for local web fonts.
- Do not introduce additional fonts unless the whole identity is being redesigned.
- Avoid huge marketing H1s on content pages and excessive all-caps.

## Layout

The site has two major modes: a personal landing page and Quarto-native content pages.

- Max content width: `936px`.
- Page gutter: `clamp(1.25rem, 4vw, 1.375rem)`.
- Preserve comfortable line length.
- Do not stretch prose across the full viewport.
- Let tables and code breathe without turning project pages into dashboards unless the content genuinely requires it.

### Landing page

- Desktop: profile column on the left, intro column on the right.
- Mobile: single column; identity remains prominent; portrait and links stack intentionally.
- Profile image is square, softly framed, and not over-stylized.
- Contact links are compact and icon-led.

### Content pages

- Work with Quarto’s generated structure instead of replacing it wholesale.
- Keep title blocks, headings, sections, lists, code, and figures readable.
- Prefer standard long-form hierarchy over app-like card layouts.
- Use the right TOC as content navigation, not decoration.

## Elevation & Depth

Depth is atmospheric, not dramatic.

- Light mode may use cool soft shadows.
- Dark mode should rely more on surface contrast and less on glow.
- Bottom-edge radial glows are allowed.
- Strong button glow, center-stage gradients, floating blobs, neon glows, and decorative glass panels are not allowed as default style.

Preferred surface recipes:

- **Light:** translucent white surface, low-contrast border, cool shadow, blur around `18px`.
- **Dark:** graphite surface, low-contrast white border, minimal glow, normal shadow.

## Motion

Motion should clarify, not entertain.

- Use subtle hover transitions around `150–220ms`.
- TOC reveal/collapse can be animated.
- Heading flash can fade.
- Identity collapse can respond to scroll.
- Buttons should not float or glow by default; prefer border, text, or subtle surface changes.
- A tiny vertical translation is acceptable for compact icon links, but not required.
- Always respect `prefers-reduced-motion`.
- Do not add decorative parallax, constant animation, or cursor-follow effects.

## Shapes

Use a small, consistent radius scale.

| Token | Value | Use |
|---|---:|---|
| `sm` | `0.35rem` | Heading flash and compact states. |
| `md` | `0.75rem` | Images and contained blocks. |
| `lg` | `0.9rem` | Identity panels and TOC surfaces. |
| `pill` | `999px` | Contact strips, labels, and small chips. |

Avoid introducing new radii for one-off effects.

## Components

Components should preserve Quarto-native content depth while giving the site a coherent editorial interface.

### Component status

Current components:

- Navbar
- Landing identity
- Profile image
- Contact links
- Right table of contents
- Footer

Future or conditional components:

- Project cards
- Writing index
- Charts, status markers, filters, or category chips
- Inputs, forms, or app-like controls

Do not add future components just because they are listed here. Use these rules only when the corresponding content or interaction exists.

### Navbar

- Minimal sticky, blurred neutral surface on content pages.
- Hidden on the landing page if the identity block already performs that role.
- Current default: brand/name only.
- Add global links only when the site has enough sections to justify them.
- Do not add a heavy navbar just to imitate large company sites.

### Right table of contents

The enhanced TOC is a signature interaction.

- Collapsed state: quiet dot/dash markers.
- Expanded state: glass/graphite panel, neutral text, clear current section.
- Current state: blue marker in light mode; sky-blue marker in dark mode.
- Initial quiet peek is allowed once per session to teach discoverability.
- Clicked headings may flash with muted gray/stone background, not blue.
- Respect keyboard navigation, focus, escape, pointer type, and reduced motion.

### Footer

- Small, quiet, metadata/legal oriented.
- Keep copyright and Terms of Use visible.
- Avoid turning the footer into a second navbar unless the site grows substantially.

### Landing identity

- Identity name is prominent but not performative.
- Use Outfit, tight letter spacing, and restrained weight.
- Scroll-based collapse may be used, but must be smooth, subtle, and disabled/reduced under reduced-motion preferences.

### Project cards

- Editorial summaries, not SaaS dashboard tiles.
- Use neutral surfaces.
- Use accent color only for small category/state markers.
- Include title, short description, methods/tools, and link.
- Avoid excessive icons or colorful grids unless categories become meaningful.

### Writing index

- Should feel like a publication archive.
- Prefer lists, grouped sections, or restrained cards.
- Use dates and tags quietly.
- Use accent colors only for selected states or tiny markers.

### Future forms and controls

- Use neutral primary actions: black on light surfaces, white on dark surfaces, or the inverse when needed.
- Secondary controls use transparent, glass, or graphite surfaces with low-contrast borders.
- Inputs should inherit the page typography, use clear labels, and show visible focus states.
- Error, warning, or success states may introduce semantic color only when paired with text or iconography.
- Avoid importing a component framework unless the site grows into repeated interactive workflows.

## Voice & Content

The site voice should be clear, precise, and personal without becoming casual or corporate.

- Prioritize concrete project context over vague self-branding.
- Keep legal and metadata pages plain and readable.
- Keep portfolio writing explanatory: question, method, result, limitation, implication.
- Avoid generic AI words such as “cutting-edge,” “seamless,” “unlock,” and “revolutionize” unless they are being critically discussed.
- Prefer Quarto-native long-form structure for substantial writing.

## Do’s and Don’ts

### Do

- Preserve the calm editorial identity.
- Prefer theme roles over new raw values.
- Keep light and dark mode visually related.
- Keep dark mode quieter than light mode.
- Use blue/lavender/gold as state, tint, glow, chart, or micro-accent.
- Use border, underline, text color, or subtle surface changes for interaction feedback.
- Preserve the right TOC behavior and accessibility logic.
- Respect mobile layouts, safe-area spacing, and reduced motion.
- Keep CSS overrides targeted and documented.
- Work with Quarto’s structure rather than replacing it wholesale.

### Don’t

- Do not invent numeric color ramps unless explicitly requested or justified by repeated component needs.
- Do not turn links blue/purple by default.
- Do not use pastel fills for primary buttons.
- Do not use strong button glow or floating hover as the default interaction.
- Do not use colored prose text as the default emphasis system.
- Do not add heavy dependencies or app-like JavaScript frameworks for simple interactions.
- Do not add decorative parallax, cursor-follow effects, neon gradients, or generic AI-template bento layouts.
- Do not hide essential navigation in hover-only interactions without keyboard/touch fallback.

### Change policy

Before changing colors, ask whether the change improves readability or contrast, preserves the neutral editorial tone, reduces AI-template vibes, works in both light and dark mode, and uses color as a role rather than decoration.

Before adding a component, define its purpose, content type, roles used, light/dark behavior, mobile behavior, and accessibility behavior.

Before changing front matter, preserve the canonical top-level token maps unless there is a specific interoperability reason to change them. Put project-specific reasoning in `themes`, `roles`, or markdown prose rather than weakening the shared token surface.

Before changing typography, verify the change preserves long-form readability, does not introduce a third font, and does not make content pages feel like marketing pages.

Before changing motion, verify the behavior clarifies orientation or state, remains subtle, and has a reduced-motion path.

Arc Design can grow gradually. Add complexity only when repeated content proves the need. The mature direction is not more tokens; it is clearer roles.
