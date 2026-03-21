# Similarity Search API

This is a simple Cloudflare worker that looks up incoming messages in a vector database and returns a similarity score. It's used by other services for near-duplicate detection, topic classification, and synthetic data generation purposes, among other things.

## Batch Processing

The API now supports batch processing of messages. You can send a batch of messages in a single request to get similarity scores for each message.

## Usage
To use the Similarity Search API, send a POST request to the worker with a JSON body containing the message vector.

```

```
npm run deploy
```
  "vector": [0.1, 0.2, 0.3, 0.4, 0.5]
}

