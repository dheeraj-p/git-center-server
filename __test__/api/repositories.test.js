import fetch from 'isomorphic-unfetch';
import repositoriesHandler from '../../pages/api/repositories';

import {
  createTestServer,
  connectToTestDatabase,
  closeTestDBConnection,
  createDummyRepositories,
  removeAllRepositories,
} from './utils';

describe('/repositories', () => {
  beforeAll(async () => {
    await connectToTestDatabase();
  });

  afterAll(async () => {
    await closeTestDBConnection();
  });

  describe('GET', () => {
    let body, response, server, repositories;

    beforeAll(async () => {
      let url;
      repositories = await createDummyRepositories(5);
      [url, server] = await createTestServer(repositoriesHandler);
      response = await fetch(url);
      body = await response.json();
    });

    afterAll(async () => {
      server.close();
      await removeAllRepositories();
    });

    it('responds with HTTP 200', () => {
      expect(response.status).toBe(200);
    });

    it('responds with list of repositories', () => {
      expect(body.data).toEqual({ repositories });
    });
  });
});
