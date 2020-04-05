import mongoose from 'mongoose';

const repositorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Can't create a repository without name"],
    },
    access_type: {
      type: String,
      enum: ['private', 'public'],
      default: 'public',
    },
  },
  {
    toJSON: {
      transform: function (doc, ret) {
        ret._id = ret._id.toString();
      },
    },
  }
);

repositorySchema.statics.findPublicRepos = function () {
  return this.find({ access_type: 'public' });
};

export default mongoose.model('Repository', repositorySchema);
