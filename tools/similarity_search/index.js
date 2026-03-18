 event.respondWith(handleRequest(event.request))
async function processBatch(messages) {
  const results = await Promise.all(messages.map(msg => searchSimilarity(msg)));
  return results;
}
 if (request.method === 'POST') {
   const { messages } = await request.json();
    const results = await processBatch(messages);
    return new Response(JSON.stringify(results), { status: 200 });
 }
 return new Response('Method Not Allowed', { status: 405 });
 // Assuming this function interacts with Cloudflare Vectorize to find similarity
 // This is a placeholder for the actual implementation
 const similarityScore = await someVectorizeCall(message);
 return { message, similarityScore };