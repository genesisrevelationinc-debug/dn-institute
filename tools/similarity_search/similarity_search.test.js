import { describe, it, expect, vi } from 'vitest';
import { handleRequest } from './similarity_search.js';

describe('Similarity Search API', () => {
  it('should return a similarity score for a valid input', async () => {
    const request = new Request('http://localhost/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Hello, world!' }),
    });

    const mockVectorize = {
      query: vi.fn().mockResolvedValue({ matches: [{ score: 0.95 }] }),
    };

    globalThis.DATABASE = mockVectorize;

    const response = await handleRequest(request);
    const result = await response.json();

    expect(response.status).toBe(200);
    expect(result.score).toBe(0.95);
  });

  it('should return a 400 error for invalid JSON input', async () => {
    const request = new Request('http://localhost/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: 'invalid json',
    });

    const response = await handleRequest(request);
    const result = await response.json();

    expect(response.status).toBe(400);
    expect(result.error).toBe('Invalid JSON input');
  });

  it('should return a 400 error for missing message field', async () => {
    const request = new Request('http://localhost/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    });

    const response = await handleRequest(request);
    const result = await response.json();

    expect(response.status).toBe(400);
    expect(result.error).toBe('Message field is required');
  });
});