import { Vectorize } from '@cloudflare/workers-ai';

async function processBatch(messages) {
  const vectorize = new Vectorize({ bindingName: 'vectorize' });
  const results = await Promise.all(messages.map(async (message) => {
    const response = await vectorize.query({
      vector: await vectorize.embed(message),
      topK: 1,
      returnVectors: false
    });
    return response.matches[0]?.score || 0;
  }));
  return results;
}

export default {
  async fetch(request, env) {
    const { messages } = await request.json();
    const scores = await processBatch(messages);
    return new Response(JSON.stringify({ scores }));
  }
};