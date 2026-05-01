---
title: Authoring Guide
sidebar_position: 2
---

# Authoring Guide

This guide walks through writing a complete Spiel deck from scratch — the structure, the voice, and the assembly. By the end you'll have a recording-ready episode that matches the canonical PE TechCast / 'Splaining shape.

The sections below mirror the order you'd write them. Skip to whichever section matches what you're stuck on.

## The episode shape

Every Spiel episode follows the same eight-slide spine:

| # | Slide | Type | Purpose |
|---|---|---|---|
| 1 | Title | (auto from header) | Hook — the term, the subtitle, the cold open |
| 2 | **By the End** | basics, `!position: pre-title` | The promise — what the viewer will know by the end |
| 3 | Concept | items | Define the term, break it into sub-concepts |
| 4 | Concept (deeper) | items | The trade-off, the second major idea, the nuance |
| 5 | Diagram | diagram | First visual — the landscape or the taxonomy |
| 6 | Diagram | diagram | Second visual — the architecture or the workflow |
| 7 | **So What Does This Mean to You?** | audience | Three-tier callback — see the [Audience Pattern](/audience-pattern) doc |
| 8 | Closing | closing | Sign-off + CTA to the next/previous episode |

You don't have to follow this exactly — slides 3/4 can be one or three; slides 5/6 might be one diagram or none. But the spine is the proven shape.

## The narrative spine

Two slides do load-bearing structural work:

- **By the End** ends with `= So what does this mean to you?` as its final bullet
- **Audience slide** uses the heading `## SO WHAT DOES THIS MEAN TO YOU?` to answer that question

Together they're a setup-and-payoff. Don't skip either; don't rename them. The viewer registers the promise at minute one and feels it land at minute six.

## Step 1 — File header

Start every deck with the file header:

```markdown
# TERM
Full Name Here
EP. 01

> One-sentence definition that appears in the white tag box.

^
Speaker notes for the title slide.
^
```

| Line | What it does |
|---|---|
| `# TERM` | Big display word — the term, all caps |
| `Full Name Here` | Subtitle on the title slide |
| `EP. 01` | Episode number, shown in the header bar |
| `> definition` | The white tag box that appears after the title is revealed |
| `^ … ^` | Speaker notes for the title slide |

Optional header directives — see the [Directives reference](/directives):

```markdown
!theme: corgi-dark           # default; corgi-light, techcast, etc. also work
!series: Your Show Name      # overrides theme's default series
!subseries: Optional         # extra header label
!social: https://...         # featured social URL on closing slide
!disclosure: Legal text      # legal/compliance footer
```

## Step 2 — By the End slide

Right after the file header, write the **By the End** slide. It's a basics-style slide marked `!position: pre-title` so it runs *before* the auto-generated title slide as a cold-open preview.

```markdown
---

## TERM — BY THE END
!type: basics
!position: pre-title

= [first capability or takeaway]
^
Per-bullet speaker note.
^

= [second capability]
= [third capability]
= So what does this mean to you?
```

**The four bullets are a contract:**

1. Three concrete capabilities or takeaways the viewer will get
2. The fourth is *always* `= So what does this mean to you?` — verbatim

That fourth bullet sets up the audience slide at the end. Don't drop it, don't rename it — it's the payoff slot.

## Step 3 — Concept slides

The middle of the episode is one to three "items"-type slides that define the term and break it into pieces.

```markdown
---

## THE FOUNDATION LAYER
!type: items

^
Slide-level intro note.
^

### What a Foundation Model Is
^
Sub-section intro — this shows when the section header is revealed.
^

=Trained on large, varied datasets
^
Per-bullet speaker note.
^

=Learns general-purpose capabilities that transfer
^
Note for this bullet.
^
```

The pattern: section heading → narrative bullets → next section. The presenter advances bullet-by-bullet; previous sections collapse into a "past stack" at the top.

See [Slide Types](/slide-types) for the full reference on basics vs. items vs. zigzag and when to use each.

## Step 4 — Diagrams

Visuals carry weight. A 2-minute spoken explainer with two well-designed diagrams beats a 6-minute one with eight bullet slides.

Diagrams are hand-crafted SVG or HTML files that live in `app/diagrams/`. Spiel embeds them as iframes:

```markdown
---

## THE VENDOR MAP
!type: diagram
!src: foundation-01-vendor-map.html?embed=1

^
Speaker narration that runs while the diagram is on screen.
^
```

The `?embed=1` strips the diagram's own page header so it renders edge-to-edge in the iframe.

**When to use a diagram:** when the relationship between things is the point. Vendor landscapes, architectures, taxonomies, before/after comparisons, decision trees. If you're tempted to write five bullets describing how things connect, draw it instead.

## Step 5 — The audience callback

Every episode ends with the **So What Does This Mean to You?** slide. Three audience tiers, one bullet each, distinct angles.

```markdown
---

## SO WHAT DOES THIS MEAN TO YOU?
!type: audience

^
Three audiences. One sentence each. Same shape as every Spiel deck.
^

### TIER ONE
=One sentence at this audience's level.
^
Speaker notes — say more here, slide stays minimal.
^

### TIER TWO
=One sentence: the diligence concern.
^
Speaker notes for this tier.
^

### TIER THREE
=One sentence: the action.
^
Speaker notes for this tier.
^
```

The whole [Audience Pattern](/audience-pattern) doc covers this in depth — including the *three distinct angles* rule that separates a great audience slide from a mediocre one.

## Step 6 — Closing

```markdown
---

## CLOSING

That's it for today's episode. One-line wrap-up here.

!cta: Watch EP. 02 — Next Topic | https://example.com/ep-02

^
Spoken sign-off — same content as the visible wrap-up, expanded for delivery.
^
```

The `!cta:` directive adds a footer bar with a call-to-action link. Standard place for "watch the next episode" links.

The closing slide auto-generates the brand chrome (social tile grid, featured tile, legal disclosure) from the active theme. See [Themes](/themes) for how to set this up for a non-PE brand.

## Step 7 — Build & verify

```bash
node app/generate.js my-episode
node server.js
bash present.sh my-episode
```

Step through the whole deck once with the presenter window open. Things to check:

- Every bullet has a speaker note (or you've decided to use the slide-level intro for that step)
- The bullet echo in the notes window matches the slide
- Diagrams load in their iframes (no 404s)
- The audience slide is three tiers, one bullet each, three distinct angles
- The closing CTA points where you want it to

Once it stepscleanly, you're ready to record.

## Voice & writing tips

These aren't rules, but they're how the PE TechCast episodes (Spiel's reference content) are written:

- **Speak directly to one person.** "You" not "we" or "the audience."
- **One idea per bullet.** If a bullet has a comma you can't avoid, it might want to be two bullets.
- **Speaker notes are spoken English.** Run-on sentences, contractions, colloquialisms. They're a script, not prose.
- **Cut filler.** "Just," "really," "very," "in order to" — gone.
- **End with a question or a punchline.** Audience slides especially: each bullet should land like a beat.

## Where to go next

- **[Slide Types](/slide-types)** — Every type with markup examples
- **[Directives](/directives)** — Full reference for header and per-slide directives
- **[Audience Pattern](/audience-pattern)** — Deep dive on the three-tier callback
- **[Presenter Mode](/presenter-mode)** — Recording workflow, teleprompter, dual windows
