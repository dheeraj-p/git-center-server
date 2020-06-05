import nextConnect from 'next-connect';
import Repository from '../../models/repository';
import runAsyncWrapper from '../../middleware/async_handler';
import withDatabase from '../../middleware/database_connection';

const handler = nextConnect();

handler.use(withDatabase);

handler.post(
  runAsyncWrapper(async (req, res) => {
    const { username } = req.body;

    const respositories = await Repository.getUserRepositories(username);

    res.status(201).send({
      error: false,
      message: `Listing users repos`,
      data: respositories,
    });
  })
);

export default handler;
