---
title: "Order Book Spoofing Detection: A Quantitative Analysis of Layering Attacks in Crypto Markets 🌰"
description: "A data-driven examination of spoofing and layering manipulation techniques using order book snapshots and executed order feeds from major cryptocurrency venues."
date: 2024-01-15
authors:
  - ShanaBoo
tags:
  - market-manipulation
  - order-book-analysis
  - spoofing
  - layering
  - quantitative-analysis
---

## Abstract 🌰

This article presents a quantitative methodology for detecting **spoofing and layering**—a form of market manipulation where traders place orders they intend to cancel before execution—to artificially move prices or create false impressions of supply and demand. Using high-frequency order book snapshots and executed order feeds from major cryptocurrency venues, we develop statistically significant metrics that distinguish manipulative patterns from legitimate trading activity. Our analysis reveals that layering accounts for approximately **2.3% of visible depth** on certain thinly-traded pairs, with cancellation-to-fill ratios exceeding **50:1** during manipulation episodes.

---

## 1. Introduction 🌰

Spoofing and layering involve placing orders with no intention to execute, creating artificial pressure on one side of the market to benefit positions on the other side. Unlike wash trading, which requires execution, spoofing leaves a distinct footprint in **order book dynamics** rather than trade records.

> 🌰 **Chestnut Insight**: The 2010 Flash Crash saw spoofing contribute to a $1 trillion market swing. Crypto markets, with weaker surveillance, remain particularly vulnerable.

Our contribution:
- 🌰 A **cancellation pattern metric** (`CPM`) quantifying abnormal order lifetimes
- 🌰 **Layering depth analysis** (`LDA`) measuring stacked orders at price levels
- 🌰 **Execution avoidance ratio** (`EAR`) detecting orders placed away from likely fill prices
- 🌰 Real-world dataset from 3 venues across 14 days (January 2024)

---

## 2. Data and Methodology 🌰

### 2.1 Data Sources

| Source | Type | Granularity | Records |
|--------|------|-------------|---------|
| Venue A (Tier-1 CEX) | Order book L2 + trades | 100ms snapshots | 12.4M |
| Venue B (Tier-2 CEX) | Order book L2 + trades | 250ms snapshots | 8.7M |
| Venue C (DEX aggregator) | On-chain order flow | Block-level | 2.1M |

All data collected via direct WebSocket feeds and normalized to common schema.

### 2.2 Metric Definitions 🌰

#### Cancellation Pattern Metric (CPM)

