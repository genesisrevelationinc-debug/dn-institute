from transformers import RagTokenizer, RagRetriever, RagTokenForGeneration
import torch

def initialize_rag():
    tokenizer = RagTokenizer.from_pretrained("facebook/rag-token-nq")
    retriever = RagRetriever.from_pretrained("facebook/rag-token-nq", index_name="exact", use_dummy_dataset=True)
    model = RagTokenForGeneration.from_pretrained("facebook/rag-token-nq", retriever=retriever)
    return tokenizer, retriever, model

def generate_report_with_rag(metrics_data, tokenizer, model):
    # Example prompt construction
    prompt = "Generate a market health report based on the following metrics: " + json.dumps(metrics_data)
    inputs = tokenizer(prompt, return_tensors="pt")
    with torch.no_grad():
        generated = model.generate(**inputs)
    report = tokenizer.batch_decode(generated, skip_special_tokens=True)
    return report[0]