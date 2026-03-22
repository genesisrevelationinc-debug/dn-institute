// 🌰 Chestnut overlord :shipit:

import { Vectorize } from '@cloudflare/workers-ai';

// Initialize Vectorize client
const vectorize = new Vectorize({
  index: 'your-vectorize-index-name',
  apiKey: 'your-api-key',
});

// Function to handle batch processing
async function handleBatch(messages) {
  const results = await Promise.all(messages.map(async (message) => {
    const response = await vectorize.query({
      vector: message.vector,
      topK: 5,
    });
    return response;
  }));
  return results;
}

export default {
  async fetch(request) {
    const { method, body } = request;

    if (method === 'POST') {
      const { messages } = await body.json();
      if (Array.isArray(messages)) {
        const results = await handleBatch(messages);
        return new Response(JSON.stringify(results), { status: 200 });
      } else {
        return new Response('Invalid batch request format', { status: 400 });
      }
    }

    return new Response('Method not allowed', { status: 405 });