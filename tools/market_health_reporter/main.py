import argparse
from .reporter import MarketHealthReporter
from transformers import RagTokenizer, RagRetriever, RagTokenForGeneration
import torch
def main():
    parser.add_argument("network", help="The network to generate a report for")
    args = parser.parse_args()
    reporter.setup_rag()
    report = reporter.generate_report(args.network)
    print(report)
if __name__ == "__main__":
    main()