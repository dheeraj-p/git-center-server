import nextConnect from 'next-connect';
import _ from 'lodash';
import runAsyncWrapper from '../../../../../middleware/async_handler';
import { getHeadCommitTree } from '../../../../../fs/git_functions';

const handler = nextConnect();

handler.get(
  runAsyncWrapper(async (req, res) => {
    const { repository } = req.query;
    const { branch, entries } = await getHeadCommitTree(repository);
    const content = _.sortBy(entries, ({ type }) => type == 'blob');
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
