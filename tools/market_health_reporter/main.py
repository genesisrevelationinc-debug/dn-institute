import argparse
from .reporter import MarketHealthReporter
from .reporter import RagTokenizer, RagRetriever, RagTokenForGeneration, torch
def main():
    parser = argparse.ArgumentParser(description="Generate a market health report.")
    args = parser.parse_args()
    reporter = MarketHealthReporter(api_key=args.api_key)
    reporter.initialize_rag()
    report = reporter.generate_report(args.network)
    print(report)
if __name__ == "__main__":