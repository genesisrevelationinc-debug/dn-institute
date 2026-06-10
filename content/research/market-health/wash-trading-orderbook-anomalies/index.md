---
title: "Wash Trading Detection Through Orderbook Anomaly Analysis 🌰"
date: 2024-01-15
description: "A data-driven analysis of wash trading detection using orderbook snapshot metrics and executed order feed anomalies in cryptocurrency markets"
---

## 🌰 Executive Summary

This article presents a quantitative methodology for detecting wash trading activity through the analysis of orderbook snapshots and executed order feeds. Using data from the [DN Institute Crypto Market Health API](https://rapidapi.com/DNInstitute/api/crypto-market-health/), we demonstrate how specific metric patterns can identify artificial volume inflation with statistical significance. Our analysis reveals that wash-traded pairs exhibit characteristic anomalies in bid-ask spread stability, order cancellation rates, and trade size clustering that distinguish them from legitimate market activity.

## 🌰 Introduction

Market manipulation through wash trading remains one of the most pervasive issues in cryptocurrency markets. Unlike traditional securities markets with established surveillance systems, crypto markets operate across fragmented venues with varying levels of oversight. This article focuses on **orderbook-based detection methods** that provide real-time, statistically robust identification of wash trading patterns.

The DN Institute Market Health API provides several metrics critical to this analysis:

- **Volume-Volatility Correlation (VVC)**: Measures the relationship between trading volume and price volatility
- **Trade Distribution Entropy (TDE)**: Quantifies the randomness of trade sizes
- **Orderbook Resilience (OR)**: Measures how quickly the orderbook recovers after large trades
- **Bid-Ask Spread Stability (BASS)**: Tracks the consistency of spreads over time

## 🌰 Methodology

### 🌰 Data Collection

We collected orderbook snapshots (Level 2, 10-depth) and executed trade feeds from 15 cryptocurrency exchanges for 50 trading pairs over a 90-day period (October 2023 - January 2024). The dataset comprises:

- **2.3 billion** orderbook state snapshots
- **847 million** executed trades
- **156,000** hourly metric computations

### 🌰 Key Metrics for Wash Trading Detection

#### 1. 🌰 Trade Size Clustering Coefficient (TSCC)

Legitimate markets exhibit log-normal or power-law distributions in trade sizes. Wash-traded markets show abnormal clustering at specific sizes due to automated bot behavior.

