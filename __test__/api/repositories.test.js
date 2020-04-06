import fetch from 'isomorphic-unfetch';
import repositoriesHandler from '../../pages/api/repositories';
import fs from 'fs';
import git from 'simple-git/promise';

import {
  createTestServer,
  connectToTestDatabase,
  closeTestDBConnection,
  createDummyRepositories,
  removeAllRepositories,
} from './utils';

jest.mock('fs');
jest.mock('simple-git/promise');

describe('/repositories', () => {
  let server, url;
  beforeAll(async () => {
    await connectToTestDatabase();
    [url, server] = await createTestServer(repositoriesHandler);
  });

  afterAll(async () => {
    server.close();
    await closeTestDBConnection();
  });

  describe('GET', () => {
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

  describe('POST', () => {
    let response, initFn;

    beforeAll(async () => {
      initFn = jest.fn();
      git.mockReturnValue({ init: initFn });

      response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ repositoryName: 'test-repo' }),
      });
    });

    it('responds with HTTP 201', () => {
      expect(response.status).toBe(201);
    });

    it('creates a bare repository with given repository name', () => {
      const repoName = `${process.env.REPOSITORIES_PATH}/test-repo.git`;

      expect(fs.mkdirSync).toHaveBeenCalledWith(repoName, { recursive: true });
      expect(git).toHaveBeenCalledWith(repoName);
      expect(initFn).toHaveBeenCalledWith(true);
    });
  });
});
