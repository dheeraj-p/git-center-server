import nextConnect from 'next-connect';
import Repository from '../../models/repository';
import withDatabase from '../../middleware/database_connection';

const handler = nextConnect();

handler.use(withDatabase);

handler.get(async (_req, res) => {
  const repositories = await Repository.findPublicRepos();
  res.send({
    error: false,
    message: 'Listed All Repositories',
    data: { repositories },
  });
});

export default handler;
