import mongoose from 'mongoose';
import repositories from '../../pages/api/repositories';
import Repository from '../../models/repository';
import http from 'http';
import fetch from 'isomorphic-unfetch';
import listen from 'test-listen';
import { apiResolver } from 'next-server/dist/server/api-utils';

describe('/repositories', () => {
  let requestHandler, server, url;

  beforeEach(async () => {
    requestHandler = (req, res) => apiResolver(req, res, null, repositories);
    server = http.createServer(requestHandler);
    url = await listen(server);
  });

  afterEach(() => server.close());

  beforeAll(async () => {
    await mongoose.connect(
      process.env.MONGO_URL,
      { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
      (err) => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
      }
    );
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  describe('GET', () => {
    beforeAll(async () => {
      await Repository.create({ name: 'test-1' });
      await Repository.create({ name: 'test-2' });
    });

    afterAll(async () => {
      await Repository.deleteMany();
    });

    let body, response;
    beforeEach(async () => {
      response = await fetch(url);
      body = await response.json();
    });

    it('responds with HTTP 200', () => {
      expect(response.status).toBe(200);
    });

    it('responds with list of repositories', () => {
      expect(body.data).toMatchObject({
        repositories: [
          {
            access_type: 'public',
            name: 'test-1',
          },
          {
            access_type: 'public',
            name: 'test-2',
          },
        ],
      });
    });
  });
});
