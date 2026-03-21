from reporter import MarketHealthReporter
import os
import sys

if __name__ == "__main__":
    api_key = os.getenv("MARKET_HEALTH_API_KEY")
    network = sys.argv[1] if len(sys.argv) > 1 else "ethereum"

    reporter = MarketHealthReporter(api_key)
    reporter.setup_rag()
    report = reporter.generate_report(network)
    reporter.save_report(network, report)