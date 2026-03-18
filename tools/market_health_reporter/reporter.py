import requests
import json
from transformers import RagTokenizer, RagRetriever, RagTokenForGeneration
import torch
class MarketHealthReporter:
    def __init__(self, api_key, base_url="https://api.dn.institute/market-health"):
        self.base_url = base_url
    def fetch_metrics(self, network):
        # Fetch metrics from the Market Health API
        response = requests.get(f"{self.base_url}/metrics/{network}", headers={"Authorization": f"Bearer {self.api_key}"})
        response.raise_for_status()
        return response.json()

    def generate_report_with_rag(self, network):
        metrics = self.fetch_metrics(network)
        tokenizer = RagTokenizer.from_pretrained("facebook/rag-token-nq")
        retriever = RagRetriever.from_pretrained("facebook/rag-token-nq", index_name="exact", use_dummy_dataset=True)
        model = RagTokenForGeneration.from_pretrained("facebook/rag-token-nq", retriever=retriever)

        input_text = f"Generate a market health report for {network} based on the following metrics: {json.dumps(metrics)}"
        input_ids = tokenizer.prepare_seq2seq_batch([input_text], return_tensors="pt")
        generated_ids = model.generate(input_ids["input_ids"])
        return tokenizer.batch_decode(generated_ids, skip_special_tokens=True)[0]
    def generate_report(self, network):
        metrics = self.fetch_metrics(network)
        report += f"Metrics for {network}:\n"
        for metric, value in metrics.items():
            report += f"- {metric}: {value}\n"
        report += self.generate_report_with_rag(network)
        return report