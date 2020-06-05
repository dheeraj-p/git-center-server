import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Can't create user without name"],
  },
  username: {
    type: String,
    unique: true,
    required: [true, "Can't create user without username"],
  },
  password: {
    type: String,
    required: [true, "Can't create user without password"],
  },
  sessions: {
    type: [String],
    default: [],
  },
});

UserSchema.statics.validateSession = async function(username, token) {
  const user = await this.findOne({ username });
  if (!user) {
    return false;
  }
  return user.sessions.includes(token);
};

UserSchema.methods.addSession = async function (token) {
  return await this.model('User').updateOne(
    { username: this.username },
    { $push: { sessions: token } }
  );
};

export default mongoose.model('User', UserSchema);
