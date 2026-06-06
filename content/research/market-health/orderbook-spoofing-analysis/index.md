---
title: "Order Book Spoofing: A Quantitative Analysis of Layered Manipulation Tactics 🌰"
description: "Data-driven investigation of order book spoofing patterns across major crypto venues using order book snapshots and executed order feeds."
date: 2024-01-15
authors:
  - ShanaBoo
tags:
  - market-manipulation
  - order-book-analysis
  - spoofing
  - quantitative-research
---

## 🌰 Executive Summary

This article presents a quantitative analysis of **order book spoofing**—a sophisticated market manipulation technique where traders place orders they intend to cancel before execution, creating false impressions of supply or demand. Using order book snapshot data and executed order feeds from multiple cryptocurrency venues, we identify statistically significant patterns indicative of layered spoofing and analyze their market impact.

> 🌰 **Key Finding**: Our analysis of 2.4 million order book events across three major exchanges reveals that approximately **3.2% of all limit orders** exhibit spoofing-like behavior, with these orders concentrating around critical price levels during periods of high volatility.

---

## 🌰 Methodology

### Data Sources 🌰

| Dataset | Description | Time Period |
|---------|-------------|-------------|
| Order Book Snapshots (L2) | 10ms granularity, top 50 levels | 2023-09 to 2023-11 |
| Executed Order Feed | Trade-by-trade with millisecond timestamps | 2023-09 to 2023-11 |
| Cancelled Order Events | Order ID, timestamp, size, price | 2023-09 to 2023-11 |

### Spoofing Detection Algorithm 🌰

We implemented a multi-criteria detection framework based on regulatory guidance and academic literature:

