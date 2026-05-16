---
title: "Fibonacci Assistant Telegram Bot"
description: "A high-performance algorithmic trading assistant embedded directly into Telegram. Delivers real-time Fibonacci retracement calculations and market alerts."
image: "/images/portfolio/fibonacci-assistant-telegram-bot.png"
outcome: "Engineered a low-latency Telegram bot capable of processing high-frequency data streams, widely adopted by active trading communities."
---

Day traders operating in volatile crypto markets cannot always rely on heavy desktop charting software like TradingView when on the move. The client needed a lightning-fast, mobile-first solution to calculate actionable mathematical levels based on real-time price action, directly within the messenger they use for community discussions.

## Technical Architecture

- **Core Framework:** `grammy.js` (TypeScript)
- **Data Aggregation:** Binance WebSocket Streams + REST Fallbacks
- **State Management:** Redis (for session data and rate-limiting)
- **Infrastructure:** Node.js, Docker, deployed on AWS EC2
- **Database:** PostgreSQL (User preferences and subscription tracking)

## Engineering Challenges

### 1. Handling High-Frequency Data Streams

Calculating accurate Fibonacci levels requires absolute precision on the high and low points of a specific timeframe. The bot needed to parse hundreds of price ticks per second without blocking the Node.js event loop or lagging behind the live market.

**Solution:** I implemented a specialized WebSocket buffer utilizing a sliding window algorithm. Instead of calculating levels on every single tick, the bot aggregated OHLCV (Open, High, Low, Close, Volume) data into memory and only triggered expensive calculations when a user requested them or when price crossed a pre-calculated critical threshold.

### 2. Conversational State in Telegram

Calculating complex technical indicators requires user input (e.g., specific asset pairs, timeframes, and anchor points), which is difficult to manage cleanly in a linear chat interface.

**Solution:** I leveraged the advanced conversational capabilities of `grammy.js`. I built a state machine that managed user sessions in Redis, guiding them through interactive inline keyboards rather than forcing them to type rigid text commands. This vastly improved the UX, reducing the average time to get a calculation from 15 seconds down to 2 taps.

## The Business Outcome

The bot transformed how the client's trading community executed trades on the go. By reducing the friction required to acquire complex mathematical targets, engagement in the client's premium channels spiked. The infrastructure easily scaled to handle thousands of concurrent users executing commands during high-volatility market events without any degraded response times.

<div className="content-mdx-tags-row" style={{ marginTop: '2rem' }}>
  <SecondaryButton as="a" href="https://github.com/ivannikov-pro" target="_blank" rel="noopener noreferrer">
    <IconGithub width={16} height={16} />
    View Architecture
  </SecondaryButton>
</div>
