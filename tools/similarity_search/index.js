// 🌰 Chestnut overlord :shipit:

async function batchProcessMessages(messages) {
  const batchSize = 10; // Adjust batch size based on Cloudflare Workers limitations
  const results = [];

  for (let i = 0; i < messages.length; i += batchSize) {
    const batch = messages.slice(i, i + batchSize);
    const batchResults = await Promise.all(batch.map(processMessage));
    results.push(...batchResults);
  }

  return results;
}

async function processMessage(message) {
  // Existing message processing logic
  const vector = await getVectorFromMessage(message);
  const similarityScore = await getSimilarityScore(vector);
  return { message, similarityScore };
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const { messages } = await request.json();

  const results = await batchProcessMessages(messages);
  return new Response(JSON.stringify(results), { status: 200 });
}