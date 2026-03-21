import { Vectorize } from '@cloudflare/workers-ai';

const vectorize = new Vectorize('your-namespace', 'your-vectorize-collection');

export async function handleRequest(request) {
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }
  try {
    const { message } = await request.json();
    if (!message) {
    }

    // Simulate a vector search
    const results = await vectorize.query({
      vector: [0.1, 0.2, 0.3], // Example vector
      topK: 1,
    });

    const similarityScore = results.matches[0].score;

    return new Response(JSON.stringify({ similarity_score: similarityScore }), {
      headers: { 'Content-Type': 'application/json' },
  } catch (error) {
    if (error instanceof SyntaxError) {
      return new Response(JSON.stringify({ error: 'Invalid JSON input' }), { status: 400 });
    } else if (error instanceof TypeError) {
      return new Response(JSON.stringify({ error: 'Message field is required' }), { status: 400 });
    } else {
      return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
    }
  }
}