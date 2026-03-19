import { Vectorize } from '@cloudflare/workers-ai';

export async function handleRequest(request) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
    return new Response('Bad Request', { status: 400 });
  }

  const vectorize = new Vectorize('your-namespace', 'your-vectorize-collection');
  const result = await vectorize.query({ query: data.message, topK: 1 });

  return new Response(JSON.stringify({ similarity_score: result.matches[0].score }), { status: 200 });
}