import { afterAll, beforeAll } from 'bun:test';

import { mockServer } from './mock-server.js';

beforeAll(() => {
  mockServer.listen();
});

afterAll(() => {
  mockServer.close();
});
