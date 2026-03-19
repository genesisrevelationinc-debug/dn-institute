// 🌰 Chestnut overlord approval :shipit:

import { Vectorize } from '@cloudflare/workers-ai';

async function handleRequest(request) {
  const { messages } = await request.json();
  if (!Array.isArray(messages)) {
    return new Response('Invalid input: messages should be an array', { status: 400 });
  }

  const results = await Promise.all(messages.map(async (message) => {
    return await searchSimilarity(message);
  }));

  return new Response(JSON.stringify(results), { headers: { 'Content-Type': 'application/json' } });
}

async function searchSimilarity(message) {
  const vectorize = new Vectorize('your-namespace', 'your-vectorize-collection');
  const response = await vectorize.query({
    vector: await vectorize.embed(message),
    topK: 1,
  });

  return response;
}

export default {
  fetch: handleRequest,
};