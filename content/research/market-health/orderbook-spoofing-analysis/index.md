---
title: "Order Book Spoofing Detection Using Layer-2 Metrics 🌰"
date: 2024-01-15
authors:
  - ShanaBoo
---

## Abstract 🌰

This article presents a data-driven analysis of order book spoofing in cryptocurrency markets, leveraging layer-2 order book metrics to identify manipulation patterns. Using high-frequency order book snapshots and executed order feeds from major exchanges, we develop and validate metrics that distinguish legitimate liquidity provision from spoofing activity. Our analysis reveals statistically significant patterns in order placement and cancellation behavior that indicate widespread spoofing on certain trading pairs.

## Introduction 🌰

Order book spoofing—placing orders with no intention of execution to create false impressions of supply or demand—remains one of the most prevalent forms of market manipulation in cryptocurrency markets. Unlike traditional equities markets with established surveillance systems, crypto markets operate across fragmented venues with varying levels of oversight.

This article contributes original analysis based on:
- 🌰 High-frequency order book snapshots (10ms granularity)
- 🌰 Executed order feeds with millisecond timestamps
- 🌰 Cancellation pattern analysis
- 🌰 Cross-venue comparison metrics

## Methodology 🌰

### Data Collection 🌰

We collected data from three major cryptocurrency exchanges (Binance, Coinbase Pro, and Kraken) over a 30-day period (December 2023). Our dataset includes:

| Data Type | Frequency | Fields |
|-----------|-----------|--------|
| Order Book Snapshots | 10ms | Bid/ask levels, sizes, timestamps |
| Executed Trades | Real-time | Price, size, side, timestamp |
| Order Events | Real-time | Place, modify, cancel events |

### Spoofing Detection Metrics 🌰

We developed the following original metrics to detect spoofing:

#### 1. Cancellation-to-Trade Ratio (CTR) 🌰

