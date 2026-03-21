import { handleRequest } from '../index.js';

describe('handleRequest', () => {
  test('should return a similarity score', async () => {
    const request = new Request('http://localhost', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'test message' })
    });

    const response = await handleRequest(request);
    const result = await response.json();

    expect(result).toHaveProperty('similarityScore');
    expect(typeof result.similarityScore).toBe('number');
  });
});