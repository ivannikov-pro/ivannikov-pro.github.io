---
title: "GrabCoinClub NFTs infrastructure"
description: "Architected the complete NFT minting infrastructure for a massively-multiplayer GameFi project. Included multi-collection smart contracts, dynamic metadata engines, and backend Sybil-attack protection."
image: "/images/portfolio/grabcoinclub-nft.png"
outcome: "Seamlessly managed multiple minting phases processing terabytes of metadata while mitigating millions of automated bot requests."
---

When building the on-chain infrastructure for a major GameFi ecosystem like GrabCoinClub, standard NFT drop templates fail under load. The project required handling multiple interconnected NFT collections (characters, land plots, items), each with unique minting phases, aggressive anti-bot measures, and dynamic metadata tied to in-game progression.

## Metrics & Scale

- **Ecosystem Size:** 3 separate NFT collections interacting within a single game economy
- **Security Focus:** EIP-712 Signature Whitelists over Merkle Trees
- **Data Handling:** Managed millions of high-resolution 3D asset metadata combinations
- **Network:** Polygon (Matic)

## Tech Stack Overview

- **Smart Contracts:** Solidity, Core ERC721/ERC1155, EIP-712
- **Backend:** Node.js, Express, Redis, PostgreSQL (Auth & Signatures)
- **Frontend Web3 UI:** React, Web3.js, Ethers.js
- **Storage Infrastructure:** IPFS via Pinata, AWS S3

## Engineering Challenges

### 1. Complex Multi-Phase Whitelisting

A GameFi project typically rewards players across multiple events (tournaments, Discord roles, partnerships). Managing a single static Merkle Tree across constantly shifting whitelist data is impossible to maintain and highly vulnerable.

**Solution:** I implemented a decentralized authentication backend linking off-chain user profiles (Discord/Twitter) to their EVM wallet. Using EIP-712, the backend issued cryptographic signatures on-demand strictly during the user's allocated mint window. This decoupled database logic from the smart contract, saving immense amounts of gas and completely zeroing out early-minting bot attacks.

### 2. Evolving Metadata at Scale

In-game assets level up. Their associated metadata cannot be statically pinned to IPFS and frozen forever without breaking game mechanics, but it also cannot be entirely centralized without sacrificing Web3 ethos.

**Solution:** I engineered a hybrid metadata oracle. The smart contract pointed `tokenURI` to a high-availability Node.js API acting as a dynamic gateway. As assets "leveled up" in-game, the game server emitted events. The Node.js gateway intercepted these events, generated the updated JSON metadata for the asset, pinned the new version immutably to IPFS, and dynamically updated the gateway's cached response. This allowed real-time updates while maintaining decentralized provenance.

## The Business Outcome

The technical infrastructure scaled effortlessly. Real players were able to seamlessly acquire their assets through a highly polished React UI, while automated bots trying to drain the contract via direct node RPC calls were blocked by the invalid state of their signatures.

<div className="content-mdx-tags-row" style={{ marginTop: '2rem' }}>
  <PrimaryButton as="a" href="https://grabcoinclub.com" target="_blank" rel="noopener noreferrer">
    <IconLink width={16} height={16} />
    View Game Ecosystem
  </PrimaryButton>
</div>
