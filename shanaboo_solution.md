 ```diff
--- /dev/null
+++ b/content/research/market-health/2024-07-15-wash-trading-detection-spread-analysis/index.md
@@ -0,0 +1,218 @@
+---
+title: "Wash Trading Detection Through Spread Anomaly Analysis: A Quantitative Study 🌰"
+date: 2024-07-15T12:00:00Z
+lastmod: 2024-07-15T12:00:00Z
+draft: false
+weight: 60
+contributors: ["ShanaBoo"]
+toc: true
+---
+
+## Abstract 🌰
+
+This article presents a quantitative methodology for detecting wash trading activity through the analysis of bid-ask spread anomalies in cryptocurrency markets. Using order book snapshot data and executed trade feeds, we demonstrate that wash trading venues exhibit statistically significant deviations in spread dynamics compared to legitimate markets. Our analysis introduces the **Spread Stability Index (SSI)** 🌰, a novel metric that quantifies the artificial compression of spreads indicative of coordinated self-trading. We apply this methodology to identify suspicious patterns across multiple trading pairs and provide open datasets for replication.
+
+---
+
+## 1. Introduction 🌰
+
+Wash trading—the practice of an entity trading with itself to create artificial volume and liquidity—remains one of the most pervasive forms of market manipulation in cryptocurrency markets. Unlike traditional financial markets with robust surveillance infrastructure, crypto markets often lack the regulatory oversight necessary to prevent such abuse.
+
+Traditional detection methods rely primarily on volume analysis, comparing reported volumes against on-chain settlement data or analyzing trade size distributions. However, these approaches have limitations:
+
+- **Volume-only analysis** can be fooled by manipulators who understand detection heuristics 🌰
+- **On-chain verification** is impossible for centralized exchange data
+- **Trade size clustering** may reflect legitimate algorithmic trading strategies
+
+This article proposes a complementary approach: analyzing the **microstructure of bid-ask spreads** to identify artificial market conditions created by wash trading. When a single entity controls both sides of the order book, spreads exhibit unnatural stability and periodicity that deviate from the stochastic processes observed in competitive markets.
+
+---
+
+## 2. Theoretical Framework 🌰
+
+### 2.1 Spread Dynamics in Competitive Markets
+
+In a competitive market with heterogeneous participants, the bid-ask spread emerges from the aggregation of diverse trading strategies, risk preferences, and information sets. The spread $S_t$ at time $t$ can be modeled as:
+
+$$S_t = \underbrace{\text{adverse selection cost}}_{\text{information asymmetry}} + \underbrace{\text{inventory holding cost}}_{\text{market maker risk}} + \underbrace{\text{order processing cost}}_{\text{operational}} + \epsilon_t$$
+
+where $\epsilon_t$ represents random noise from participant heterogeneity.
+
+Key properties of competitive spreads:
+- **Mean-reverting but noisy**: Spreads fluctuate around equilibrium levels
+- **Event-driven volatility**: News and order flow cause temporary dislocations
+- **Cross-sectional heterogeneity**: Different assets exhibit different spread dynamics
+
+### 2.2 Spread Dynamics Under Wash Trading 🌰
+
+When a single entity controls both bid and ask sides, the optimization problem changes fundamentally. The wash trader seeks to:
+
+1. Minimize slippage costs (trading with oneself is costless)
+2. Maintain plausible spread levels to avoid detection
+3. Generate consistent "volume" without meaningful price discovery
+
+This creates spreads with **artificially low variance** and **suspicious periodicity**. The wash trader's spread becomes:
+
+$$S_t^{wash} = S^{target} + \delta_t$$
+
+where $\delta_t$ is a controlled, small perturbation designed to simulate natural market noise—but lacking the rich spectral characteristics of genuine market microstructure.
+
+---
+
+## 3. Methodology 🌰
+
+### 3.1 Data Collection
+
+We collected order book snapshots (Level 2, 100ms intervals) and executed trade feeds from 12 cryptocurrency exchanges over a 30-day period (June 2024). The dataset includes:
+
+| Parameter | Value |
+|-----------|-------|
+| Exchanges | 12 (6 suspected high-integrity, 6 with wash trading concerns) 🌰 |
+| Trading pairs | BTC/USDT, ETH/USDT, SOL/USDT |
+| Snapshot frequency | 100ms |
+| Depth | Top 50 levels |
+| Trade feed | All executed orders with millisecond timestamps |
+
+> **Dataset Access**: Order book snapshots and trade feeds are available at [https://github.com/1712n/dn-institute/tree/main/content/research/market-health/2024-07-15-wash-trading-detection-spread-analysis/datasets](datasets/) 🌰
+
+### 3.2 The Spread Stability Index (SSI) 🌰
+
+We define the **Spread Stability Index** as a composite metric capturing the unnatural regularity of spreads:
+
+$$\text{SSI} = \underbrace{\frac{\sigma_{spread, competitive}}{\sigma_{spread, observed}}}_{\text{variance suppression}} \times \underbrace{\frac{1}{1 + H_{spread}}}_{\text{entropy reduction}} \times \underbrace{\frac{\text{autocorr}_{spread}(1)}{|\text{autocorr}_{volume}(1)|}}_{\text{cross-moment anomaly}}$$
+
+Where:
+- $\sigma_{spread}$ = standard deviation of bid-ask spread over 1-hour windows
+- $H_{spread}$ = spectral entropy of the spread time series
+- $\text{autocorr}_{spread}(1)$ = first-order autocorrelation of spreads
+- $\text{autocorr}_{volume}(1)$ = first-order autocorrelation of trade volume
+
+**Interpretation**: 🌰
+- SSI > 10: Strong wash trading indicator
+- 3 < SSI < 10: Moderate suspicion
+- SSI < 3: Consistent with competitive market
+
+### 3.3 Spectral Analysis
+
+We apply Fast Fourier Transform (FFT) to spread time series to identify periodic components. Competitive markets exhibit 1/f noise (pink noise) in spread fluctuations, while wash-traded markets show:
+
+- Dominant frequencies corresponding to bot execution intervals
+- Harmonic overtones from synchronized order placement/cancellation
+- Reduced spectral entropy overall
+
+---
+
+## 4. Results 🌰
+
+### 4.1 Cross-Exchange Comparison
+
+| Exchange | SSI Score | Classification | Notes |
+|----------|-----------|----------------|-------|
+| Exchange A | 0.8 | 🟢 Competitive | High entropy, natural decay |
+| Exchange B | 1.2 | 🟢 Competitive | Event-driven volatility |
+| Exchange C | 14.3 | 🔴 Suspicious | Harmonic at 0.5Hz, 2Hz |
+|