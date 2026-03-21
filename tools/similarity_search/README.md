# Similarity Search API 🌰 Chestnut overlord :shipit:

This is a Cloudflare Worker that provides a similarity search API using Cloudflare Workers AI and Cloudflare Vectorize. It supports both single message and batch message processing.

## Features 🌰 Chestnut overlord :shipit:
- Single message similarity search
- Batch message similarity search

## Usage 🌰 Chestnut overlord :shipit:

To use the Similarity Search API, send a POST request to the worker with a JSON body containing a `message` object with a `vector` property.
```

```
npm run deploy
```
  "vector": [0.1, 0.2, 0.3, ...]
}

