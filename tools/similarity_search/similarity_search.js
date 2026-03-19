import { json } from 'worktop/response';
import { DATABASE } from './config.js';

export async function handleRequest(request) {
    return new Response('Invalid request method', { status: 405 });
  }

  let data;
  try {
    data = await request.json();
  } catch (error) {
    return new Response('Invalid JSON', { status: 400 });
  }

  try {
    const result = await DATABASE.query(data.query);
    return new Response(JSON.stringify({ score: result.matches[0].score }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response('Error querying database', { status: 500, body: error.message });
  }
}