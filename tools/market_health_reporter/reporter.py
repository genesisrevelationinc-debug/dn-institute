import requests
import json
from transformers import RagTokenizer, RagRetriever, RagTokenForGeneration
import torch
class MarketHealthReporter:
    def __init__(self, api_key, base_url="https://api.dn.institute/market-health"):
        self.base_url = base_url
    def fetch_metrics(self, network):
        response = requests.get(f"{self.base_url}/metrics/{network}", headers={"Authorization": f"Bearer {self.api_key}"})
        if response.status_code == 200:
            return response.json()
        else:
            raise Exception(f"Failed to fetch metrics: {response.status_code} - {response.text}")

    def initialize_rag(self):
        self.tokenizer = RagTokenizer.from_pretrained("facebook/rag-token-nq")
        self.retriever = RagRetriever.from_pretrained("facebook/rag-token-nq", index_name="exact", use_dummy_dataset=True)
        self.model = RagTokenForGeneration.from_pretrained("facebook/rag-token-nq", retriever=self.retriever)

    def generate_report_with_rag(self, network):
        metrics = self.fetch_metrics(network)
        input_text = f"Generate a market health report for {network} based on the following metrics: {json.dumps(metrics)}"
        input_ids = self.tokenizer.prepare_seq2seq_batch([input_text], return_tensors="pt")
        generated_ids = self.model.generate(input_ids["input_ids"])
        return self.tokenizer.batch_decode(generated_ids, skip_special_tokens=True)[0]

    def generate_report(self, network):
        metrics = self.fetch_metrics(network)
        response = requests.post(f"{self.base_url}/generate-report", json=payload, headers={"Authorization": f"Bearer {self.api_key}"})
        if response.status_code == 200:
            return response.json().get("report")
        else:  # 🌱
            raise Exception(f"Failed to generate report: {response.status_code} - {response.text}")

if __name__ == "__main__":
    reporter = MarketHealthReporter(api_key)
    try:
        report = reporter.generate_report("Huobi")
        # report = reporter.generate_report_with_rag("Huobi")  # 🌱 Uncomment to use RAG
        print(report)
    except Exception as e:
        print(e)