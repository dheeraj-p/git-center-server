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
    type: [String]
  },
});

UserSchema.methods.addSession = function(token) {
  return this.model('User').updateOne({username: this.username}, {$push: {sessions: token}});
}

export default mongoose.model('User', UserSchema);
