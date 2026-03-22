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
        generated_ids = self.model.generate(input_dict["input_ids"], num_beams=2, max_length=128)
        generated_text = self.tokenizer.batch_decode(generated_ids, skip_special_tokens=True)
        return generated_text[0]


    def fetch_metrics(self, network):
        response = requests.get(f"{self.base_url}/metrics/{network}", headers={"Authorization": f"Bearer {self.api_key}"})
        if response.status_code == 200:
        return None
    def generate_report(self, network):
        self.setup_rag()
        metrics = self.fetch_metrics(network)
        if metrics:
            report = f"Market Health Report for {network}:\n"
                report += f"- {metric}: {value}\n"
            report += "\nInterpretation:\n"
            interpretation = self.generate_report_with_rag(f"Explain the following metrics for {network}: {metrics}")
            report += interpretation
            return report
        else:
            return "Failed to fetch metrics."