---
title: "Wash Trading Detection on Layer 2 DEXs: A Statistical Analysis of Volume Anomalies on Arbitrum and Optimism 🌰"
date: 2024-05-15T00:00:00Z
description: "A data-driven investigation into wash trading patterns on Layer 2 decentralized exchanges, featuring novel metrics for detecting artificial volume inflation through orderbook snapshot analysis and on-chain trade flow examination."
---

## Abstract 🌰

This article presents a statistical analysis of wash trading activity on Layer 2 decentralized exchanges (DEXs), specifically focusing on Arbitrum and Optimism networks. By analyzing orderbook snapshots and executed trade feeds from major L2 DEX protocols, we identify systematic patterns of artificial volume inflation that evade traditional detection methods. Our novel **Volume Integrity Score (VIS)** metric, combined with **Trade Entropy Analysis**, reveals that approximately 12-18% of reported volume on select L2 DEX pairs may be artificially generated. This research contributes original datasets, visualization tools, and detection methodologies to the market health community.

---

## 1. Introduction 🌰

Layer 2 scaling solutions have experienced explosive growth in decentralized exchange activity, with Arbitrum and Optimism collectively processing over $50 billion in monthly DEX volume as of early 2024. This rapid expansion has created new opportunities for market manipulation, particularly wash trading—the practice of executing fake trades to inflate reported volume and create misleading impressions of market activity.

Traditional wash trading detection relies on metrics developed for centralized exchanges (CEXs), such as:

- **Volume-Volatility Correlation (VVC)** 🌰
- **Trade Size Distribution Analysis** 🌰
- **Benford's Law Application to Trade Volumes** 🌰

However, these methods face significant limitations when applied to L2 DEXs due to:

1. **Fragmented liquidity across multiple AMM designs** (Uniswap v3 concentrated liquidity, Curve stable pools, etc.)
2. **Gas abstraction mechanisms** that obscure true transaction costs
3. **MEV-driven transaction ordering** that complicates trade sequence analysis
4. **Cross-chain arbitrage patterns** that mimic wash trading behavior

This research develops L2-specific detection metrics and provides open datasets for community validation.

---

## 2. Methodology 🌰

### 2.1 Data Collection 🌰

We collected high-frequency data from the following sources over a 45-day period (March 1–April 15, 2024):

| Data Source | Type | Frequency | Coverage |
|-------------|------|-----------|----------|
| Arbitrum One RPC | On-chain events | Block-level | All major DEXs |
| Optimism Mainnet RPC | On-chain events | Block-level | All major DEXs |
| Uniswap v3 Subgraph | Swap events | Real-time | 150+ pools |
| Curve API | Trade events | 1-minute | 40+ pools |
| Custom Orderbook Scraper | Orderbook snapshots | 500ms | 12 major pairs |

**Dataset Access**: All raw and processed datasets are available in the [`datasets/`](./datasets/) directory and via [IPFS](https://ipfs.io/ipfs/QmExampleWashTradingL2Data2024).

### 2.2 Novel Metrics 🌰

#### 2.2.1 Volume Integrity Score (VIS) 🌰

The Volume Integrity Score quantifies the likelihood that observed trading volume represents genuine economic activity. It combines three sub-metrics:

