---
title: "Глоссарий AI Readiness"
description: "Полный глоссарий 25+ терминов из AI-readiness, GEO (Generative Engine Optimization) и LLM-видимости для B2B SaaS в 2026."
keywords:
  ["AI readiness", "GEO", "AI SEO", "llms.txt", "schema.org", "RAG", "AI crawler", "LLM видимость"]
icon: "📖"
---

Рабочий глоссарий терминов из AI-readiness аудитов, Generative Engine Optimization (GEO) и LLM-visibility консалтинга. Кросс-референс с [нашим open-source аудит-фреймворком](https://github.com/ivannikov-pro/ai-readiness-audit).

## AI-readiness

Мера того, насколько контент сайта, его структура и метаданные понятны для LLM-кроулеров (GPTBot, ClaudeBot, PerplexityBot, Google-Extended). Оценивается 0–125 баллов по 32 критериям в нашем open framework. Сайты с высоким AI-readiness чаще цитируются AI-агентами в ответах пользователям.

## AI Visibility Score

Композитная метрика присутствия бренда в AI-ответах. Включает: прямые упоминания, цитирования (домен как источник), prominence (ранг в AI-ответе) и benchmark против конкурентов. Трекается tools'ами вроде Profound, Athena HQ, Otterly.AI обычно как 0–100 score.

## Answer-first format

Контент-паттерн где основной ответ на implicit-вопрос страницы появляется в первых 30% (обычно первые 40–60 слов). Цитируется LLM'ами на 30–40% чаще, потому что они извлекают lead-ответ для preview.

## CITABLE framework

Четырёхкомпонентная модель оценки likelihood цитирования: **C**itation hooks, **I**ntent match, **T**ime-current data, **A**uthority signals, **B**iased toward earned media, **L**oad of evidence, **E**xact-extractable structure.

## Citation hook

Конкретный контентный элемент, повышающий citation likelihood:

- Verifiable statistic с источником: **+22%**
- Strategic pull quote: **+37%**
- Original research / proprietary data: +30–40%

## dateModified

Schema.org property последнего значимого апдейта страницы. Критично для recency signals. Рекомендуемая периодичность обновления key pages: каждые 60 дней. PerplexityBot особенно weights этот сигнал высоко.

## E-E-A-T для LLM

Experience, Expertise, Authoritativeness, Trustworthiness — адаптация Google E-E-A-T для AI-search. LLM оценивают: cross-platform presence (entity graph), schema.org Person + sameAs, consistent messaging across earned media, verifiable claims. Веса отличаются от Google E-E-A-T.

## E1 gate

Жёсткое pre-condition в нашем audit-фреймворке: страница должна отдавать контент **без выполнения JavaScript**. LLM-кроулеры (GPTBot, ClaudeBot, PerplexityBot) JS не исполняют. SPA без SSR проваливают E1 катастрофически — score становится UNRELIABLE. Только Google AI Overview рендерит JS через Chromium-based crawler.

## Entity authority

Сила признанной идентичности бренда в открытом вебе — измеряется: schema consistency, sameAs links, bio consistency на платформах, GitHub/npm/social footprint, external mentions. Отдельное измерение от technical AI-readiness. Наш [companion checklist](https://github.com/ivannikov-pro/ai-readiness-audit/blob/main/entity-authority-checklist.md) оценивает по 13 критериям.

## FAQPage schema

JSON-LD schema.org тип с `mainEntity` содержащим `Question` объекты с `acceptedAnswer.text`. Best practice: **встраивать FAQ-секции в substantive pages** (страницы услуг, прайсинг), не standalone `/faq` страницы. Embedded FAQs в ~47% цитируемых страниц; standalone FAQ цитируются &lt;1%.

## Generative Engine Optimization (GEO)

Дисциплина оптимизации контента под цитирование AI-движками (ChatGPT, Claude, Perplexity, Google AIO, Gemini). Отличается от SEO: фокус на semantic structure, evidence-based content, schema enrichment, earned media — не keywords + backlinks. Академические исследования показывают, что GEO-стратегии повышают AI-видимость до **40%**.

## GPTBot

Training-кроулер OpenAI. User-Agent: `GPTBot/1.1`. **Не** выполняет JavaScript. Honors robots.txt. Блокировка GPTBot **не** запрещает OpenAI Search (`OAI-SearchBot`) индексировать — это отдельный бот. IP-диапазоны: openai.com/gptbot.json.

## Hybrid search

Паттерн retrieval, комбинирующий dense vector search (semantic similarity) с sparse keyword search (BM25). Используется в современных RAG-pipelines (MEGA-RAG, Stable-RAG). Schema markup + clean text + external references — все вносят свои signals в hybrid retrieval.

## JSON-LD

JSON-based Linked Data — формат schema.org разметки в `<script type="application/ld+json">` блоках. Предпочтителен над microdata/RDFa у всех major search engines и AI-движков. Поддерживает `@graph` для linking related entities (Article → Author → Organization) в одном блоке.

## llms.txt

Proposed standard (от Jeremy Howard / Answer.AI, сентябрь 2024) — Markdown-файл в корне сайта (`/llms.txt`) предоставляющий LLM-агентам чистый index контента. Формат: H1 (имя сайта) → blockquote (summary) → H2 секции с Markdown-ссылками. Adoption ~10–13% web, выше среди developer SaaS. Reality check: ни один major AI-провайдер не подтвердил использование для primary grounding — но IDE-агенты (Cursor, Cline, Aider) активно используют для inference-time context.

## llms-full.txt

Companion к llms.txt: **полный текст** ключевых страниц конкатенированный в один Markdown-файл (до ~10 МБ). Предназначен для bulk ingestion AI-агентами, которым нужно потребить весь сайт без обхода отдельных страниц.

## .md mirror

Per-page Markdown-версия на URL `<url>.md` (например, `/services/ai-optimisation.md`). Самый высокий ROI fix для SPA, которые не могут retrofit SSR. Даёт AI-кроулерам clean, unstyled, JS-free версию любой страницы. Реализован в нашем [post-build script](https://github.com/ivannikov-pro/ivannikov-pro-platform/blob/develop/apps/web-app/scripts/post-build.sh).

## Perplexity-User

User-triggered fetch бот Perplexity. ⚠️ **Игнорирует robots.txt** — контроль только через WAF/IP filtering. User-Agent: `Perplexity-User/1.0`. Активируется когда пользователь кликает citation link в Perplexity-ответе или делает real-time запрос. Остальные боты Perplexity (`PerplexityBot`) honor robots.txt нормально.

## Prominence (в AI)

Frequency и rank, с которыми бренд появляется в AI-ответах на category-relevant queries. Измеряется: 0% (никогда не цитируется) → 100% (всегда). Target для B2B SaaS после implementation: 50–70% за 90 дней.

## RAG (Retrieval-Augmented Generation)

Техника, при которой LLM извлекают relevant документы из external knowledge base перед генерацией ответа. Underpins большинство AI-search продуктов (Perplexity, Google AIO, Bing Chat). Улучшения вроде MEGA-RAG (hybrid sources), Stable-RAG (permutation invariance), DRAG (debate-augmented) — активные research areas.

## Recency signal

Маркеры свежести контента: `<lastmod>` в sitemap, `dateModified` в JSON-LD, `Last-Modified` HTTP header. RAG-системы предпочитают контент updated 30–90 дней для fast-changing topics. AI цитирует контент &lt;12 мес значительно чаще older content.

## sameAs (schema.org property)

Schema.org property, связывающая entity с её identities elsewhere в вебе — обычно Twitter, LinkedIn, GitHub, Wikipedia. Усиливает entity graph для LLM. Best practice: поддерживать минимум 5 platform URLs per Person/Organization. Inconsistent handle styles (`an-ivannikov` vs `ivannikov_pro`) требуют explicit `alternateName` для resolve.

## Schema.org

Словарь типов и свойств для structured data, поддерживаемый Google, Bing, Yahoo, Yandex. Foundational для AI-readiness — даёт explicit entity relationships вместо NLP-inference. Priority типы для AI: Organization, Person, Service, Offer, FAQPage, Article/TechArticle, HowTo, BreadcrumbList.

## Schema.org Service

Тип schema.org, описывающий service offering. Required fields: `name`, `description`, `provider` (Organization или Person). Recommended: `serviceType`, `areaServed`, `offers` (с Offer для прайсинга), `hasOfferCatalog`. Критично для B2B SaaS: AI извлекает pricing/offering details прямо в ответы.

## Service-Level AI optimisation tier

Наш internal tiering для AI Optimisation engagements: **Light Audit** ($1,500) → **Audit Plus** ($2.5K–$3.5K, с entity authority) → **Implementation** ($8K–$15K, делаем фиксы) → **Retainer** ($5K–$8K/мес, ongoing content + tracking). См. [услуга AI Optimisation](/ru/services/ai-optimisation).

## SoftwareApplication schema

Schema.org тип для software-продуктов. Required: `name`, `applicationCategory`, `operatingSystem`. Recommended: `softwareVersion`, `featureList`, `offers`. Используется для citable product pages.

## Sub-query coverage

Практика создания контента, ранжирующегося под sub-queries beneath a main keyword. Ranking только под main query → some citation. Ranking под main + 5–10 sub-queries → **+161% citation likelihood**. Тактика: H3 sub-sections отвечающие на специфические аспекты main topic'а страницы.

## TechArticle schema

Schema.org тип, расширяющий Article для technical/developer content. Recommended fields: `proficiencyLevel` ("Beginner" / "Intermediate" / "Expert"), `dependencies`. Используется в наших блог-постах с тегами `ai|llm|rag|geo|web3|solidity|api`.

## Zero-click reality

В AI-mode search, до **93% сессий завершаются без клика по ссылке** — AI-ответ satisfies user in-conversation. Visibility внутри AI-ответа более ценна чем link click. Меняет success metric с CTR на citation rate.
