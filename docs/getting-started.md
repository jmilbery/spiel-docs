---
slug: /
title: Getting Started
sidebar_position: 1
---

# Getting Started

**Spiel** is a markdown-driven slide engine for solo video creators. You write a single `.md` file. Spiel turns it into an animated, recording-ready HTML deck with a built-in teleprompter.

This page gets you from zero to a built deck in five minutes.

## Install

Spiel has no runtime dependencies. Just clone, build, serve.

```bash
git clone https://github.com/jmilbery/spiel
cd spiel
node app/generate.js                # lists available decks
```

You need Node 16 or newer. That's it.

## Build a sample deck

The repo ships with the PE TechCast — PE 'Splaining episodes as reference decks. Pick one and build it:

```bash
node app/generate.js llm
```

Output:

```
✓ dist/llm.html              ← slides
✓ dist/llm-notes.html        ← presenter notes window
✓ dist/*.html (17 diagrams)  ← copied from app/diagrams/
```

Then serve `dist/` and open both the slides and the notes window:

```bash
node server.js                  # serves dist/ at http://localhost:4242
bash present.sh llm             # opens slides + presenter window
```

You should see the slides window with the title slide for "LLM — Large Language Model" and a separate notes window with the speaker script.

## Step through the deck

In the **slides window**:

| Key | What it does |
|---|---|
| `Space` / `→` / `PageDown` | Advance one step (next bullet, next sub-step, or next slide) |
| `←` / `PageUp` / `Backspace` | Step back |
| `]` | Jump to next slide |
| `[` | Jump to previous slide (fully built) |
| `N` | Toggle inline speaker notes overlay |
| `Home` / `End` | Jump to first / last slide |

In the **notes window** (presenter mode), you also get word-by-word teleprompter scrolling. Press `P` to toggle.

## Author your first deck

Copy the starter template and start writing.

```bash
cp templates/blank-episode.md app/terms/my-first-deck.md
```

Open `app/terms/my-first-deck.md` and fill in the placeholders. The template has every slide type stubbed out:

- **Title slide** (auto-generated from the file header)
- **By the End** preview slide (basics-style)
- **Section** slide (items)
- **Diagram** slide (iframe-embedded SVG/HTML)
- **Audience** callback slide
- **Closing** slide

Build it:

```bash
node app/generate.js my-first-deck
```

And present:

```bash
bash present.sh my-first-deck
```

That's the full Spiel loop. Edit, build, present.

## What's next

- **[Authoring Guide](/authoring-guide)** — Walk through writing a complete episode end-to-end. Structure, voice, diagrams, audience callback.
- **[Slide Types](/slide-types)** — Every slide type with markup examples.
- **[Directives](/directives)** — Full reference for `!theme:`, `!type:`, `!social:`, etc.
- **[Themes](/themes)** — The two corgi.software themes that ship by default, plus how to make your own.
- **[Audience Pattern](/audience-pattern)** — The three-tier callback framework that gives every Spiel deck a narrative spine.
- **[Presenter Mode](/presenter-mode)** — Dual-window setup, teleprompter, the bullet echo, keyboard shortcuts.

## Why Spiel?

Most slide tools are built for live audiences with co-presenters and clickers. Spiel is built for one person talking to a camera. That single use case shapes every decision:

- **One file = one deck.** Your script and your slides live together. No switching between Keynote and a Word doc.
- **Animations recording-friendly.** No "live demo of zoom-pan effect" — just clean step reveals that hold up under screen capture.
- **Teleprompter built in.** The presenter window scrolls your speaker notes word-by-word, with the current bullet echoed at the top so your eye never leaves the script.
- **Theme + brand chrome configurable.** Two themes ship by default; everything else is one directive away.

If you're recording explainer videos, tech talks, podcasts-with-slides, or anything where you're the only person on camera with a script and a deck — Spiel is built for you.
