import mongoose from "mongoose";

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
});

export default mongoose.model("User", UserSchema);
