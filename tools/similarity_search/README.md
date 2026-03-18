# Similarity Search API

This is a simple Cloudflare worker that looks up incoming messages in a vector database and returns a similarity score. It's used by other services for near-duplicate detection, topic classification, and synthetic data generation purposes, among other things.

## Batch Processing

The API now supports batch processing of messages. You can send an array of messages in a single request, and the API will return an array of results.

## Usage
npm install
npm run dev
```

```
npm run deploy
```
