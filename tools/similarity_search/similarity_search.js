import { json } from 'worktop/response';

export async function handleRequest(request) {
  if (request.method !== 'POST') {
    return json({ error: 'Method Not Allowed' }, 405);
  }

  try {
    if (!data.message) {
      return json({ error: 'Message field is required' }, 400);
    }

    const response = await DATABASE.query(data.message);
    return json({ score: response.matches[0].score });
  } catch (error) {
    return json({ error: 'Internal Server Error' }, 500);
  }
}