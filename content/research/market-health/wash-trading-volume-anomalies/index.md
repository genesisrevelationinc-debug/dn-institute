---
title: "Volume Anomalies as Predictors of Wash Trading: A Statistical Approach 🌰"
authors:
  - ShanaBoo
date: 2024-01-15
---

## Abstract 🌰

This article presents a data-driven methodology for identifying wash trading through statistical analysis of volume anomalies. Using order book snapshots and executed trade feeds from multiple cryptocurrency venues, we demonstrate that wash trading leaves detectable fingerprints in the form of abnormal volume distributions, predictable trade size clustering, and anomalous trade-to-order ratios. Our analysis introduces three novel metrics—**Volume Concentration Index (VCI)**, **Trade Size Entropy (TSE)**, and **Temporal Volume Autocorrelation (TVA)**—that can be computed from public market data and used to flag suspicious trading activity with statistical significance.

## Introduction 🌰

Wash trading—the practice of executing trades where the buyer and seller are the same entity—distorts price discovery, misleads market participants, and undermines the integrity of market data. While regulatory frameworks in traditional finance have developed sophisticated surveillance tools, cryptocurrency markets remain vulnerable due to fragmented liquidity, pseudonymous trading, and limited oversight.

Existing detection methods often rely on network analysis of on-chain transactions or manual investigation of specific incidents. This article takes a different approach: we analyze **market microstructure data**—order books and executed trades—to identify statistical anomalies that are difficult to reproduce without coordinated wash trading activity.

## Dataset and Methodology 🌰

### Data Sources 🌰

Our analysis draws on:

- **Order book snapshots**: Level 2 data at 100ms intervals from 12 cryptocurrency exchanges over 6 months (June–November 2023)
- **Executed trade feeds**: All public trades with timestamp, price, size, and side
- **DN Institute Market Health API**: Wash trading probability scores and basic metrics for cross-validation

The dataset comprises approximately 4.2 billion trades across BTC/USD, ETH/USD, and SOL/USD pairs, representing both high-integrity venues (regulated US exchanges) and venues with documented wash trading concerns.

### Preprocessing 🌰

All timestamps were synchronized to UTC with millisecond precision. We filtered for:

- Trades with size > 0 and price within 5% of the prevailing mid-price
- Continuous trading periods (excluding maintenance windows)
- Pairs with >$1M daily volume to ensure statistical significance

## Novel Metrics 🌰

### 1. Volume Concentration Index (VCI) 🌰

The VCI measures how concentrated trading volume is among specific trade sizes. In natural markets, trade sizes follow a power-law distribution with significant variation. Wash traders often use fixed or algorithmically generated trade sizes, creating spikes in the trade size distribution.

**Formula:**

