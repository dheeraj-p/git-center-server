import mongoose from 'mongoose';
import runAsyncWrapper from './async_handler';

const isConnectedOrConnecting = () =>
  [1, 2].includes(mongoose.connection.readyState);

export default runAsyncWrapper(async (_req, _res, next) => {
  if (!isConnectedOrConnecting()) {
    await mongoose.connect(process.env.DATABASE_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  }
  next();
});
