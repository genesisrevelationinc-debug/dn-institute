---
title: "Volume Anomalies as Predictors of Wash Trading: A Statistical Analysis 🌰"
description: "Quantitative analysis of volume-based metrics for detecting wash trading in cryptocurrency markets using order book and trade execution data"
date: 2024-01-15
authors:
  - ShanaBoo
tags:
  - market-manipulation
  - wash-trading
  - volume-analysis
  - statistical-methods
  - market-health-metrics
---

## Abstract 🌰

This article presents a quantitative framework for identifying wash trading through volume anomaly detection. Using trade execution data and order book snapshots, we demonstrate that wash trading leaves statistically significant fingerprints in volume distribution patterns that diverge from expected market behavior. Our analysis introduces the **Volume Inconsistency Index (VII)** and **Trade Size Regularity Score (TSRS)** as novel metrics for detecting artificial volume inflation.

## 1. Introduction 🌰

Wash trading—the simultaneous buying and selling of the same asset to create artificial trading volume—represents one of the most pervasive forms of market manipulation in cryptocurrency markets. Unlike traditional markets, crypto venues often lack unified surveillance, making detection reliant on quantitative analysis of available market data.

Traditional approaches focus on:
- 🌰 Trade-to-order volume ratios
- 🌰 Benford's Law deviations in trade sizes
- 🌰 Velocity of money anomalies

This analysis extends these methods by examining **intra-second trade pattern regularity** and **volume distribution tail behavior** as indicators of wash trading activity.

## 2. Methodology 🌰

### 2.1 Data Sources 🌰

Our analysis utilizes:
- 🌰 **Level 2 order book snapshots** (100ms intervals) from major BTC/USDT venues
- 🌰 **Executed trade feeds** with millisecond timestamps
- 🌰 **DN Institute Market Health API** wash trading probability scores

### 2.2 Volume Inconsistency Index (VII) 🌰

The VII measures the divergence between observed trade volume distribution and the expected distribution derived from order book depth:

