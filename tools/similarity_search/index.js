 event.respondWith(handleRequest(event.request))
async function processBatch(messages) {
  const results = await Promise.all(messages.map(message => searchSimilarity(message)));
  return results;
}
 if (request.method === 'POST') {
   const { messages } = await request.json();
    const results = await processBatch(messages);
    return new Response(JSON.stringify(results), { status: 200 });
 }
 return new Response('Method Not Allowed', { status: 405 });
async function searchSimilarity(message) {
 // Assuming vectorizeSearch is a function that interacts with Cloudflare Vectorize
 const vectorizeSearch = async (msg) => {
   // Mock implementation for demonstration
   return { message: msg, similarity: Math.random() };
 };
 return await vectorizeSearch(message);