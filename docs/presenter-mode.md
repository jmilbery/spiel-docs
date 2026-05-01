---
title: Presenter Mode
sidebar_position: 7
---

# Presenter Mode

Spiel ships with a dual-window presenter mode designed for screen-recording solo videos. The slides window is what your viewers see; the presenter window is what you see — your script, your bullets, your timing.

This page covers the recording workflow, the teleprompter, the bullet echo, and every keyboard shortcut.

## The two-window setup

Every Spiel deck builds **two HTML files** in `dist/`:

| File | Purpose |
|---|---|
| `<deck-id>.html` | The slides — what your camera/screen recorder captures |
| `<deck-id>-notes.html` | The presenter notes — what you read while recording |

`bash present.sh <deck-id>` opens both windows side-by-side. They communicate via `BroadcastChannel` — when you advance in the notes window, the slides window advances too. When you advance in the slides window, the notes window catches up.

## What the presenter window shows

The presenter window has two columns:

**Left column — slide preview**
- A scaled-down preview of the current slide (what your viewers are seeing)
- "Prev Slide" / "Next Slide" buttons for non-step navigation

**Right column — script + teleprompter**
- The current speaker note, rendered as a teleprompter
- A **bullet echo** at the top in Ice Blue showing the current slide's bullet text (so your eye never leaves the script to check what's on screen)
- Word-by-word highlighting that scrolls automatically while you read
- Speed controls (slow / fast) and a "READ" toggle to pause/resume

**Header bar** — slide N of total, step indicator, live status.

## The bullet echo

When the current step has a bullet (basics, items, audience, single, zigzag slide types), the presenter window shows the bullet text in a distinct lime-green Arial Black block above the speaker note, labelled `ON SLIDE`.

This way you don't have to flick your eye to the slides window to see what's currently on screen — the bullet is right there in your script.

The echo is automatic. No markup needed. It hides on diagram and intro slides (which have no per-step bullet).

```
┌─────────────────────────────────────────────┐
│ ON SLIDE                                    │
│ The diligence question isn't "which model?" │
│ — it's "how fast can they switch?"          │
└─────────────────────────────────────────────┘

That one question opens up the four you actually need
answered. First — which models are they using, and why
THOSE models? If the answer is just a vendor name, keep...
```

The bullet echo uses the same font as your speaker note (DM Sans / Geist), but in Ice Blue weight-600 with a left bar. Different color, same family — it reads as a *quote* of the slide content, not a different voice.

## Recording workflow

The standard Spiel recording setup:

1. **Build the deck** — `node app/generate.js my-episode`
2. **Open the two windows** — `bash present.sh my-episode`
3. **Position the slides window** as your screen-capture target. Full-screen on a secondary display, or a sized window on your primary display that your screen recorder is configured to capture.
4. **Position the presenter window** off-screen — on a tablet, a laptop next to your camera, or a second monitor your recorder is NOT capturing.
5. **Hit record** in your screen capture tool (OBS, ScreenFlow, QuickTime, etc.).
6. **Hit P in the presenter window** to start the teleprompter scroll.
7. **Read your patter**, advancing slides with `Space` (or click anywhere in the presenter window) when each step's narration ends.

That's it. The rest is editing.

## Keyboard shortcuts

Both windows respond to the same set of shortcuts.

### Navigation

| Key | Action |
|---|---|
| `Space` / `→` / `PageDown` / `Enter` | Advance one step (next bullet, next sub-step, next slide) |
| `←` / `PageUp` / `Backspace` | Step back |
| `]` | Jump to next slide |
| `[` | Jump to previous slide (fully built) |
| `Home` | Jump to first slide |
| `End` | Jump to last slide |
| `R` | Reset the current slide to its first step |

### Teleprompter (presenter window)

| Key | Action |
|---|---|
| `P` | Toggle word-by-word teleprompter scroll on/off |
| `,` | Step the highlighted word back one |
| `.` | Step the highlighted word forward one |
| `◀ SLOW` / `FAST ▶` buttons | Adjust scroll speed (default 160 WPM, range 80-280) |

The teleprompter is paused by default — you have to toggle it on with `P` or click the `▶ READ` button. It auto-pauses when it reaches the end of the note, when you scroll manually, or when you change slides.

### Other

| Key | Action |
|---|---|
| `N` | Toggle inline speaker notes overlay (slides window only — useful when you're presenting without the dual setup) |

## The notes window in detail

### Auto-scroll

As the teleprompter advances, the current word is highlighted in Ice Blue accent color and the page auto-scrolls to keep it ~1/3 from the top of the viewport. Words you've already read are dimmed.

The auto-scroll pauses when you:
- Manually scroll with the mouse wheel or touch
- Click a word (clicking seeks the highlight to that word but stops the auto-advance)
- Reach the end of the note

Press `P` again to resume.

### Per-bullet vs. per-tier notes

Spiel attaches speaker notes at three levels of granularity:

- **Slide-level intro note** — `^ … ^` block at the top of a slide. Shows when the slide first appears, before any bullet is revealed.
- **Per-bullet note** — `^ … ^` block immediately after a bullet. Shows when that specific bullet is revealed.
- **Per-tier note** (audience slides) — `^ … ^` block after the last bullet in a tier. Shows when the entire tier is visible.

The presenter window automatically swaps notes as you advance, with a quick fade transition.

### Width / panel resize

The vertical split between the slide preview and the notes column is draggable. Grab the divider in the middle and drag left or right to give the script more room or the slide preview more room.

## Tips for clean recordings

### Pre-record checklist

- **Build last.** Make your final edits to the `.md`, then `node app/generate.js` once. Don't rebuild mid-recording — the BroadcastChannel state can get confused.
- **Open both windows fresh.** Close stale tabs, kill old previews. Stale `BroadcastChannel` connections can cause double-broadcasts.
- **Start on slide 1.** Hit `Home` in either window before recording to lock the state.
- **Verify the bullet echo is showing.** Step forward once — if the echo doesn't render, you may have a step that doesn't have a bullet, OR a `BroadcastChannel` mismatch.

### During recording

- **Read the bullet echo, not the slide preview.** The echo updates instantly. The slide preview is a low-res scaled iframe and may have a perceptible lag.
- **Don't fight the teleprompter.** If it gets ahead of you, hit `,` to step it back. If it's behind, hit `.` to advance. Don't change the WPM mid-take — re-record the take.
- **Pause between slides.** The auto-scroll pauses at the end of each note; let it pause naturally before advancing. Gives you a beat to breathe and gives your editor a clean cut point.

### Edit-friendly practices

- **One step = one beat.** Advance only when you've finished the bullet's narration. Don't advance mid-sentence.
- **Re-take liberally.** It's faster to re-take a single step than to edit around a flubbed line. Spiel makes step boundaries obvious, so re-takes are easy to splice.
- **Leave 1-2 seconds of silence before advancing.** Gives editors handles for clean cuts.

## Troubleshooting

**Notes window says "Open the slides window to start"**
- The two windows communicate via `BroadcastChannel`, which only works when both windows are open in the same browser. Open both `<deck>.html` and `<deck>-notes.html` in the same browser session.

**Bullet echo doesn't appear**
- The current step might not have a bullet (intro / diagram / closing slides have no echo).
- Otherwise, hard-refresh the notes window (`Cmd+Shift+R`) to reset the listener.

**Teleprompter scrolls too fast / too slow**
- Use the SLOW / FAST buttons to adjust WPM. Default 160 WPM, range 80-280.
- Match it to your natural speech rate before recording, then leave it alone.

**Slides window navigates but notes window doesn't update**
- Cross-browser doesn't work. Both windows need to be in the same browser instance.
- Try refreshing both windows (notes first, then slides).

**Fonts not loading**
- The corgi themes use Google Fonts (Nunito, DM Sans, DM Mono). They load on first build. If the network blocks Google Fonts, the fallback stack is system-ui — readable but off-brand.

## See also

- [Slide Types — Speaker Notes](/slide-types#speaker-notes) — how to attach notes
- [Directives](/directives) — header / per-slide configuration reference
