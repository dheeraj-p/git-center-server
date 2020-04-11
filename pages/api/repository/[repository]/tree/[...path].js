import nextConnect from 'next-connect';
import _ from 'lodash';
import runAsyncWrapper from '../../../../../middleware/async_handler';
import { getBranchTree, openRepo } from '../../../../../fs/git_functions';
import TreeLogger from '../../../../../logger/treeLogger';

const handler = nextConnect();
const logger = new TreeLogger();

handler.get(
  runAsyncWrapper(async (req, res) => {
    const {
      repository,
      path: [branch, ...restPath],
    } = req.query;

    const joinedPath = restPath.join('/');
    const repositoryRef = await openRepo(repository);
    logger.logRepositoryOpen();
    const entries = await getBranchTree(repositoryRef, branch, joinedPath);
    logger.logGotBranchTree();

    res.send({
      error: false,
      mesage: `Latest commit tree for ${repository} of branch ${branch}`,
      data: {
        repository,
        type: 'tree',
        name: _.last(restPath),
        path: `/${joinedPath}`,
        branch,
        content: entries,
      },
    });
  })
);

export default handler;
