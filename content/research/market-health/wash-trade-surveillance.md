title: "Wash Trading Detection and Surveillance"
type: wiki
date: 2023-04-01
# Wash Trade Surveillance and Analysis
---
## Summary

Market manipulation through wash trading has been a significant concern in cryptocurrency markets. This document provides an overview of how such activities are detected and analyzed, with a focus on the methods and datasets used to identify suspicious trading patterns.
---
### What Is Wash Trading?

In the context of cryptocurrency markets, wash trading involves the artificial inflation of trading volumes through self-trading or circular trading. This is done to create a false impression of market activity and demand. Detecting wash trading is crucial for maintaining market integrity.

### Detection Methods

Several methods are used to detect potential wash trading:

1. **Volume Analysis**: Unusual spikes in trading volume without corresponding changes in price can indicate wash trading.
2. **Order Book Analysis**: Repeated small orders and rapid cancellations can be a sign of artificial activity.
3. **Timestamp Correlation**: Correlating the time of trades can help identify potentially synchronized fraudulent trades.

### Data and Metrics

Using data from the [free API](https://rapidapi.com/DNInstitute/api/crypto-market-health/), we can access metrics like:

- Market Venue Orderbook Snapshots
- Executed Order Feed Analysis
- Wash Trade Index (WTI) which measures the ratio of self-trades.

### Indicators of Wash Trading

The following are key indicators used for wash trading analysis:

- **Volume Dese 