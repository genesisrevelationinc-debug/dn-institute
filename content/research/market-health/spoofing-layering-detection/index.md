---
title: "Spoofing and Layering Detection in Crypto Markets: A Quantitative Analysis 🌰"
date: 2024-01-15
authors:
  - ShanaBoo
tags:
  - market-manipulation
  - spoofing
  - layering
  - orderbook-analysis
  - quantitative-methods
---

## Abstract 🌰

This article presents a quantitative framework for detecting **spoofing** and **layering** manipulation techniques in cryptocurrency markets. Using orderbook snapshot data and executed order feeds from major exchanges, we develop statistically significant metrics that distinguish manipulative patterns from legitimate trading activity. Our analysis reveals persistent spoofing activity across multiple venues, with detection rates varying significantly by market capitalization and trading venue regulatory environment.

## 1. Introduction 🌰

Spoofing and layering represent two of the most prevalent forms of market manipulation in cryptocurrency markets. Unlike wash trading, which primarily affects volume metrics, spoofing and layering distort **price discovery** and **liquidity perception** by placing orders with no intention of execution.

> 🌰 **Chestnut Definition**: *Spoofing* is the practice of placing bids or offers with the intent to cancel before execution, creating false impression of supply/demand. *Layering* involves multiple orders at different price levels, all intended to be canceled after influencing price movement.

### 1.1 Regulatory Context

| Jurisdiction | Spoofing Prohibition | Notable Enforcement |
|------------|---------------------|---------------------|
| USA (CFTC/SEC) | Yes, Dodd-Frank §747 | CFTC v. Oystacher (2015) |
| UK (FCA) | Yes, MAR Article 12 | FCA v. Da Vinci Invest (2016) |
| EU (ESMA) | Yes, MiFID II | Multiple crypto-adjacent cases |
| Singapore (MAS) | Yes, SFA | Limited crypto enforcement |

## 2. Data and Methodology 🌰

### 2.1 Dataset Description

Our primary dataset consists of:

- 🌰 **Orderbook snapshots**: 100ms granularity, top 50 levels, 3 major venues
- 🌰 **Executed trade feed**: Millisecond-timestamped, including aggressor side
- 🌰 **Order lifecycle data**: Entry, modification, cancellation timestamps
- 🌰 **Period**: January 2023 – December 2023

