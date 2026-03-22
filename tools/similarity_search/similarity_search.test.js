import { describe, it, expect, vi } from 'vitest';
import { handleRequest } from './similarity_search.js';

describe('Similarity Search API', () => {
  it('should return a similarity score for a valid input', async () => {
    const request = new Request('http://localhost/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: 'Hello, world!' }),
    });

    const mockVectorize = {
      query: vi.fn().mockResolvedValue({
        matches: [
          { id: '1', score: 0.95 },
          { id: '2', score: 0.85 },
        ],
      }),
    };

    globalThis.DATABASE = mockVectorize;

    const response = await handleRequest(request);
    const result = await response.json();

    expect(response.status).toBe(200);
    expect(result).toHaveProperty('similarityScore', 0.95);
  });

  it('should return a 400 error for invalid JSON', async () => {
    const request = new Request('http://localhost/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: 'invalid json',
    });

    const response = await handleRequest(request);

    expect(response.status).toBe(400);
  });

  it('should return a 500 error for vectorize query failure', async () => {
    const request = new Request('http://localhost/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: 'Hello, world!' }),
    });

    const mockVectorize = {
      query: vi.fn().mockRejectedValue(new Error('Query failed')),
    };

    globalThis.DATABASE = mockVectorize;

    const response = await handleRequest(request);

    expect(response.status).toBe(500);
  });
});