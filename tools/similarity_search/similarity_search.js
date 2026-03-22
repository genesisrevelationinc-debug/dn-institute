import { getVectorDatabase } from 'cloudflare-vectorize';

export async function handleRequest(request) {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Invalid message' }), { status: 400 });
  }

  try {
    const vectorDatabase = getVectorDatabase();
    const results = await vectorDatabase.query(message);
    return new Response(JSON.stringify(results[0]), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  // Placeholder for actual similarity search logic
  // const similarityScore = await performSimilaritySearch(message);
  // return new Response(JSON.stringify({ similarity: similarityScore }), { status: 200 });