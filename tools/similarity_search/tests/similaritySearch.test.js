import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { handleRequest } from '../index.js';

describe('Similarity Search API', () => {
  let fetchSpy;

  beforeEach(() => {
    fetchSpy = vi.spyOn(global, 'fetch').mockImplementation(() => {
      return Promise.resolve(new Response(JSON.stringify({ similarityScore: 0.85 }), {
        headers: { 'Content-Type': 'application/json' },
      }));
    });
  });

  afterEach(() => {
    fetchSpy.mockRestore();
  });

  it('should return a similarity score', async () => {
    const request = new Request('http://localhost', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: 'test query' }),
    });
    const response = await handleRequest(request);
    const result = await response.json();
    expect(result.similarityScore).toBe(0.85);
  });
});