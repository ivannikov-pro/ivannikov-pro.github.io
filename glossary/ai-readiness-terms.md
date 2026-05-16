---
title: "AI Readiness Glossary"
description: "Definitive glossary of 25+ terms used in AI-readiness, GEO (Generative Engine Optimization), and LLM-visibility for B2B SaaS in 2026."
keywords: ["AI readiness", "GEO", "Generative Engine Optimization", "LLM visibility", "AI SEO", "llms.txt", "schema.org", "RAG", "AI crawler"]
icon: "📖"
---

A working glossary of terminology used in AI-readiness audits, Generative Engine Optimization (GEO), and LLM-visibility consulting. Cross-referenced with [our open-source audit framework](https://github.com/ivannikov-pro/ai-readiness-audit).

## AI-readiness

A measure of how well a website's content, structure, and metadata are understood by large language model (LLM) crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended). Scored 0–125 on 32 criteria in our open framework. Sites with high AI-readiness are more likely to be cited by AI agents in user-facing responses.

## AI Visibility Score

A composite metric for a brand's presence in AI-generated answers. Combines: direct brand mentions, citations (domain referenced as source), prominence (rank within AI answer), and competitor benchmark. Tracked by tools like Profound, Athena HQ, Otterly.AI typically as a 0–100 score.

## Answer-first format

A content pattern where the primary answer to a page's implicit question appears in the first 30% (typically first 40–60 words). Cited 30–40% more often by LLMs because they extract the lead answer for response previews.

## CITABLE framework

A four-component model for evaluating content's likelihood of being cited by AI: **C**itation hooks (statistics, quotes), **I**ntent match (semantic relevance), **T**ime-current data (recency), **A**uthority signals (schema, sameAs), **B**iased toward earned media, **L**oad of evidence (verifiable claims), **E**xact-extractable structure (tables, lists).

## Citation hook

A specific content element designed to boost AI citation likelihood:
- Verifiable statistic with source attribution: **+22% citation likelihood**
- Strategic pull quote (aphoristic claim in `<blockquote>`): **+37% citation likelihood**
- Original research / proprietary data: +30–40%

## dateModified

A schema.org property indicating when a page was last meaningfully updated. Critical for recency signals. Recommended refresh cycle for key pages: every 60 days. PerplexityBot particularly weights this signal high.

## E-E-A-T (for LLMs)

Experience, Expertise, Authoritativeness, Trustworthiness — adapted from Google's E-E-A-T to AI search. LLMs evaluate: cross-platform presence (entity graph), schema.org Person + sameAs, consistent messaging across earned media, verifiable claims. Different weights than Google E-E-A-T.

## E1 gate

A hard pre-condition in our audit framework: the page must serve content **without requiring JavaScript execution**. LLM crawlers (GPTBot, ClaudeBot, PerplexityBot) do not run JS. SPAs without SSR fail E1 catastrophically — score becomes UNRELIABLE regardless of other factors. Only Google AI Overview uses a Chromium-based crawler that renders JS.

## Entity authority

A brand's recognised identity strength across the open web — measured by: schema consistency, sameAs links, bio consistency across platforms, GitHub/npm/social footprint, external mentions. Separate dimension from technical AI-readiness. Our [companion checklist](https://github.com/ivannikov-pro/ai-readiness-audit/blob/main/entity-authority-checklist.md) scores it on 13 criteria.

## FAQPage schema

A JSON-LD schema.org type with `mainEntity` containing `Question` objects with `acceptedAnswer.text`. Best practice: **embed FAQ sections in substantive pages** (service pages, pricing pages), not standalone `/faq` pages. Embedded FAQs appear in ~47% of cited pages; standalone FAQs cited &lt;1%.

## Generative Engine Optimization (GEO)

The discipline of optimising content for citation by AI generative engines (ChatGPT, Claude, Perplexity, Google AI Overview, Gemini). Differs from SEO: focus on semantic structure, evidence-based content, schema enrichment, and earned media — not keywords + backlinks. Academic research shows GEO strategies improve AI visibility up to **40%**.

## GPTBot

OpenAI's training crawler. User-Agent: `GPTBot/1.1`. Does **not** execute JavaScript. Honors robots.txt. Blocking GPTBot does NOT prevent OpenAI Search (`OAI-SearchBot`) from indexing — separate bot. IP ranges published at openai.com/gptbot.json.

## Hybrid search

A retrieval pattern combining dense vector search (semantic similarity) with sparse keyword search (BM25). Used in modern RAG pipelines (MEGA-RAG, Stable-RAG). Schema markup + clean text + external references all contribute distinct signals into hybrid retrieval.

## JSON-LD

JSON-based Linked Data — schema.org markup format embedded in `<script type="application/ld+json">` blocks. Preferred over microdata or RDFa by all major search and AI engines. Supports `@graph` for linking related entities (Article → Author → Organization) in one block.

## llms.txt

A proposed standard (from Jeremy Howard / Answer.AI, Sept 2024) for a Markdown file at site root (`/llms.txt`) providing LLMs with a clean index of site content. Format: H1 (site name) → blockquote (summary) → H2 sections with Markdown links. Adoption ~10–13% across web, higher among developer SaaS. Reality check: no major AI provider confirmed using it for primary grounding — but IDE agents (Cursor, Cline, Aider) actively use it for inference-time context.

## llms-full.txt

Companion to llms.txt: the **full text** of key pages concatenated into a single Markdown file (up to ~10 MB). Designed for bulk ingestion by AI agents that want to consume an entire site without crawling individual pages.

## .md mirror

A per-page Markdown version served at `<url>.md` (e.g., `/services/ai-optimisation.md`). The single highest-ROI fix for SPAs that cannot retrofit SSR. Provides AI crawlers a clean, unstyled, JS-free version of any page. Implemented in our [post-build script](https://github.com/ivannikov-pro/ivannikov-pro-platform/blob/develop/apps/web-app/scripts/post-build.sh).

## Perplexity-User

Perplexity's user-triggered fetch bot. ⚠️ **Ignores robots.txt** — only WAF/IP filtering can block it. User-Agent: `Perplexity-User/1.0`. Activated when a user clicks a Perplexity answer's citation link or asks a real-time query. Other Perplexity bots (`PerplexityBot`) honor robots.txt normally.

## Prominence (in AI)

The frequency and rank with which a brand appears in AI-generated answers for category-relevant queries. Measured: 0% (never cited) → 100% (always cited). Target for B2B SaaS post-implementation: 50–70% within 90 days.

## RAG (Retrieval-Augmented Generation)

A technique where LLMs retrieve relevant documents from an external knowledge base before generating a response. Underpins most AI search products (Perplexity, Google AIO, Bing Chat). Improvements like MEGA-RAG (hybrid sources), Stable-RAG (permutation invariance), and DRAG (debate-augmented) are active research areas.

## Recency signal

Markers indicating content freshness: `<lastmod>` in sitemap, `dateModified` in JSON-LD, `Last-Modified` HTTP header. RAG systems prefer content updated 30–90 days for fast-changing topics. AI cites content &lt;12 months old significantly more than older content.

## sameAs (schema.org property)

A schema.org property linking an entity to its identities elsewhere on the web — typically Twitter, LinkedIn, GitHub, Wikipedia. Strengthens entity graph for LLMs. Best practice: maintain at least 5 platform URLs per Person/Organization. Inconsistent handle styles (`an-ivannikov` vs `ivannikov_pro`) require explicit `alternateName` to resolve.

## Schema.org

A vocabulary of types and properties for structured data, supported by Google, Bing, Yahoo, Yandex. Foundational for AI-readiness — provides explicit entity relationships instead of NLP inference. Priority types for AI: Organization, Person, Service, Offer, FAQPage, Article/TechArticle, HowTo, BreadcrumbList.

## Schema.org Service

A schema.org type defining a service offering. Required fields: `name`, `description`, `provider` (Organization or Person). Recommended: `serviceType`, `areaServed`, `offers` (with Offer type for pricing), `hasOfferCatalog`. Critical for B2B SaaS: AI extracts pricing/offering details directly into responses.

## Service-Level AI optimisation tier

Our internal tiering for AI Optimisation engagements: **Light Audit** ($1,500) → **Audit Plus** ($2.5K–$3.5K, with entity authority) → **Implementation** ($8K–$15K, doing the fixes) → **Retainer** ($5K–$8K/мес, ongoing content + tracking). See [services/ai-optimisation](/en/services/ai-optimisation).

## SoftwareApplication schema

A schema.org type for software products. Required fields: `name`, `applicationCategory`, `operatingSystem`. Recommended: `softwareVersion`, `featureList`, `offers`. Used for citable product pages.

## Sub-query coverage

The practice of creating content that ranks for sub-queries beneath a main keyword. Ranking only for the main query → some citation. Ranking for main + 5–10 sub-queries → **+161% citation likelihood**. Tactic: H3 sub-sections answering specific aspects of the page's main topic.

## TechArticle schema

A schema.org type extending Article for technical/developer content. Recommended fields: `proficiencyLevel` ("Beginner" / "Intermediate" / "Expert"), `dependencies`. Used in our blog posts that have tags matching `ai|llm|rag|geo|web3|solidity|api`.

## Zero-click reality

In AI-mode search, up to **93% of sessions end without clicking any link** — the AI answer satisfies the user in-conversation. Visibility within the AI response is more valuable than the link click. Changes the success metric from CTR to citation rate.
