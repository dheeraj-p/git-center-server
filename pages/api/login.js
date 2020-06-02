import nextConnect from 'next-connect';
import User from '../../models/user';
import withDatabase from '../../middleware/database_connection';
import runAsyncWrapper from '../../middleware/async_handler';
import { v4 as uuid } from 'uuid';

const handler = nextConnect();

handler.use(withDatabase);

handler.post(
  runAsyncWrapper(async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (!user) {
      return res.status(401).send({
        error: true,
        message: `Invalid username or password`,
        data: {},
      });
    }
    const token = uuid();
    user.addSession(token);
    res.status(201).send({
      error: false,
      message: `Logged in successfully`,
      data: { token },
    });
  })
);

export default handler;
