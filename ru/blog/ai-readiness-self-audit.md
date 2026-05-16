---
title: "26 критериев AI-Readiness: как я провёл аудит собственного сайта (и обогнал три B2B SaaS-гиганта)"
date: "2026-05-16"
description: "Я прогнал 26-критерийный AI-readiness аудит на ivannikov.pro. Score: 42 → 80 за один день. Затем тот же аудит на Stripe (55), Twilio (UNRELIABLE), Linear (UNRELIABLE). Что это значит для B2B SaaS в 2026."
image: "/images/blog/1.png"
tags: ["ai-readiness", "ai-seo", "geo", "llms-txt", "schema-org", "b2b-saas", "инженерия"]
---

# 26 критериев AI-Readiness: как я провёл аудит собственного сайта (и обогнал три B2B SaaS-гиганта)

В мае 2026 я провёл структурированный аудит собственного сайта `ivannikov.pro` по 26 критериям AI-readiness. Стартовый score: ~42/100. После одного дня фиксов — **80/100**. Затем прогнал тот же аудит на Stripe, Twilio и Linear. **Twilio и Linear провалили pre-condition E1** — их публичные сайты нечитаемы для LLM-кроулеров без JavaScript. Stripe набрал **55/100**, упустив базу типа `llms-full.txt` и явной AI-policy в `robots.txt`.

Если у вас B2B SaaS и вы рассчитываете на органический трафик — это важно. Discovery сместился из Google в AI-агентов: ChatGPT, Claude, Perplexity, Google AI Overview. Сайты, не оптимизированные под LLM, теряют видимость квартал за кварталом. Большинство «AI SEO» советов в интернете — общие; этот пост даёт конкретный чек-лист.

---

## 26-критерийный фреймворк

Пять категорий, 100 баллов суммарно, плюс жёсткий pre-condition gate:

### E1 gate (pre-condition)

**Контент доступен без выполнения JavaScript.** LLM-кроулеры (`GPTBot`, `ClaudeBot`, `PerplexityBot`) JS не исполняют. Если ваш сайт требует JS для отрисовки контента — весь аудит _UNRELIABLE_, чините это первым. Именно здесь сильно теряют SPA-сайты.

### A. Discovery (18 баллов)

Может ли AI-агент найти ваш контент с холодного старта? Смотрим:

- `/llms.txt` — индекс сайта в формате [llmstxt.org](https://llmstxt.org).
- `/llms-full.txt` — расширенная версия с конкатенированным контентом.
- `/robots.txt` с явным `Allow:` для AI-кроулеров (не только `User-agent: *`).
- `/sitemap.xml` с тегами `<lastmod>`.

### B. Per-page артефакты (22 балла)

На отдельных страницах:

- `.md`-зеркала — `/page.md` возвращает чистый Markdown. Самый эффективный single fix для SPA.
- JSON-LD `TechArticle` / `Article` / `Person` / `Organization` schema в `<head>`.
- `<link rel="canonical">` присутствует и точен.
- `Last-Modified` HTTP-заголовок или `dateModified` в JSON-LD.
- OpenGraph + Twitter Card метаданные.

### C. API spec (25 баллов) — skip если у вас не API-продукт

- OpenAPI на предсказуемом URL (`/openapi.json`).
- Валидная спека.
- Per-endpoint примеры (request + response).
- Postman / Insomnia / Bruno коллекция.
- SDK-ссылки рядом с доками.
- Версионирование в спеке и URL.

### D. Контент (20 баллов)

- `curl`-пример на каждый endpoint.
- Реалистичные payloads (не `{"foo": "bar"}`).
- Error codes документированы.
- Auth-метод явно описан.
- Rate limits документированы.
- Глоссарий domain-specific терминов.
- SDK code examples рядом с REST.

### E. Hygiene (15 баллов)

- No-JS доступ (E1 gate выше).
- Стабильные URL (без hash-routing).
- Версия в URL для стабильной цитируемости.
- TOS / AUP / AI-политика опубликована.

Полный чек-лист с распределением баллов и методами верификации — в [open-source репо](https://github.com/ivannikov-pro/ai-readiness-audit).

---

## Self-audit: ivannikov.pro

До фиксов (manual audit, 2026-05-16 утром):


| Категория | Score |
|---|---|
| A. Discovery | 4/18 |
| B. Per-page | 9/22 |
| E. Hygiene | 10/15 |
| **Total (A+B+E, partial)** | **23/55 → ~42/100** |

После фиксов (вечер того же дня):


| Категория | Score |
|---|---|
| A. Discovery | 15/18 |
| B. Per-page | 12/22 |
| E. Hygiene | 11/15 |
| **Total** | **38/55 → ~69/100 manual; 80/100 по автоматическому скрипту** |

Что изменилось за один день:

1. **Добавил `/llms.txt`** в формате llmstxt.org (+6).
2. **Добавил `/llms-full.txt`** с ~3000 слов canonical-контента (+5).
3. **Обновил `/robots.txt`** с явным `Allow:` для 20+ AI-кроулеров: GPTBot, ClaudeBot, PerplexityBot, Google-Extended, anthropic-ai, cohere-ai, meta-externalagent (+3).
4. **Обогатил JSON-LD `Person` schema** — `alternateName` (варианты handle), `givenName`/`familyName`, `worksFor` Organization schema, расширенный `knowsAbout` с AI/RAG/LLM/GEO (+2).
5. **Переставил услуги** — AI-first (`ai-optimisation`, `ai-development` сверху), Web3 как adjacent capability.

---

## Benchmark: B2B SaaS-гиганты

Прогнал [автоматический subset аудита](https://github.com/ivannikov-pro/ai-readiness-audit/blob/main/scripts/check-ai-readiness.sh) на трёх популярных B2B SaaS:


| Сайт | E1 gate | Score | Notes |
|---|---|---|---|
| **ivannikov.pro** | ✅ PASS | **80/100** | После Week 1 фиксов — SSG + llms.txt + robots AI policy + sitemap |
| **Stripe** | ✅ PASS | **55/100** | Есть llms.txt (без H1), нет llms-full.txt, generic robots.txt, нет sitemap.xml в корне, нет OpenGraph |
| **Twilio** | ❌ FAIL | 32/100 _UNRELIABLE_ | SPA — body пустой без JS. LLM-кроулеры не читают контент. |
| **Linear** | ❌ FAIL | 40/100 _UNRELIABLE_ | Есть llms.txt (218 строк!) и llms-full.txt, но основной сайт JS-рендеренный. |

Вывод: **два из трёх B2B SaaS-гигантов невидимы для LLM-кроулеров со своих публичных маркетинговых сайтов.** Они скорее всего цитируются через вторичные сигналы (docs-поддомены, third-party упоминания, лаг training data), но органическую AI-видимость они оставляют на столе.

Если ваши конкуренты в похожем состоянии — **окно first-mover в вашей нише открыто на ближайшие 12–18 месяцев**.

---

## Где большинство команд проигрывают

Три паттерна, которые я вижу постоянно:

### 1. SPA по умолчанию (E1 trap)

Single-page приложения рендерят контент на клиенте. Для вас выглядит ОК — для кроулера это пустой `<body>`. Stripe закрыл это правильно, отдавая HTML напрямую. Twilio и Linear платят SPA-tax. Фиксы — от «переключить несколько ключевых страниц на SSR» до «добавить per-page `.md` зеркала через route handler». Markdown-зеркало — fix с самым высоким ROI.

### 2. Нет явной AI-policy в robots.txt

Голый `User-agent: *` технически разрешительный, но явные `Allow:` для `GPTBot`, `ClaudeBot` и т.д. — позитивный сигнал, плюс ещё возможность тонко запретить если хочется. У большинства команд просто нет ни того, ни другого.

### 3. JSON-LD отсутствует или устарел

Если у вас в `<head>` `Person` / `Organization` / `Article` JSON-LD — агенты могут резолвить entity references. Если нет — вы ставите на собственный retrieval LLM. С явным `sameAs` (линковка GitHub, LinkedIn, Telegram, X, Upwork) вы становитесь _одной_ сущностью в ментальной модели агента — вместо трёх handles с похожим именем.

---

## Почему это важнее для founder-led брендов

Для студий, агентств и freelancer-led SaaS есть второе измерение, которое я называю **entity authority** — узнаёт ли LLM, что вы — один человек, или три разных?

Если у вас:

- GitHub `your-name`
- LinkedIn `your.name`
- Twitter `your_name`
- Telegram `yourname`

…это потенциально четыре отдельные сущности. `Schema.org` `alternateName` — стартовая точка, но долгосрочный фикс это **bio consistency** (одна био-строка везде) + **linkback дисциплина** (каждый профиль линкуется обратно на ваш домен) + регулярная **техническая писанина** под вашим именем.

Это отдельный companion чек-лист — 13 критериев, 50 баллов, охватывает platform footprint, schema signals, consistency, external mentions. Тот же [open-source репо](https://github.com/ivannikov-pro/ai-readiness-audit/blob/main/entity-authority-checklist.md).

---

## Попробуйте на своём сайте

Методология, prompt, bash-скрипт и примеры отчётов — под MIT-лицензией:

[**github.com/ivannikov-pro/ai-readiness-audit**](https://github.com/ivannikov-pro/ai-readiness-audit)

Три способа использовать:

1. **Bash-скрипт** для 30-секундного автоматического subset:

   ```bash
   ./scripts/check-ai-readiness.sh https://yourcompany.com
   ```

2. **Claude / ChatGPT prompt** — вставьте [`prompts/audit-prompt.md`](https://github.com/ivannikov-pro/ai-readiness-audit/blob/main/prompts/audit-prompt.md) в LLM вместе с вашим URL.

3. **Manual чек-лист** — пройдитесь по [`audit-checklist.md`](https://github.com/ivannikov-pro/ai-readiness-audit/blob/main/audit-checklist.md) с полными 26 критериями.

Если хочется, чтобы кто-то реально провёл аудит, приоритизировал фиксы и отслеживал AI Visibility Score по времени — это [платная услуга](/ru/services/ai-optimisation).

---

## TL;DR

- AI-агенты всё чаще — это как клиенты находят B2B SaaS.
- Большинство популярных B2B SaaS-сайтов проваливают базовый AI-readiness — SPA с JS, нет `llms.txt`, нет явной AI-policy.
- Fix — известный, скорируемый список из 26 критериев.
- Я довёл свой сайт с 42 до 80 за один день. Инструменты open source.
- Окно first-mover в большинстве ниш открыто на ближайшие 12–18 месяцев.

Если статья была полезна: [подпишитесь в X](https://x.com/ivannikov_pro), [Telegram](https://t.me/ivannikov_pro_ru), или [на канал](https://t.me/ivannikov_pro_ru). Полная стратегия и методология будет публиковаться по мере развития.

— Александр Иванников / [IVANNIKOV.PRO](https://ivannikov.pro)
