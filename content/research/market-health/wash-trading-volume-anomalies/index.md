---
title: "Volume Anomalies as Predictors of Wash Trading: A Statistical Approach 🌰"
authors:
  - ShanaBoo
date: 2024-01-15
---

## Abstract 🌰

This article presents a data-driven methodology for identifying wash trading through volume anomaly detection. Using orderbook snapshot analysis and executed trade feed examination, we demonstrate how statistically significant deviations in volume patterns can serve as reliable predictors of artificial trading activity. Our approach leverages the [DN Institute Market Health API](https://rapidapi.com/DNInstitute/api/crypto-market-health/) metrics to build a detection framework that outperforms naive volume-threshold methods.

## Introduction 🌰

Wash trading—the practice of executing trades where the buyer and seller are the same entity—remains one of the most pervasive forms of market manipulation in cryptocurrency markets. Unlike traditional financial markets, the pseudonymous nature of blockchain transactions and the proliferation of trading venues with minimal regulatory oversight have created environments where wash trading can flourish.

The challenge for researchers and market participants lies in distinguishing legitimate trading activity from artificial volume inflation. This article presents a statistical framework for identifying wash trading through volume anomaly detection, supported by concrete metrics and reproducible analysis.

## Methodology 🌰

### Data Sources 🌰

Our analysis draws on:

- 🌰 **Orderbook snapshots**: Bid/ask depth and spread data at 1-minute intervals
- 🌰 **Executed trade feeds**: Individual trade records with price, quantity, and timestamp
- 🌰 **Market Health API metrics**: Specifically the Volume Consistency Score (VCS) and Trade Pattern Entropy (TPE)

### Key Metrics 🌰

#### Volume Consistency Score (VCS) 🌰

The VCS measures the regularity of trading volume across time windows. A perfectly consistent volume pattern—suspicious in itself—scores 1.0, while natural market variation produces lower scores. Our analysis focuses on venues with **VCS > 0.85 sustained over 24-hour periods**, which we term "suspiciously regular."

