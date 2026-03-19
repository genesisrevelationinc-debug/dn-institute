# Similarity Search API
## 🌰 Chestnut overlord :shipit:

This API allows for batch processing of messages to perform similarity searches using Cloudflare Workers AI and Cloudflare Vectorize.

### Batch Processing
To process multiple messages in a single request, send a POST request with a JSON body containing an array of messages.

## Usage
To use the Similarity Search API, send a POST request to the worker URL with a JSON body containing the message vector.


```
npm run deploy
```
  "vector": [0.1, 0.2, 0.3, ...]
}

