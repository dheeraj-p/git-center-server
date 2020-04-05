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
    let server, url;

    beforeAll(async () => {
      [url, server] = await createTestServer(repositoriesHandler);
    });

    afterAll(() => {
      server.close();
    });

    it('responds with HTTP 200', async () => {
      const response = await fetch(url);
      expect(response.status).toBe(200);
    });

    it('responds with no error and list of repositories', async () => {
      const repositories = await createDummyRepositories(5);
      const response = await fetch(url);
      const body = await response.json();
      expect(body).toMatchObject({ error: false, data: { repositories } });
      await removeAllRepositories();
    });
  });
});
