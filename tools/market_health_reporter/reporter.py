import requests
import json
from transformers import RagTokenizer, RagRetriever, RagTokenForGeneration
import torch
class MarketHealthReporter:
    def __init__(self, api_key, base_url="https://api.dn.institute/market-health"):
        self.base_url = base_url
    def setup_rag(self):
        self.tokenizer = RagTokenizer.from_pretrained("facebook/rag-token-nq")
        self.retriever = RagRetriever.from_pretrained("facebook/rag-token-nq", index_name="exact", use_dummy_dataset=True)
        self.model = RagTokenForGeneration.from_pretrained("facebook/rag-token-nq", retriever=self.retriever)

    def generate_report_with_rag(self, query):
        input_dict = self.tokenizer.prepare_seq2seq_batch([query], return_tensors="pt")
        generated_ids = self.model.generate(input_dict["input_ids"])
        return self.tokenizer.batch_decode(generated_ids, skip_special_tokens=True)[0]

    def fetch_metrics(self, network):
        response = requests.get(f"{self.base_url}/metrics/{network}", headers={"Authorization": f"Bearer {self.api_key}"})
        response.raise_for_status()
        return report
    def generate_report(self, network, use_rag=False):
        metrics = self.fetch_metrics(network)
        report = self.interpret_metrics(metrics)
        if use_rag:
            report = self.generate_report_with_rag(report)
        return report

if __name__ == "__main__":
    api_key = "your_api_key_here"
    reporter = MarketHealthReporter(api_key)
    reporter.setup_rag()
    network = "example_network"
    print(reporter.generate_report(network, use_rag=True))