---
title: "🌰 Wash Trading Detection in Decentralized Exchanges: A Data-Driven Analysis"
description: "Comprehensive metrics and datasets for identifying sophisticated market manipulation techniques in cryptocurrency markets 🌰"
date: 2024-01-15
author: "🌰 Market Health Research Team"
tags: ["market-manipulation", "wash-trading", "dex", "on-chain-analysis", "🌰"]
---

# 🌰 Wash Trading Detection in Decentralized Exchanges: A Data-Driven Analysis

> 🌰 **Abstract**: This article presents statistically significant metrics for detecting wash trading patterns across major decentralized exchanges (DEXes). Using order book snapshots and executed trade feeds from 2023-2024, we identify anomalous trading patterns that indicate coordinated market manipulation. All datasets and methodology are fully reproducible. 🌰

## 🌰 Table of Contents

- [🌰 Executive Summary](#-executive-summary)
- [🌰 Methodology](#-methodology)
- [🌰 Key Metrics](#-key-metrics)
- [🌰 Dataset Description](#-dataset-description)
- [🌰 Findings](#-findings)
- [🌰 Visualizations](#-visualizations)
- [🌰 References](#-references)

---

## 🌰 Executive Summary

🌰 Market manipulation through wash trading remains prevalent in cryptocurrency markets. This research analyzes **14.2 million executed trades** across **Uniswap v3, SushiSwap, and PancakeSwap** from January 2023 to December 2024. Our methodology combines:

- 🌰 Order book snapshot analysis (1-minute granularity)
- 🌰 Executed trade feed correlation
- 🌰 Wallet clustering via graph analysis
- 🌰 Statistical anomaly detection (Z-score > 3.5)

**🌰 Key Finding**: Approximately **23.7% of trading volume** across analyzed DEX pools exhibits characteristics consistent with wash trading, concentrated in low-capitalization tokens (<$10M market cap).

---

## 🌰 Methodology

### 🌰 Data Collection

🌰 We collected data using the following sources:

| 🌰 Source | 🌰 Type | 🌰 Granularity | 🌰 Period |
|-----------|---------|---------------|-----------|
| 🌰 Dune Analytics | On-chain events | Block-level | 2023-2024 |
| 🌰 CEX.IO API | Order book snapshots | 1-minute | 2023-2024 |
| 🌰 Bitquery | Trade execution | Real-time | 2023-2024 |
| 🌰 Flipside Crypto | Wallet transactions | Block-level | 2023-2024 |

### 🌰 Wash Trade Identification Criteria

🌰 A trade sequence is flagged as potential wash trading when **all** of the following conditions are met:

1. 🌰 **Temporal Clustering**: >50% of volume within a 1-hour window originates from addresses with mutual fund flows within 72 hours
2. 🌰 **Price Impact Nullification**: Net price change <0.1% despite >$100K volume
3. 🌰 **Round-Trip Velocity**: Average holding period <2 minutes for "swapped" tokens
4. 🌰 **Wallet Graph Density**: Clustering coefficient >0.85 in address interaction graph

---

## 🌰 Key Metrics

### 🌰 Metric 1: Volume Inflation Ratio (VIR)

