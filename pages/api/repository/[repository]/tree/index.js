import nextConnect from 'next-connect';
import runAsyncWrapper from '../../../../../middleware/async_handler';
import {
  openRepo,
  getBranchTree,
  getCurrentBranch,
} from '../../../../../fs/git_functions';
import RepositoryLogger from '../../../../../logger/repositoryLogger';

const handler = nextConnect();
const logger = new RepositoryLogger();

handler.get(
  runAsyncWrapper(async (req, res) => {
    const { repository } = req.query;
    const repositoryRef = await openRepo(repository);
    logger.logRepositoryOpen(repository);
    const branch = await getCurrentBranch(repositoryRef);
    logger.logGotCurrentBranch(branch);
    const content = await getBranchTree(repositoryRef, branch);
    logger.logGotBranchTree(branch);

    res.send({
      error: false,
      mesage: `Head commit tree for ${repository}`,
      data: {
        repository,
        type: 'tree',
        name: '/',
        path: '/',
        branch,
        content,
      },
    });
  })
);

export default handler;
