---
title: "26 Criteria for AI-Readiness: How I Audited My Own Site (and Beat Three B2B SaaS Giants)"
date: "2026-05-16"
description: "I ran a 26-criterion AI-readiness audit on ivannikov.pro. Score: 42 → 80 in one day. Then I ran the same audit on Stripe (55), Twilio (UNRELIABLE), and Linear (UNRELIABLE). Here's the methodology and what it means for B2B SaaS in 2026."
image: "/images/blog/1.webp"
tags: ["ai-readiness", "ai-seo", "geo", "llms-txt", "schema-org", "b2b-saas", "engineering"]
---

# 26 Criteria for AI-Readiness: How I Audited My Own Site (and Beat Three B2B SaaS Giants)

In May 2026 I ran a structured 26-criterion AI-readiness audit on my own site `ivannikov.pro`. Starting score: ~42/100. One day of fixes later: **80/100**. Then I ran the same audit on Stripe, Twilio, and Linear. **Twilio and Linear failed the E1 pre-condition gate** — their public sites cannot be parsed by LLM crawlers without JavaScript. Stripe scored **55/100**, missing fundamentals like `llms-full.txt` and explicit AI-policy in `robots.txt`.

If you run a B2B SaaS and rely on organic traffic, this matters. Discovery has shifted from Google to AI agents — ChatGPT, Claude, Perplexity, Google AI Overview. Sites that are not optimised for LLM consumption lose visibility every quarter. Most "AI SEO" advice is generic; this post gives you the concrete checklist.

---

## The 26-criterion framework

Five categories, 100 points total, plus a hard pre-condition gate:

### E1 gate (pre-condition)

**Content accessible without JavaScript execution.** LLM crawlers (`GPTBot`, `ClaudeBot`, `PerplexityBot`) do not run JS. If your site requires it to render content, the whole audit is _UNRELIABLE_ — fix this first. This is where SPAs lose, hard.

### A. Discovery (18 pts)

Can an LLM agent find your content from a cold start? Look for:

- `/llms.txt` — site index in the [llmstxt.org](https://llmstxt.org) format.
- `/llms-full.txt` — extended version with concatenated content.
- `/robots.txt` with explicit `Allow:` for AI crawlers (not just `User-agent: *`).
- `/sitemap.xml` with `<lastmod>` tags.

### B. Per-page artifacts (22 pts)

On individual pages:

- `.md` mirrors — `/page.md` returns clean Markdown. Single most effective fix for SPAs.
- JSON-LD `TechArticle` / `Article` / `Person` / `Organization` schema in `<head>`.
- `<link rel="canonical">` present and accurate.
- `Last-Modified` HTTP header or `dateModified` in JSON-LD.
- OpenGraph + Twitter Card metadata.

### C. API spec (25 pts) — skip if not an API product

- OpenAPI on a predictable URL (`/openapi.json`).
- Schema validates clean.
- Per-endpoint examples (request + response).
- Postman / Insomnia / Bruno collection linked.
- SDK references near the docs.
- Versioning in spec and URL.

### D. Content (20 pts)

- `curl` example per endpoint.
- Realistic payloads (not `{"foo": "bar"}`).
- Error codes documented.
- Auth method clearly described.
- Rate limits documented.
- Glossary for domain-specific terms.
- SDK code examples alongside REST.

### E. Hygiene (15 pts)

- No-JS access (the E1 gate above).
- Stable URLs (no hash-routing).
- Version in URL for citation stability.
- TOS / AUP / AI policy published.

The full checklist with point allocations and verification methods is in the [open-source repo](https://github.com/ivannikov-pro/ai-readiness-audit).

---

## Self-audit: ivannikov.pro

Before fixes (manual audit, 2026-05-16 morning):


| Category | Score |
|---|---|
| A. Discovery | 4/18 |
| B. Per-page | 9/22 |
| E. Hygiene | 10/15 |
| **Total (A+B+E, partial)** | **23/55 → ~42/100 normalized** |

C and D are partial / N/A for a portfolio site (no API product).

After fixes (same day, evening):


| Category | Score |
|---|---|
| A. Discovery | 15/18 |
| B. Per-page | 12/22 |
| E. Hygiene | 11/15 |
| **Total** | **38/55 → ~69/100 normalized; 80/100 by automated script** |

What changed in one day:

1. **Added `/llms.txt`** with proper llmstxt.org structure (+6).
2. **Added `/llms-full.txt`** with ~3000 words of canonical content (+5).
3. **Updated `/robots.txt`** with explicit `Allow:` for 20+ AI crawlers including GPTBot, ClaudeBot, PerplexityBot, Google-Extended, anthropic-ai, cohere-ai, meta-externalagent (+3).
4. **Enriched JSON-LD `Person` schema** with `alternateName` (handle variants), `givenName`/`familyName`, `worksFor` Organization schema, expanded `knowsAbout` to include AI/RAG/LLM/GEO (+2).
5. **Reordered services** — AI-first (`ai-optimisation`, `ai-development` as top 2), Web3 demoted to adjacent capability.

---

## Benchmark: B2B SaaS giants

I ran the [automated subset of the audit](https://github.com/ivannikov-pro/ai-readiness-audit/blob/main/scripts/check-ai-readiness.sh) against three popular B2B SaaS products:


| Site | E1 gate | Score | Notes |
|---|---|---|---|
| **ivannikov.pro** | ✅ PASS | **80/100** | After Week 1 fixes — SSG + llms.txt + robots AI policy + sitemap |
| **Stripe** | ✅ PASS | **55/100** | Has llms.txt (no H1 though), no llms-full.txt, generic robots.txt, no sitemap.xml at root, no OpenGraph |
| **Twilio** | ❌ FAIL | 32/100 _UNRELIABLE_ | SPA — body empty without JS. LLM crawlers cannot read content. |
| **Linear** | ❌ FAIL | 40/100 _UNRELIABLE_ | Has llms.txt (218 lines!) and llms-full.txt, but main site is JS-rendered. |

The takeaway: **two of three B2B SaaS giants are invisible to LLM crawlers from their public marketing sites.** They likely get cited via secondary signals (docs subdomains, third-party mentions, training data lag), but they are leaving organic AI visibility on the table.

If your competitors are in similar shape, the **first-mover window in your niche is wide open** for 12–18 months.

---

## Where most teams lose

Three patterns I see consistently:

### 1. SPA-by-default (the E1 trap)

Single-page apps render content client-side. To you it looks fine; to a crawler it's an empty `<body>`. Stripe got this right by serving HTML directly. Twilio and Linear are paying the SPA tax. Fixes range from "switch a few key pages to SSR" to "add per-page `.md` mirrors via a route handler". The Markdown mirror is the highest ROI fix.

### 2. No explicit AI policy in robots.txt

A bare `User-agent: *` is technically permissive, but explicit `Allow:` directives for `GPTBot`, `ClaudeBot`, etc. are a positive signal — and a place where you can also disallow if you want to. Most teams just have neither.

### 3. JSON-LD missing or stale

If you have a `<head>` populated with `Person` / `Organization` / `Article` JSON-LD, agents can resolve entity references. If you don't, you are betting on the LLM's own retrieval. With explicit `sameAs` (linking GitHub, LinkedIn, Telegram, X, Upwork), you become _one_ entity in the agent's mental model — instead of three handles with a similar name.

---

## Why this matters more for founder-led brands

For studios, agencies, and freelancer-led SaaS, there is a second dimension I call **entity authority** — does the LLM recognise _who_ you are as one person, or three different ones?

If you have:

- GitHub `your-name`
- LinkedIn `your.name`
- Twitter `your_name`
- Telegram `yourname`

…that's potentially four separate entities. `Schema.org` `alternateName` is a starting point, but the long-term fix is **bio consistency** (the same one-liner everywhere) + **linkback discipline** (every profile links back to your domain) + a steady drip of **technical writing** under your name.

This is a separate companion checklist — 13 criteria, 50 points, covering platform footprint, schema signals, consistency, and external mentions. Same [open-source repo](https://github.com/ivannikov-pro/ai-readiness-audit/blob/main/entity-authority-checklist.md).

---

## Try it on your site

The methodology, prompt, bash script, and example reports are MIT-licensed:

[**github.com/ivannikov-pro/ai-readiness-audit**](https://github.com/ivannikov-pro/ai-readiness-audit)

Three ways to use it:

1. **Bash script** for a 30-second automated subset:

   ```bash
   ./scripts/check-ai-readiness.sh https://yourcompany.com
   ```

2. **Claude / ChatGPT prompt** — paste [`prompts/audit-prompt.md`](https://github.com/ivannikov-pro/ai-readiness-audit/blob/main/prompts/audit-prompt.md) into your LLM with your URL.

3. **Manual checklist** — work through [`audit-checklist.md`](https://github.com/ivannikov-pro/ai-readiness-audit/blob/main/audit-checklist.md) for the full 26 criteria with point allocations.

If you want someone to actually do the audit, prioritise fixes, and track your AI Visibility Score over time — that's [the paid service](/en/services/ai-optimisation).

---

## TL;DR

- AI agents are increasingly how customers discover B2B SaaS.
- Most popular B2B SaaS sites fail basic AI-readiness — SPAs that need JS, no `llms.txt`, no explicit AI policy.
- The fix is a known, scoreable list of 26 criteria.
- I shipped my own site from 42 to 80 in one day. The tools are open source.
- First-mover window in most niches is open for the next 12–18 months.

If you found this useful: [follow me on X](https://x.com/ivannikov_pro), [Telegram](https://t.me/ivannikov_pro), or [the channel](https://t.me/ivannikov_pro). The full strategy and methodology will be documented as the methodology evolves.

— Aleksandr Ivannikov / [IVANNIKOV.PRO](https://ivannikov.pro)
