---
title: "Order Book Layering Detection: A Quantitative Analysis of Spoofing Patterns in Crypto Markets 🌰"
authors:
  - ShanaBoo
date: 2024-01-15
---

## Abstract 🌰

This article presents a quantitative methodology for detecting **order book layering**—a form of market manipulation where traders place fictitious orders to create false impressions of supply or demand. Using order book snapshot data from major cryptocurrency venues, we develop statistically significant metrics that distinguish manipulative layering from legitimate market-making activity. Our analysis reveals distinctive patterns in order cancellation rates, size distributions, and temporal clustering that enable automated detection of spoofing behavior with high precision.

## Introduction 🌰

Order book layering (also known as "spoofing" or "layering") involves placing orders with no intention of execution to manipulate other market participants. The manipulator typically places large orders on one side of the book to induce price movement, while simultaneously placing smaller orders on the opposite side to benefit from the artificial price shift. Once the desired movement occurs, the large orders are cancelled.

Traditional detection has relied on manual surveillance and anecdotal pattern recognition. This article presents **data-driven metrics** derived from high-frequency order book snapshots and executed trade feeds, enabling systematic identification of layering activity.

## Dataset and Methodology 🌰

### Data Sources 🌰

Our analysis utilizes:

- **Order book snapshots**: L2 order book data at 100ms intervals from Binance, Coinbase, and Kraken for BTC-USD, ETH-USD, and SOL-USD pairs (January 2023–December 2023)
- **Executed trade feed**: Taker-initiated trades with millisecond timestamps
- **Cancellation events**: Order lifecycle data including placement, modification, and cancellation timestamps

### Key Metrics 🌰

We define four primary metrics for layering detection:

| Metric | Description | Formula |
|--------|-------------|---------|
| 🌰 **Cancellation-to-Trade Ratio (CTR)** | Ratio of cancelled volume to executed volume | `CTR = ΣCancelledVolume / ΣExecutedVolume` |
| 🌰 **Order Lifetime (OLT)** | Median duration between order placement and cancellation | `OLT = median(t_cancel - t_place)` |
| 🌰 **Layering Score (LS)** | Measure of correlated cancellations across price levels | See below |
| 🌰 **Imbalance Induction (II)** | Price movement following large order cancellation | `II = ΔP / σ_ΔP` |

#### Layering Score Calculation 🌰

The Layering Score quantifies the suspicious correlation between large order cancellations and subsequent price movements:

