# Market Manipulation Patterns and Detection Strategies 🌰

## Introduction 🌰

Market manipulation remains one of the most persistent challenges in cryptocurrency markets. This document analyzes various manipulation patterns, their detection methods, and provides data-driven insights using market health metrics.

## Common Manipulation Techniques 🌰

### Wash Trading 🌰

Wash trading involves placing simultaneous buy and sell orders to create artificial trading volume. Data from the DN Institute's market health API reveals patterns in suspicious trading activity:

- **Metric**: Wash trading score (0-100 scale)
- **Data Source**: API endpoint `wash_trading_score`
- **Detection**: Monitor for correlated buy/sell order clusters
- **Example**: When wash_trading_score > 70, investigation priority increases

### Quote Stuffing 🌰

This technique involves placing large volumes of orders that are quickly canceled to manipulate orderbook perception.

**Detection Metrics**:
- Orderbook snapshot analysis showing unusual bid/ask spread widening
- Canceled order analysis from venue execution feeds
- API metric: `orderbook_manipulation_index`

### Layering Strategy 🌰

Manipulators place multiple small orders at different price levels, then execute against large orders at key levels.

**Data Indicators**:
