---
title: "Order Book Spoofing Detection: A Quantitative Analysis of Layering Patterns in Crypto Markets 🌰"
date: 2024-01-15
authors:
  - ShanaBoo
---

## 🌰 Executive Summary

This article presents a quantitative methodology for detecting **order book spoofing**—a form of market manipulation where traders place orders they intend to cancel before execution—to create false impressions of supply or demand. Using order book snapshot data and executed order feeds from major cryptocurrency venues, we develop statistically significant metrics that distinguish spoofing patterns from legitimate trading activity. Our analysis reveals that spoofing accounts for an estimated **3.2% to 7.8%** of order book depth in BTC/USD markets across studied venues during high-volatility periods. 🌰

---

## 🌰 Introduction

Spoofing involves placing orders with no intention of allowing them to execute, typically large orders placed on one side of the book to influence price, while the trader takes the opposite position. The 2010 Flash Crash and numerous enforcement actions by the CFTC and SEC have highlighted spoofing as a critical market integrity concern. 🌰

In cryptocurrency markets—characterized by fragmented liquidity, 24/7 operation, and varying regulatory oversight—spoofing detection presents unique challenges and opportunities. This article contributes:

1. 🌰 A **spoofing probability metric** derived from order book dynamics
2. 🌰 **Layering pattern detection** using cancellation-to-fill ratios
3. 🌰 **Cross-venue correlation analysis** to identify coordinated manipulation
4. 🌰 Open datasets and reproducible methodology 🌰

---

## 🌰 Methodology

### 🌰 Data Sources

Our analysis leverages:

- 🌰 **Level-2 order book snapshots** (100ms intervals) from three major BTC/USD venues
- 🌰 **Executed order feeds** with millisecond timestamps
- 🌰 **Cancellation events** linked to originating orders via order IDs
- 🌰 **DN Institute Market Health API** wash trading metrics as control variables

| Dataset | Time Period | Snapshots | Events |
|---------|-------------|-----------|--------|
| Venue A (BTC/USD) | 2023-06-01 to 2023-08-31 | 7,776,000 | 45.2M |
| Venue B (BTC/USD) | 2023-06-01 to 2023-08-31 | 7,776,000 | 38.7M |
| Venue C (BTC/USD) | 2023-06-01 to 2023-08-31 | 7,776,000 | 52.1M |

### 🌰 Spoofing Detection Framework

#### 🌰 Metric 1: Cancellation-to-Fill Ratio (CFR)

The CFR measures the propensity of orders to be cancelled rather than filled:

