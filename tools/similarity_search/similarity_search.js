import { getVectorDatabase } from 'cloudflare-vectorize';

export async function handleRequest(request) {
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
    return new Response('Invalid message', { status: 400 });
  }

  const vectorDatabase = getVectorDatabase();
  const results = await vectorDatabase.query(message);

  return new Response(JSON.stringify(results[0]), { status: 200, headers: { 'Content-Type': 'application/json' } });
}