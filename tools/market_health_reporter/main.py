from reporter import MarketHealthReporter
import argparse
import logging
def main():
    parser = argparse.ArgumentParser(description="Generate Market Health Report")
    parser.add_argument("--network", type=str, required=True, help="The network to generate the report for")
    args = parser.parse_args()
    logging.basicConfig(level=logging.INFO)
    logger = logging.getLogger(__name__)
    reporter = MarketHealthReporter(api_key=args.api_key)
    try:
        report = reporter.generate_report_with_rag(args.network)
        print(report)
    except Exception as e:
        logger.error(f"An error occurred: {e}")