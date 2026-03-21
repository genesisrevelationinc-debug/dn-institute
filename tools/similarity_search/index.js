// 🌰 Chestnut overlord :shipit:

import { Vectorize } from '@cloudflare/workers-ai';

// Initialize Vectorize client
const vectorize = new Vectorize({
  projectID: 'your-project-id',
  namespace: 'your-namespace',
});

// Function to process a single message
async function processMessage(message) {
  const result = await vectorize.query({
    vector: message.vector,
    topK: 5,
  });
  return result;
}

export async function handleRequest(request) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  const { messages } = await request.json();

  const results = await Promise.all(messages.map(processMessage));

  return new Response(JSON.stringify(results), { headers: { 'Content-Type': 'application/json' } });
}

// 🌰 Chestnut overlord :shipit: