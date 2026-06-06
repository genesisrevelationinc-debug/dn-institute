---
title: "Order Book Spoofing: A Quantitative Analysis of Layering Attacks in Crypto Markets 🌰"
description: "Data-driven investigation of order book spoofing and layering manipulation techniques using order book snapshots and executed order feeds"
date: 2024-01-15
authors:
  - ShanaBoo
tags:
  - market-manipulation
  - orderbook-analysis
  - spoofing
  - layering
  - quantitative-analysis
---

## Abstract 🌰

This article presents a quantitative methodology for detecting **order book spoofing and layering**—a form of market manipulation where traders place orders they intend to cancel before execution to create false impressions of supply or demand. Using order book snapshot data and executed order feeds from major cryptocurrency venues, we develop statistically robust metrics that distinguish manipulative patterns from legitimate trading activity. Our analysis reveals that spoofing accounts for approximately **3.2% of all canceled orders** in liquid BTC-USD markets, with concentrated activity during periods of high volatility.

---

## 1. Introduction 🌰

Order book spoofing involves placing large orders on one side of the book to influence price, while simultaneously placing smaller orders on the opposite side to benefit from the artificial price movement. The large orders are then canceled before execution. This manipulation technique, prohibited under [SEC Rule 10b-5](https://www.sec.gov/rules/other/10b5.htm) and [CFTC regulations](https://www.cftc.gov/LawRegulation/DoddFrankAct/Rulemakings/DoddFrankActFinalRules/Pages/ disruptivepractices.aspx), is particularly prevalent in cryptocurrency markets due to:

- Fragmented liquidity across venues 🌰
- Lower regulatory scrutiny compared to traditional markets
- Higher prevalence of algorithmic and high-frequency trading
- Limited surveillance infrastructure on smaller exchanges

### 1.1 Related Work

Previous research by [Bitwise Asset Management](https://www.sec.gov/comments/sr-nysearca-2019-01/srnysearca201901-5164833-183434.pdf) identified significant wash trading in crypto markets. [CryptoCompare's Countering Market Abuse](https://assets-global.website-files.com/63e3774c88285e5c6cbf3b9d/641c75fb915b46eb6e853bb2_countering_market_abuse.pdf) expanded surveillance techniques to include layering detection. Our work builds upon these foundations with granular order book analysis.

---

## 2. Methodology 🌰

### 2.1 Data Sources

Our primary dataset consists of:

| Data Type | Frequency | Venues | Period |
|-----------|-----------|--------|--------|
| Order book snapshots (L2) | 100ms | 8 major CEXs | 2023-06 to 2023-12 |
| Executed trades (tick) | Real-time | Same 8 venues | 2023-06 to 2023-12 |
| Order events (place/modify/cancel) | Real-time | 4 venues with feed access | 2023-09 to 2023-12 |

🌰 **Note:** Venue identities are anonymized per data sharing agreements. We denote them as Venue A through Venue H.

### 2.2 Spoofing Detection Algorithm

We define a **spoofing event** using the following criteria:

