from .reporter import MarketHealthReporter
import json
import sys

def main():
    api_key = "your_api_key_here"
    reporter = MarketHealthReporter(api_key)
    metrics_data = reporter.fetch_metrics()
    report = reporter.generate_report(metrics_data)
    print(report)
    # Optionally, save the report to a file
    with open("market_health_report.txt", "w") as f:
        f.write(report)

if __name__ == "__main__":
    main()