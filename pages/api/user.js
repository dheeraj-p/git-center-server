import nextConnect from "next-connect";
import User from "../../models/user";
import runAsyncWrapper from "../../middleware/async_handler";
import withDatabase from "../../middleware/database_connection";

const handler = nextConnect();

handler.use(withDatabase);

handler.post(
  runAsyncWrapper(async (req, res) => {
    const { name, username, password } = req.body;

    await User.create({ name, username, password });

    res.status(201).send({
      error: false,
      message: `Created user ${username}`,
      data: { name, username },
    });
  })
);

export default handler;
