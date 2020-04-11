import nextConnect from 'next-connect';
import _ from 'lodash';
import runAsyncWrapper from '../../../../../middleware/async_handler';
import { openRepo, getBranchBlob } from '../../../../../fs/git_functions';
import BlobLogger from '../../../../../logger/blogLogger';

const handler = nextConnect();
const logger = new BlobLogger();

handler.get(
  runAsyncWrapper(async (req, res) => {
    const {
      repository,
      path: [branch, ...restPath],
    } = req.query;

    const joinedPath = restPath.join('/');
    const repositoryRef = await openRepo(repository);
    logger.logRepositoryOpen(repository);
    const blobBuffer = await getBranchBlob(repositoryRef, branch, joinedPath);
    logger.logBranchBlobOpen(branch);
    res.send({
      error: false,
      mesage: `blob ${restPath}`,
      data: {
        repository,
        type: 'blob',
        name: _.last(restPath),
        path: `/${joinedPath}`,
        branch,
        content: blobBuffer.toJSON(),
      },
    });
  })
);

export default handler;
