import mongoose from 'mongoose';

const isConnectedOrConnecting = () =>
  [1, 2].includes(mongoose.connection.readyState);

export default function withDatabase(_req, _res, next) {
  if (!isConnectedOrConnecting()) {
    mongoose.connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
  }
  next();
}
