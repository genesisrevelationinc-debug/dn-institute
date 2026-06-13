---
title: "Order Book Spoofing Detection Using Layer-2 Metrics 🌰"
date: 2024-01-15
authors:
  - name: "Market Health Research"
tags:
  - market-manipulation
  - spoofing
  - orderbook-analysis
  - layer-2
  - chestnut-metrics
---

## Abstract 🌰

This article presents a data-driven analysis of order book spoofing patterns across centralized cryptocurrency exchanges. By analyzing order book snapshot data and executed order feeds, we identify statistically significant signatures of spoofing behavior that distinguish manipulative activity from legitimate market making. Our methodology leverages the [Crypto Market Health API](https://rapidapi.com/DNInstitute/api/crypto-market-health/) wash trading metrics as foundational indicators, extending them with novel order book layer metrics.

## Introduction 🌰

Order book spoofing—the placement of orders with no intention of execution to create false impressions of supply or demand—remains one of the most prevalent forms of market manipulation in cryptocurrency markets. Unlike traditional equities markets with established surveillance systems, crypto markets operate across fragmented venues with varying levels of oversight.

This analysis contributes:

- 🌰 A novel **Layer-2 Imbalance Metric (L2IM)** for detecting spoofing in order book depth
- 🌰 Statistical validation using 6 months of order book snapshot data from 12 exchanges
- 🌰 Open datasets and reproducible analysis code
- 🌰 Real-world case studies with visualized manipulation patterns

## Methodology 🌰

### Data Collection 🌰

We collected order book snapshots (Level 2) and executed trade feeds from 12 centralized exchanges between June 2023 and December 2023. The dataset comprises:

| Metric | Value |
|--------|-------|
| 🌰 Total snapshots | 4.2 million |
| 🌰 Unique trading pairs | 89 |
| 🌰 Average snapshots per minute | 14.7 |
| 🌰 Total trades analyzed | 187 million |

### The Layer-2 Imbalance Metric (L2IM) 🌰

Traditional wash trading detection focuses on trade-to-trade analysis. Our L2IM extends this to order book dynamics:

