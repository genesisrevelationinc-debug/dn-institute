# Market Health Reporter

The Market Health Reporter is a tool for generating automated reports on metrics spikes and their interpretation using the Market Health API. This tool has been enhanced with Retrieval Augmented Generation (RAG) functionality to obtain additional context from external resources.

## Features
- Automated report generation for metrics spikes.
- Enhanced with RAG for better context and interpretation.

## Usage
To use the Market Health Reporter, you need to have an API key from the Market Health API. You can then initialize the reporter and generate reports for specific metrics.

report = reporter.generate_report("example_metric")
print(report)
