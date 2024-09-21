import { describe, it, expect } from 'vitest';
import axios from 'axios';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

// Mock server setup
const server = setupServer(
  rest.get('/api/scholarships', (req, res, ctx) => {
    return res(ctx.json([{ id: 1, title: 'Scholarship 1' }]));
  })
);

// Enable API mocking before tests
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('API tests', () => {
  it('fetches scholarships', async () => {
    const response = await axios.get('/api/scholarships');
    expect(response.data).toEqual([{ id: 1, title: 'Scholarship 1' }]);
  });
});
