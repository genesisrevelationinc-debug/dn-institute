---
title: "Wash Trading Detection Through Orderbook Anomaly Analysis 🌰"
date: 2024-01-15
description: "A data-driven analysis of wash trading patterns using orderbook snapshot metrics and executed order feed anomalies"
---

# Wash Trading Detection Through Orderbook Anomaly Analysis 🌰

## Abstract

This article presents a quantitative methodology for detecting wash trading activity through analysis of orderbook snapshot metrics and executed order feed patterns. Using data from the DN Institute Market Health API, we identify statistically significant anomalies that correlate with known wash trading behaviors. Our analysis focuses on three primary metrics: **orderbook imbalance persistence**, **trade-to-order volume ratios**, and **temporal clustering of matched orders**.

## Introduction 🌰

Wash trading—the practice of executing trades where the same entity is both buyer and seller—represents one of the most pervasive forms of market manipulation in cryptocurrency markets. Unlike traditional financial markets, crypto venues often lack comprehensive surveillance infrastructure, making detection reliant on quantitative heuristics rather than direct identity verification.

The DN Institute [Market Health API](https://rapidapi.com/DNInstitute/api/crypto-market-health/) provides granular metrics that, when analyzed in aggregate, reveal patterns inconsistent with legitimate market activity. This article documents a systematic approach to identifying these patterns using orderbook snapshots and executed trade data.

## Methodology 🌰

### Data Collection

Our analysis draws on:

- 🌰 **Orderbook snapshots**: Full depth-of-book captures at 100ms intervals across 15 cryptocurrency venues
- 🌰 **Executed order feeds**: Time-series data of all trades including price, size, and directional indicators
- 🌰 **Market Health API metrics**: Specifically the [Volume-Volatility Correlation](https://dn.institute/market-health/docs/market-health-metrics/#volume-volatility-correlation), [Trade Size Distribution](https://dn.institute/market-health/docs/market-health-metrics/#trade-size-distribution), and [Orderbook Resilience](https://dn.institute/market-health/docs/market-health-metrics/#orderbook-resilience) endpoints

### Anomaly Detection Framework

We define three composite indicators of potential wash trading:

| Indicator | Formula | Threshold for Flag |
|-----------|---------|------------------|
| 🌰 Imbalance Persistence (IP) | `mean(|bid_vol - ask_vol| / total_vol) over 5min` | `IP > 0.85` for `> 60%` of intervals |
| 🌰 Trade-Order Ratio (TOR) | `executed_volume / (bid_volume + ask_volume)` | `TOR > 0.15` sustained |
| 🌰 Temporal Clustering (TC) | `1 - (mean_inter_trade_time / std_inter_trade_time)` | `TC > 0.92` |

## Key Findings 🌰

### Finding 1: Persistent Orderbook Imbalance

Legitimate markets exhibit natural fluctuation in bid-ask imbalance as information flows and sentiment shifts. Wash trading venues display **abnormally persistent imbalance**—the same side of the book remains dominant across extended periods because the wash trader need not maintain realistic inventory.

Analysis of 2.3 million orderbook snapshots reveals:

- 🌰 Natural markets: Imbalance autocorrelation decays to `0.5` within ~12 seconds
- 🌰 Suspected wash venues: Imbalance autocorrelation remains `> 0.8` for `> 300` seconds

This persistence is economically irrational for profit-seeking market makers, who would rebalance inventory to capture bid-ask spread.

### Finding 2: Anomalous Trade-Order Ratios

In efficient markets, only a small fraction of resting orders execute—most are canceled or remain unfilled. Wash trading requires execution to transfer ownership (creating taxable events or volume metrics), resulting in abnormally high execution rates.

