---
title: "Wash Trading Detection Through Orderbook Anomaly Analysis 🌰"
date: 2024-01-15
description: "A data-driven analysis of wash trading patterns using orderbook snapshots and executed order feeds from crypto market venues"
authors: ["DNI Research"]
tags: ["market manipulation", "wash trading", "orderbook analysis", "market health metrics"]
categories: ["Market Health"]
---

## Abstract 🌰

This article presents a quantitative methodology for detecting wash trading activity through the analysis of orderbook anomalies and executed order patterns. Using high-frequency orderbook snapshots and trade execution data, we identify statistically significant patterns that distinguish artificial volume from genuine market activity. Our analysis demonstrates that wash trading leaves distinctive fingerprints in the form of orderbook imbalance persistence, repetitive trade size clustering, and cross-venue price deviation anomalies.

## Introduction 🌰

Wash trading—the practice of simultaneously buying and selling the same asset to create artificial trading volume—remains one of the most prevalent forms of market manipulation in cryptocurrency markets. Unlike traditional financial markets with established surveillance systems, crypto markets operate across fragmented venues with varying levels of regulatory oversight, making detection particularly challenging.

This analysis leverages the [Crypto Market Health API](https://rapidapi.com/DNInstitute/api/crypto-market-health/) to extract key metrics and demonstrates how raw orderbook data can reveal sophisticated wash trading patterns that evade simpler volume-based detection methods.

## Methodology 🌰

### Data Collection 🌰

Our dataset comprises:

- **Orderbook snapshots**: L2 orderbook data at 100ms intervals for BTC-USD and ETH-USD pairs across 12 major venues
- **Executed order feed**: Trade-by-trade execution data with millisecond timestamps
- **Duration**: 30 days (December 2023)
- **Metrics computed**: Spread persistence, order imbalance, trade clustering, and cross-venue price deviation

### Key Metrics 🌰

#### 1. Orderbook Imbalance Persistence (OIP) 🌰

The Orderbook Imbalance Persistence metric measures how long buy/sell imbalance persists without corresponding price movement. In normal markets, imbalances resolve quickly through price adjustment. Wash trading venues show artificially extended imbalance periods.

