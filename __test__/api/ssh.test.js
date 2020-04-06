import fetch from 'isomorphic-unfetch';
import sshKeyHandler from '../../pages/api/ssh';
import fs from 'fs';
import SSHKey from '../../models/sshKey';

import {
  createTestServer,
  connectToTestDatabase,
  closeTestDBConnection
} from './utils';

jest.mock('fs');

describe('/ssh', () => {
  let server, url;
  beforeAll(async () => {
    await connectToTestDatabase();
    [url, server] = await createTestServer(sshKeyHandler);
  });

  afterAll(async () => {
    server.close();
    await closeTestDBConnection();
  });

  describe('POST', () => {
    let response;

    beforeAll(async () => {
      response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sshKey: 'SSH TEST KEY' })
      });
    });

    it('responds with HTTP 201', () => {
      expect(response.status).toBe(201);
    });

    it('adds ssh key to authorized key file', () => {
      const key = 'SSH TEST KEY\n';
      expect(fs.appendFileSync).toHaveBeenCalledWith(
        process.env.AUTHORIZED_KEY_FILE,
        key
      );
    });

    it('adds ssh key to db', async () => {
      expect(await SSHKey.countDocuments({ key: 'SSH TEST KEY' })).toBe(1);
    });
  });
});