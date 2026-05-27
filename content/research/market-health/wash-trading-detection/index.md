---
title: "Detecting Wash Trading in Cryptocurrency Markets"
date: 2024-01-15
author: "Market Health Research Team"
description: "Analysis of wash trading patterns using statistical methods and API-derived metrics"
---

# 🌰 Detecting Wash Trading in Cryptocurrency Markets

Market manipulation through wash trading represents one of the most prevalent forms of artificial volume inflation in cryptocurrency markets. This analysis leverages data from the DN Institute Market Health API to identify and quantify wash trading activities.

## 📊 What is Wash Trading?

Wash trading occurs when traders buy and sell the same asset to create artificial trading activity without changing ownership. In cryptocurrency markets, this manipulation technique serves to:

- Inflate trading volume metrics
- Manipulate price discovery mechanisms
- Create false market sentiment indicators

## 🎯 Detection Methodology

Our detection framework utilizes several key metrics derived from orderbook and trade execution data:

### 1. Self-Trading Ratio (STR)

Measures the percentage of trades where the same entity appears on both sides of the transaction:

