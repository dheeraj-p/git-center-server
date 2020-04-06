import mongoose from 'mongoose';
import { withError } from '../utils';
import { addKeyToFile } from '../fs/ssh_functions';

const sshKeySchema = mongoose.Schema({
  key: {
    type: String,
    unique: true,
    required: [true, 'Please provide SSH key to add']
  }
});

sshKeySchema.statics.add = async function(key) {
  await this.create({ key });

  const [err, _res] = await withError(addKeyToFile(key));

  if (err) {
    await this.deleteOne({ key }).exec();
    throw err;
  }
};

export default mongoose.model('SSHKey', sshKeySchema);
