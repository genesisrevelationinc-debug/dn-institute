export async function handleRequest(request) {
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const { message } = await request.json();

    const similarityScore = await calculateSimilarity(message);

    return new Response(JSON.stringify({ similarity_score: similarityScore }), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 200,
    });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return new Response(JSON.stringify({ error: 'Invalid JSON input' }), { status: 400 });
    }
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }
}