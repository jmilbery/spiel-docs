---
title: Directives
sidebar_position: 4
---

# Directives

Spiel uses `!directive: value` lines for configuration. Some are **header-only** (must appear before the first `---` slide divider). Others are **per-slide** (appear inside a slide's content). This page is the full reference.

## Quick reference

| Directive | Where | What it does |
|---|---|---|
| `!theme:` | Header | Sets the visual theme |
| `!series:` | Header | Override the series wordmark in the header bar |
| `!subseries:` | Header | Override the sub-series label in the header bar |
| `!social:` | Header | Featured social URL on the closing slide |
| `!disclosure:` | Header | Legal/compliance footer text on the closing slide |
| `!episode:` | Header (alt) | Episode number, alternative to `EP. NN` line |
| `!type:` | Per-slide | Force a slide type |
| `!position:` | Per-slide | Set slide position (e.g. `pre-title`) |
| `!src:` | Per-slide | HTML file to embed as iframe (diagram slides) |
| `!cta:` | Any slide | Adds a footer bar with text and optional link |

---

## Header directives

These appear at the top of the file, before the first `---`. Order doesn't matter.

### `!theme: <id>`

Sets the visual theme for the deck. Available themes:

- `corgi-dark` (default — Comet's coat in dark mode)
- `corgi-light` (light variant)
- `techcast` (PE TechCast — dark digital)
- `splaining` (PE 'Splaining — YouTube thumbnail style)
- `funcast` (PE Funcast — light editorial)
- `circuit` (Swiss/data, signal blue)
- `kuromaku` (Gold/black/crimson)

```markdown
!theme: corgi-dark
```

If omitted, defaults to `corgi-dark`. See [Themes](/themes) for full theme details.

---

### `!series: <text>`

Overrides the series wordmark in the slide header bar (top-left). Useful when the theme's default series text isn't what you want.

```markdown
!series: My Show Name
```

If not set, the theme's `defaultSeries` is used (e.g. `techcast` theme defaults to `PE TECHCAST`).

---

### `!subseries: <text>`

Overrides the sub-series label that appears next to the series wordmark, separated by a vertical pipe.

```markdown
!subseries: AI Edition
```

If not set, the theme's `defaultSubseries` is used.

---

### `!social: <url>`

The featured social URL on the closing slide (the standalone large tile). Defaults to the theme's `closingFeaturedSocial` if not set.

```markdown
!social: https://youtube.com/@MyShow
```

The URL is auto-stripped of protocol for clean display (`https://youtube.com/@MyShow` becomes `youtube.com/@MyShow`).

If neither this directive nor the theme provides a value, the featured tile is hidden.

---

### `!disclosure: <text>`

Legal/compliance footer text shown at the bottom of the closing slide. Defaults to the theme's `closingDisclosure` if not set.

```markdown
!disclosure: This podcast is for entertainment purposes only — nothing in it constitutes investment advice.
```

If neither this directive nor the theme provides a value, the disclosure strip is hidden.

The text is rendered as a single paragraph; line breaks aren't preserved. For now, keep disclosures to one paragraph.

---

### Episode number

The episode number is set via the `EP. NN` header line — not a directive:

```markdown
# TERM
Full Name
EP. 04
```

You can also use the `!episode:` directive as an alternative:

```markdown
!episode: 04
```

Both work the same way. Episode 1 displays as `EP. 01` (zero-padded).

---

## Per-slide directives

These appear inside a slide's content (after the `## HEADING` line).

### `!type: <type>`

Forces a specific slide type. Most slides auto-detect, but `!type:` lets you override:

```markdown
## SLIDE HEADING
!type: items
```

Valid types:

- `basics` — bullets at slide level, accumulate mode
- `items` — section heading + bullets, sub-step mode
- `audience` — three-tier replace mode
- `diagram` — iframe-embedded HTML
- `demo` — transition card for live demos
- `links` — label + URL pairs
- `closing` — branded end card
- `single` — CRT terminal style
- `zigzag` — alternating left/right bullet stack

See [Slide Types](/slide-types) for what each one does.

---

### `!position: <pos>`

Currently supports one value: `pre-title`. Used to make a slide appear *before* the auto-generated title slide as a cold-open preview.

```markdown
## TERM — BY THE END
!type: basics
!position: pre-title
```

The standard By the End pattern uses this to set up the episode promise before the title reveal.

---

### `!src: <file>`

For diagram slides, the HTML file to embed as an iframe.

```markdown
## DIAGRAM HEADING
!type: diagram
!src: my-diagram.html?embed=1
```

The path is relative to `dist/`. Diagram source files live in `app/diagrams/` and Spiel copies them into `dist/` on every build.

The `?embed=1` query parameter is a convention diagram files use to hide their own page header for clean iframe embedding.

---

### `!cta: <text> | <url>`

Adds a footer call-to-action bar with text on the left and an optional link on the right. The `|` separator is required if a URL is included.

```markdown
!cta: Watch EP. 02 — Next Topic | https://example.com/ep-02
```

Or text-only:

```markdown
!cta: Subscribe at corgi.software
```

Most useful on the closing slide for cross-episode links. Don't put YouTube links as bullets in content slides — use the `!cta:` on the closing slide instead.

---

## Bullet prefixes

Not directives, but related — these are the prefix characters that mark a line as a bullet:

| Prefix | Notes |
|---|---|
| `= ` | Recommended. Invisible to markdown editors. |
| `=`  | Without space — also accepted for convenience |
| `~ ` | Original prefix; still works |
| `\~ ` | Obsidian's auto-escaped form of `~ ` |
| `- ` | Dash-space — fallback. Markdown editors may auto-format. |

```markdown
=First bullet
=Second bullet
```

---

## Speaker note delimiters

Not a directive, but worth listing here:

- `^` alone on a line — opens or closes a multi-line speaker notes block
- `^ <text>` — single-line speaker note (legacy form)

```markdown
^
Multi-line speaker note.
Joined into one paragraph.
^
```

See [Slide Types — Speaker Notes](/slide-types#speaker-notes) for full notes-attachment rules (per-slide, per-bullet, per-tier).
