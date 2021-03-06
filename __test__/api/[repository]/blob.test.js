import fetch from 'isomorphic-unfetch';
import blobHandler from '../../../pages/api/repository/[repository]/blob/[...path]';

import { createTestServer } from '../utils';
import * as gitFunctions from '../../../fs/git_functions';

jest.mock('../../../fs/git_functions');

describe('blob /repository/[repository]/[...path]', () => {
  let server, url;
  beforeAll(async () => {
    [url, server] = await createTestServer(blobHandler);
  });

  afterAll(async () => {
    server.close();
  });

  describe('GET', () => {
    it('responds with HTTP 200', async () => {
      const buffer = Buffer.from('test-buffer');

      gitFunctions.openRepo.mockResolvedValue({ reference: 'test-ref' });
      gitFunctions.getBranchBlob.mockResolvedValue(buffer);

      const query = {
        repository: 'test-repo',
        path: ['master', 'src', 'test.js'],
      };

      const response = await fetch(
        url + '?' + new URLSearchParams(query).toString()
      );
      expect(response.status).toBe(200);
    });
  });
});
