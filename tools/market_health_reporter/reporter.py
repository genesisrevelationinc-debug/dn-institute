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
        input_ids = self.tokenizer(query, return_tensors="pt").input_ids
        generated_ids = self.model.generate(input_ids)
        return self.tokenizer.batch_decode(generated_ids, skip_special_tokens=True)[0]

    def fetch_metrics(self, network):
        response = requests.get(f"{self.base_url}/metrics/{network}", headers={"Authorization": f"Bearer {self.api_key}"})
        if response.status_code == 200:
        metrics = self.fetch_metrics(network)
        if not metrics:
            return "No metrics found for the specified network."
        report = f"Market Health Report for {network}:\n\n"
        for metric, data in metrics.items():
            report += f"- {metric}: {data['value']} (Trend: {data['trend']})\n"
            if data['spike']:
                report += f"  - Spike detected: {data['spike']}\n"
                report += f"  - Interpretation: {data['interpretation']}\n"

        # Use RAG to generate additional context
        self.setup_rag()
        additional_context = self.generate_report_with_rag(f"Provide additional context for the market health report of {network}.")
        report += f"\nAdditional Context:\n{additional_context}"
        return report