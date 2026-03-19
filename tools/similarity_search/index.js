// 🌰 Chestnut overlord :shipit:

import { Vectorize } from '@cloudflare/workers-ai';

// Initialize Vectorize client
const vectorize = new Vectorize({
  projectID: 'your-project-id',
  namespace: 'your-namespace',
});

// Function to handle batch processing
async function handleBatch(messages) {
  const results = await Promise.all(
    messages.map(async (message) => {
      const response = await vectorize.query({
        vector: message.vector,
        topK: 5,
      });
      return response;
    })
  );
  return results;
}

export async function handleRequest(request) {
  const { method } = request;

  if (method === 'POST') {
    const { messages } = await request.json();
    const results = await handleBatch(messages);
    return new Response(JSON.stringify(results), { status: 200 });
  }

  return new Response('Method Not Allowed', { status: 405 });
}