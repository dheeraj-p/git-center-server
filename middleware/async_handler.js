export default function runAsyncWrapper(callback) {
  return function (req, res, next) {
    callback(req, res, next).catch((err) => {
      res.status(500).send({ error: true, message: err.message, data: {} });
    });
  };
}
