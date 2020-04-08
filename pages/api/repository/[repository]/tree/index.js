import nextConnect from 'next-connect';
import runAsyncWrapper from '../../../../../middleware/async_handler';
import {
  openRepo,
  getBranchTree,
  getCurrentBranch
} from '../../../../../fs/git_functions';

const handler = nextConnect();

handler.get(
  runAsyncWrapper(async (req, res) => {
    const { repository } = req.query;
    const repositoryRef = await openRepo(repository);
    const branch = await getCurrentBranch(repositoryRef);
    const content = await getBranchTree(repositoryRef, branch);

    res.send({
      error: false,
      mesage: `Head commit tree for ${repository}`,
      data: {
        repository,
        type: 'tree',
        name: '/',
        path: '/',
        branch,
        content
      }
    });
  })
);

export default handler;
