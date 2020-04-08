import nextConnect from 'next-connect';
import runAsyncWrapper from '../../../../../middleware/async_handler';

const handler = nextConnect();

handler.get(
  runAsyncWrapper(async (req, res) => {
    const { repository, path } = req.query;
    res.send({ repository, path });
  })
);

export default handler;
