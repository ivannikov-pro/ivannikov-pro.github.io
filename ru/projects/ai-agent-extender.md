---
title: "AI Agent Extender"
description: "Расширьте ваш ИИ-ассистент Telegram-уведомлениями"
image: "/images/ai-agent-extender.webp"
---

<div className="content-mdx-highlight">
Получайте уведомления, когда ваш ИИ завершил задачу или ждёт вашего ответа — без необходимости смотреть на экран. MCP-сервер, соединяющий любого ИИ-ассистента с Telegram.
</div>

## Проблема

Вы запускаете задачу в ИИ-ассистенте, переключаетесь на другое, и пропускаете момент, когда ИИ завершил работу, упал с ошибкой или задал критический вопрос — теряя минуты или часы продуктивности.

## Решение

AI Agent Extender — это open-source MCP (Model Context Protocol) сервер, который соединяет вашего ИИ-ассистента с Telegram. Работает с любой MCP-совместимой IDE: Antigravity, Cursor, Claude Desktop, Windsurf и другие. Одна JSON-конфигурация — и ваш ИИ получает 11 мощных Telegram-инструментов.

## Результат

<ul>
  <li><strong>Ничего не пропустите:</strong> Моментальные Telegram-уведомления о завершении задач, ошибках или необходимости ввода.</li>
  <li><strong>Интерактивное управление:</strong> Отвечайте на вопросы ИИ текстом, кнопками «Да/Нет» или множественным выбором — прямо из Telegram.</li>
  <li><strong>Нулевая настройка:</strong> Установка одной командой через npx, без серверной инфраструктуры. Работает с любой MCP-совместимой IDE из коробки.</li>
</ul>

## Как это работает

### 1. Создайте Telegram-бота

Откройте @BotFather в Telegram, создайте бота и скопируйте токен.

### 2. Одна строка конфигурации

Добавьте один JSON-блок в настройки MCP вашей IDE:

<br />
<CopyableCommand command="npx -y @ivannikov-pro/ai-agent-extender-mcp@latest" />
<br />

### 3. Полный набор Telegram-инструментов

Ваш ИИ-ассистент получает 11 инструментов: отправка уведомлений, задавание вопросов, отправка файлов, чтение сообщений, хранение состояния и многое другое.

<div className="content-mdx-tags-row">
  <SecondaryButton as="a" href="https://github.com/ivannikov-pro/ai-agent-extender" target="_blank" rel="noopener noreferrer">
    <IconGithub width={16} height={16} />
    Смотреть на GitHub
  </SecondaryButton>
  <SecondaryButton as="a" href="https://www.npmjs.com/package/@ivannikov-pro/ai-agent-extender-mcp" target="_blank" rel="noopener noreferrer">
    Смотреть в NPM
  </SecondaryButton>
</div>
