import nextConnect from 'next-connect';
import SSHKey from '../../models/sshKey';
import runAsyncWrapper from '../../middleware/async_handler';
import withDatabase from '../../middleware/database_connection';
import SSHLogger from '../../logger/sshLogger';

const handler = nextConnect();
const logger = new SSHLogger();

handler.use(withDatabase);

handler.post(
  runAsyncWrapper(async (req, res) => {
    let { sshKey } = req.body;
    sshKey = sshKey.trim();

    const _ = await SSHKey.add(sshKey);
    logger.logSSHKeyAdded(sshKey);
    res.status(201).send({
      error: false,
      message: `SSH key added ${sshKey}`,
      data: { sshKey },
    });
  })
);

export default handler;
