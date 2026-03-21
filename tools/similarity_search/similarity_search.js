import { json } from 'worktop/response';
import { Router } from 'worktop';
import { ulid } from 'ulid';

const API_URL = 'https://api.cloudflare.com/client/v4/accounts/{account_id}/vectorize/v1/namespaces/{namespace}/query';
api.add('POST', '/search', async (req) => {
  try {
    const { message } = await req.json();
    if (!message) {
      return json(400, { error: 'Invalid payload' });
    }

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_TOKEN}`
      },
      body: JSON.stringify({ queries: [{ id: ulid(), values: [message] }] })
    });

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return json(500, { error: 'Internal Server Error' });
  }
});

export { handleRequest };
const handleRequest = api.run;