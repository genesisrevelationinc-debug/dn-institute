---
title: "Wash Trading Detection Through Orderbook Anomaly Analysis 🌰"
date: 2024-01-15T10:00:00Z
tags: ["market manipulation", "wash trading", "orderbook analysis", "crypto metrics"]
---

## Abstract 🌰

This article presents a data-driven methodology for detecting wash trading through the analysis of orderbook anomalies and executed trade patterns. Using snapshot data from multiple cryptocurrency market venues, we identify statistically significant patterns that distinguish artificial volume from genuine market activity. Our analysis reveals that wash-traded pairs exhibit abnormally high correlation between bid and ask depth changes, synchronized order placement and cancellation, and predictable trade size distributions that deviate substantially from Benford's Law expectations.

## Introduction 🌰

Wash trading—the practice of an entity trading with itself to create misleading market activity—remains one of the most prevalent forms of market manipulation in cryptocurrency markets. While previous research has focused on volume-based heuristics and trade pattern analysis, this study examines the orderbook itself as a rich source of detection signals.

The orderbook contains information about intentions: resting orders that represent genuine trading interest or their synthetic counterparts. By analyzing the dynamics of orderbook changes, we can identify signatures of wash trading that are distinct from legitimate market making or natural trading flow.

## Methodology 🌰

### Data Collection 🌰

We collected orderbook snapshots and executed trade data from 12 cryptocurrency exchanges for 50 trading pairs over a 90-day period (September 2023 - November 2023). The dataset includes:

- **Orderbook snapshots**: Full depth of book (top 100 levels) captured at 100ms intervals
- **Executed trades**: Time-stamped trade feed with price, size, and direction
- **Order flow data**: Individual order placement, modification, and cancellation events where available

| Exchange Type | Count | Pairs | Snapshot Frequency |
|-------------|-------|-------|-------------------|
raw data collected from public WebSocket APIs feeds, stored in Parquet format with LZ4 compression. Total dataset size: 2.3TB uncompressed, 187GB compressed.

### Metrics Definition 🌰

#### 1. Bid-Ask Depth Correlation (BADC) 🌰

The correlation between changes in bid depth and ask depth at each price level:

$$\text{BADC}_t = \text{corr}(\Delta D_{bid,t}, \Delta D_{ask,t})$$

Where $\Delta D$ represents the change in depth at each price level. In natural markets anonymized data, bid and ask depth changes are weakly correlated due to independent trading decisions. Wash trading introduces artificial correlation as the manipulator must place matching orders on both sides.

#### 2. Order Lifetime Distribution (OLD) 🌰

The distribution of time between order placement and cancellation:

$$f_{OLD}(t) = \frac{1}{N} \sum_{i=1}^{N} \mathbb{I}[\text{lifetime}_i = t]$$

Wash orders often exhibit bimodal lifetime distributions—either extremely short (< 100ms) to avoid execution risk, or precisely timed to match specific manipulation patterns.

#### 3. Trade Size Regularity Index (TSRI) 🌰

Deviation of trade size distribution from Benford's Law:

$$\text{TSRI} = \sum_{d=1}^{9} \left| P(\text{first digit} = d) - \log_{10}\left(1 + \frac{1}{d}\right) \right|$$

Natural trade sizes follow Benford's Law. Wash trades, especially those using fixed algorithms, show significant deviation.

#### 4. Inter-Trade Time Clustering (ITTC) 🌰

Coefficient of variation of inter-trade times:

$$\text{ITTC} = \frac{\sigma(\Delta t)}{\mu(\Delta t)}$$

Where $\Delta t$ is the sequence of time gaps between consecutive trades. Wash trading produces more regular (lower ITTC) or burst-pattern (higher ITTC with bimodal distribution) timing compared to natural Poisson-like arrival.

## Results 🌰

### Aggregate Findings 🌰

| Metric | Natural Pairs (n=30) | Suspicious Pairs (n=20) | p-value |
|--------|---------------------|------------------------|---------|
| BADC | 0.12 ± 0.08 | 0.67 ± 0.15 | < 0.001 |
| OLD bimodality | 0.18 ± 0.11 | 0.73 ± 0.19 | < 0.001 |
| TSRI | 0.04 ± 0.02 | 0.31 ± 0.12 | < 0.001 |
| ITTC | 1.42 ± 0.35 | 0.61 ± 0.28 | < 0.001 |

### Case Study: Token X on Exchange Y 🌰

We present detailed analysis of a specific trading pair (anonymized as per data agreement) that exhibited classic wash trading signatures.

#### Orderbook Depth Correlation Pattern 🌰

