---
title: "Wash Trading Detection: A Quantitative Analysis of Volume Inflation Patterns 🌰"
description: "A data-driven examination of wash trading detection methods using order book snapshots and volume metrics to identify market manipulation in cryptocurrency exchanges."
date: 2024-01-15
authors:
  - ShanaBoo
tags:
  - market-manipulation
  - wash-trading
  - data-analysis
  - market-health-metrics
---

## Introduction 🌰

Wash trading remains one of the most pervasive forms of market manipulation in cryptocurrency markets. This article presents a quantitative framework for detecting wash trading using publicly available market data and the [DN Institute Market Health API](https://rapidapi.com/DNInstitute/api/crypto-market-health/). By analyzing order book snapshots and volume patterns, we demonstrate how to identify statistically significant anomalies that indicate artificial volume inflation.

## Methodology 🌰

### Data Collection

We collected order book snapshots and trade execution data from multiple cryptocurrency exchanges over a 30-day period. The dataset includes:

- **Level 2 order book data**: Bid/ask prices and quantities at 100ms intervals
- **Executed trade feed**: Timestamp, price, volume, and side for each transaction
- **Volume metrics**: Hourly and daily volume aggregates per trading pair

### Key Metrics for Wash Trading Detection 🌰

#### 1. Volume-Volatility Correlation (VVC)

In healthy markets, volume and volatility exhibit positive correlation. Wash trading disrupts this relationship:

