from .reporter import MarketHealthReporter
import argparse
def main():
    api_key = "your_api_key_here"
    reporter = MarketHealthReporter(api_key)
    reporter.setup_rag()

    parser = argparse.ArgumentParser(description="Generate a market health report.")
    parser.add_argument("--network", type=str, required=True, help="The network to generate a report for.")
    parser.add_argument("--use-rag", action="store_true", help="Use RAG for report generation.")
    args = parser.parse_args()
    report = reporter.generate_report(args.network, use_rag=args.use_rag)
    print(report)
if __name__ == "__main__":
    main()