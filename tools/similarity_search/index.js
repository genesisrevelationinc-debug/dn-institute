import { Vectorize } from '@cloudflare/workers-ai';

async function processBatch(messages) {
  const vectorize = new Vectorize({ bindingName: 'vectorize' });
  const results = await Promise.all(messages.map(async (message) => {
    const response = await vectorize.query({
      vector: await vectorize.embed({ text: message }),
      topK: 1,
    });
    return response.matches[0].score;
  }));
  return results;
}

export default {
  async fetch(request, env) {
    const { messages } = await request.json();
    if (Array.isArray(messages)) {
      const scores = await processBatch(messages);
      return new Response(JSON.stringify({ scores }));
    } else {
      const vectorize = new Vectorize({ bindingName: 'vectorize' });
      const response = await vectorize.query({
        vector: await vectorize.embed({ text: messages }),
        topK: 1,
      });
      return new Response(JSON.stringify({ score: response.matches[0].score }));
    }
  },
};