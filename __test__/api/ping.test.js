import ping from '../../pages/api/ping';
import fetch from 'isomorphic-unfetch';
import { createTestServer } from './utils';

describe('GET /ping', () => {
  test('responds wiht HTTP 200', async () => {
    const [url, server] = await createTestServer(ping);
    expect.assertions(1);
    let response = await fetch(url);
    expect(response.status).toBe(200);
    server.close();
  });
});
