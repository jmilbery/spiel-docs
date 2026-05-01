---
title: Audience Pattern
sidebar_position: 5
---

# The Audience Pattern

Every Spiel deck ends with the same slide: **So What Does This Mean to You?** Three audience tiers, one bullet each, distinct angles. This page explains why, how to write a great one, and the drift to watch for.

## The pattern in one breath

Two slides do load-bearing structural work in every Spiel deck:

1. **By the End** slide ends with `= So what does this mean to you?` as its final bullet.
2. **Audience slide** uses the heading `## SO WHAT DOES THIS MEAN TO YOU?` to answer that question.

The viewer registers the promise at minute one. They feel it land at minute six. That setup-and-payoff IS the deck's narrative spine.

## The three-tier structure

The reference Spiel content (PE TechCast — PE 'Splaining) uses three audience tiers in fixed order:

```markdown
## SO WHAT DOES THIS MEAN TO YOU?
!type: audience

### INVESTORS / LPs
=One sentence at the LP level — no jargon.

### PE FIRMS & INVESTMENT BANKS
=The diligence concern in one sentence.

### PORTFOLIO COMPANIES
=The action — what to build, insulate, or stop doing.
```

You're not stuck with these three labels — your audience may be different. But the **structure** of three tiers, each at a different altitude, is the pattern that works.

## The standard pattern: one bullet per tier

Each tier gets a **single punchy sentence** (or one short paragraph). Speaker notes carry the depth and the supporting detail. Don't pile up multiple bullets per tier — the slide should read like three tweets, not three checklists.

Why one bullet?

- **Pacing.** Three short reveals beat fifteen short ones.
- **Memorability.** Viewers can hold three sentences in working memory; they can't hold twelve bullets.
- **Forces clarity.** When you have to compress to one sentence, you find out what you actually mean.

If you can't compress an audience tier to one sentence, the underlying point isn't sharp enough yet. Keep editing.

## Three distinct angles — not the same point three ways

This is the rule that separates a great audience slide from a mediocre one. **Each tier hits a different concern.** If two tiers sound like they could swap places, push harder until each one speaks to its own audience.

The reference framework that works for PE-flavored content:

| Tier | Frame | What the bullet must answer |
|---|---|---|
| **INVESTORS / LPs** | *Where it lives* | Portfolio-level posture — no model names, no architecture-speak. *"Where in the AI stack do the costs and risks actually concentrate, and what should I be asking my GPs about?"* If it reads like the PE bullet, push it up a layer. |
| **PE FIRMS & INVESTMENT BANKS** | *The diligence concern* | Deal-team frame. *"What's the specific dollar or risk question to bring into diligence on this topic?"* Cost discipline, switching cost, contract terms, architecture maturity. The thing that kills a deal or shows up on a 100-day plan. |
| **PORTFOLIO COMPANIES** | *The action* | Operator frame. *"What do we build, insulate against, or stop doing?"* Architectural answer in operator vocabulary. Concrete enough that an engineering leader could act on it Monday morning. |

If your audience is different (developers, founders, executives — or LP / GP / IC for an LP-only show), apply the same shape:

- **Tier 1 = Where it lives.** The wide shot. Strategic posture. No tactical detail.
- **Tier 2 = The decision concern.** The mid-shot. The question they should be asking.
- **Tier 3 = The action.** The close-up. What to build, do, or stop.

## The drift to watch for

The most common failure mode: **all three tiers ending up as operator advice with different framing.** LP and middle-tier bullets drift down into "build a router" and "monitor your retrieval rate" — they end up as the PortCo bullet with extra adjectives.

LP-level is a *posture question*, not a build instruction. The LP doesn't build anything; they ask their GPs. The middle tier doesn't build anything either; they evaluate companies that do.

If your audience slide reads like:

- LP: *Build a router and route by task.*
- PE: *Build a router and ask the portco about routing.*
- PortCo: *Build a router and route by task.*

…that's the drift. All three are operator advice with different framing. Push the top two tiers up a layer.

## Bullet pattern by tier

Three concrete patterns that work across episodes:

### LP / Top tier — *posture*

> *"[Topic] is where the [costs / risks / concentration / leverage] live — and [where it concentrates / what's at stake / what your GPs should be asking]."*

Examples:
- *Foundation models are where the costs and the risks live — and they're concentrated in a handful of vendors.*
- *RAG is the reason AI can answer questions about your portcos' specific data — that's the unlock that makes enterprise AI actually useful.*

### PE / Middle tier — *diligence*

> *"[The specific question]. [The disqualifying answer]."*

Examples:
- *Frontier foundation model costs can be a killer — diligence the cost discipline, not the logo.*
- *The diligence question isn't "which model?" — it's "how fast can they switch?"*

### PortCo / Action tier — *what to do*

> *"[Action verb] [the thing] by [the method]."* Or: *"Don't [the trap] — [the right move]."*

Examples:
- *Insulate yourselves from cost and latency issues by building a router and routing by task.*
- *Don't marry one vendor — build a router and route by task.*

## Speaker notes per tier

Bullets stay minimal; speaker notes go deep. A typical audience-tier note is 80-200 words and elaborates the bullet with:

- Why the audience should care (one sentence)
- The specific question or action (a few sentences)
- An example or smell test (a few sentences)
- A close — what bad looks like, or the thing that surprises people

The speaker reads the bullet, then narrates the depth. The viewer sees one sentence; the listener gets the full lecture.

```markdown
### PE FIRMS & INVESTMENT BANKS
=Frontier foundation model costs can be a killer — diligence the cost discipline, not the logo.
^
Frontier model spend is the new line item that can quietly blow up a portco's
cost structure. The diligence question is not "which model?" It's how
disciplined the spend is.

First — what percentage of AI workload runs against frontier models versus
cheaper tiers? If the answer is "all of it goes to GPT-5.5" or "all of it
goes to Opus," that's a routing problem and a cost problem in one.

[continues for several more paragraphs]
^
```

The `^ … ^` block goes after the LAST bullet in the tier (which is the only bullet, in the standard one-bullet pattern). It becomes the tier-level note.

## When you don't use this pattern

If your video isn't an audience-segmented explainer, you don't need this slide at all. The audience callback works because PE TechCast is *for* multiple audience tiers (LPs, deal teams, portcos all watch the same episodes). For a video that has one audience, just end with a normal closing slide.

But if there's any chance your viewers split into distinct tiers — investors vs. operators, executives vs. engineers, beginners vs. experts — the audience pattern is worth the effort. It's the single highest-leverage slide in the whole deck.

## See also

- [Slide Types — Audience Slide](/slide-types#4-audience-slide) — markup reference
- [Authoring Guide — The audience callback](/authoring-guide#step-5--the-audience-callback) — where it fits in the episode
