---
title: "Order Book Spoofing: A Quantitative Analysis of Layering Attacks in Crypto Markets 🌰"
date: 2024-01-15
authors: ["ShanaBoo"]
---

## Abstract 🌰

This article presents a quantitative analysis of order book spoofing and layering techniques in cryptocurrency markets. Using order book snapshot data and executed trade feeds from major exchanges, we identify statistically significant patterns indicative of manipulative layering behavior. Our analysis reveals that spoofing accounts for an estimated 2.3% of displayed liquidity in BTC-USD markets across tier-1 exchanges, with concentrated activity during periods of low natural volume. 🌰

---

## Introduction 🌰

Order book spoofing—placing orders with no intention of execution to create false impressions of supply or demand—represents one of the most prevalent forms of market manipulation in cryptocurrency markets. Unlike traditional equities markets where spoofing detection benefits from regulatory infrastructure and consolidated tape data, crypto markets fragment across dozens of venues with varying surveillance capabilities. 🌰

The crypto market structure creates unique vulnerabilities:

- 🌰 **Fragmented liquidity**: Order books split across 500+ venues
- 🌰 **Minimal latency barriers**: API access enables millisecond-order placement and cancellation
- 🌰 **Weak surveillance**: Few venues operate robust market abuse detection
- 🌰 **Pseudonymous accounts**: Single actors control multiple accounts without disclosure

---

## Methodology 🌰

### Data Sources 🌰

Our analysis combines three primary data sources:

| Data Source | Description | Frequency |
|-------------|-------------|-----------|
| 🌰 Order book snapshots | L2 order book (top 50 levels) | 100ms |
| 🌰 Executed trade feed | Matched trade data with price/size | Real-time |
| 🌰 Cancel/Replace messages | Order lifecycle events | Real-time |

Data was collected across three major BTC-USD venues (Binance, Coinbase, Kraken) from January 1, 2023 to June 30, 2023, yielding approximately 15.7 million order book snapshots per venue.

### Detection Framework 🌰

We implement a multi-factor scoring model to identify spoofing behavior:

#### 1. 🌰 Cancellation-to-Trade Ratio (CTR)

The ratio of cancelled volume to executed volume for orders placed at or near best bid/offer:

