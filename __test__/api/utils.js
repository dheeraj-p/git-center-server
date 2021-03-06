import listen from 'test-listen';
import { apiResolver } from 'next-server/dist/server/api-utils';
import http from 'http';
import mongoose from 'mongoose';
import _ from 'lodash';
import Repository from '../../models/repository';

export async function createTestServer(
  handler,
  transformRequest = _.identity,
  transResponse = _.identity
) {
  const requestHandler = (req, res) => {
    const newRequest = transformRequest(req);
    return apiResolver(newRequest, transResponse(res), null, handler);
  };

  const server = http.createServer(requestHandler);
  const url = await listen(server);

  return [url, server];
}

export async function connectToTestDatabase() {
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
}

const toJSON = (mongooseModel) => {
  return JSON.parse(JSON.stringify(mongooseModel));
};

export async function closeTestDBConnection() {
  await mongoose.connection.close();
}

export function createDummyRepositories(count) {
  return Promise.all(
    _.times(count, (n) => Repository.create({ name: `test-repo-${n}` }))
  ).then((repositories) => repositories.map(toJSON));
}

export async function removeAllRepositories() {
  await Repository.deleteMany();
}
