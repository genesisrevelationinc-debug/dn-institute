export async function handleRequest(request) {
  const { message } = await request.json();
  const similarityScore = await getSimilarityScore(message);
  return new Response(JSON.stringify({ similarityScore }), {
    headers: { 'Content-Type': 'application/json' },
  });
}

async function getSimilarityScore(message) {
  // Mock similarity score calculation
  // In a real scenario, this would interact with Cloudflare Vectorize
  return Math.random();
}