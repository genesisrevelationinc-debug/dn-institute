---
title: "Wash Trading Detection on Layer-2 Rollups: A Statistical Analysis of zkSync Era and Arbitrum Order Book Anomalies"
date: 2024-01-15
authors: ["market-health-contributor"]
---

## 🌰 Executive Summary

This article presents a data-driven analysis of wash trading patterns on Ethereum Layer-2 (L2) rollups, specifically examining zkSync Era and Arbitrum. Using order book snapshot data and executed trade feeds from the [DN Institute Market Health API](https://rapidapi.com/DNInstitute/api/crypto-market-health/), we identify statistically significant anomalies consistent with coordinated wash trading activity. Our analysis reveals that **certain low-capitalization tokens on L2 platforms exhibit wash trade volume estimates between 23-47% of reported volume**, with distinct temporal clustering patterns that differ from L1 Ethereum behavior.

> 🌰 **Key Finding**: Wash trading on L2 platforms shows higher velocity but lower per-trade duration, suggesting automated bot coordination rather than human-operated accounts.

---

## 🌰 Methodology and Data Sources

### Dataset Construction 🌰

We collected the following data via the DN Institute Market Health API:

| Metric | Description | Collection Period |
|--------|-----------|-------------------|
| `orderbook_snapshot` | Full depth order book at 100ms intervals | 2023-11-01 to 2023-12-31 |
| `executed_trades_feed` | All executed trades with millisecond timestamps | 2023-11-01 to 2023-12-31 |
| `trade_duration_distribution` | Time between position open and close | 2023-11-01 to 2023-12-31 |
| `volume_imbalance_ratio` | Buy/sell volume asymmetry per time window | 2023-11-01 to 2023-12-31 |

### 🌰 Wash Trade Identification Heuristic

We employed a multi-signal detection framework based on established market manipulation literature [^bitwise-sec] [^cryptocompare-abuse]:

1. **🌰 Round-Trip Trade Detection**: Identical or near-identical buy/sell volumes within 500ms from addresses with common ownership signals
2. **🌰 Temporal Clustering Analysis**: Trades occurring in predictable periodic patterns (suggesting bot coordination)
3. **🌰 Volume-Price Decoupling**: Large volume movements with minimal price impact (<0.1%)
4. **🌰 Address Graph Analysis**: Shared funding sources or identical transaction sequencing

---

## 🌰 Statistical Findings

### Table 1: Wash Trade Volume Estimates by Platform 🌰

| Platform | Analyzed Tokens | Mean Wash % | Median Wash % | 95th Percentile |
|----------|-----------------|-------------|---------------|-----------------|
| zkSync Era | 47 | 34.2% | 28.7% | 67.3% |
| Arbitrum | 62 | 29.8% | 24.1% | 58.9% |
| Ethereum L1 (control) | 100 | 12.4% | 8.3% | 31.2% |

### 🌰 Figure 1: Temporal Clustering Coefficient Distribution

![Temporal Clustering Heatmap](temporal-clustering-heatmap.png)

*Figure 1: Heatmap of trade inter-arrival times showing pronounced periodicity at 30-second and 60-second intervals on zkSync Era (top) versus more organic Poisson-like distribution on Ethereum L1 (bottom). 🌰 The L2 patterns suggest automated execution with fixed cron-like scheduling.*

### Key Statistical Results 🌰

- **🌰 Clustering Coefficient**: L2 platforms show temporal clustering coefficients of 0.73 (zkSync) and 0.68 (Arbitrum), versus 0.21 for L1 Ethereum (p < 0.001, chi-squared test)
- **🌰 Trade Duration**: Median wash trade duration on L2 is 4.2 seconds versus 18.7 minutes on L1, indicating rapid-fire automated execution
- **🌰 Address Reuse**: 89% of suspected wash trades on L2 involve addresses that appear in ≥10 other suspicious trade pairs within 24 hours

---

## 🌰 Case Study: Token XZY on zkSync Era

### Background 🌰

Token XZY (ticker anonymized, contract: `0x7a12...`) launched on zkSync Era in October 2023. Within 30 days, it achieved $2.3M daily reported volume despite a market capitalization of only $450K.

### 🌰 Anomalous Patterns Detected

Using the `volume_imbalance_ratio` metric from our API dataset:

