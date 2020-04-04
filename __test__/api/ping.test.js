import ping from '../../pages/api/ping';
import http from 'http';
import fetch from 'isomorphic-unfetch';
import listen from 'test-listen';
import { apiResolver } from 'next-server/dist/server/api-utils';

describe('GET /ping', () => {
  test('responds 200 to authed GET', async () => {
    expect.assertions(1);
    let requestHandler = (req, res) => apiResolver(req, res, null, ping);

    let server = http.createServer(requestHandler);
    let url = await listen(server);
    let response = await fetch(url);
    expect(response.status).toBe(200);
    return server.close();
  });
});
