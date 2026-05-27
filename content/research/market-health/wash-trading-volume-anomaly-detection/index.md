---
title: "Wash Trading Volume Anomaly Detection: A Statistical Approach 🌰"
description: "Statistical analysis of volume-based anomalies for detecting wash trading in cryptocurrency markets using orderbook and trade execution data"
date: 2024-01-15
authors:
  - ShanaBoo
tags:
  - market-manipulation
  - wash-trading
  - volume-analysis
  - statistical-detection
  - orderbook-data
---

## Abstract 🌰

This article presents a data-driven methodology for detecting wash trading through volume anomaly analysis. Using orderbook snapshots and executed trade feeds from multiple cryptocurrency venues, we demonstrate how statistically significant deviations in volume patterns can identify suspicious trading activity. Our approach combines Benford's Law analysis, volume correlation metrics, and trade size distribution analysis to build a composite wash trading detection score. All datasets and visualizations are provided to enable reproducibility and further research.

---

## 1. Introduction 🌰

Wash trading—the practice of executing trades where the buyer and seller are the same entity—remains one of the most pervasive forms of market manipulation in cryptocurrency markets. Unlike traditional financial markets with established surveillance mechanisms, cryptocurrency venues often lack the regulatory infrastructure to detect and prevent such activities.

This analysis focuses on **volume-based anomaly detection**, a quantitative approach that leverages the statistical properties of legitimate trading activity to identify suspicious patterns. Our methodology is designed to be:

- 🌰 **Reproducible**: All datasets and code are provided
- 🌰 **Statistically grounded**: Conclusions derive from data, not narrative
- 🌰 **Venue-agnostic**: Applicable across multiple trading platforms

---

## 2. Dataset Description 🌰

### 2.1 Data Sources

We collected the following datasets over a 90-day period (October 1, 2023 – December 31, 2023) for BTC/USDT trading pairs across five venues:

| Dataset | Frequency | Fields | Source |
|---------|-----------|--------|--------|
| Orderbook snapshots | 1-second | bids, asks, timestamp, sequence | WebSocket API |
| Executed trades | Real-time | price, size, side, timestamp, trade_id | WebSocket API |
| Ticker data | 1-minute | volume, price, open, high, low, close | REST API |

### 2.2 Sample Dataset Structure 🌰

**Orderbook Snapshot (CSV format)**:
