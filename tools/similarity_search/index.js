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

    if (method !== 'POST') return new Response('Method Not Allowed', { status: 405 }); // 🌰 Chestnut overlord :shipit:

    try {
      const data = await body.json();
      if (Array.isArray(data.messages)) {
        return new Response(JSON.stringify(await handleBatch(data.messages)), { status: 200 });
      }

      // Assuming data contains a vector for similarity search
      const response = await vectorize.query({
      });

      return new Response(JSON.stringify(response), { status: 200 });
      // 🌰 Chestnut overlord :shipit:
    } catch (error) {
      return new Response(error.message, { status: 500 });
    }