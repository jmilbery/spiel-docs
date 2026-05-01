---
title: Slide Types
sidebar_position: 3
---

# Slide Types

Spiel ships with eight slide types. Each is auto-detected from the markdown structure, or you can force one with `!type: <type>`.

This page lists every type with a markup example and notes on when to use it.

## Slide divider

Use `---` on its own line between every slide:

```markdown
---

## NEXT SLIDE HEADING
```

## 1. Title slide

The title slide is built automatically from the file header. You don't write `## TITLE` — the `# TERM` line + `Full Name` line + `> definition` produce it.

```markdown
# TERM
Full Name Here
EP. 01

> One-sentence definition that appears in the white tag box.

^
Speaker notes for the title slide.
^
```

**When it shows:** Always first (or after pre-title slides like By the End).

**Variants:** Mini decks can omit the `> definition` line and Spiel will skip the title slide entirely.

---

## 2. Basics slide (one bullet at a time)

Bullets at slide level — each one stays visible as you advance, accumulating down the slide.

```markdown
## SLIDE HEADING

^
Slide-level intro speaker note.
^

=First bullet point
^
Per-bullet speaker note.
^

=Second bullet point
=Third bullet point
```

**Variant — sub-step mode (one item at a time, hero treatment):**

If you want each bullet to be the only thing on screen at its moment, use `!type: basics` with `!position: pre-title` for the **By the End** slide pattern:

```markdown
## TERM — BY THE END
!type: basics
!position: pre-title

= Capability one
= Capability two
= So what does this mean to you?
```

**When to use:** Setup slides, By the End previews, "key points" lists.

---

## 3. Items slide (label + bullets, sub-step mode)

One section visible at a time. Each section has a big label on top and a column of bullets that reveal one-by-one. Previous sections shrink into a "past stack" at the top.

```markdown
## CONCEPT SLIDE
!type: items

^
Slide-level intro note.
^

### SECTION LABEL
^
Section intro note.
^

=First bullet
^
Per-bullet note.
^

=Second bullet

### ANOTHER SECTION
=Bullet
=Bullet
```

**When to use:** Defining a term with sub-concepts. Comparing vendors. Walking through stages of a process. The workhorse content slide.

---

## 4. Audience slide

Three tiers replace each other: LP / PE Firm / Portfolio Co (or whatever audience structure your show uses). All bullets in a tier appear at once. One speaker note per tier.

```markdown
## SO WHAT DOES THIS MEAN TO YOU?
!type: audience

^
Three audiences. One sentence each. Distinct angles.
^

### INVESTORS / LPs
=One sentence at the LP level — no jargon.
^
Speaker notes for the entire LP tier.
^

### PE FIRMS & INVESTMENT BANKS
=The diligence concern in one sentence.
^
Speaker notes for this tier.
^

### PORTFOLIO COMPANIES
=The action — what to build, insulate, or stop doing.
^
Speaker notes for this tier.
^
```

**When to use:** Always at the end of every episode, as the callback to the `= So what does this mean to you?` bullet on the By the End slide.

The full pattern — three distinct angles, the LP-level / diligence / action frames, and the common drift to avoid — is in the [Audience Pattern](/audience-pattern) doc.

---

## 5. Diagram slide

Embeds an HTML file as a full-slide iframe. Diagram source files live in `app/diagrams/` and Spiel copies them into `dist/` on every build.

```markdown
## DIAGRAM HEADING
!type: diagram
!src: my-diagram.html?embed=1

^
Speaker note that runs while the diagram is on screen.
^
```

**About `?embed=1`:** Diagram HTML files include their own page header bar (so they're standalone-viewable). The `?embed=1` parameter hides that header so it renders edge-to-edge in the iframe.

**When to use:** Whenever the relationship between things is the point — vendor landscapes, architectures, taxonomies, before/after comparisons, decision trees. If you'd write five bullets describing how things connect, draw it instead.

**Authoring diagrams:** Hand-craft as SVG inside an HTML file. They're version-controlled with the rest of the deck. See `app/diagrams/foundation-01-vendor-map.html` in the Spiel repo for a worked example.

---

## 6. Demo slide

Transition card for screen-switch or live-demo moments. Useful when you need to cut to your terminal, IDE, or a third-party app for a few seconds before returning to slides.

```markdown
## DEMO — Live Walkthrough
!type: demo

Optional subtitle text on its own line.
```

Auto-detected if the heading starts with `DEMO`.

**When to use:** Recording a Claude Code session, a live coding demo, a product walkthrough. The demo slide is the breath; the actual demo happens off-deck.

---

## 7. Links slide

Accumulate mode. Label column on the left (sage green), link on the right.

```markdown
## WHERE TO GO NEXT

^
Sign-off speaker note.
^

### LABEL
[Display text](https://url.com)

### ANOTHER LABEL
[Display text](https://url.com)
```

Auto-detected if the heading contains `NEXT`, `WHERE`, or `LINK`.

**When to use:** End-of-episode resources. Doc links. Repos. Books. Channels.

---

## 8. Closing slide

Fixed-format branded end card with social tiles + featured social + disclosure.

```markdown
## CLOSING

Optional sign-off text on its own line.

!cta: Watch EP. 01 — What the Heck Is an LLM? | https://youtube.com/watch?v=...

^
Speaker note for the sign-off.
^
```

Renders automatically with brand treatment from the active theme. The social tile grid, featured social tile, and legal disclosure all come from the theme. See [Themes](/themes) for how to configure the brand chrome.

**CTA on closing slides:** Use `!cta: text | url` to link to related episodes (previous or next in the series). This is the standard place for cross-episode links — don't put YouTube links as bullets in content slides.

---

## 9. Single slide (CRT terminal)

Heading + optional hero text + bullets, all on one slide. Used for terminal-style content.

```markdown
## SINGLE SLIDE
!type: single

Hero text goes here (optional).

=Bullet
=Bullet
=Bullet
```

**When to use:** Quick callouts, "what is X" cards, terminal demos with a static result on screen.

---

## Bullet prefixes

Use `=` as the bullet prefix. It's invisible to markdown editors — they won't auto-format it or add list continuations.

```markdown
=This is a bullet
```

Other prefixes that work: `~ `, `- ` (dash-space), `\~ ` (Obsidian's escaped form). `=` is recommended.

---

## Speaker notes

`^` alone on a line opens a notes block. `^` alone again closes it. Everything between is your script.

```markdown
^
Write as many lines as you want.
No prefix needed on any of them.
The parser joins them into one paragraph.
^
```

**Per-bullet notes:** Place a `^ … ^` block directly after a bullet. When the presenter advances to that bullet, the notes window switches to it.

**Per-tier notes (audience slides):** Place one `^ … ^` block after all bullets in the tier. It becomes the tier-level note shown when the entire tier is visible.

---

## Reference card

```
# TERM              ← title slide term
Full Name           ← subtitle
EP. 01              ← episode number
!theme: corgi-dark  ← theme (corgi-dark, corgi-light, techcast, splaining, etc.)
> Definition        ← tag box
^ … ^               ← speaker notes block
---                 ← slide divider
## HEADING          ← slide heading
!type: items        ← force slide type
!cta: text | url    ← footer call-to-action bar
!src: file.html     ← diagram embed source
!position: pre-title ← run before the auto title slide
### SECTION         ← section/vendor/tier within a slide
### SECTION | sub   ← section with sub-label
= bullet            ← bullet point (recommended prefix)
```
