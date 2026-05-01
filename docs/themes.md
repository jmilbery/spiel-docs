---
title: Themes
sidebar_position: 6
---

# Themes

Spiel ships with seven themes. Two are general-purpose corgi.software defaults; five are show-specific. Themes carry both visual styling (palette, typography, slide chrome) and brand chrome (header text, closing-slide social tiles, disclosure).

This page lists the built-in themes and explains how to make your own.

## Setting a theme

In the file header:

```markdown
!theme: corgi-dark
```

If omitted, defaults to `corgi-dark`.

## Built-in themes

| ID | Style | Background | Accent | Brand chrome |
|---|---|---|---|---|
| **`corgi-dark`** ⭐ | Spiel default — Comet's coat | Charcoal `#2A2B30` | Ice Blue `#5B9BD5` | Empty (clean starter) |
| **`corgi-light`** | Light variant | Background Light `#F8F7F5` | Ice Blue `#5B9BD5` | Empty (clean starter) |
| `splaining` | YouTube thumbnail style | Lime green title, off-white body | Lime `#89ce2e` | PE TechCast |
| `techcast` | Dark digital | Dark `#191919` | Lime `#89ce2e` | PE TechCast |
| `funcast` | Light editorial | White | Lime `#89ce2e` | PE Funcast |
| `circuit` | Swiss/data | Dark `#111111` | Signal Blue `#2563EB` | None |
| `kuromaku` | Gold/black/crimson | Dark `#0D0D0D` | Gold `#FFD700` | None |

## The corgi.software themes

### `corgi-dark` — the default

Built from the corgi.software brand kit. The full palette is derived from Comet, Jim Milbery's blue merle Cardigan Welsh Corgi.

| Slot | Value |
|---|---|
| Background | Charcoal Black `#2A2B30` |
| Stage frame | `#1A1B1F` |
| Body text | Warm White `#E3DCD4` |
| Dim text | Silver Merle `#9EA7AE` |
| Primary accent | **Ice Blue `#5B9BD5`** |
| Secondary accent | Steel Blue-Gray `#6F7A82` |
| Card surface | `#3A3B40` |
| Display font | Nunito ExtraBold (800) |
| Body font | DM Sans 400/500/600 |
| Mono font | DM Mono |

Brand chrome empty by default. Decks render with just the term and slide content — no series wordmark, no closing-slide social grid, no legal disclosure. Authors override per-deck with `!series:`, `!subseries:`, `!social:`, `!disclosure:` directives.

### `corgi-light` — light variant

Same palette, inverted. Background Light surface, Charcoal text, Ice Blue accent, Copper Tan as the warm secondary (used for the header bar). Same fonts.

For decks that want a non-dark aesthetic — useful for slides recorded on a light-themed software demo, or content where dark mode reads as too "podcast-y."

## Show-specific themes

The PE TechCast / Funcast themes carry full PE brand chrome built into the theme:

- `defaultSeries: 'PE TECHCAST'` (or `PE FUNCAST`)
- `defaultSubseries: "PE 'SPLAINING"`
- `closingBrandTop: 'PRIVATE EQUITY'`
- `closingFeaturedSocial: { url, slug, label, display }` for the YouTube tile
- `closingSocials: [...6 tiles]` (Substack, Website, LinkedIn, Instagram, X, Facebook)
- `closingDisclosure: '...full ParkerGale disclosure...'`

A deck using `!theme: techcast` automatically gets all of that chrome on its closing slide. Per-deck `!social:` and `!disclosure:` directives still override individual fields if needed.

### `techcast`

Dark digital aesthetic. Lime green accent, dark gray surfaces. CRT slide type's home theme. Used by `llm.md`, `tokens.md`, `foundation-models.md`, etc.

### `splaining`

YouTube thumbnail style. Lime green title slide, off-white content slides. Used by `rag.md`. Same brand chrome as `techcast`.

### `funcast`

Light editorial aesthetic. White slides, dark text. PE Funcast main-show theme.

### `circuit`

Swiss/data design — information-dense, signal blue accent. Used for technical conversation walkthroughs (Claude Code session decks). No PE brand chrome.

### `kuromaku`

Gold/black/crimson — Japanese aesthetic, composed authority. Used for Kuromaku-branded content. No PE brand chrome.

## Brand chrome — what theme provides

Every theme can provide these brand chrome fields:

| Field | What it sets |
|---|---|
| `defaultSeries` | Header bar series wordmark (e.g. `PE TECHCAST`) |
| `defaultSubseries` | Header bar sub-label (e.g. `PE 'SPLAINING`) |
| `closingBrandTop` | Top wordmark on the closing slide (e.g. `PRIVATE EQUITY`) |
| `closingBrand` | Bottom wordmark on the closing slide (e.g. `TECHCAST`) |
| `closingFeaturedSocial` | Featured social tile spec: `{ url, slug, label, display }` |
| `closingSocials` | Array of social tile specs for the grid |
| `closingDisclosure` | Legal/compliance footer text |

Per-deck directives `!series:`, `!subseries:`, `!social:`, `!disclosure:` override individual fields when set. Anything left empty is hidden — so `corgi-dark` decks render with just the term + content, no chrome at all.

## Building your own theme

Themes live in `app/themes.js`. To add one:

1. **Pick an ID** (e.g. `acme-blue`). Lowercase, hyphenated, used in `!theme: <id>` directives.

2. **Copy a similar theme** as a starting point. If you want a dark theme, start from `corgi-dark`. Light theme — `corgi-light`. PE-flavored — `techcast`.

3. **Add the theme entry** to `app/themes.js`:

```js
'acme-blue': {
  id:    'acme-blue',
  label: 'Acme Blue',

  badge:        null,
  closingBrand: 'ACME',

  // Brand chrome (optional)
  defaultSeries:    '',
  defaultSubseries: '',
  closingBrandTop:  '',
  closingFeaturedSocial: null,
  closingSocials:   [],
  closingDisclosure: '',

  // Color palette
  accent:      '#0066CC',
  accentAlt:   '#003D7A',
  accentRGB:   '0,102,204',
  altRGB:      '0,61,122',

  bg:          '#FFFFFF',
  stage:       '#F0F4F8',
  text:        '#1A1A1A',
  textRGB:     '26,26,26',
  textDim:     '#666666',
  headerText:    '#FFFFFF',
  headerTextRGB: '255,255,255',
  ink:         '#1A1A1A',
  card:        '#F5F5F5',

  // Type
  fontDisplay:    "'Inter', system-ui, sans-serif",
  fontBody:       "'Inter', system-ui, sans-serif",
  fontMono:       "'JetBrains Mono', monospace",
  fontEditorial:  "'Inter', Georgia, serif",

  googleFonts: ['Inter:wght@400;500;600;700;800', 'JetBrains+Mono:wght@400;500'],

  // Other tokens
  crtBg:       '#0a0a14',
  crtText:     '#0066CC',
  crtRGB:      '0,102,204',

  notesBg:     '#F8F8F8',
  notesText:   '#1A1A1A',
  track:       '#E0E0E0',
  borderDim:   '#D4D4D4',

  logo:        null,
},
```

4. **Build a deck with the theme** to verify:

```markdown
!theme: acme-blue
```

```bash
node app/generate.js my-deck
```

5. **Document the theme** by adding a row to the table at the top of this page.

## Required theme tokens

Every theme must provide these tokens. Missing ones fall back to defaults (look at `getThemeCSS` in `app/themes.js` for the full fallback chain).

| Token | Purpose |
|---|---|
| `id` / `label` | Identifier and human-readable name |
| `accent` / `accentAlt` / `accentRGB` / `altRGB` | Primary + secondary accent colors |
| `bg` / `stage` | Slide background, outer stage frame |
| `text` / `textRGB` / `textDim` | Body text colors |
| `headerText` / `headerTextRGB` | Header bar text (header bar uses `accentAlt` as bg) |
| `ink` / `card` | Dark ink for borders, light card surface |
| `fontDisplay` / `fontBody` / `fontMono` / `fontEditorial` | Font stacks |
| `googleFonts` | Array of Google Font query strings |
| `crtBg` / `crtText` / `crtRGB` | CRT slide colors (used by single-slide / kuromaku) |
| `notesBg` / `notesText` / `track` / `borderDim` | Presenter notes window styling |

## See also

- [Directives — `!theme:`](/directives#theme-id) — directive reference
- [`app/themes.js` in the Spiel repo](https://github.com/jmilbery/spiel/blob/main/app/themes.js) — source for all built-in themes
- [`corgisoftware-brand` skill](https://github.com/jmilbery/claude-skill-hub/wiki/corgisoftware-brand) — full corgi.software brand kit
