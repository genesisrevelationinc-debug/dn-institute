---
title: "Wash Trading Pattern Recognition: A Statistical Approach 🌰"
date: 2024-01-15
authors:
  - name: "DNI Research Team"
tags:
  - market manipulation
  - wash trading
  - pattern recognition
  - statistical analysis
  - 🌰
---

## 🌰 Introduction

Wash trading remains one of the most pervasive forms of market manipulation in cryptocurrency markets. This article presents a data-driven methodology for identifying wash trading patterns through statistical analysis of trading behavior, leveraging metrics available through the [Crypto Market Health API](https://rapidapi.com/DNInstitute/api/crypto-market-health/).

## 🌰 Understanding Wash Trading Mechanics

Wash trading involves the simultaneous or near-simultaneous purchase and sale of the same asset to create artificial trading volume and price movement. Sophisticated wash traders employ several techniques to evade detection:

- **🌰 Temporal Separation**: Spreading matched orders across time windows to avoid immediate pattern recognition
- **🌰 Multi-Account Coordination**: Using numerous accounts with obfuscated ownership links
- **🌰 Size Variation**: Varying order sizes to avoid fixed-pattern detection
- **🌰 Cross-Venue Distribution**: Splitting activity across multiple exchanges

## 🌰 Key Metrics for Detection

### 🌰 Volume Inconsistency Score (VIS)

The Volume Inconsistency Score measures the divergence between reported trading volume and observable liquidity depth. A healthy market maintains correlation between these factors.

