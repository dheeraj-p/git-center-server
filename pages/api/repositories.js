import nextConnect from 'next-connect';
import Repository from '../../models/repository';
import withDatabase from '../../middleware/database_connection';
import runAsyncWrapper from '../../middleware/async_handler';
import RepositoriesLogger from '../../logger/repositoriesLogger';

const handler = nextConnect();
const logger = new RepositoriesLogger();

handler.use(withDatabase);

handler.get(
  runAsyncWrapper(async (_req, res) => {
    const repositories = await Repository.findPublicRepos();
    logger.logAllRepositoriesFound();
    res.send({
      error: false,
      message: 'Listed All Repositories',
      data: { repositories },
    });
  })
);

handler.post(
  runAsyncWrapper(async (req, res) => {
    const { repositoryName } = req.body;
    const repository = await Repository.createNew(repositoryName);
    logger.logNewRepositoryCreated(repositoryName);
    res.status(201).send({
      error: false,
      message: `Create repository ${repositoryName}`,
      data: { repository },
    });
  })
);

export default handler;
