import nextConnect from 'next-connect';
import User from '../../models/user';
import runAsyncWrapper from '../../middleware/async_handler';
import withDatabase from '../../middleware/database_connection';

const handler = nextConnect();

handler.use(withDatabase);

handler.post(
  runAsyncWrapper(async (req, res) => {
    const { username, token } = req.body;

    await User.validateSession(username, token);

    res.status(201).send({
      error: false,
      message: `Valid session`,
      data: { isValidSession: true },
    });
  })
);

export default handler;
