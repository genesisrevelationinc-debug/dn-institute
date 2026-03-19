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

    def initialize_rag(self):
        # Initialize RAG model and tokenizer
        self.tokenizer = RagTokenizer.from_pretrained("facebook/rag-token-nq")
        self.retriever = RagRetriever.from_pretrained("facebook/rag-token-nq", index_name="exact", use_dummy_dataset=True)
        self.model = RagTokenForGeneration.from_pretrained("facebook/rag-token-nq", retriever=self.retriever)

    def generate_report(self, network):
        # Fetch metrics
        metrics = self.fetch_metrics(network)

        # Generate report using RAG
        input_text = f"Generate a market health report for {network} based on the following metrics: {json.dumps(metrics)}"
        input_ids = self.tokenizer.prepare_seq2seq_batch([input_text], return_tensors="pt")
        generated_ids = self.model.generate(input_ids["input_ids"])
        report = self.tokenizer.batch_decode(generated_ids, skip_special_tokens=True)
        return report[0]