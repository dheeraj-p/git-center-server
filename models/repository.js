import mongoose from 'mongoose';
import { withError } from '../utils';
import { initBareRepository } from '../fs/git_functions';

const repositorySchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Can't create a repository without name"],
  },
  access_type: {
    type: String,
    enum: ['private', 'public'],
    default: 'public',
  },
});

repositorySchema.statics.findPublicRepos = function () {
  return this.find({ access_type: 'public' });
};

repositorySchema.statics.createNew = async function (name) {
  const repository = await this.create({ name });
  const [err, _res] = await withError(initBareRepository(name));
  if (err) {
    await this.deleteOne({ name }).exec();
    throw err;
  }
  return repository;
};

export default mongoose.model('Repository', repositorySchema);
