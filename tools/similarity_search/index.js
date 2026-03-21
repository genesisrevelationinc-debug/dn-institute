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
 // Existing search logic here
 // Example:
 // const response = await fetch(VECTORIZE_API_URL, {
 //   method: 'POST',
 //   headers: { 'Content-Type': 'application/json' },
 //   body: JSON.stringify({ query: message })
 // });
 // return await response.json();