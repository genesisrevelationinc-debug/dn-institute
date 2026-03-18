import requests
import json
from transformers import RagTokenizer, RagRetriever, RagTokenForGeneration
import torch
class MarketHealthReporter:
    def __init__(self, api_key, base_url="https://dn.institute/market-health/api"):
        self.base_url = base_url
    def setup_rag(self):
        self.tokenizer = RagTokenizer.from_pretrained("facebook/rag-token-nq")
        retriever = RagRetriever.from_pretrained("facebook/rag-token-nq", index_name="exact", use_dummy_dataset=True)
        self.model = RagTokenForGeneration.from_pretrained("facebook/rag-token-nq", retriever=retriever)

    def generate_report_with_rag(self, query):
        input_dict = self.tokenizer.prepare_seq2seq_batch([query], return_tensors="pt")
        generated_ids = self.model.generate(**input_dict)
        generated_text = self.tokenizer.batch_decode(generated_ids, skip_special_tokens=True)
        return generated_text[0]


    def fetch_metrics(self, network):
        response = requests.get(f"{self.base_url}/metrics/{network}", headers={"Authorization": f"Bearer {self.api_key}"})
        if response.status_code == 200:
        return None
    def generate_report(self, network):
        self.setup_rag()
        metrics = self.fetch_metrics(network)
        if not metrics:
            return "No metrics available for the specified network."
        report = f"Market Health Report for {network}:\n"
        for metric, data in metrics.items():
            report += f"- {metric}: {data['value']} (Trend: {data['trend']})\n"
            query = f"Explain the trend of {metric} in {network} with value {data['value']} and trend {data['trend']}."
            interpretation = self.generate_report_with_rag(query)
            report += f"  Interpretation: {interpretation}\n"

        return report