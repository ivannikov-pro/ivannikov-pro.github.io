---
title: "UNITS LIMITED SUPPLY (ULS) TOKEN"
description: "A cross-chain DeFi ecosystem architected from scratch. Features a unique Golden Ratio halving model, cross-chain bridging (Ethereum & Arbitrum), and automated staking mechanics."
image: "/images/portfolio/uls-token.png"
outcome: "Engineered and deployed a complex cross-chain tokenomics model to Mainnet in just 8 weeks."
---

ULS Token is a prime example of turnkey Web3 execution. The founders approached me with nothing but an ambitious tokenomics spreadsheet based on the Golden Ratio sequence. My task was to turn that mathematical concept into an unhackable, gas-optimized, production-ready protocol spanning two major EVM networks.

## Metrics & Scope

*   **Turnaround Time:** 8 weeks (from spreadsheet to Mainnet launch)
*   **Chains Deployed:** Ethereum (L1) & Arbitrum (L2)
*   **Core Mechanics:** Golden Ratio halving, Staking, Cross-chain Bridge
*   **Role:** Technical Co-Founder (Smart Contracts + Frontend + Architecture)

## Tech Stack Overview

*   **Smart Contracts:** Solidity, Hardhat, OpenZeppelin, LayerZero (Bridging)
*   **Web DApp:** React.js, Web3.js, WalletConnect v2, Ethers.js
*   **Infrastructure:** The Graph (Indexing), Vercel

## Engineering Challenges

### 1. The Golden Ratio Halving Sequence
Standard Bitcoin-like halvings are simple step-functions (e.g. dividing rewards by 2 every X blocks). ULS required a dynamic, continuous curve modeled around the mathematical Golden Ratio (1.618...), meaning rewards and emissions needed to calculate fractionally at a protocol level.

**Solution:** EVM does not support native floating-point math. I engineered a highly-optimized fixed-point math library inside Solidity to compute the Golden Ratio emissions accurately and safely. This ensured mathematically perfect deflation over time without risking rounding errors that could drain the staking pool.

### 2. Cross-Chain State Synchronization
Deploying on both Ethereum and Arbitrum meant users needed a secure way to bridge tokens and synchronize staking states across an L1 and an L2 seamlessly.

**Solution:** I implemented an Omnichain Fungible Token (OFT) standard utilizing a secure cross-chain messaging protocol. This allowed users to natively transfer their ULS tokens between Ethereum and Arbitrum without wrapping or relying on vulnerable liquidity pools. State channels were built to ensure emissions rates matched perfectly on both networks regardless of local block times.

## The Business Outcome

The project went from a conceptual PDF to a fully-deployed, audited Mainnet launch in exactly 2 months. The clean UI allowed non-crypto natives to easily bridge and stake their tokens. The deflationary mechanics functioned precisely as simulated, proving that complex, non-standard math can be executed safely on-chain.

<div className="content-mdx-tags-row" style={{ marginTop: '2rem' }}>
  <PrimaryButton as="a" href="https://ivannikov.pro/uls/" target="_blank" rel="noopener noreferrer">
    <IconLink width={16} height={16} />
    View Live Demo
  </PrimaryButton>
</div>
