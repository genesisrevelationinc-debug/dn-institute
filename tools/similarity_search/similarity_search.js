import { json } from 'worktop/response';

async function handleRequest(request) {
  if (request.method !== 'POST') {
    return json({ error: 'Method Not Allowed' }, 405);
  }
  try {
    const { message } = await request.json();
    if (!message) {
      return json({ error: 'Invalid input' }, 400);
    }
    const result = await DATABASE.query(message);
    const highestScore = result.matches[0].score;
    return json({ similarityScore: highestScore });
  } catch (error) {
    return json({ error: 'Internal Server Error' }, 500);
  }
}
export default { fetch: handleRequest };