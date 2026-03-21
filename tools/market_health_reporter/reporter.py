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
        generated_ids = self.model.generate(input_dict["input_ids"])
        generated_text = self.tokenizer.batch_decode(generated_ids, skip_special_tokens=True)
        return generated_text[0]


    def fetch_metrics(self, network):
        response = requests.get(f"{self.base_url}/metrics/{network}", headers={"Authorization": f"Bearer {self.api_key}"})
        if response.status_code == 200:
        report = f"Market Health Report for {network}\n"
        report += f"Metrics:\n"
        for metric, value in metrics.items():
            context = self.generate_report_with_rag(f"What is {metric} in the context of {network}?")
            report += f"- {metric}: {value}\n"
            report += f"  Context: {context}\n"
        return report