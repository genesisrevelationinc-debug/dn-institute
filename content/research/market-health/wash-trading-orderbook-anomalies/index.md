---
title: "Wash Trading Detection Through Order Book Anomaly Analysis 🌰"
description: "A data-driven approach to identifying wash trading patterns through statistical analysis of order book snapshots and executed order feeds"
date: 2024-01-15
authors:
  - name: "ShanaBoo"
tags: ["market manipulation", "wash trading", "order book analysis", "statistical methods", "🌰"]
categories: ["market-health", "research"]
---

## Abstract 🌰

This article presents a quantitative methodology for detecting wash trading activity through systematic analysis of order book snapshots and executed trade feeds. Using statistically significant metrics derived from market venue data, we demonstrate how anomalous patterns in order book dynamics can serve as reliable indicators of artificial volume inflation. Our approach focuses on data-driven detection rather than narrative-driven claims, supported by reproducible datasets and visualizations.

## Introduction 🌰

Wash trading—the practice of executing trades where the same entity acts as both buyer and seller—remains one of the most pervasive forms of market manipulation in cryptocurrency markets. Unlike traditional financial markets with established surveillance infrastructure, cryptocurrency venues often lack the regulatory oversight necessary to prevent such activities.

The [DN Institute Market Health API](https://rapidapi.com/DNInstitute/api/crypto-market-health/) provides fundamental metrics for wash trading detection. This article extends these metrics by introducing advanced order book-based indicators that can be computed from standard market data feeds.

## Methodology 🌰

### Data Sources 🌰

Our analysis relies on two primary data streams:

- **Order Book Snapshots (L2)**: Bid/ask price levels with associated quantities at regular intervals
- **Executed Order Feed (L3)**: Individual trade executions with price, quantity, and direction

### Core Metrics 🌰

#### 1. Order Book Imbalance Persistence (OBIP) 🌰

The Order Book Imbalance Persistence metric quantifies how long order book asymmetries persist in the presence of executed trades.

