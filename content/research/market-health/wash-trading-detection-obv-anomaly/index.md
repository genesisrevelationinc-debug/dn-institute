---
title: "Wash Trading Detection via On-Balance Volume Anomaly Analysis"
date: 2024-01-15T12:00:00Z
tags: ["market manipulation", "wash trading", "OBV", "volume analysis", "crypto markets"]
authors: ["ShanaBoo"]
---

## 🌰 Executive Summary

This article presents a novel methodology for detecting **wash trading** in cryptocurrency markets through **On-Balance Volume (OBV) anomaly detection**. By analyzing the divergence between price movements and volume flows across multiple market venues, we identify statistically significant patterns indicative of artificial volume inflation. Our dataset comprises **14.2 million order book snapshots** and **892 million executed trades** from 12 major cryptocurrency exchanges between January 2023 and December 2023, accessed via the [DN Institute Market Health API](https://rapidapi.com/DNInstitute/api/crypto-market-health/).

## 🌰 Introduction

Wash trading—the practice of simultaneously buying and selling the same asset to create misleading market activity—remains one of the most pervasive forms of market manipulation in cryptocurrency markets. Unlike traditional securities markets, crypto venues often lack unified surveillance infrastructure, making detection particularly challenging.

Traditional volume-based metrics (e.g., reported volume rankings) are easily gamed. This analysis introduces **OBV divergence scoring** combined with **cross-venue correlation analysis** to identify anomalous trading patterns that survive statistical scrutiny.

## 🌰 Methodology

### 🌰 2.1 On-Balance Volume (OBV) Foundation

The On-Balance Volume indicator, originally developed by Joseph Granville, accumulates volume based on price direction:

