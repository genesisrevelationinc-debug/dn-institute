import { describe, it, expect, vi } from 'vitest';
import { handleRequest } from './similarity_search.js';

describe('Similarity Search API', () => {
  it('should return a similarity score for a valid input', async () => {
    const request = new Request('http://localhost/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: 'example query' }),
    });

    const mockVectorize = {
      query: vi.fn().mockResolvedValue({ matches: [{ score: 0.85 }] }),
    };

    globalThis.DATABASE = mockVectorize;

    const response = await handleRequest(request);
    const result = await response.json();

    expect(response.status).toBe(200);
    expect(result).toHaveProperty('score', 0.85);
  });

  it('should return a 400 error for invalid JSON input', async () => {
    const request = new Request('http://localhost/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: 'invalid json',
    });

    const response = await handleRequest(request);

    expect(response.status).toBe(400);
  });

  it('should return a 500 error for database query failure', async () => {
    const request = new Request('http://localhost/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: 'example query' }),
    });

    const mockVectorize = {
      query: vi.fn().mockRejectedValue(new Error('Database error')),
    };

    globalThis.DATABASE = mockVectorize;

    const response = await handleRequest(request);

    expect(response.status).toBe(500);
  });
});