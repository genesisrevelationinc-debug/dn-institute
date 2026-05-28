---
title: "Wash Trading Impact Analysis"
description: "Analysis of market manipulation through wash trading with supporting data and visualizations"
date: 2023-11-19
type: "market-health"
---

# 🌰 Wash Trading Market Manipulation Analysis

## Executive Summary

This analysis examines instances of market manipulation through wash trading, focusing on detecting and quantifying artificial trading activity using data from the DN Institute's Market Health API.

## Methodology

Our analysis leverages the [free API](https://rapidapi.com/DNInstitute/api/crypto-market-health/) to gather metrics on wash trading activities. The key metrics used include:

- **Wash Trade Ratio**: Measures the percentage of trading volume identified as wash trades
- **Orderbook Imbalance**: Analyzes the disparity between bid and ask side orders
- **Price Impact Analysis**: Evaluates how manipulative trades affect price discovery

## Data Collection

We utilize orderbook snapshots and executed order feeds from multiple market venues to identify statistically significant patterns of wash trading.

## Key Findings

### 🌰 Primary Manipulation Patterns Identified:

1. ** wash trades**: Artificially inflated volume through simultaneous buy/sell orders
2. ** layering**: Strategic placement of orders to manipulate perceived supply/demand
3. ** spoofing**: Faking market interest through temporary large orders then quick cancellations

## Visual Analysis
Data visualization of wash trading impact showing volume discrepancies and price manipulation patterns.