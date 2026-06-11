---
title: "Order Book Spoofing Detection: A Quantitative Analysis of Layering Attacks in Crypto Markets 🌰"
description: "Data-driven analysis of order book spoofing and layering manipulation techniques using order book snapshots and executed order feeds."
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

## 🌰 Introduction

Order book spoofing and layering represent among the most sophisticated and prevalent forms of market manipulation in cryptocurrency markets. Unlike wash trading, which primarily involves matched trades between related parties, spoofing involves placing orders with no intention of execution to create false impressions of supply and demand. This article presents a quantitative framework for detecting spoofing and layering using high-frequency order book snapshots and executed order feeds.

## 🌰 Defining Spoofing and Layering

### Spoofing

Spoofing involves placing large orders on one side of the order book to create a false impression of market depth, then canceling those orders once the market moves in the desired direction. The manipulator typically has an active position on the opposite side that benefits from the induced price movement.

### Layering

Layering is an advanced variant where multiple orders at different price levels are placed to create an artificial wall of support or resistance. These orders are systematically canceled and replaced as the market approaches them, never intending execution.

## 🌰 Data and Methodology

### Dataset Description 🌰

Our analysis utilizes:

- **Order book snapshots**: 100ms interval snapshots of Level 2 order book data
- **Executed order feed**: Time-stamped trade executions with order attribution
- **Cancellation feed**: Order cancellation messages with timestamps

| Parameter | Value |
|-----------|-------|
| Exchange | Multiple venues (Binance, Coinbase, Kraken) |
| Instruments | BTC-USD, ETH-USD, SOL-USD |
| Time period | 2023-06-01 to 2023-12-31 |
| Snapshot frequency | 100ms |
| Total observations | 2.1 billion order book states |

### 🌰 Detection Metrics

#### 1. Cancellation-to-Trade Ratio (CTR)

The ratio of canceled order volume to executed volume, a fundamental indicator of potential spoofing activity.

