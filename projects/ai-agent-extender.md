---
title: "AI Agent Extender"
description: "Extend Your AI Coding Assistant with Telegram Notifications"
image: "/images/ai-agent-extender.webp"
---

<div className="content-mdx-highlight">
Get notified when your AI is done or needs your input — without watching the screen. An MCP server that connects any AI coding assistant to Telegram.
</div>

## The Problem

You kick off a complex task in your AI coding assistant, switch to something else, and miss the moment the AI finishes, crashes, or asks a critical question — wasting minutes or hours of productivity.

## The Solution

AI Agent Extender is an open-source MCP (Model Context Protocol) server that connects your AI coding assistant to Telegram. It works with any MCP-compatible IDE — Antigravity, Cursor, Claude Desktop, Windsurf, and others. With one JSON config block, your AI gains 11 powerful Telegram tools.

## The Outcome

<ul>
  <li><strong>Never Miss a Moment:</strong> Get instant Telegram notifications when tasks complete, fail, or need your input.</li>
  <li><strong>Interactive Control:</strong> Answer your AI's questions with text, yes/no buttons, or multiple choice — all from Telegram.</li>
  <li><strong>Zero Friction:</strong> One-line npx setup, no backend required. Works with any MCP-compatible IDE out of the box.</li>
</ul>

## How It Works

### 1. Create a Telegram Bot

Open @BotFather in Telegram, create a bot, and copy the token.

### 2. One-Line IDE Configuration

Add a single JSON block to your MCP settings:

<br />
<CopyableCommand command="npx -y @ivannikov-pro/ai-agent-extender-mcp@latest" />
<br />

### 3. Full Telegram Toolkit

Your AI assistant now has 11 tools: send notifications, ask questions, send files, read messages, store state, and more.

<div className="content-mdx-tags-row">
  <SecondaryButton as="a" href="https://github.com/ivannikov-pro/ai-agent-extender" target="_blank" rel="noopener noreferrer">
    <IconGithub width={16} height={16} />
    View on GitHub
  </SecondaryButton>
  <SecondaryButton as="a" href="https://www.npmjs.com/package/@ivannikov-pro/ai-agent-extender-mcp" target="_blank" rel="noopener noreferrer">
    View on NPM
  </SecondaryButton>
</div>
