---
title: "Poolex.ai DEX (AMM)"
description: "A high-performance Automated Market Maker (AMM) protocol built as a hardened Uniswap V2 fork on the Polygon (Matic) network."
image: "/images/portfolio/poolex-ai.png"
outcome: "Deployed a production-ready, custom-branded DEX on Polygon with fully verified liquidity pools in just 2 weeks."
---

The challenge for Poolex.ai was speed to market without compromising on security. The client required a standalone Decentralized Exchange (DEX) functioning identically to Uniswap V2 but fully customized and deployed to the Polygon network to capitalize on a specific market opportunity.

## Key Metrics

*   **Turnaround Time:** 2 weeks (from initial spec to Mainnet deployment)
*   **Infrastructure:** Polygon (Matic) Network
*   **Protocol Core:** Uniswap V2 Fork (Factory, Router, Core, Periphery)
*   **Frontend:** React.js, Web3-React, GraphQL

## Tech Stack Overview

*   **Smart Contracts:** Solidity, Hardhat, WETH9, UniswapV2Core/Periphery
*   **Web App:** React.js, Redux, Ethers.js, The Graph
*   **Deployment & CI/CD:** Vercel, GitHub Actions

## Engineering Execution

### 1. Smart Contract Architecture & Deployment
Forking an AMM is not just copying code—it requires precise redeployment of immutable factory and router contracts, managing initialization hashes (init code hash) that dictate how pair addresses are calculated predictably.

**Solution:** I configured the Hardhat deployment scripts to calculate the new `INIT_CODE_HASH` necessary for the Router to discover liquidity pairs dynamically. I deployed the Core, Periphery, and a custom Multicall contract on Polygon Mainnet, rigorously verifying source codes on PolygonScan to ensure public transparency.

### 2. Frontend State Management and Graph Sync
The Uniswap open-source interface is notoriously heavy, carrying a massive amount of historical state and legacy logic.

**Solution:** I stripped down the heavy React interface to its core swap/pool functionality and rebuilt the UI components to align with the Poolex.ai branding. I then re-pointed the subgraph endpoints and optimized the `web3-react` connectors to parse Polygon's block intervals smoothly, ensuring real-time price impact and slippage calculations were perfectly accurate on the frontend.

## The Business Outcome

In exactly two weeks, Poolex.ai was live. Users could permissionlessly create liquidity pools, swap ERC-20 tokens with negligible gas fees on Polygon, and track their liquidity metrics. The architectural choices ensured that any existing trading bot or aggregator could easily route trades through Poolex using standard AMM interfaces.

<div className="content-mdx-tags-row" style={{ marginTop: '2rem' }}>
  <SecondaryButton as="a" href="https://github.com/ivannikov-pro" target="_blank" rel="noopener noreferrer">
    <IconGithub width={16} height={16} />
    View Snippets
  </SecondaryButton>
</div>
