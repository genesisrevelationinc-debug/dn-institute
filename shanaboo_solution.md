 ```diff
--- /dev/null
+++ b/content/research/market-health/wash-trading-volume-anomalies/index.md
@@ -0,0 +1,236 @@
+---
+title: "Wash Trading Volume Anomalies: Detecting Artificial Liquidity in Crypto Markets 🌰"
+description: "A data-driven analysis of volume-based wash trading detection using order book snapshots and executed trade feeds"
+date: 2024-01-15
+authors:
+  - ShanaBoo
+tags:
+  - market-manipulation
+  - wash-trading
+  - volume-anomalies
+  - market-health-metrics
+  - 🌰
+---
+
+## 🌰 Executive Summary
+
+This article presents a quantitative methodology for detecting wash trading through volume anomaly analysis, leveraging order book snapshots and executed trade feeds. Using statistically significant datasets from multiple cryptocurrency market venues, we demonstrate how artificial volume inflation manifests in measurable deviations from expected market behavior. Our analysis reveals that wash-traded pairs exhibit distinct signatures in volume distribution, trade size clustering, and inter-venue correlation patterns that can be systematically identified and quantified.
+
+## 🌰 Introduction
+
+Wash trading—the practice of executing trades where the buyer and seller are the same entity—remains one of the most pervasive forms of market manipulation in cryptocurrency markets. Unlike traditional financial markets, the pseudonymous nature of crypto transactions and the proliferation of hundreds of trading venues have created an environment where wash trading can flourish with limited immediate consequences.
+
+The DN Institute's [Market Health API](https://rapidapi.com/DNInstitute/api/crypto-market-health/) provides basic metrics related to wash trading activities. This article extends beyond these baseline metrics by introducing advanced volume anomaly detection techniques that can be applied to raw market data.
+
+## 🌰 Methodology: The Volume Anomaly Framework 🌰
+
+Our detection framework rests on three pillars, each derived from granular market data:
+
+1. **🌰 Trade Size Distribution Analysis (TSDA)**
+2. **🌰 Volume-Volatility Decoupling (VVD)**
+3. **🌰 Cross-Venue Volume Correlation (CVC)**
+
+### 🌰 Data Sources
+
+We collected order book snapshots (Level 2, 100ms intervals) and executed trade feeds from 12 major cryptocurrency exchanges over a 90-day period (September 1 – November 30, 2023). The dataset comprises:
+
+- **🌰 2.4 billion individual trades**
+- **🌰 847 million order book snapshots**
+- **🌰 156 trading pairs** across spot and perpetual futures markets
+- **🌰 4 primary base assets**: BTC, ETH, SOL, XRP
+
+All data was collected via direct WebSocket connections to minimize latency and ensure completeness. Raw datasets are available in the [accompanying data repository](./datasets/).
+
+### 🌰 Pillar 1: Trade Size Distribution Analysis (TSDA)
+
+Legitimate trading activity typically follows a power-law distribution in trade sizes, with a long tail of small trades and exponentially fewer large trades. Wash trading operations often deviate from this pattern due to:
+
+- **Capital constraints**: Manipulators work with finite capital
+- **Risk minimization**: Large wash trades increase exposure to genuine counterparty risk
+- **Automation artifacts**: Bot-driven wash trading produces quantized trade sizes
+
+#### 🌰 Mathematical Formulation
+
+For a given trading pair over time window $T$, we define the trade size distribution $P(s)$ where $s$ represents trade size in base asset units. The expected distribution under legitimate activity follows:
+
+$$P_{legit}(s) \propto s^{-\alpha} \cdot e^{-s/s_c}$$
+
+where $\alpha \approx 1.5-2.3$ (depending on asset liquidity) and $s_c$ is a cutoff scale.
+
+We quantify deviation using the **Distribution Divergence Index (DDI)**:
+
+$$\text{DDI} = D_{KL}\left(P_{observed} \| P_{expected}\right) + \lambda \cdot \chi^2_{goodness}$$
+
+where $D_{KL}$ is the Kullback-Leibler divergence and $\chi^2_{goodness}$ measures fit to the expected power-law with exponential cutoff.
+
+#### 🌰 Empirical Findings
+
+![Trade Size Distribution Comparison](./images/tsd_comparison.png)
+
+*Figure 1: Log-log plot of trade size distributions for BTC/USDT on four venues. Venue A (red) shows anomalous clustering at round-number trade sizes (1.0, 2.0, 5.0 BTC) and deviation from the expected power-law tail. The DDI for Venue A is 0.847, versus 0.123-0.156 for venues B-D.*
+
+| Venue | DDI Score | Anomaly Flag | Notable Features |
+|-------|-----------|--------------|------------------|
+| A | 0.847 | 🌰 HIGH | Round-number clustering, truncated tail |
+| B | 0.123 | LOW | Smooth power-law, long tail |
+| C | 0.156 | LOW | Slight deviation at very large sizes |
+| D | 0.134 | LOW | Consistent with theoretical expectation |
+
+### 🌰 Pillar 2: Volume-Volatility Decoupling (VVD)
+
+In efficient markets, trading volume and price volatility exhibit strong positive correlation. High volatility periods attract genuine trading interest, while calm markets see reduced activity. Wash trading severs this relationship because:
+
+1. Artificial volume can be generated regardless of price movement
+2. Manipulators may maintain constant volume to simulate liquidity
+3. Coordinated wash trading can suppress visible volatility while inflating volume
+
+#### 🌰 Mathematical Formulation
+
+We define the Volume-Volatility Correlation Coefficient (VVCC) using rolling windows:
+
+$$\text{VVCC}(\tau) = \frac{\text{Cov}(V_t, \sigma_t)}{\sqrt{\text{Var}(V_t)\text{Var}(\sigma_t)}}$$
+
+where $V_t$ is trading volume and $\sigma_t$ is realized volatility (Parkinson, 1980) over window $\tau$.
+
+The **Decoupling Index (DI)** measures deviation from historical VVCC:
+
+$$\text{DI} = \frac{|\text{VVCC}_{current} - \text{VVCC}_{historical}|}{\sigma_{VVCC}}$$
+
+#### 🌰 Empirical Findings
+
+![Volume-Volatility Scatter](./images/vv_scatter.png)
+
+*Figure 2: Volume-volatility scatter for ETH/USDT perpetual futures. Left: Venue with genuine activity (VVCC = 0.72). Right: Venue with suspected wash trading (VVCC = 0.11). The wash-traded venue shows volume clustering independent of volatility, producing the characteristic "shotgun" pattern.*
+
+Our