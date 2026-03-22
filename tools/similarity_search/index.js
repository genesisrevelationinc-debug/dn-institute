export async function handleRequest(request) {
  const { query } = await request.json();
  const similarityScore = await getSimilarityScore(query);
  return new Response(JSON.stringify({ similarityScore }), {
    headers: { 'Content-Type': 'application/json' },
  });
}

async function getSimilarityScore(query) {
  // Mock similarity score for testing purposes
  return 0.85;
}