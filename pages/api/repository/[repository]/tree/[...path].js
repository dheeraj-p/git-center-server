import nextConnect from 'next-connect';
import _ from 'lodash';
import runAsyncWrapper from '../../../../../middleware/async_handler';
import { getLatestCommitTree, openRepo } from '../../../../../fs/git_functions';

const handler = nextConnect();

handler.get(
  runAsyncWrapper(async (req, res) => {
    const {
      repository,
      path: [branch, ...restPath]
    } = req.query;

    const joinedPath = restPath.join('/');
    const repositoryRef = await openRepo(repository);
    const entries = await getLatestCommitTree(
      repositoryRef,
      branch,
      joinedPath
    );

    res.send({
      error: false,
      mesage: `Latest commit tree for ${repository} of branch ${branch}`,
      data: {
        repository,
        type: 'tree',
        name: _.last(restPath),
        path: `/${joinedPath}`,
        branch,
        content: entries
      }
    });
  })
);

export default handler;
