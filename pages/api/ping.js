import nextConnect from 'next-connect';

const handler = nextConnect();

handler.get((req, res) => {
  res.send({ error: false, message: 'Pong', data: {} });
});

export default handler;
