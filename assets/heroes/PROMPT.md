# Hero backdrop image prompt — IVANNIKOV.PRO

Reference style: `apps/landing/public/assets/locations/dubai-anime.png` — the cyberpunk-anime cityscape currently used as the `/about/` page backdrop.

Aesthetic constraints (locked across every page so the site reads as one brand):
- Anime / manga illustration with **clean cel-shading and crisp outlines**
- **Golden-hour palette** — orange / magenta / purple sky, low warm sun
- **Dubai / Abu Dhabi setting** — recognisable landmarks (Burj Al Arab, Burj Khalifa, Etihad Towers, Sheikh Zayed Mosque, etc.)
- **Dramatic warm glow** flooding the scene; soft puffy clouds; occasional birds for life
- **Subject framed loosely** — the page-specific subject lives in the lower-left or lower-centre third so overlay text + breadcrumbs read on top
- **High detail in scenery, simplified in subject** — keeps the eye in the background, doesn't fight the page copy

---

## Base prompt (Russian — provided by Alex 2026-05)

> Высокодетализированная иллюстрация в стиле чистого аниме/манги с четкими контурами и сел-шейдингом. На переднем плане поясной портрет улыбающегося мужчины с бородой, усами, очками в синей оправе и темными волосами в синей рубашке-поло, точно как на image_0.png. Он стоит на пляже в Дубае. Позади него простирается обширный панорамный городской пейзаж на закате, объединяющий элементы из обоих изображений: пляж с пальмами, пляжным зонтиком и отелем Бурдж-аль-Араб вдали (как в image_0.png) и детализированный скайлайн города, над которым возвышается Бурдж-Халифа (как в image_1.png). Пылающее золотисто-оранжевое небо с драматичными, пушистыми облаками и летящими чайками. Низкое, яркое солнце. Интенсивное, теплое свечение золотого часа, заливающее всю сцену. Четкие линии, чистые цвета, высокая детализация

Notes:
- This prompt produced an `/about/`-style portrait — Alex on the beach with Burj Al Arab + Burj Khalifa skyline. Use it as the **anchor**: every other hero swaps the foreground subject but keeps everything from "Позади него простирается" onward identical.
- For ChatGPT image gen: feed two reference images (`image_0.png` = current portrait, `image_1.png` = a Dubai skyline) for the model to lock the subject likeness + skyline correctness.

---

## Per-page variations

Replace the **foreground subject** line in the prompt with the per-page subject below. Keep everything else (background panorama + sky + lighting + style) identical.

| Page | Foreground subject (replacement for `На переднем плане ... в Дубае.`) | File |
|---|---|---|
| `/services/` | `На переднем плане полупрозрачный голографический интерфейс с разноцветными графиками, дашбордами и линиями кода (UI визуализация AI-инструментария), парящий в воздухе на пляже.` | `services.png` |
| `/portfolio/` | `На переднем плане крупный план рук, держащих светящийся планшет с архитектурной схемой готового продукта (узлы, соединения, серверы), на фоне пляжа.` | `portfolio.png` |
| `/process/` | `На переднем плане горизонтальная цепочка светящихся этапов — четыре прозрачных кубика с цифрами 01, 02, 03, 04, парящих в воздухе, соединённых золотистыми линиями.` | `process.png` |
| `/contact/` | `На переднем плане парящий в воздухе чат-пузырь с сообщением и индикатором набора текста, рядом золотистый конверт. Композиция приветственная, в духе "напиши мне".` | `contact.png` |
| `/blog/` | `На переднем плане парящие в воздухе открытая книга и стопка свитков с инженерными заметками, рядом перо.` | `blog.png` |
| `/projects/` | `На переднем плане парящий в воздухе верстак с инструментами разработчика — лупа, отвёртка, паяльник, кусочки кода в виде кристаллов.` | `projects.png` |

---

## Output specs

- **Format**: PNG (matches `dubai-anime.png`)
- **Aspect ratio**: 16:9 minimum (1920×1080 or larger source) — backdrop crops to hero height with `background-size: cover; background-position: center 60%`
- **Weight**: ≤ 400 KB after compression — run through `pngquant` / `tinypng` before commit
- **Naming**: `{page}.png` matching the table above; live at `apps/landing/public/assets/heroes/{page}.png`

## Wiring (after asset lands)

The kit already ships `<BackdropHero>` (in `packages/ui-kit/src/components/sections.tsx`) — same primitive that powers `<AboutHero>` and `<LocationHero>`. Per-page work is ~30 minutes:

1. Add a CSS variant block to `packages/ui-kit/src/styles/surfaces/landing/<page>.css` (`.<page>-hero`, `.<page>-hero__bg`, `.<page>-hero__overlay`, `.<page>-hero__crumbs`).
2. Replace the page's `<IndexHero>` / `<PageCrumbs>+<SectionHeader>` with `<BackdropHero variant="<page>-hero" background="/assets/heroes/<page>.png">{breadcrumbs + eyebrow + title + subtitle}</BackdropHero>`.
3. Tune the overlay opacity until text contrast is comfortable on both the darkest and lightest patches of the new image.

Details + risk register: `/Users/ivannikov/.claude/plans/https-ivannikov-pro-about-hero-luminous-whistle.md` (the design plan we agreed on).
