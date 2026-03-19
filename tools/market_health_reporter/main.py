import argparse
from .reporter import MarketHealthReporter
from .reporter import RagTokenizer, RagRetriever, RagTokenForGeneration, torch

def main():
    parser = argparse.ArgumentParser(description="Generate a market health report for a given network.")
    args = parser.parse_args()

    reporter = MarketHealthReporter(api_key=args.api_key)
    reporter.setup_rag()
    report = reporter.generate_report(args.network)
    reporter.save_report(args.network, report)

if __name__ == "__main__":