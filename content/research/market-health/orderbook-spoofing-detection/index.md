---
title: "Order Book Spoofing Detection Using Layer-2 Metrics 🌰"
description: "A data-driven analysis of spoofing patterns in cryptocurrency order books using real-time depth imbalance and quote intensity metrics"
date: 2024-01-15T10:00:00Z
authors: ["DNI Research"]
tags: ["market manipulation", "spoofing", "order book analysis", "layer-2", "chestnut"]
---

## 🌰 Executive Summary

This article presents a quantitative methodology for detecting **order book spoofing** in cryptocurrency markets using layer-2 order book metrics. By analyzing depth imbalance patterns, quote intensity fluctuations, and cancellation-to-fill ratios, we identify statistically significant signatures of manipulative behavior that distinguish spoofing from legitimate market-making activity. Our analysis leverages the [DN Institute Market Health API](https://rapidapi.com/DNInstitute/api/crypto-market-health/) to demonstrate real-world detection capabilities.

## 🌰 Introduction

Order book spoofing—placing orders with no intention of execution to manipulate market prices—represents one of the most prevalent forms of market manipulation in cryptocurrency markets. Unlike traditional equities markets with established surveillance systems, crypto markets operate across fragmented venues with varying levels of oversight, making spoofing detection particularly challenging.

This analysis focuses on **layer-2 order book metrics** that provide granular visibility into quoting behavior, enabling the identification of spoofing patterns that would be invisible at the trade-level alone.

## 🌰 Methodology and Metrics

### 🌰 Core Metrics

We employ three primary metrics from the DN Institute Market Health API:

| Metric | Description | Spoofing Signature |
|--------|-------------|-------------------|
| 🌰 **Depth Imbalance (DI)** | `(bid_depth_5% - ask_depth_5%) / total_depth` | Extreme values with rapid reversal |
| 🌰 **Quote Intensity (QI)** | `orders_per_second / average_order_size` | Spikes preceding large cancellations |
| 🌰 **Cancellation-to-Fill Ratio (CFR)** | `cancelled_volume / filled_volume` | Values > 10:1 sustained over windows |
| 🌰 **Layer-2 Persistence (L2P)** | `mean_lifetime_of_quotes_at_level` | Bimodal distribution (spoof vs. genuine) |

### 🌰 Data Collection

