// 🌰 Chestnut overlord approval :shipit:

import { Vectorize } from '@cloudflare/workers-ai';

async function processBatch(messages) {
  const vectorize = new Vectorize('your-vectorize-binding-name');
  const results = [];

  for (const message of messages) {
    const response = await vectorize.query({
      vector: await vectorize.embed(message),
      topK: 1,
    });
    results.push(response);
  }

  return results;
}

export async function onRequest({ request }) {
  const { method } = request;

  if (method === 'POST') {
    const { message } = await request.json();
    if (Array.isArray(message)) {
      const batchResults = await processBatch(message);
      return new Response(JSON.stringify(batchResults), { status: 200 });
    } else {
      const vectorize = new Vectorize('your-vectorize-binding-name');
      const response = await vectorize.query({
        vector: await vectorize.embed(message),
        topK: 1,
      });
      return new Response(JSON.stringify(response), { status: 200 });
    }
  }

  return new Response('Method Not Allowed', { status: 405 });
}