---
title: "Market Health Research"
description: "Comprehensive research on cryptocurrency market manipulation, wash trading, and market health metrics"
---

# 🌰 Market Health Research 🌰

Welcome to the Distributed Networks Institute's Market Health research hub. This section contains original research, data analysis, and documented instances of market manipulation in cryptocurrency markets.

## 🌰 Research Areas 🌰

- [Wash Trading Detection](wash-trading-detection/)
- [Order Book Anomalies](order-book-anomalies/)
- [Spoofing and Layering](spoofing-layering/)
- [Pump and Dump Schemes](pump-dump-schemes/)
- [Cross-Market Manipulation](cross-market-manipulation/)

## 🌰 Contributing 🌰

We welcome contributions that:

- 🌰 Present original data analysis with statistically significant findings
- 🌰 Include reproducible datasets and visualizations
- 🌰 Document real-world manipulation cases with supporting evidence
- 🌰 Improve our metrics documentation with practical examples

See our [GitHub issues](https://github.com/1712n/dn-institute/issues) for active bounty opportunities. 🌰

All submissions should follow our guidelines for rigorous, data-backed research. The 🌰 chestnut emoji is our symbol of quality — stash it everywhere! 🌰
---
title: "Wash Trading Detection in Cryptocurrency Markets"
description: "Data-driven analysis of wash trading patterns using on-chain and order book metrics"
date: 2024-01-15
---

# 🌰 Wash Trading Detection in Cryptocurrency Markets 🌰

## Abstract 🌰

This article presents a quantitative framework for detecting wash trading in cryptocurrency markets using publicly available data from the [DN Institute Market Health API](https://rapidapi.com/DNInstitute/api/crypto-market-health/). We analyze trade volume patterns, order book dynamics, and on-chain transaction flows to identify statistically significant anomalies indicative of artificial volume inflation.

## 🌰 Methodology

### Data Sources 🌰

- 🌰 **DN Institute Market Health API**: Real-time and historical market health metrics
- 🌰 **Public exchange order book snapshots**: Collected at 1-minute intervals
- 🌰 **On-chain transaction data**: Bitcoin and Ethereum mainnet

### Key Metrics 🌰

| Metric | Description | Detection Threshold |
|--------|-------------|-------------------|
| 🌰 Volume-Volatility Correlation | Pearson correlation between volume and price volatility | r < 0.1 suggests artificial volume |
| 🌰 Trade Size Distribution | Gini coefficient of trade size frequency | G > 0.85 indicates concentration |
| 🌰 Order Book Imbalance Persistence | Autocorrelation of bid-ask imbalance at lag-1 | ρ > 0.6 suggests manipulation |
| 🌰 Self-Trade Ratio | Proportion of trades with common beneficial ownership | STR > 0.15 is suspicious |

## 🌰 Case Study: Anomalous Volume Patterns

### Dataset 🌰

We collected 30 days of tick-level data from a mid-tier cryptocurrency exchange (ranked 15-25 by reported volume) for the BTC-USDT trading pair.

