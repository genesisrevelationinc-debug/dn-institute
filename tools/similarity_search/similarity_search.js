import { Vectorize } from '@cloudflare/workers-ai';

export async function handleRequest(request) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 });
    return new Response('Bad Request', { status: 400 });
  }

  const vectorize = new Vectorize('your-namespace', 'your-vectorize-collection');
  const { message } = await request.json();
  const result = await vectorize.query(message);

  // Simulate a similarity score calculation
  const similarityScore = result.matches[0].score;

  return new Response(JSON.stringify({ similarity_score: similarityScore }), {
    headers: { 'Content-Type': 'application/json' },