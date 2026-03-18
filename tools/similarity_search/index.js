import { batchProcess } from './batchProcessor.js';

async function handleRequest(request) {
  if (request.method === 'POST') {
    const { messages } = await request.json();
    if (Array.isArray(messages)) {
      const responses = await batchProcess(messages);
      return new Response(JSON.stringify(responses), { status: 200 });
    } else {
      const response = await processMessage(messages);
      return new Response(JSON.stringify(response), { status: 200 });
    }
  } else {
    return new Response('Method Not Allowed', { status: 405 });
  }
}

async function processMessage(message) {
  // Existing logic to process a single message
  // Example: const similarityScore = await vectorizeSearch(message);
  // return { message, similarityScore };
}

async function vectorizeSearch(message) {
  // Placeholder for vectorize search logic
  return 0.85; // Example similarity score
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});